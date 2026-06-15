# MINGOLD - Sitio web del proyecto

Sitio web estatico para presentar el proyecto academico MINGOLD, una empresa conceptual de mineria subterranea de oro en el Nordeste de Antioquia, Colombia.

## Contenido

- `index.html`: pagina principal.
- `styles.css`: estilos visuales y responsive.
- `script.js`: menu movil, navegacion activa y animacion de metricas.
- `assets/`: logo e ilustraciones SVG propias.
- `data/MINGOLD_SR01.geojson`: poligono academico SR01 en WGS84.
- `MINGOLD_SR01.kml`: poligono para Google Earth o Google My Maps.
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

Tambien se puede abrir directamente el archivo `index.html`, pero el servidor local es mas parecido a GitHub Pages.

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub.
2. Subir todos los archivos de esta carpeta al repositorio.
3. Entrar a `Settings > Pages`.
4. En `Build and deployment`, seleccionar `Deploy from a branch`.
5. Seleccionar la rama `main` y carpeta `/root`.
6. Guardar y esperar a que GitHub genere el enlace publico.

## Nota academica

El sitio presenta un ejercicio academico de prefactibilidad conceptual. El poligono MINGOLD-SR01, la condicion de area libre y las proyecciones operativas deben verificarse en ANNA Mineria, Registro Minero Nacional y estudios tecnicos de detalle antes de cualquier uso real.
