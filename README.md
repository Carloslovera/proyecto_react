# 🚀 TP2 - React Dashboard Interactive

> **Link del despliegue:** [https://tu-proyecto.vercel.app](https://tu-proyecto.vercel.app) ← **CAMBIAR POR TU LINK DE VERCEL**

---

## 📋 Descripción

Este proyecto es una aplicación web desarrollada con **React** que evoluciona el Trabajo Práctico 1 (HTML/CSS/JS) hacia una arquitectura de componentes moderna. La aplicación presenta un dashboard interactivo con gestión de perfiles de equipo, galería de imágenes, explorador de datos JSON, consumo de API externa, bitácora de proyecto y representación del árbol de componentes.

**Funcionalidades principales:**
- Dashboard con grilla dinámica de integrantes
- Perfiles individuales con habilidades, proyectos y redes sociales
- Galería de imágenes con Lightbox interactivo
- Explorador JSON con búsqueda en tiempo real
- API externa con paginación
- Bitácora de desarrollo con línea de tiempo
- Árbol de renderizado de componentes

---

## 👥 Integrantes

| Nombre | Perfil de GitHub |
|--------|------------------|
| Carlos Lovera | [https://github.com/Carloslovera](https://github.com/Carloslovera) |
| Karina Ajhuacho | [https://github.com/kariajh](https://github.com/kariajh) |
| Maxi Ratti | [https://github.com/maxiratti](https://github.com/maxiratti) |
| Ivanna Vrodt | [https://github.com/Garudine](https://github.com/Garudine) |

---

## 💻 Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 18.x | Biblioteca principal |
| React Router DOM | 6.x | Navegación SPA |
| React Icons | 5.x | Iconografía |
| CSS3 | - | Estilos y animaciones |
| Vite | 5.x | Build tool |
| LocalStorage | - | Persistencia de datos |
| DiceBear API | - | Generación de avatares |

**Fuentes:**
- [Inter](https://fonts.google.com/specimen/Inter) - Google Fonts

---

## 📁 Estructura de Archivos
src/
├── assets/
│ └── gallery/ # Imágenes de la galería
├── components/
│ └── gallery/
│ ├── Gallery.jsx
│ ├── Gallery.css
│ └── Lightbox.jsx
├── data/
│ ├── dataIntegrantes.json # Datos de los integrantes
│ ├── empleados.json # 20 objetos para JSON Explorer
│ ├── galleryData.js # Imágenes de galería
│ ├── renderTreeData.js # Árbol de componentes
│ └── timelineData.js # Bitácora del proyecto
├── layouts/
│ └── Layout.jsx # Layout con Sidebar
├── pages/
│ ├── Dashboard.jsx # Home con grilla
│ ├── PerfilIntegrante.jsx # Perfil individual
│ ├── GalleryPage.jsx # Galería con Lightbox
│ ├── JsonExplorerPage.jsx # JSON con buscador
│ ├── ApiPage.jsx # API externa
│ ├── BitacoraPage.jsx # Bitácora
│ └── RenderTreePage.jsx # Árbol de componentes
├── App.jsx
├── main.jsx
└── index.css


---

## 🎨 Guía de Estilos

### Paleta de Colores

| Uso | Color | Hexadecimal |
|-----|-------|-------------|
| Primario (acento) | Rojo | `#ff2d55` |
| Secundario (gradiente) | Naranja | `#ff7b00` |
| Texto principal | Gris oscuro | `#1f2937` |
| Texto secundario | Gris | `#4b5563` |
| Fondo de tarjetas | Blanco | `#ffffff` |
| Bordes | Gris claro | `#e5e7eb` |

### Tipografías

- **Fuente principal:** [Inter](https://fonts.google.com/specimen/Inter)
- **Usos:** Títulos, textos, botones

### Iconografía

- **Librería:** React Icons (Fa, Si)
- **Íconos usados:** React, Java, Git, HTML, CSS, Angular, JavaScript, Astro, PostgreSQL, Arduino, GitHub, LinkedIn, Twitter

---

## ⚛️ JavaScript / React - Funciones Dinámicas

### Componentes Clave

| Componente | Función |
|------------|---------|
| `Dashboard` | Grilla de integrantes, botón "+ Nuevo", actividad reciente |
| `PerfilIntegrante` | Perfil individual con habilidades, proyectos, tech stack |
| `Gallery` | Grid de imágenes con Lightbox |
| `Lightbox` | Visor con zoom, navegación y cierre con ESC |
| `JsonExplorerPage` | Búsqueda en tiempo real sobre 20 objetos |
| `ApiPage` | Consumo de API con paginación y loading |

### Funcionalidades Destacadas

1. **Persistencia con localStorage**
   - Guardado de nuevos integrantes
   - Registro de actividades recientes

2. **Barras de progreso animadas**
   - Animación `@keyframes fillProgress`
   - Efecto de brillo (shimmer)

3. **Lightbox interactivo**
   - Navegación con flechas
   - Cierre con tecla ESC
   - Contador de posición

4. **Buscador en tiempo real**
   - Filtro por nombre, categoría y estado
   - Actualización dinámica

---

## 🔄 Evolución del Proyecto (TP1 → TP2)

### Cambios Realizados

| Aspecto | TP1 (HTML/CSS/JS) | TP2 (React) |
|---------|-------------------|-------------|
| Arquitectura | Archivos sueltos | Componentes modulares |
| Navegación | Múltiples HTML | SPA con React Router |
| Estado | DOM manipulation | useState, useEffect |
| Persistencia | No | localStorage |
| Reutilización | Código duplicado | Componentes reutilizables |

---

## 🤖 Uso de Inteligencia Artificial

### Herramientas Utilizadas

| Herramienta | Uso |
|-------------|-----|
| **ChatGPT 4** | Generación de código, debugging, lógica de componentes |
| **Gemini** | Optimización de estilos CSS, animaciones |
| **GitHub Copilot** | Autocompletado y sugerencias en tiempo real |

### Contenido Generado con IA

- **Avatares:** Generados con DiceBear API (prompt: "avatar profesional para perfil de desarrollador")
- **Logos:** No aplica
- **Textos:** Descripciones de proyectos y habilidades
- **Código:** Componentes base, animaciones CSS, lógica de filtrado

### Ejemplos de Prompts Utilizados
"Creame un componente de Lightbox en React con navegación por flechas y cierre con ESC"
"Generame barras de progreso animadas con CSS puro para habilidades técnicas"
"Como hago para que un botón en React navegue al dashboard y no a la página anterior"


---

## 🔗 Enlaces

- **Repositorio GitHub:** [https://github.com/Carloslovera/proyecto_react](https://github.com/Carloslovera/proyecto_react)
- **Despliegue Vercel:** [https://tu-proyecto.vercel.app](https://tu-proyecto.vercel.app) ← **CAMBIAR POR TU LINK**

---

## 📅 Fecha de Entrega

05/06/2026

---

## ✨ Mejoras Futuras

- [ ] Modo oscuro
- [ ] Más filtros en JSON Explorer
- [ ] Subir imágenes propias a la galería
- [ ] Exportar datos a PDF

