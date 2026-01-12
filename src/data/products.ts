// ============================================
// DATOS - TECHSTORE
// Catálogo de Computadoras y Componentes
// ============================================

import { Product, Category, Brand, CategoryType, BrandType } from "../types";

/**
 * Marcas disponibles en la tienda
 */
export const brands: Brand[] = [
  {
    id: "asus",
    name: "ASUS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/200px-ASUS_Logo.svg.png",
    country: "Taiwán",
  },
  {
    id: "msi",
    name: "MSI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/MSI_Logo.svg/200px-MSI_Logo.svg.png",
    country: "Taiwán",
  },
  {
    id: "lenovo",
    name: "Lenovo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/200px-Lenovo_logo_2015.svg.png",
    country: "China",
  },
  {
    id: "hp",
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png",
    country: "Estados Unidos",
  },
  {
    id: "dell",
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/200px-Dell_Logo.svg.png",
    country: "Estados Unidos",
  },
  {
    id: "acer",
    name: "Acer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/200px-Acer_2011.svg.png",
    country: "Taiwán",
  },
  {
    id: "logitech",
    name: "Logitech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Logitech_logo.svg/200px-Logitech_logo.svg.png",
    country: "Suiza",
  },
  {
    id: "razer",
    name: "Razer",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/200px-Razer_snake_logo.svg.png",
    country: "Estados Unidos",
  },
  {
    id: "corsair",
    name: "Corsair",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Corsair_logo.svg/200px-Corsair_logo.svg.png",
    country: "Estados Unidos",
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/NVIDIA_logo.svg/200px-NVIDIA_logo.svg.png",
    country: "Estados Unidos",
  },
  {
    id: "amd",
    name: "AMD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/200px-AMD_Logo.svg.png",
    country: "Estados Unidos",
  },
  {
    id: "intel",
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/200px-Intel-logo.svg.png",
    country: "Estados Unidos",
  },
];

/**
 * Categorías del catálogo
 */
export const categories: Category[] = [
  {
    id: "laptops",
    name: "Laptops",
    description:
      "Laptops gaming, ultrabooks y estaciones de trabajo portátiles",
    icon: "laptop",
    productCount: 24,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "desktop",
    name: "PCs de Escritorio",
    description:
      "PCs gaming pre-armadas y estaciones de trabajo de alto rendimiento",
    icon: "monitor",
    productCount: 18,
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=400&fit=crop",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "componentes",
    name: "Componentes",
    description: "Tarjetas gráficas, procesadores, memorias RAM y más",
    icon: "cpu",
    productCount: 45,
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "perifericos",
    name: "Periféricos",
    description: "Teclados mecánicos, ratones gaming, auriculares y webcams",
    icon: "keyboard",
    productCount: 38,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=400&fit=crop",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "monitores",
    name: "Monitores",
    description: "Monitores gaming 144Hz+, ultrawide y profesionales",
    icon: "tv",
    productCount: 22,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "gaming",
    name: "Gaming & Streaming",
    description: "Sillas gaming, capturadoras, iluminación RGB y accesorios",
    icon: "gamepad",
    productCount: 15,
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&h=400&fit=crop",
    gradient: "from-red-500 to-pink-500",
  },
];

/**
 * Catálogo de productos
 */
