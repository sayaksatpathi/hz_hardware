import { Paintbrush, Drill, Wrench, Zap, Hammer, Settings } from 'lucide-react';

export function Categories() {
  const categories = [
    {
      id: 1,
      icon: Paintbrush,
      name: 'Paints',
      nameHindi: 'पेंट्स',
      bgColor: '#FF8F00',
      color: '#FFF3E0'
    },
    {
      id: 2,
      icon: Drill,
      name: 'Power Tools',
      nameHindi: 'पावर टूल्स',
      bgColor: '#1E88E5',
      color: '#E3F2FD'
    },
    {
      id: 3,
      icon: Wrench,
      name: 'Plumbing',
      nameHindi: 'प्लंबिंग',
      bgColor: '#00897B',
      color: '#E0F2F1'
    },
    {
      id: 4,
      icon: Zap,
      name: 'Electrical',
      nameHindi: 'इलेक्ट्रिकल',
      bgColor: '#FFA000',
      color: '#FFF8E1'
    },
    {
      id: 5,
      icon: Hammer,
      name: 'Building Materials',
      nameHindi: 'निर्माण सामग्री',
      bgColor: '#757575',
      color: '#FAFAFA'
    },
    {
      id: 6,
      icon: Settings,
      name: 'Hardware Accessories',
      nameHindi: 'हार्डवेयर सामान',
      bgColor: '#F57C00',
      color: '#FFF3E0'
    }
  ];

  return (
    <section id="categories" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-[36px] md:text-[44px] text-[#1C1C1C] mb-4">
            Shop by Category
          </h2>
          <p className="font-roboto text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
            Find everything you need for your construction and renovation projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative bg-[#F5F5F5] rounded-lg p-6 cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                {/* Hover Border Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-0 bg-[#1E88E5] transition-all duration-200 group-hover:w-[3px]" />

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: category.color }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.bgColor }} />
                  </div>

                  <div>
                    <h3 className="font-montserrat font-semibold text-[15px] text-[#1C1C1C] mb-1">
                      {category.name}
                    </h3>
                    <p className="font-noto-sans-devanagari text-[10px] text-[#757575]">
                      {category.nameHindi}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}