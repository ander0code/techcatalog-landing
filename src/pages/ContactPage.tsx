import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  Building,
  CheckCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-secondary-900 mb-4 font-display">
            ¡Mensaje enviado!
          </h1>
          <p className="text-secondary-600 mb-8">
            Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo 
            en las próximas 24 horas.
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
            }}
            className="btn-primary"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold font-display mb-4">
            ¿Tienes un proyecto en mente?
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y nuestro equipo de expertos te ayudará 
            a encontrar la solución perfecta para ti.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6 font-display">
              Información de contacto
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Teléfono',
                  content: '987-654-321',
                  href: 'tel:+51987654321'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@techstore.demo',
                  href: 'mailto:info@techstore.demo'
                },
                {
                  icon: MapPin,
                  title: 'Ubicación',
                  content: 'Lima, Perú',
                  href: null
                },
                {
                  icon: Clock,
                  title: 'Horario',
                  content: 'Lun - Vie: 9am - 6pm',
                  href: null
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">{item.title}</h3>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-secondary-600 hover:text-primary-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-secondary-600">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick contact */}
            <div className="mt-10 p-6 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl text-white">
              <h3 className="font-bold text-lg mb-2">¿Prefieres WhatsApp?</h3>
              <p className="text-white/80 text-sm mb-4">
                Escríbenos directamente y te responderemos al instante.
              </p>
              <a
                href="https://wa.me/51994428965?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-2 font-display">
                Solicitar cotización
              </h2>
              <p className="text-secondary-600 mb-8">
                Completa el formulario y te enviaremos una propuesta personalizada.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field pl-12"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Correo electrónico *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field pl-12"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field pl-12"
                        placeholder="999 999 999"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                      Empresa (opcional)
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field pl-12"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-2">
                    Presupuesto estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">Más de $5,000</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    ¿Qué productos te interesan? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field resize-none"
                    placeholder="Cuéntanos qué estás buscando..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Enviar solicitud
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
