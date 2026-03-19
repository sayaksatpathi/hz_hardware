import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Products', id: 'products' },
    { label: 'Categories', id: 'categories' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Saffron Accent Strip */}
      <div className="w-full h-1 bg-[#FF8F00]" />

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          isScrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.10)]' : ''
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-[64px]">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1E88E5] rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <div>
                <div className="font-montserrat font-extrabold text-lg leading-none tracking-tight">
                  HZ HARDWARE
                </div>
                <div className="text-[10px] text-[#4A4A4A] font-roboto">
                  Strong Foundations. Perfect Finishes.
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-montserrat font-semibold text-[15px] text-[#1C1C1C] hover:text-[#1E88E5] transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Get Quote Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:block px-5 h-10 rounded-md bg-[#F57C00] text-white font-montserrat font-semibold text-sm uppercase tracking-wider hover:scale-105 hover:brightness-110 transition-all duration-150"
              >
                Get Quote
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-[#1C1C1C]"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[65px] bg-white z-40 animate-in slide-in-from-right duration-280">
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-montserrat font-semibold text-xl text-[#1C1C1C] text-left hover:text-[#1E88E5] transition-colors"
                  style={{
                    animation: `slideIn 350ms ease-out ${index * 60}ms both`
                  }}
                >
                  {link.label}
                </button>
              ))}

              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="https://wa.me/91xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-12 rounded-md bg-[#25D366] text-white font-montserrat font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="h-12 rounded-md bg-[#F57C00] text-white font-montserrat font-semibold uppercase tracking-wider"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}