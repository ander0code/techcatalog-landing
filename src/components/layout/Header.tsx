import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Phone, Cpu } from 'lucide-react';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/productos' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 text-white text-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-2">
            <span className="font-medium">Envío GRATIS +$500 | Ofertas hasta 30% OFF</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`transition-all duration-500 ${isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-primary-500/5'
            : 'bg-white/60 backdrop-blur-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300 group-hover:scale-105">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-400 rounded-full" />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold font-display text-secondary-900">Tech</span>
                <span className="text-2xl font-bold font-display gradient-text">Store</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${location.pathname === item.href
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-secondary-600 hover:text-primary-700 hover:bg-primary-50/50'
                    }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search */}
              <div className={`relative transition-all duration-300 ${searchOpen ? 'w-64' : 'w-10'}`}>
                {searchOpen ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Buscar productos..."
                      className="w-full px-4 py-2.5 pr-10 bg-secondary-100 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                      autoFocus
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="absolute right-2 p-1 text-secondary-400 hover:text-secondary-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2.5 text-secondary-500 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Cart */}
              <button className="relative p-2.5 text-secondary-500 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 group">
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                  0
                </span>
              </button>

              {/* CTA Button */}
              <Link to="/contacto" className="btn-primary">
                <Phone className="w-4 h-4" />
                Cotizar
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[104px] bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out ${isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Mobile Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Buscar laptops, GPUs, monitores..."
                className="w-full pl-12 pr-4 py-3.5 bg-secondary-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
            </div>
          </div>

          {/* Mobile Nav Links */}
          <nav className="space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3.5 rounded-xl font-medium transition-all duration-300 animate-slide-up ${location.pathname === item.href
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/30'
                    : 'text-secondary-700 hover:bg-primary-50'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="mt-6 pt-6 border-t border-secondary-200 flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-secondary-100 rounded-xl text-secondary-700 font-medium">
              <ShoppingBag className="w-5 h-5" />
              Carrito (0)
            </button>
            <Link to="/contacto" className="flex-1 btn-primary justify-center">
              <Phone className="w-4 h-4" />
              Cotizar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
