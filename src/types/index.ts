// ============================================
// TIPOS PRINCIPALES - TECHSTORE
// Catálogo de Computadoras y Componentes
// ============================================

/**
 * Producto del catálogo
 * Representa cualquier item vendible: laptops, PCs, componentes, periféricos
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  brand: BrandType;
  category: CategoryType;
  price: number;
  originalPrice?: number; // Para mostrar descuentos
  currency: string;
  description: string;
  shortDescription: string;
  features: string[];
  specifications: Record<string, string>;
  images: {
    main: string;
    gallery: string[];
  };
  inStock: boolean;
  stockQuantity: number;
  isNew: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
  rating: number;
  reviewsCount: number;
  tags: string[];
  warranty: string; // Garantía del producto
}

/**
 * Categorías disponibles en la tienda
 */
export type CategoryType =
  | "laptops"
  | "desktop"
  | "componentes"
  | "perifericos"
  | "monitores"
  | "gaming";

/**
 * Marcas disponibles
 */
export type BrandType =
  | "asus"
  | "msi"
  | "lenovo"
  | "hp"
  | "dell"
  | "acer"
  | "logitech"
  | "razer"
  | "corsair"
  | "nvidia"
  | "amd"
  | "intel";

/**
 * Categoría del catálogo con metadata
 */
export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  icon: string;
  productCount: number;
  image: string;
  gradient: string; // Color gradient para UI
}

/**
 * Marca con información visual
 */
export interface Brand {
  id: BrandType;
  name: string;
  logo: string;
  country: string;
}

/**
 * Formulario de contacto/cotización
 */
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  product?: string;
  budget?: string;
}

/**
 * Item en el carrito de compras (para futuro)
 */
export interface CartItem {
  product: Product;
  quantity: number;
}

/**
 * Filtros de búsqueda
 */
export interface ProductFilters {
  category?: CategoryType;
  brand?: BrandType;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  isOnSale?: boolean;
  searchQuery?: string;
}
