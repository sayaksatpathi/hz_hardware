import { MessageCircle, Phone, FileText } from 'lucide-react';

export function MobileBottomBar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E0E0E0] shadow-[0_-2px_12px_rgba(0,0,0,0.08)] pb-safe">
      <div className="grid grid-cols-3 h-14">
        <a
          href="tel:+91xxxxxxxxxx"
          className="flex flex-col items-center justify-center gap-1 bg-[#1E88E5] text-white hover:brightness-110 transition-all"
        >
          <Phone className="w-5 h-5" />
          <span className="font-montserrat font-medium text-[10px]">Call</span>
        </a>

        <a
          href="https://wa.me/91xxxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-[#25D366] text-white hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-montserrat font-semibold uppercase">
            WhatsApp
          </span>
        </a>

        <button
          onClick={() => scrollToSection('contact')}
          className="flex flex-col items-center justify-center gap-1 bg-[#F57C00] text-white hover:brightness-110 transition-all"
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] font-montserrat font-semibold uppercase">
            Get Quote
          </span>
        </button>
      </div>
    </div>
  );
}