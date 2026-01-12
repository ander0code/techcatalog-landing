import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Cpu } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-900 flex items-center justify-center px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="relative inline-block">
            {/* Glowing background */}
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary-500 to-accent-500 opacity-50 animate-pulse-slow" />
            
            {/* 404 Number */}
            <h1 className="relative text-[150px] lg:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 font-display leading-none select-none">
              404
            </h1>
          </div>
        </div>

        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-primary-500/30">
              <Cpu className="w-12 h-12 text-white -rotate-12" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center animate-bounce-subtle">
              <span className="text-white text-lg font-bold">?</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-display">
          ¡Ups! Página no encontrada
        </h2>
        <p className="text-secondary-300 text-lg mb-8 max-w-md mx-auto">
          Parece que esta página se desconectó del servidor. 
          No te preocupes, te ayudamos a volver al camino correcto.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>
          <Link
            to="/productos"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Search className="w-5 h-5" />
            Explorar productos
          </Link>
        </div>

        {/* Back link */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-secondary-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a la página anterior
        </button>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-primary-500 rounded-full animate-float opacity-60" />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent-500 rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-5 w-2 h-2 bg-primary-400 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}
