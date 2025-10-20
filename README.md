# ResumeCraft 📄

Una aplicación moderna y elegante para crear, personalizar y descargar CVs profesionales en PDF. Construida con React 18, TailwindCSS y Framer Motion.

![ResumeCraft Preview](https://via.placeholder.com/800x400/3b82f6/ffffff?text=ResumeCraft+-+Creador+de+CVs+Profesionales)

## ✨ Características Principales

### 🎨 **Tres Plantillas Profesionales**
- **Minimal Pro**: Diseño limpio y profesional con colores suaves
- **Creative Edge**: Plantilla moderna con elementos visuales llamativos
- **Corporate Dark**: Estilo corporativo con tema oscuro y elegante

### 📝 **Editor Completo**
- **Información Personal**: Datos de contacto, resumen profesional
- **Experiencia Laboral**: Historial detallado con fechas y descripciones
- **Educación**: Formación académica con GPA y logros
- **Habilidades**: Categorización por tipo y nivel de competencia

### 🎯 **Funcionalidades Avanzadas**
- **Vista Previa en Tiempo Real**: Ve los cambios instantáneamente
- **Exportación a PDF**: Genera PDFs de alta calidad con un clic
- **Guardado Automático**: Tus datos se guardan automáticamente en LocalStorage
- **Modo Claro/Oscuro**: Interfaz adaptable a tus preferencias
- **Selector de Color**: Personaliza el color principal de tu CV
- **Diseño Responsivo**: Funciona perfectamente en todos los dispositivos

### 🚀 **Tecnologías Utilizadas**
- **React 18+** con Hooks y Context API
- **TailwindCSS** para estilos modernos y responsivos
- **Framer Motion** para animaciones suaves
- **jsPDF + html2canvas** para exportación a PDF
- **Lucide React** para iconografía consistente

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Instalación Local

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/resume-craft.git
cd resume-craft
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Inicia el servidor de desarrollo**
```bash
npm start
# o
yarn start
```

4. **Abre tu navegador**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
# Desarrollo
npm start

# Construcción para producción
npm run build

# Ejecutar tests
npm test

# Eyectar configuración (no recomendado)
npm run eject
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Editor/
│   │   ├── Editor.jsx
│   │   ├── PersonalInfoForm.jsx
│   │   ├── ExperienceForm.jsx
│   │   ├── EducationForm.jsx
│   │   └── SkillsForm.jsx
│   ├── Preview/
│   │   ├── Preview.jsx
│   │   └── templates/
│   │       ├── MinimalProTemplate.jsx
│   │       ├── CreativeEdgeTemplate.jsx
│   │       └── CorporateDarkTemplate.jsx
│   ├── TemplateSelector/
│   │   └── TemplateSelector.jsx
│   └── Navbar.jsx
├── context/
│   └── ResumeContext.jsx
├── utils/
│   └── pdfExport.js
├── App.jsx
├── index.js
└── index.css
```

## 🎨 Personalización

### Colores Principales
La aplicación utiliza un sistema de colores personalizable. Puedes cambiar el color principal desde la barra de navegación.

### Temas
- **Modo Claro**: Interfaz limpia y moderna
- **Modo Oscuro**: Perfecto para trabajar en ambientes con poca luz

### Plantillas
Cada plantilla está optimizada para diferentes tipos de profesionales:
- **Desarrolladores**: Minimal Pro
- **Diseñadores**: Creative Edge  
- **Ejecutivos**: Corporate Dark

## 📱 Responsive Design

ResumeCraft está completamente optimizado para:
- 📱 **Móviles** (320px+)
- 📱 **Tablets** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Pantallas grandes** (1440px+)

## 🚀 Despliegue en Vercel

### Despliegue Automático

1. **Conecta tu repositorio a Vercel**
2. **Configura las variables de entorno** (si es necesario)
3. **Despliega automáticamente** con cada push

### Despliegue Manual

```bash
# Construir para producción
npm run build

# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### Configuración de Vercel

El archivo `vercel.json` está configurado para:
- ✅ Build automático desde `package.json`
- ✅ Rutas SPA configuradas
- ✅ Variables de entorno optimizadas

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea un archivo `.env.local`:

```env
REACT_APP_APP_NAME=ResumeCraft
REACT_APP_VERSION=1.0.0
```

### Personalización de Build

```bash
# Build con análisis de bundle
npm run build && npx bundle-analyzer build/static/js/*.js

# Build para diferentes entornos
NODE_ENV=production npm run build
```

## 📊 Rendimiento

- ⚡ **Carga inicial**: < 2s
- 🎨 **Animaciones**: 60fps
- 📱 **Responsive**: Optimizado para todos los dispositivos
- 💾 **LocalStorage**: Persistencia automática de datos

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Roadmap

### Versión 1.1
- [ ] Importación/exportación de datos JSON
- [ ] Más plantillas de CV
- [ ] Editor de foto de perfil
- [ ] Plantillas por industria

### Versión 1.2
- [ ] Integración con IA para generar contenido
- [ ] Plantillas en múltiples idiomas
- [ ] Exportación a Word
- [ ] Compartir CV por URL

### Versión 2.0
- [ ] Cuentas de usuario
- [ ] Almacenamiento en la nube
- [ ] Colaboración en tiempo real
- [ ] Analytics de CV

## 🐛 Reportar Bugs

Si encuentras algún bug, por favor:
1. Verifica que no esté reportado en [Issues](https://github.com/tu-usuario/resume-craft/issues)
2. Crea un nuevo issue con:
   - Descripción detallada del problema
   - Pasos para reproducir
   - Capturas de pantalla (si aplica)
   - Información del navegador y sistema

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Framework de UI
- [TailwindCSS](https://tailwindcss.com/) - Framework de CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Lucide](https://lucide.dev/) - Iconos
- [jsPDF](https://github.com/parallax/jsPDF) - Generación de PDF
- [html2canvas](https://html2canvas.hertzen.com/) - Captura de pantalla

## 📞 Contacto

- **Desarrollador**: Tu Nombre
- **Email**: tu@email.com
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

⭐ **¡Si te gusta ResumeCraft, no olvides darle una estrella al repositorio!** ⭐
