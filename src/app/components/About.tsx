import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            {/* Diagonal Saffron Stripe */}
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-[#FF8F00] opacity-20 -rotate-12 rounded-lg" />
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1641743490775-5a04ce5f0c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYXJkd2FyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzk0MTY4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="HZ Hardware store interior"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#1E88E5] opacity-20 rotate-12 rounded-lg" />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="font-montserrat font-bold text-[36px] md:text-[44px] text-[#1C1C1C] mb-6 leading-tight">
              15 Years of Hardware Expertise
            </h2>
            
            <div className="space-y-4 mb-6">
              <p className="font-roboto text-[16px] leading-[1.7] text-[#4A4A4A]">
                Since 2009, HZ Hardware & Paints has been the trusted choice for homeowners, 
                contractors, and builders across India. What started as a small neighborhood 
                hardware shop has grown into one of the region's most comprehensive building 
                materials suppliers.
              </p>
              
              <p className="font-roboto text-[16px] leading-[1.7] text-[#4A4A4A]">
                We pride ourselves on offering <span className="font-semibold text-[#1C1C1C] border-b-2 border-[#F57C00]">quality products</span> from 
                over 500+ trusted brands, backed by <span className="font-semibold text-[#1C1C1C] border-b-2 border-[#F57C00]">expert advice</span> and 
                competitive pricing. Our team of hardware specialists is always ready to help 
                you find the perfect solution for your project.
              </p>
              
              <p className="font-roboto text-[16px] leading-[1.7] text-[#4A4A4A]">
                From premium paints to power tools, plumbing fittings to electrical supplies, 
                we maintain <span className="font-semibold text-[#1C1C1C] border-b-2 border-[#F57C00]">10,000+ products</span> in stock to ensure you never have to 
                wait for what you need. Strong foundations deserve perfect finishes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="font-montserrat font-extrabold text-[32px] text-[#1E88E5]">
                  15+
                </div>
                <div className="font-roboto text-sm text-[#757575]">
                  Years in Business
                </div>
              </div>
              <div>
                <div className="font-montserrat font-extrabold text-[32px] text-[#1E88E5]">
                  500+
                </div>
                <div className="font-roboto text-sm text-[#757575]">
                  Trusted Brands
                </div>
              </div>
              <div>
                <div className="font-montserrat font-extrabold text-[32px] text-[#1E88E5]">
                  50K+
                </div>
                <div className="font-roboto text-sm text-[#757575]">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
