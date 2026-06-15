# MINGOLD - Sitio web del proyecto

Sitio web estático para presentar el proyecto académico MINGOLD, una empresa conceptual de minería subterránea de oro en el Nordeste de Antioquia, Colombia.

## Contenido

- `index.html`: página principal.
- `styles.css`: estilos visuales y responsive.
- `script.js`: menú móvil, navegación activa y animación de métricas.
- `assets/`: logo e ilustraciones SVG propias.
- `data/MINGOLD_SR01.geojson`: polígono académico SR01 en WGS84.
- `MINGOLD_SR01.kml`: polígono para Google Earth o Google My Maps.
- `MINGOLD_Proyecto_Integral_Profesional.pdf`: informe integral del proyecto.
- `MINGOLD_Organigrama_Definitivo_IEEE.pdf`: estructura organizacional definitiva.

## Ejecutar localmente

Desde esta carpeta, ejecutar:

```powershell
python -m http.server 8000
```

Luego abrir:

```text
http://localhost:8000
```

También se puede abrir directamente el archivo `index.html`, pero el servidor local es más parecido a GitHub Pages.

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub.
2. Subir todos los archivos de esta carpeta al repositorio.
3. Entrar a `Settings > Pages`.
4. En `Build and deployment`, seleccionar `Deploy from a branch`.
5. Seleccionar la rama `main` y carpeta `/root`.
6. Guardar y esperar a que GitHub genere el enlace público.

## Nota académica

El sitio presenta un ejercicio académico de prefactibilidad conceptual. El polígono MINGOLD-SR01, la condición de área libre y las proyecciones operativas deben verificarse en ANNA Minería, Registro Minero Nacional y estudios técnicos de detalle antes de cualquier uso real.
