import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91xxxxxxxxxx"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full items-center justify-center shadow-lg hover:scale-110 hover:brightness-110 transition-all duration-200 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 bg-[#1C1C1C] text-white px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="font-montserrat text-sm font-medium">Chat on WhatsApp</span>
        <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-[#1C1C1C]" />
      </div>
    </a>
  );
}