import { CheckCircle, Truck, ShoppingCart, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
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
    <section id="hero" className="relative w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:min-h-[600px]">
        {/* Left Content Section - Dark with Pattern */}
        <div className="relative lg:w-[55%] bg-[#1C1C1C] px-6 py-16 md:px-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Geometric Pattern Background */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-[600px]">
            <h1 className="font-montserrat font-extrabold text-[48px] md:text-[64px] leading-[1.1] tracking-[-1px] text-white mb-6">
              Building Materials.<br />Done Right.
            </h1>
            <p className="font-roboto text-[17px] leading-[1.65] text-[#BDBDBD] mb-8 max-w-[500px]">
              Your trusted partner for premium hardware, paints, and building supplies. 
              Quality products backed by expert advice.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('products')}
                className="h-[52px] px-8 bg-[#1E88E5] text-white font-montserrat font-semibold text-sm uppercase tracking-wider rounded-lg hover:scale-105 hover:brightness-110 transition-all duration-150"
              >
                Browse Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="h-[52px] px-8 bg-transparent text-white border-2 border-white font-montserrat font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white hover:text-[#1C1C1C] transition-all duration-200"
              >
                Get a Quote
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#1E88E5] flex-shrink-0" />
                <span className="text-xs text-[#BDBDBD] font-roboto">ISI Marked Products</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-[#1E88E5] flex-shrink-0" />
                <span className="text-xs text-[#BDBDBD] font-roboto">GST Invoice Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#1E88E5] flex-shrink-0" />
                <span className="text-xs text-[#BDBDBD] font-roboto">Free Delivery ₹999+</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-[#1E88E5] flex-shrink-0" />
                <span className="text-xs text-[#BDBDBD] font-roboto">10,000+ Products</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-[45%] h-[400px] lg:h-auto relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1519520104014-df63821cb6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMHN0b3JlJTIwdG9vbHMlMjBwYWludHxlbnwxfHx8fDE3NzM5NDE2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hardware store interior with tools and paints"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}