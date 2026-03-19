import { Truck, Package, MessageSquare, ClipboardList, HardHat, FileText, ChevronRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: 1,
      icon: Truck,
      title: 'Home Delivery',
      description: 'Fast and reliable delivery to your doorstep',
      color: '#1E88E5'
    },
    {
      id: 2,
      icon: Package,
      title: 'Bulk Supply',
      description: 'Special rates for contractors and builders',
      color: '#F57C00'
    },
    {
      id: 3,
      icon: MessageSquare,
      title: 'Paint Consultation',
      description: 'Expert advice on colors and finishes',
      color: '#00897B'
    },
    {
      id: 4,
      icon: ClipboardList,
      title: 'Custom Orders',
      description: 'Special orders and hard-to-find items',
      color: '#FFA000'
    },
    {
      id: 5,
      icon: HardHat,
      title: 'Contractor Support',
      description: 'Dedicated support for construction professionals',
      color: '#757575',
      badge: true
    },
    {
      id: 6,
      icon: FileText,
      title: 'GST Billing',
      description: 'Proper GST invoices for all purchases',
      color: '#1E88E5'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-[36px] md:text-[44px] text-[#1C1C1C] mb-4">
            Our Services
          </h2>
          <p className="font-roboto text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
            Comprehensive solutions for all your hardware and construction needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>

                  {service.badge && (
                    <div className="bg-[#1C1C1C] border-2 border-[#F57C00] rounded px-2 py-1 flex items-center gap-1">
                      <HardHat className="w-3 h-3 text-[#F57C00]" />
                      <span className="text-[9px] text-white font-montserrat font-semibold uppercase tracking-wider">
                        Verified
                      </span>
                    </div>
                  )}

                  {!service.badge && (
                    <ChevronRight className="w-5 h-5 text-[#F57C00] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  )}
                </div>

                <h3 className="font-montserrat font-semibold text-[20px] text-[#1C1C1C] mb-2">
                  {service.title}
                </h3>
                <p className="font-roboto text-[15px] text-[#4A4A4A] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}