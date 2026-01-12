import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  Gamepad2,
  Headphones,
  Tag,
  Shield,
  Truck,
  Star,
  ChevronRight
} from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { categories, getFeaturedProducts, getOnSaleProducts, brands } from '../data/products';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 8);
  const onSaleProducts = getOnSaleProducts().slice(0, 4);

  const stats = [
    { value: '10K+', label: 'Clientes felices', icon: Star },
    { value: '500+', label: 'Productos', icon: Cpu },
    { value: '24/7', label: 'Soporte técnico', icon: Headphones },
    { value: '3 años', label: 'Garantía', icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary-600/20 via-transparent to-accent-600/20 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6 animate-slide-down">
                <Tag className="w-4 h-4 text-accent-400" />
                <span className="text-sm font-medium">Ofertas hasta 30% OFF</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 animate-slide-up">
                Tu destino para{' '}
                <span className="relative">
                  <span className="gradient-text-alt">tecnología</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#1d4ed8" />
                        <stop offset="1" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{' '}
                de alto rendimiento
              </h1>

              <p className="text-lg text-secondary-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up animate-delay-100">
                Laptops gaming, componentes de última generación, periféricos profesionales.
                Todo lo que necesitas para llevar tu setup al siguiente nivel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-200">
                <Link to="/productos" className="btn-primary text-base px-8 py-4">
                  Explorar productos
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contacto" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 py-4">
                  Solicitar cotización
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 pt-10 border-t border-white/10">
                {[
                  { icon: Truck, text: 'Envío gratis +$500' },
                  { icon: Shield, text: 'Garantía extendida' },
                  { icon: Headphones, text: 'Soporte 24/7' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-secondary-300">
                    <item.icon className="w-5 h-5 text-accent-400" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Clean centered image */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Main image container */}
                <div className="relative w-[480px] h-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/40">
                  <img
                    src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&h=450&fit=crop"
                    alt="Equipos de tecnología profesional"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                </div>

                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-primary-400/20 rounded-3xl -z-10" />
                <div className="absolute -inset-8 border border-primary-400/10 rounded-[2rem] -z-20" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)" />
          </svg>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-12 -mt-1 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-secondary-900 font-display">{stat.value}</p>
                <p className="text-sm text-secondary-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Explora por <span className="gradient-text">categoría</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Encuentra exactamente lo que buscas entre nuestras categorías especializadas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/productos?categoria=${category.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-sm hover:shadow-xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="font-bold text-center text-lg group-hover:scale-110 transition-transform">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {category.productCount} productos
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 className="section-title mb-4">
                Productos <span className="gradient-text">destacados</span>
              </h2>
              <p className="section-subtitle">
                Los favoritos de nuestros clientes, seleccionados para ti
              </p>
            </div>
            <Link
              to="/productos"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
            >
              Ver todos
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROMO BANNER ===== */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Gamepad2 className="w-4 h-4" />
                Ofertas Gaming
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold font-display mb-6">
                Hasta 30% de descuento en componentes gaming
              </h2>
              <p className="text-lg text-white/80 mb-8">
                GPUs, procesadores, memorias RAM y más. Arma el setup de tus sueños con los mejores precios del mercado.
              </p>
              <Link to="/productos?categoria=componentes" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-white/90 transition-colors">
                Ver ofertas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              {onSaleProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/productos/${product.slug}`}
                  className="p-4 bg-white/10 backdrop-blur rounded-2xl hover:bg-white/20 transition-colors group"
                >
                  <img
                    src={product.images.main}
                    alt={product.shortName}
                    className="w-full aspect-square object-cover rounded-xl mb-3 group-hover:scale-105 transition-transform"
                  />
                  <h4 className="font-semibold text-white truncate">{product.shortName}</h4>
                  <p className="text-accent-300 font-bold">${product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRANDS SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-secondary-500 mb-8 font-medium">
            Trabajamos con las mejores marcas del mundo
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {brands.slice(0, 8).map((brand) => (
              <div key={brand.id} className="h-8 lg:h-10">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">
            ¿Necesitas ayuda para elegir?
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Nuestro equipo de expertos está listo para asesorarte y encontrar
            el equipo perfecto para tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn-primary text-base px-8 py-4">
              Contactar un asesor
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/51994428965"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