export const products: Product[] = [
  // ===== LAPTOPS =====
  {
    id: "1",
    slug: "asus-rog-strix-g16-gaming",
    name: "ASUS ROG Strix G16 Gaming Laptop - Intel Core i9-13980HX, RTX 4070",
    shortName: "ASUS ROG Strix G16",
    brand: "asus",
    category: "laptops",
    price: 1899,
    originalPrice: 2199,
    currency: "USD",
    description:
      "La ASUS ROG Strix G16 es una laptop gaming de alto rendimiento diseñada para gamers exigentes. Con un procesador Intel Core i9-13980HX de 13ª generación y una tarjeta gráfica NVIDIA GeForce RTX 4070, ofrece una potencia excepcional para los juegos más demandantes. Su pantalla de 16 pulgadas QHD+ con tasa de refresco de 240Hz garantiza imágenes fluidas y nítidas. El sistema de refrigeración ROG Intelligent Cooling mantiene las temperaturas bajo control durante sesiones intensas de juego.",
    shortDescription:
      'Laptop gaming con Intel i9-13980HX, RTX 4070, 32GB RAM, pantalla 16" QHD+ 240Hz',
    features: [
      "Procesador Intel Core i9-13980HX 24 núcleos",
      "NVIDIA GeForce RTX 4070 8GB GDDR6",
      "32GB DDR5-4800MHz RAM",
      "1TB NVMe PCIe 4.0 SSD",
      'Pantalla 16" QHD+ 240Hz 3ms',
      "Teclado RGB per-key con N-Key Rollover",
      "WiFi 6E + Bluetooth 5.3",
      "Thunderbolt 4 + USB-C 3.2",
    ],
    specifications: {
      Procesador: "Intel Core i9-13980HX (24 núcleos, hasta 5.6GHz)",
      "Tarjeta Gráfica": "NVIDIA GeForce RTX 4070 8GB GDDR6",
      "Memoria RAM": "32GB DDR5-4800MHz (2x16GB)",
      Almacenamiento: "1TB NVMe PCIe 4.0 SSD",
      Pantalla: '16" QHD+ (2560x1600) 240Hz IPS',
      "Sistema Operativo": "Windows 11 Pro",
      Batería: "90Wh con carga rápida",
      Peso: "2.5 kg",
    },
    images: {
      main: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=600&fit=crop",
      ],
    },
    inStock: true,
    stockQuantity: 12,
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    rating: 4.8,
    reviewsCount: 156,
    tags: ["gaming", "laptop", "rtx 4070", "intel i9", "240hz"],
    warranty: "2 años garantía oficial ASUS",
  },
  {
    id: "2",
    slug: "lenovo-legion-pro-5-gaming",
    name: "Lenovo Legion Pro 5 Gaming - AMD Ryzen 9 7945HX, RTX 4060",
    shortName: "Lenovo Legion Pro 5",
    brand: "lenovo",
    category: "laptops",
    price: 1499,
    currency: "USD",
    description:
      'La Lenovo Legion Pro 5 combina el poder del procesador AMD Ryzen 9 7945HX con la versatilidad de la RTX 4060. Su sistema de refrigeración Legion Coldfront 5.0 mantiene el rendimiento óptimo incluso en las sesiones más intensas. La pantalla de 16" WQXGA con 165Hz ofrece colores precisos y movimiento fluido.',
    shortDescription:
      'Laptop gaming AMD Ryzen 9, RTX 4060, 16GB RAM, pantalla 16" WQXGA 165Hz',
    features: [
      "AMD Ryzen 9 7945HX 16 núcleos",
      "NVIDIA GeForce RTX 4060 8GB",
      "16GB DDR5-5600MHz",
      "512GB NVMe SSD",
      'Pantalla 16" WQXGA 165Hz',
      "Legion Coldfront 5.0",
      "Dolby Atmos speakers",
    ],
    specifications: {
      Procesador: "AMD Ryzen 9 7945HX (16 núcleos, hasta 5.4GHz)",
      "Tarjeta Gráfica": "NVIDIA GeForce RTX 4060 8GB",
      "Memoria RAM": "16GB DDR5-5600MHz",
      Almacenamiento: "512GB NVMe SSD",
      Pantalla: '16" WQXGA (2560x1600) 165Hz IPS',
      "Sistema Operativo": "Windows 11 Home",
      Batería: "80Wh",
      Peso: "2.4 kg",
    },
    images: {
      main: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&h=600&fit=crop",
      ],
    },
    inStock: true,
    stockQuantity: 8,
    isNew: false,
    isFeatured: true,
    isOnSale: false,
    rating: 4.7,
    reviewsCount: 89,
    tags: ["gaming", "laptop", "rtx 4060", "amd ryzen"],
    warranty: "2 años garantía Lenovo",
  },
  {
    id: "3",
    slug: "msi-creator-z17-profesional",
    name: "MSI Creator Z17 HX Studio - Intel Core i9, RTX 4080",
    shortName: "MSI Creator Z17",
    brand: "msi",
    category: "laptops",
    price: 2799,
    originalPrice: 3199,
    currency: "USD",
    description:
      "Diseñada para creadores de contenido profesionales, la MSI Creator Z17 ofrece una pantalla Mini LED 4K UHD+ con calibración de fábrica. Perfecta para edición de video, diseño 3D y desarrollo de juegos.",
    shortDescription:
      "Laptop profesional Intel i9, RTX 4080, pantalla Mini LED 4K, para creadores",
    features: [
      "Intel Core i9-13980HX",
      "NVIDIA RTX 4080 Laptop 12GB",
      "64GB DDR5",
      "2TB NVMe RAID",
      'Pantalla 17" Mini LED 4K 120Hz',
      "Calibración Calman Verified",
      "Cuerpo de aleación de magnesio",
    ],
    specifications: {
      Procesador: "Intel Core i9-13980HX",
      "Tarjeta Gráfica": "NVIDIA RTX 4080 Laptop 12GB",
      "Memoria RAM": "64GB DDR5-5200MHz",
      Almacenamiento: "2TB NVMe RAID 0",
      Pantalla: '17" Mini LED 4K UHD+ 120Hz',
      "Sistema Operativo": "Windows 11 Pro",
      Batería: "99.9Wh",
      Peso: "2.8 kg",
    },
    images: {
      main: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop",
      ],
    },
    inStock: true,
    stockQuantity: 5,
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    rating: 4.9,
    reviewsCount: 42,
    tags: ["profesional", "creator", "rtx 4080", "4k", "mini led"],
    warranty: "3 años garantía MSI Premium",
  },

  // ===== COMPONENTES =====
  {
    id: "4",
    slug: "nvidia-rtx-4090-founders",
    name: "NVIDIA GeForce RTX 4090 Founders Edition 24GB GDDR6X",
    shortName: "RTX 4090 FE",
    brand: "nvidia",
    category: "componentes",
    price: 1599,
    currency: "USD",
    description:
      "La GeForce RTX 4090 es la GPU más potente del mundo para gaming y creación de contenido. Con la arquitectura Ada Lovelace y 24GB de memoria GDDR6X ultrarrápida, ofrece rendimiento sin precedentes en 4K y ray tracing.",
    shortDescription:
      "La GPU más potente del mundo. 24GB GDDR6X, arquitectura Ada Lovelace",
    features: [
      "16384 CUDA Cores",
      "24GB GDDR6X 384-bit",
      "Boost Clock 2.52 GHz",
      "DLSS 3.0 con Frame Generation",
      "Ray Tracing 3ª generación",
      "Diseño Founders Edition",
      "Consumo 450W TDP",
    ],
    specifications: {
      Arquitectura: "Ada Lovelace AD102",
      "CUDA Cores": "16384",
      Memoria: "24GB GDDR6X",
      "Bus de memoria": "384-bit",
      "Ancho de banda": "1008 GB/s",
      "Clock Base": "2.23 GHz",
      "Clock Boost": "2.52 GHz",
      TDP: "450W",
    },
    images: {
      main: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=600&fit=crop",
      ],
    },
    inStock: true,
    stockQuantity: 6,
    isNew: false,
    isFeatured: true,
    isOnSale: false,
    rating: 4.9,
    reviewsCount: 234,
    tags: ["gpu", "rtx 4090", "nvidia", "gaming", "4k"],
    warranty: "3 años garantía NVIDIA",
  },
  {
    id: "5",
    slug: "amd-ryzen-9-7950x3d",
    name: "AMD Ryzen 9 7950X3D - 16 Núcleos, 144MB Cache 3D V-Cache",
    shortName: "Ryzen 9 7950X3D",
    brand: "amd",
    category: "componentes",
    price: 699,
    originalPrice: 799,
    currency: "USD",
    description:
      "El procesador gaming más rápido del mundo. Con tecnología 3D V-Cache que añade 64MB de caché L3 adicional, el Ryzen 9 7950X3D domina tanto en gaming como en productividad.",
    shortDescription:
      "El CPU gaming más rápido. 16 núcleos, 144MB total cache con 3D V-Cache",
    features: [
      "16 núcleos / 32 hilos",
      "144MB Total Cache (3D V-Cache)",
      "Boost hasta 5.7 GHz",
      "Socket AM5",
      "PCIe 5.0 y DDR5",
      "TDP 120W",
    ],
    specifications: {
      Núcleos: "16",
      Hilos: "32",
      "Clock Base": "4.2 GHz",
      "Clock Boost": "5.7 GHz",
      "Cache L2": "16MB",
      "Cache L3": "128MB (64MB 3D V-Cache)",
      Socket: "AM5",
      TDP: "120W",
    },
    images: {
      main: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&h=600&fit=crop",
      gallery: [],
    },
    inStock: true,
    stockQuantity: 15,
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    rating: 4.8,
    reviewsCount: 178,
    tags: ["cpu", "amd", "ryzen", "gaming", "3d v-cache"],
    warranty: "3 años garantía AMD",
  },
  {
    id: "6",
    slug: "corsair-vengeance-ddr5-32gb",
    name: "Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz CL36",
    shortName: "Corsair DDR5 32GB",
    brand: "corsair",
    category: "componentes",
    price: 189,
    originalPrice: 229,
    currency: "USD",
    description:
      "Memoria DDR5 de alto rendimiento con iluminación RGB dinámica. Optimizada para plataformas Intel y AMD con soporte XMP 3.0 y AMD EXPO para overclocking con un clic.",
    shortDescription:
      "RAM DDR5 32GB (2x16GB) 6000MHz, RGB dinámico, XMP 3.0/EXPO",
    features: [
      "32GB (2x16GB) DDR5",
      "6000MHz CL36-36-36-76",
      "Iluminación RGB dinámica",
      "XMP 3.0 / AMD EXPO",
      "Disipador de aluminio",
      "Perfil bajo para coolers",
    ],
    specifications: {
      Capacidad: "32GB (2x16GB)",
      Velocidad: "6000MHz",
      Latencia: "CL36-36-36-76",
      Voltaje: "1.35V",
      Formato: "DIMM 288 pines",
      Altura: "44mm",
    },
    images: {
      main: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=600&fit=crop",
      gallery: [],
    },
    inStock: true,
    stockQuantity: 25,
    isNew: false,
    isFeatured: false,
    isOnSale: true,
    rating: 4.7,
    reviewsCount: 312,
    tags: ["ram", "ddr5", "corsair", "rgb", "gaming"],
    warranty: "Garantía de por vida Corsair",
  },

  // ===== PERIFÉRICOS =====
  {
    id: "7",
    slug: "logitech-g-pro-x-superlight-2",
    name: "Logitech G PRO X SUPERLIGHT 2 Wireless Gaming Mouse",
    shortName: "G PRO X SUPERLIGHT 2",
    brand: "logitech",
    category: "perifericos",
    price: 159,
    currency: "USD",
    description:
      "El mouse gaming inalámbrico profesional más avanzado de Logitech. Con sensor HERO 2 de 32K DPI, peso de solo 60g y tecnología LIGHTSPEED para latencia menor a 1ms.",
    shortDescription:
      "Mouse gaming pro inalámbrico, 60g, sensor HERO 2 32K DPI, LIGHTSPEED",
    features: [
      "Peso ultraligero 60g",
      "Sensor HERO 2 32,000 DPI",
      "LIGHTSPEED wireless <1ms",
      "Batería 95 horas",
      "Switches óptico-mecánicos LIGHTFORCE",
      "Pies de PTFE de gran tamaño",
    ],
    specifications: {
      Sensor: "HERO 2 32,000 DPI",
      Peso: "60g",
      Conectividad: "LIGHTSPEED 2.4GHz / USB-C",
      Batería: "95 horas",
      "Tasa de polling": "2000Hz (LIGHTSPEED)",
      Switches: "LIGHTFORCE óptico-mecánicos",
    },
    images: {
      main: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=600&fit=crop",
      gallery: [],
    },
    inStock: true,
    stockQuantity: 20,
    isNew: true,
    isFeatured: true,
    isOnSale: false,
    rating: 4.9,
    reviewsCount: 89,
    tags: ["mouse", "gaming", "wireless", "logitech", "esports"],
    warranty: "2 años garantía Logitech",
  },
  {
    id: "8",
    slug: "razer-huntsman-v3-pro-tenkeyless",
    name: "Razer Huntsman V3 Pro TKL - Teclado Gaming Analog",
    shortName: "Huntsman V3 Pro TKL",
    brand: "razer",
    category: "perifericos",
    price: 229,
    currency: "USD",
    description:
      "Teclado gaming con switches ópticos analógicos de segunda generación. Control preciso como un joystick con respuesta instantánea. Diseño TKL compacto ideal para esports.",
    shortDescription:
      "Teclado TKL con switches ópticos analógicos, RGB Chroma, para esports",
    features: [
      "Switches Analog Optical Gen-2",
      "Ajuste de actuación 0.1-4.0mm",
      "Razer Chroma RGB per-key",
      "Formato TKL compacto",
      "Reposamuñecas magnético incluido",
      "Keycaps PBT Doubleshot",
    ],
    specifications: {
      Switches: "Razer Analog Optical Gen-2",
      Layout: "TKL (Tenkeyless)",
      Conectividad: "USB-C desmontable",
      RGB: "Razer Chroma (16.8M colores)",
      "Polling Rate": "8000Hz",
      Material: "Aluminio + Policarbonato",
    },
    images: {
      main: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=600&fit=crop",
      gallery: [],
    },
    inStock: true,
    stockQuantity: 14,
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    rating: 4.8,
    reviewsCount: 67,
    tags: ["teclado", "gaming", "mecanico", "razer", "rgb"],
    warranty: "2 años garantía Razer",
  },

  // ===== MONITORES =====
  {
    id: "9",
    slug: "asus-rog-swift-oled-pg27aqdm",
    name: 'ASUS ROG Swift OLED PG27AQDM - 27" 1440p 240Hz',
    shortName: 'ROG Swift OLED 27"',
    brand: "asus",
    category: "monitores",
    price: 999,
    currency: "USD",
    description:
      "El primer monitor OLED gaming de ASUS. Panel QD-OLED con negro perfecto, tiempo de respuesta 0.03ms GTG y 240Hz para la experiencia gaming definitiva.",
    shortDescription:
      'Monitor OLED 27" 1440p 240Hz, 0.03ms, HDR True Black 400',
    features: [
      'Panel QD-OLED 27"',
      "2560x1440 240Hz",
      "0.03ms GtG",
      "HDR True Black 400",
      "99% DCI-P3",
      "G-SYNC Compatible",
      "ROG Gaming Dial",
    ],
    specifications: {
      Panel: "QD-OLED",
      Tamaño: "27 pulgadas",
      Resolución: "2560x1440 (QHD)",
      "Tasa Refresco": "240Hz",
      "Tiempo Respuesta": "0.03ms GtG",
      HDR: "True Black 400",
      "Espacio Color": "99% DCI-P3",
      Contraste: "1,500,000:1",
    },
    images: {
      main: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop",
      gallery: [],
    },
    inStock: true,
    stockQuantity: 8,
    isNew: true,
    isFeatured: true,
    isOnSale: false,
    rating: 4.9,
    reviewsCount: 145,
    tags: ["monitor", "oled", "gaming", "240hz", "1440p"],
    warranty: "3 años garantía ASUS + Burn-in",
  },
  {
    id: "10",
    slug: "dell-alienware-aw3423dwf",
    name: 'Dell Alienware AW3423DWF - 34" QD-OLED Ultrawide 165Hz',
    shortName: "Alienware AW3423DWF",
    brand: "dell",
    category: "monitores",
    price: 1099,
    originalPrice: 1299,
    currency: "USD",
    description:
      "Monitor ultrawide curvo con panel QD-OLED para una inmersión total. Colores vibrantes, negro infinito y 165Hz para gaming y productividad.",
    shortDescription:
      'Ultrawide 34" QD-OLED 1800R, 3440x1440 165Hz, AMD FreeSync Premium Pro',
    features: [
      'Panel QD-OLED 34" curvo 1800R',
      "3440x1440 165Hz",
      "0.1ms GtG",
      "AMD FreeSync Premium Pro",
      "HDR True Black 400",
      "99.3% DCI-P3",
    ],
    specifications: {
      Panel: "QD-OLED Curvo 1800R",
      Tamaño: "34 pulgadas",
      Resolución: "3440x1440 (UWQHD)",
      "Tasa Refresco": "165Hz",
      "Tiempo Respuesta": "0.1ms GtG",
      HDR: "True Black 400",
      "Espacio Color": "99.3% DCI-P3",
    },
    images: {
      main: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=800&h=600&fit=crop",
      gallery: [],
    },
    inStock: true,
    stockQuantity: 6,
    isNew: false,
    isFeatured: true,
    isOnSale: true,
    rating: 4.8,
    reviewsCount: 198,
    tags: ["monitor", "ultrawide", "oled", "gaming", "curvo"],
    warranty: "3 años garantía Dell Premium",
  },

  // ===== GAMING & STREAMING =====
  {
    id: "11",
    slug: "razer-kiyo-pro-ultra-webcam",
    name: "Razer Kiyo Pro Ultra - Webcam 4K con Sensor Sony STARVIS 2",
    shortName: "Razer Kiyo Pro Ultra",
    brand: "razer",
    category: "gaming",
    price: 299,
    currency: "USD",
    description:
      "La webcam definitiva para streaming. Sensor Sony STARVIS 2 de gran tamaño para rendimiento excepcional en cualquier condición de luz. 4K 30fps o 1080p 60fps.",
    shortDescription:
      "Webcam 4K profesional, sensor Sony grande, ideal para streaming",
    features: [
      "Sensor Sony STARVIS 2",
      "4K 30fps / 1080p 60fps",
      "HDR integrado",
      "Enfoque automático",
      "Campo de visión ajustable",
      "Cubierta de privacidad física",
    ],
    specifications: {
      Sensor: 'Sony STARVIS 2 1/1.2"',
      Resolución: "4K @ 30fps / 1080p @ 60fps",
      "Campo de Visión": "72° / 82° / 90°",
      Enfoque: "Automático",
      Micrófono: "Omnidireccional integrado",
      Conectividad: "USB 3.0",
    },
    images: {
      main: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=600&fit=crop",
      gallery: [],
    },
    inStock: true,
    stockQuantity: 18,
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    rating: 4.7,
    reviewsCount: 56,
    tags: ["webcam", "streaming", "4k", "razer"],
    warranty: "2 años garantía Razer",
  },
  {
    id: "12",
    slug: "elgato-stream-deck-plus",
    name: "Elgato Stream Deck + - Controlador de Streaming con Diales",
    shortName: "Stream Deck +",
    brand: "corsair",
    category: "gaming",
    price: 199,
    currency: "USD",
    description:
      "El Stream Deck + añade 4 diales táctiles y una pantalla touch para control absoluto de tu stream. 8 teclas LCD personalizables más controles analógicos.",
    shortDescription:
      "Controlador streaming con 8 teclas LCD + 4 diales táctiles + pantalla touch",
    features: [
      "8 teclas LCD personalizables",
      "4 diales táctiles infinitos",
      "Pantalla touch central",
      "Integración OBS, Twitch, YouTube",
      "Macros y plugins",
      "Stand magnético ajustable",
    ],
    specifications: {
      Teclas: "8 LCD personalizables",
      Diales: "4 táctiles infinitos",
      Pantalla: "Touch LCD central",
      Conectividad: "USB-C",
      Compatibilidad: "Windows 10+ / macOS 10.15+",
    },
    images: {
      main: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&h=600&fit=crop",
      gallery: [],
    },
    inStock: true,
    stockQuantity: 22,
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    rating: 4.8,
    reviewsCount: 134,
    tags: ["streaming", "stream deck", "elgato", "content creator"],
    warranty: "2 años garantía Elgato",
  },
];

