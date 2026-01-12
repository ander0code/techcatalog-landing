import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '51994428965';
  const message = '¡Hola! Me interesa conocer más sobre sus productos de tecnología.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
        <span className="text-sm font-medium text-secondary-900">¡Escríbenos!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white rotate-45" />
      </div>
    </a>
  );
}
