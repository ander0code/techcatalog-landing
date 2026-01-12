# TechCatalog Landing

Landing page de catálogo de productos de tecnología desarrollada con React y TypeScript.

## Stack

- React 18
- TypeScript 5.6
- Vite 6
- Tailwind CSS 3
- React Router DOM 7
- Lucide React (iconos)
- PWA (vite-plugin-pwa)

## Estructura

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   ├── products/        # ProductCard, ProductList
│   └── ui/              # Componentes reutilizables
├── pages/               # HomePage, ProductsPage, ContactPage, etc.
├── data/                # Datos de productos y categorías
├── types/               # Definiciones TypeScript
└── index.css            # Estilos globales con Tailwind
```

## Instalación

```bash
# Clonar repo
git clone git@github.com:ander0code/techcatalog-landing.git
cd techcatalog-landing

# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build producción
pnpm build

# Preview
pnpm preview
```

## Características

- Diseño responsive (mobile-first)
- Navegación con React Router
- Catálogo de productos con filtros por categoría
- Página de detalle de producto
- Formulario de contacto
- PWA habilitado (instalable)
- Optimizado para SEO

## Scripts

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm preview` | Preview del build |
| `pnpm lint` | Ejecutar ESLint |

## Licencia

MIT