// ============================================
// FUNCIONES HELPER
// ============================================

/**
 * Obtiene un producto por su slug
 */
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

/**
 * Obtiene un producto por su ID
 */
export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

/**
 * Obtiene productos por categoría
 */
export const getProductsByCategory = (category: CategoryType): Product[] => {
  return products.filter((p) => p.category === category);
};

/**
 * Obtiene productos por marca
 */
export const getProductsByBrand = (brand: BrandType): Product[] => {
  return products.filter((p) => p.brand === brand);
};

/**
 * Obtiene productos destacados
 */
export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.isFeatured);
};

/**
 * Obtiene productos nuevos
 */
export const getNewProducts = (): Product[] => {
  return products.filter((p) => p.isNew);
};

/**
 * Obtiene productos en oferta
 */
export const getOnSaleProducts = (): Product[] => {
  return products.filter((p) => p.isOnSale);
};

/**
 * Busca productos por término
 */
export const searchProducts = (query: string): Product[] => {
  const normalizedQuery = query.toLowerCase().trim();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(normalizedQuery) ||
      p.shortName.toLowerCase().includes(normalizedQuery) ||
      p.description.toLowerCase().includes(normalizedQuery) ||
      p.tags.some((t) => t.includes(normalizedQuery))
  );
};

/**
 * Filtra productos con múltiples criterios
 */
