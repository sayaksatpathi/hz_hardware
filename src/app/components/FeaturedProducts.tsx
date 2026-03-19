import { Eye, Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Premium Exterior Paint',
      category: 'Paints',
      image: 'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBhaW50JTIwY2FuJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzM5NDE3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      mrp: 2499,
      price: 1999,
      sale: true
    },
    {
      id: 2,
      name: 'Cordless Power Drill',
      category: 'Power Tools',
      image: 'https://images.unsplash.com/photo-1770763233593-74dfd0da7bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGRyaWxsJTIwdG9vbHxlbnwxfHx8fDE3NzM5MTk1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      mrp: 8999,
      price: 7499,
      sale: false
    },
    {
      id: 3,
      name: 'Professional Claw Hammer',
      category: 'Hand Tools',
      image: 'https://images.unsplash.com/photo-1742828721926-6010895aa72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1tZXIlMjBjb25zdHJ1Y3Rpb24lMjB0b29sfGVufDF8fHx8MTc3Mzg2ODM1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      mrp: 799,
      price: 649,
      sale: true
    },
    {
      id: 4,
      name: 'Steel Measuring Tape 5M',
      category: 'Measuring Tools',
      image: 'https://images.unsplash.com/photo-1593307315564-c96172dc89dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFzdXJpbmclMjB0YXBlJTIwdG9vbHxlbnwxfHx8fDE3NzM5MDcxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      mrp: 499,
      price: 399,
      sale: false
    },
    {
      id: 5,
      name: 'Heavy Duty Angle Grinder',
      category: 'Power Tools',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdsZSUyMGdyaW5kZXIlMjB0b29sfGVufDF8fHx8MTc3MzkxOTU2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      mrp: 5999,
      price: 4999,
      sale: true
    },
    {
      id: 6,
      name: 'Plumbing Pipe Wrench Set',
      category: 'Plumbing',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmVuY2glMjB0b29sfGVufDF8fHx8MTc3MzkxOTU2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      mrp: 1299,
      price: 999,
      sale: false
    },
    {
      id: 7,
      name: 'LED Work Light 20W',
      category: 'Electrical',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjB3b3JrJTIwbGlnaHR8ZW58MXx8fHwxNzczOTE5NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      mrp: 1599,
      price: 1299,
      sale: true
    }
  ];

  return (
    <section id="products" className="py-16 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-[36px] md:text-[44px] text-[#1C1C1C] mb-4">
            Featured Products
          </h2>
          <p className="font-roboto text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
            Handpicked products from trusted brands at competitive prices
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative bg-[#F5F5F5] aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Festive Sale Ribbon */}
                {product.sale && (
                  <div className="absolute top-3 right-3 bg-[#FF8F00] text-white px-3 py-1 rotate-[8deg] shadow-lg">
                    <div className="font-montserrat font-bold text-xs uppercase">
                      Sale / सेल
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-montserrat font-medium text-[11px] uppercase tracking-wider text-[#1C1C1C]">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-montserrat font-semibold text-[15px] text-[#1C1C1C] mb-3 min-h-[36px]">
                  {product.name}
                </h3>

                {/* Pricing */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-montserrat font-bold text-[22px] text-[#F57C00]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="font-roboto text-sm text-[#757575] line-through">
                    ₹{product.mrp.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="text-[11px] text-[#757575] font-roboto mb-4">
                  + 18% GST
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 h-10 border border-[#1E88E5] text-[#1E88E5] rounded-md font-montserrat font-semibold text-[11px] flex items-center justify-center gap-1 hover:bg-[#1E88E5] hover:text-white transition-colors duration-200">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="whitespace-nowrap">View</span>
                  </button>
                  <button className="flex-1 h-10 bg-[#1E88E5] text-white rounded-md font-montserrat font-semibold text-[11px] flex items-center justify-center gap-1 hover:brightness-110 transition-all duration-150">
                    <Plus className="w-3.5 h-3.5" />
                    <span className="whitespace-nowrap">Enquiry</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="#products"
            className="inline-block px-8 h-12 leading-[48px] bg-[#1E88E5] text-white rounded-lg font-montserrat font-semibold text-sm uppercase tracking-wider hover:scale-105 hover:brightness-110 transition-all duration-150"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}