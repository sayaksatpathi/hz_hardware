import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-24 md:pb-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#1E88E5] rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <div className="font-montserrat font-extrabold text-lg leading-none">
                HZ HARDWARE
              </div>
            </div>
            <p className="font-roboto text-[15px] text-[#BDBDBD] mb-4 leading-relaxed">
              Strong Foundations. Perfect Finishes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-[18px] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'Categories', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="font-roboto text-[15px] text-[#BDBDBD] hover:text-[#F57C00] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-montserrat font-semibold text-[18px] mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2">
              {['Paints & Coatings', 'Power Tools', 'Plumbing Supplies', 'Electrical Items', 'Building Materials', 'Hardware Accessories'].map((category) => (
                <li key={category}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="font-roboto text-[15px] text-[#BDBDBD] hover:text-[#F57C00] transition-colors"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-[18px] mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="font-roboto text-[15px] text-[#BDBDBD] leading-relaxed">
                123 Hardware Street<br />
                Industrial Area<br />
                Mumbai, Maharashtra 400001
              </li>
              <li>
                <a href="tel:+91xxxxxxxxxx" className="font-roboto text-[15px] text-[#BDBDBD] hover:text-[#F57C00] transition-colors">
                  +91 xxxxx xxxxx
                </a>
              </li>
              <li>
                <a href="mailto:info@hzhardware.com" className="font-roboto text-[15px] text-[#BDBDBD] hover:text-[#F57C00] transition-colors">
                  info@hzhardware.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#F57C00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#F57C00] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#F57C00] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/91xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:brightness-110 transition-all duration-150"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A2A2A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-roboto text-sm text-[#757575] text-center md:text-left">
              © {currentYear} HZ Hardware & Paints. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <div className="font-roboto text-sm text-[#757575]">
                GST: 27XXXXX1234X1Z5
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#4CAF50]" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
                </svg>
                <span className="font-montserrat font-semibold text-sm text-[#4CAF50]">
                  Secure Payments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}