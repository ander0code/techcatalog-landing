import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-secondary-50">
      {/* Efecto de fondo mesh gradient */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none opacity-50" />
      
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
