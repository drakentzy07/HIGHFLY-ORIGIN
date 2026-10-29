#!/usr/bin/env node
/**
 * HIGHFLY-ORIGIN: independent inspection of the exact ORIGINAL upstream tree.
 * This script is newly authored in HIGHFLY-ORIGIN. It does not modify upstream
 * and intentionally does not copy any media into this repository or Pages.
 * GREEN means upstream provenance/integrity inventory passes, NOT that rights
 * clearance for redistribution is complete.
 */
import {existsSync, readFileSync, readdirSync, mkdirSync, writeFileSync} from 'node:fs';
import {resolve, join, dirname} from 'node:path';
import {execFileSync} from 'node:child_process';

const root=resolve(process.argv[2]||'upstream');
const out=resolve(process.argv[3]||'audit-reports/upstream-v020.json');
const EXPECTED='4cedc7fbf49e7179f4c29b3db2d0b2bc5bab3d25';
const failures=[];
const exists=rel=>existsSync(join(root,rel));
const read=rel=>readFileSync(join(root,rel),'utf8');
function listFiles(rel){
  if(!exists(rel))return [];
  const base=join(root,rel);
  return readdirSync(base,{withFileTypes:true}).flatMap(e=>{
    const name=rel+'/'+e.name;
    return e.isDirectory()?listFiles(name):[name];
  });
}
function expect(condition,msg){if(!condition)failures.push(msg)}
let sha='';
try{sha=execFileSync('git',['-C',root,'rev-parse','HEAD'],{encoding:'utf8'}).trim()}
catch(e){failures.push('Could not identify original Git commit: '+e.message)}
expect(sha===EXPECTED,'Upstream is not pinned v0.20.0 commit: '+sha);
for(const p of ['LICENSE','CREDITS.md','THIRD_PARTY_NOTICES.md','public/ui/items/mapping.json','src/ui/icons.ts','src/ui/weapon_variants.ts']){
  expect(exists(p),'Missing original source or attribution file: '+p);
}
const license=exists('LICENSE')?read('LICENSE'):'';
expect(license.includes('MIT License'),'Upstream source license missing MIT text');
const credits=exists('CREDITS.md')?read('CREDITS.md'):'';
expect(credits.includes('KayKit'),'KayKit credit/provenance missing');
expect(credits.includes('CraftPix'),'CraftPix premium usage disclosure missing');
const itemsMap=exists('public/ui/items/mapping.json')?JSON.parse(read('public/ui/items/mapping.json')):null;
expect(itemsMap?.license?.includes('CraftPix')===true,'Item image purchase provenance not confirmed');
const skills=listFiles('public/ui/skills').filter(x=>x.endsWith('.webp'));
const items=listFiles('public/ui/items').filter(x=>x.endsWith('.webp'));
const weaponThumbs=listFiles('public/ui/weapons').filter(x=>x.endsWith('.jpg'));
const weaponModels=listFiles('public/models/weapons').filter(x=>x.endsWith('.glb'));
expect(skills.length===152,'Original skill icon count changed: '+skills.length);
expect(items.length===101,'Original CraftPix item count changed: '+items.length);
expect(weaponThumbs.length===36,'Original rendered weapon thumbnails changed: '+weaponThumbs.length);
expect(weaponModels.length===55,'Original 3D weapon models changed: '+weaponModels.length);
const variants=exists('src/ui/weapon_variants.ts')?[...read('src/ui/weapon_variants.ts').matchAll(/^\s+[a-z0-9_]+:\s*'([^']+)'/gm)].map(m=>m[1]):[];
const uniqueVariants=[...new Set(variants)].sort();
const thumbnailKeys=new Set(weaponThumbs.map(p=>p.split('/').at(-1).replace(/\.jpg$/,'')));
const modelKeys=new Set(weaponModels.map(p=>p.split('/').at(-1).replace(/\.glb$/,'')));
const missingThumbnails=uniqueVariants.filter(v=>!thumbnailKeys.has(v));
const missingModels=uniqueVariants.filter(v=>!modelKeys.has(v));
expect(variants.length===74,'Weapon item ID mapping count changed: '+variants.length);
expect(missingThumbnails.length===0,'Missing original thumbnails: '+missingThumbnails.join(','));
expect(missingModels.length===0,'Missing original models: '+missingModels.join(','));
const report={
  description:'Source provenance and file integrity audit only; not a redistribution clearance',
  upstream:'levy-street/world-of-claudecraft',
  commit:sha, expectedCommit:EXPECTED, originalCodeLicense:'MIT',
  status:failures.length?'SOURCE_AUDIT_FAILED':'SOURCE_INVENTORY_PASS_RIGHTS_NOT_YET_CLEARED',
  found:{
    premiumSkillArt:skills.length, premiumItemArt:items.length,
    weaponJpegPreviews:weaponThumbs.length, weaponGlbModels:weaponModels.length,
    weaponItemMappings:variants.length, uniqueMappedWeaponVariants:uniqueVariants.length,
    missingThumbnails,missingModels
  },
  rightsGate:{
    blockedFromUnreviewedPublicDistribution:['public/ui/skills/**/*.webp','public/ui/items/*.webp','project branding/logos','restricted commissioned art','sound with nontransferable permissions'],
    requiresFileReview:['audio','project-generated models and backgrounds','paid/commissioned graphics','branding and third-party marks','npm dependencies and notices'],
    verifiedInitialDonorGroups:['KayKit CC0','Quaternius CC0','Kenney CC0','ambientCG CC0','Poly Haven CC0'],
    nextStep:'Review every public asset. Do not publish or wholesale-delete based only on path.',
    status:'REVIEW_REQUIRED'
  },
  failures
};
mkdirSync(dirname(out),{recursive:true});
writeFileSync(out,JSON.stringify(report,null,2)+'\n');
console.log('[HIGHFLY CLEAN SOURCE AUDIT] '+report.status);
console.log('[COUNTS]',JSON.stringify(report.found));
console.log('[RIGHTS]',report.rightsGate.status);
if(failures.length){console.error(failures.join('\n'));process.exitCode=1;}