export const filterProducts = (filters: {
  category?: CategoryType;
  brand?: BrandType;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  isOnSale?: boolean;
}): Product[] => {
  return products.filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.brand && p.brand !== filters.brand) return false;
    if (filters.minPrice && p.price < filters.minPrice) return false;
    if (filters.maxPrice && p.price > filters.maxPrice) return false;
    if (filters.inStock !== undefined && p.inStock !== filters.inStock)
      return false;
    if (filters.isOnSale && !p.isOnSale) return false;
    return true;
  });
};

/**
 * Obtiene categoría por ID
 */
export const getCategoryById = (id: CategoryType): Category | undefined => {
  return categories.find((c) => c.id === id);
};

/**
 * Obtiene marca por ID
 */
export const getBrandById = (id: BrandType): Brand | undefined => {
  return brands.find((b) => b.id === id);
};

/**
 * Calcula el descuento de un producto
 */
export const calculateDiscount = (product: Product): number => {
  if (!product.originalPrice || product.originalPrice <= product.price)
    return 0;
  return Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
};

/**
 * Formatea precio con moneda
 */
export const formatPrice = (
  price: number,
  currency: string = "USD"
): string => {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
};

/**
 * Obtiene productos relacionados
 */
export const getRelatedProducts = (
  product: Product,
  limit: number = 4
): Product[] => {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
};
