# Matriz de derechos — ClaudeCraft v0.20.0 (evaluación inicial)

**Fuente única:** [Levy Street, commit 4cedc7f](https://github.com/levy-street/world-of-claudecraft/tree/4cedc7fbf49e7179f4c29b3db2d0b2bc5bab3d25).
**Fecha de revisión:** 2026-10-29.
**Alcance:** información de licencias, no copia ni autorización para publicar recursos no evaluados. `LICENSE`, `CREDITS.md`, `THIRD_PARTY_NOTICES.md` y los `mapping.json` del propio upstream son fuentes base.

| Elemento | Procedencia identificada | Estado inicial | Medida antes de publicar |
|---|---|---|---|
| Código TS/JS del motor, simulador, menús y lógica | Levy Street | MIT | Mantener licencia y avisos |
| Personajes y armas 3D KayKit | Kay Lousberg | CC0 documentado | Verificar archivo/modelo y conservar |
| Animales y criaturas Quaternius | Quaternius | CC0 documentado | Verificar cada pack y conservar |
| Escenarios/props Kenney | Kenney | CC0 documentado | Verificar cada pack y conservar |
| AmbientCG y Poly Haven | ambientCG, Poly Haven | CC0 documentado | Mantener recursos identificados |
| 36 miniaturas `public/ui/weapons/*.jpg` | Renderizadas desde modelos GLB de armas | Derivados aparentemente compatibles con modelos CC0; verificar uno a uno | **No borrar en bloque**; cotejar modelos de origen |
| 152 `public/ui/skills/**/*.webp` | CraftPix, comprado por otra cuenta | **No redistribuir la compra original** | Usar íconos generados legítimamente o originales; el motor trae dibujo procedural |
| 101 `public/ui/items/*.webp` | `public/ui/items/mapping.json` declara CraftPix Premium | **No redistribuir la compra original** | Usar íconos generados legítimamente o originales; conservar IDs y rutas coherentes |
| Sonidos de @jamiecypher | CC BY-NC + permisos particulares | Restricciones comerciales | Revisar pieza a pieza; no incluir sin permiso válido para nuestra publicación |
| Branding, nombre y logotipos ClaudeCraft/Levy Street | Titulares originales | Derechos reservados | Sustituir por identidad HIGHFLY propia |
| Arte de tienda, prestigio, encargos y emblemas | Obra comercial por encargo | Derechos reservados | Sustituir si está presente en v0.20 |
| Medios generados por el proyecto, Meshy, fondos, efectos | Derechos propios/condicionados del proyecto | **Revisión específica** | Verificar permisos de reutilización en juego y publicación; no asumir MIT |
| Dependencias npm, Solana/Reown/WalletConnect | Distintos avisos `THIRD_PARTY_NOTICES.md` | Varias licencias incl. comunidad | Conservar avisos y evaluar condiciones antes de distribución |

## Reglas de comprobación

- **NO** confundir permiso de ejecutar una versión original con permiso de redistribuir todos sus archivos.
- **NO** eliminar recursos por nombre de carpeta. Clasificar cada archivo, origen y licencia.
- **NO** importar imágenes, scripts, HUD ni parches desde ningún repositorio HIGHFLY anterior.
- **NO** aprobar Pages jugable hasta que un build audite todas las rutas realmente solicitadas, y los recursos publicados no contengan contenidos no autorizados.
- **SÍ** conservar íntegramente el mundo y sistemas originales en la copia de trabajo hasta terminar el inventario.
- **SÍ** conservar números de IDs, interfaces de equipamiento y modelos válidos al sustituir arte prohibido.
- **SÍ** usar `src/ui/icons.ts` original y sus alternativas procedurales en lugar de CraftPix, si pasan prueba visual.

## Fuentes

- [README del editor: condiciones de fork, arte y marcas](https://github.com/levy-street/world-of-claudecraft#license)
- [CREDITS.md de la versión fuente](https://github.com/levy-street/world-of-claudecraft/blob/4cedc7fbf49e7179f4c29b3db2d0b2bc5bab3d25/CREDITS.md)
- [Avisos de dependencias de la versión fuente](https://github.com/levy-street/world-of-claudecraft/blob/4cedc7fbf49e7179f4c29b3db2d0b2bc5bab3d25/THIRD_PARTY_NOTICES.md)
- [Mapeo de 101 imágenes de ítems CraftPix](https://github.com/levy-street/world-of-claudecraft/blob/4cedc7fbf49e7179f4c29b3db2d0b2bc5bab3d25/public/ui/items/mapping.json)
- [Pack KayKit Adventures (licencia CC0)](https://github.com/KayKit-Game-Assets/KayKit-Character-Pack-Adventures-1.0)

Esta matriz es un **punto de partida**, no la auditoría final archivo por archivo.
