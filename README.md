# HIGHFLY ORIGIN — Fundación limpia

Proyecto RPG 3D para navegador y Android en horizontal (Samsung S23 Ultra), con pruebas públicas mediante GitHub Pages.

## Fuente única permitida para el motor inicial

- **Origen:** [levy-street/world-of-claudecraft](https://github.com/levy-street/world-of-claudecraft)
- **Versión:** v0.20.0
- **Commit fijado:** `4cedc7fbf49e7179f4c29b3db2d0b2bc5bab3d25`
- **Licencia del código fuente:** MIT, conservar avisos.
- **Licencias del arte:** independientes por recurso; véase [RIGHTS_MATRIX.md](RIGHTS_MATRIX.md).

## Regla de origen (OBLIGATORIA)

**Este repositorio NO copia archivos ni código de ningún repositorio, rama, parche o compilación HIGHFLY anterior.** No reutilizar `cobalt-hollow-lab`, P2–P7, FURY, HUD anteriores, otras bases adaptadas ni arte mezclado. Se pueden usar los resultados de pruebas anteriores solamente como requisitos funcionales, nunca como fuente de código.

El flujo de auditoría descarga **solo el commit upstream fijado**, directamente de Levy Street, en un directorio temporal de GitHub Actions. No publica el juego ni ningún recurso de derechos pendientes.

## Procedimiento

1. Auditar el paquete original intacto, sin borrar ni reemplazar archivos antes de clasificar su procedencia.
2. Identificar y registrar derechos individualmente: MIT, CC0, permiso condicionado, licencia comercial no transferible, o pendiente.
3. Para una distribución pública, sustituir solo los recursos que requieran permiso adicional; mantener los modelos, mapas y mecánicas permitidos.
4. Comprobar que todos los iconos, miniaturas, modelos, animaciones, interfaces, sonidos y rutas que use el juego estén presentes, sean compatibles y tengan licencia para publicación.
5. **Después**, crear una compilación jugable original para GitHub Pages. Toda modificación propia debe tener prueba funcional en Android landscape.

## Estado

**Fundación / auditoría de fuente:** iniciada. **Juego jugable de este repositorio:** todavía no publicado; no confundir los proyectos anteriores con este nuevo repositorio.

La auditoría se ejecuta en [GitHub Actions](https://github.com/drakentzy07/HIGHFLY-ORIGIN/actions) sin reusar scripts anteriores. Su reporte es un inventario inicial, **no una aprobación legal definitiva**.
