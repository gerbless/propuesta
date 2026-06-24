# Propuesta de Transformación — Ingeniería de Datos

Sitio web interactivo con la propuesta de transformación del área de Ingeniería de Datos.

## Estructura del Proyecto

```
propuesta-tanner/
├── index.html                  # Página principal con la propuesta completa
├── css/styles.css              # Estilos compartidos (diseño, layout, modal)
├── js/
│   ├── definitions-data.js     # Fuente única de verdad: todos los conceptos técnicos
│   ├── modal.js                # Panel lateral deslizante para definiciones
│   ├── main.js                 # Interactividad: fases, animaciones, KPIs
│   └── definition-page.js     # Renderiza páginas de definición autónomas
├── definitions/
│   ├── databricks.html
│   ├── dataops.html
│   ├── unity-catalog.html
│   ├── cicd.html
│   ├── git.html
│   ├── pull-requests.html
│   ├── data-governance.html
│   ├── data-products.html
│   ├── sla.html
│   ├── data-quality.html
│   ├── pipeline.html
│   ├── backlog.html
│   ├── ownership.html
│   ├── observabilidad.html
│   ├── trazabilidad.html
│   ├── time-to-market.html
│   └── inteligencia-artificial.html
├── Dockerfile
├── docker-compose.yml
└── nginx.conf
```

## Desarrollo Local

### Con Docker Compose (recomendado)
```bash
docker compose up --build
# Abrir http://localhost:8080
```

### Sin Docker (servidor local)
```bash
# Python 3
python3 -m http.server 8080
# Abrir http://localhost:8080
```

## Despliegue Gratuito

### Opción 1: Render.com (recomendado — gratis siempre)
1. Crear cuenta en [render.com](https://render.com)
2. New → **Static Site**
3. Conectar el repositorio de GitHub
4. Publish Directory: `.` (raíz del proyecto)
5. Deploy — la URL estará disponible en minutos

### Opción 2: Docker en Render (si se prefiere el contenedor)
1. New → **Web Service** → Docker
2. Conectar repositorio
3. Render detecta el `Dockerfile` automáticamente
4. Instance Type: **Free**

### Opción 3: Netlify
1. Ir a [netlify.com](https://netlify.com) → New site from Git
2. Conectar el repositorio
3. Publish directory: `.`
4. Deploy — URL instantánea con HTTPS

### Opción 4: GitHub Pages
1. Push del código a GitHub en rama `main`
2. Settings → Pages → Source: `main`, folder: `/`
3. URL: `https://tu-usuario.github.io/propuesta-tanner`

## Agregar Nuevos Conceptos al Glosario

Editar `js/definitions-data.js` y agregar una entrada nueva:
```js
'mi-concepto': {
  id: 'mi-concepto',
  title: 'Mi Concepto',
  subtitle: 'Descripción breve',
  category: 'Categoría',
  categoryColor: '#2563eb',
  icon: '🔧',
  definition: '...',
  why_matters: '...',
  in_proposal: '...',
  key_concepts: [
    { term: 'Término', def: 'Descripción' }
  ],
  related: ['databricks', 'pipeline']
}
```

Luego crear `definitions/mi-concepto.html`:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Concepto</title>
  <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
  <!-- ... mismo header que los otros ... -->
  <div id="app"></div>
  <script>const TERM_ID = 'mi-concepto';</script>
  <script src="../js/definitions-data.js"></script>
  <script src="../js/definition-page.js"></script>
</body>
</html>
```
