import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Cpu,
  CreditCard,
  Truck,
  Shield,
  ArrowRight
} from 'lucide-react';
import { categories } from '../../data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const features = [
    { icon: Truck, title: 'Envío Gratis', desc: 'En pedidos +$500' },
    { icon: Shield, title: 'Garantía', desc: 'Hasta 3 años' },
    { icon: CreditCard, title: 'Pago Seguro', desc: 'Todas las tarjetas' },
  ];

  return (
    <footer className="relative bg-secondary-900 text-secondary-300 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />

      {/* Features Bar */}
      <div className="relative border-b border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-secondary-800/50 rounded-2xl hover:bg-secondary-800 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{feature.title}</h4>
                  <p className="text-secondary-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 bg-gradient-to-r from-primary-900/50 to-accent-900/50 rounded-3xl border border-secondary-700">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                ¿Buscas las mejores ofertas?
              </h3>
              <p className="text-secondary-300">
                Suscríbete y recibe descuentos exclusivos en laptops y componentes gaming
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="px-5 py-3.5 bg-secondary-800 border border-secondary-600 rounded-xl text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent min-w-[280px] transition-all"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Suscribirse
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/30">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-display">Tech</span>
                <span className="text-2xl font-bold gradient-text-alt font-display">Store</span>
              </div>
            </Link>
            <p className="text-secondary-400 mb-6 leading-relaxed">
              Tu destino para tecnología gaming y profesional. Laptops, PCs, componentes y periféricos de las mejores marcas mundiales.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+51994428965" className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>994-428-965</span>
              </a>
              <a href="mailto:ventas@techstore.pe" className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>ventas@techstore.pe</span>
              </a>
              <div className="flex items-center gap-3 text-secondary-300">
                <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 text-lg">Categorías</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/productos?categoria=${category.id}`}
                    className="text-secondary-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-lg">Empresa</h4>
            <ul className="space-y-3">
              {['Nosotros', 'Blog', 'Soporte', 'Términos', 'Privacidad'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-secondary-400 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 text-lg">Marcas Top</h4>
            <div className="grid grid-cols-2 gap-3">
              {['ASUS', 'MSI', 'Lenovo', 'Razer', 'Corsair', 'Logitech'].map((brand) => (
                <Link
                  key={brand}
                  to={`/productos?marca=${brand.toLowerCase()}`}
                  className="px-3 py-2 bg-secondary-800/50 hover:bg-secondary-800 rounded-lg text-secondary-400 hover:text-white text-sm text-center transition-all"
                >
                  {brand}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
                  { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
                  { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
                  { icon: Youtube, href: '#', color: 'hover:bg-red-600' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-white transition-all ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-secondary-500">
              © {currentYear} TechStore. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-secondary-500">
              <span>Hecho en Perú</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
