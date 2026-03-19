import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PaintShowcase() {
  const [selectedColor, setSelectedColor] = useState('#E8F5E9');
  const [selectedFinish, setSelectedFinish] = useState('matte');

  const colors = [
    { name: 'Fresh Green', hex: '#E8F5E9', shade: 'Light', price: 1899 },
    { name: 'Sky Blue', hex: '#E3F2FD', shade: 'Pastel', price: 1949 },
    { name: 'Warm Beige', hex: '#FFF8E1', shade: 'Natural', price: 1799 },
    { name: 'Soft Pink', hex: '#FCE4EC', shade: 'Blush', price: 1999 },
    { name: 'Pearl White', hex: '#FAFAFA', shade: 'Classic', price: 1699 },
    { name: 'Ocean Blue', hex: '#B3E5FC', shade: 'Deep', price: 2099 },
    { name: 'Sunset Orange', hex: '#FFE0B2', shade: 'Warm', price: 1849 },
    { name: 'Lavender', hex: '#E1BEE7', shade: 'Royal', price: 2149 }
  ];

  const finishes = [
    { name: 'Matte', multiplier: 1.0 },
    { name: 'Satin', multiplier: 1.15 },
    { name: 'Gloss', multiplier: 1.25 }
  ];

  const getCurrentColor = () => colors.find(c => c.hex === selectedColor) || colors[0];
  const getCurrentFinish = () => finishes.find(f => f.name.toLowerCase() === selectedFinish) || finishes[0];
  
  const calculatePrice = () => {
    const basePrice = getCurrentColor().price;
    const multiplier = getCurrentFinish().multiplier;
    return Math.round(basePrice * multiplier);
  };

  const calculateMRP = () => {
    return Math.round(calculatePrice() * 1.32); // ~32% markup for MRP
  };

  const calculateDiscount = () => {
    const price = calculatePrice();
    const mrp = calculateMRP();
    return Math.round(((mrp - price) / mrp) * 100);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-[36px] md:text-[44px] text-[#1C1C1C] mb-4">
            Explore Paint Colors
          </h2>
          <p className="font-roboto text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
            Choose from hundreds of premium paint colors with different finishes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Color Swatches */}
          <div>
            <h3 className="font-montserrat font-semibold text-[20px] text-[#1C1C1C] mb-6">
              Select a Color
            </h3>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {colors.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => setSelectedColor(color.hex)}
                  className={`group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110 ${
                    selectedColor === color.hex ? 'scale-110' : ''
                  }`}
                >
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-4 transition-all duration-200 ${
                      selectedColor === color.hex
                        ? 'border-[#F57C00] shadow-lg'
                        : 'border-[#E0E0E0] hover:border-[#BDBDBD]'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-center">
                    <div className="font-montserrat font-medium text-[11px] text-[#1C1C1C]">
                      {color.name}
                    </div>
                    <div className="font-roboto text-[10px] text-[#757575]">
                      {color.shade}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Finish Tabs */}
            <div className="mb-6">
              <h3 className="font-montserrat font-semibold text-[20px] text-[#1C1C1C] mb-4">
                Choose Finish
              </h3>
              <div className="flex gap-0 border border-[#E0E0E0] rounded-lg overflow-hidden">
                {finishes.map((finish) => (
                  <button
                    key={finish.name}
                    onClick={() => setSelectedFinish(finish.name.toLowerCase())}
                    className={`flex-1 py-3 font-montserrat font-semibold text-sm transition-colors duration-200 relative ${
                      selectedFinish === finish.name.toLowerCase()
                        ? 'bg-[#1E88E5] text-white'
                        : 'bg-white text-[#4A4A4A] hover:bg-[#F5F5F5]'
                    }`}
                  >
                    {finish.name}
                    {selectedFinish === finish.name.toLowerCase() && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F57C00]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h4 className="font-montserrat font-semibold text-[18px] text-[#1C1C1C] mb-2">
                Premium {getCurrentFinish().name} Finish Paint
              </h4>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-montserrat font-bold text-[28px] text-[#F57C00]">
                  ₹{calculatePrice().toLocaleString('en-IN')}
                </span>
                <span className="font-roboto text-base text-[#757575] line-through">
                  ₹{calculateMRP().toLocaleString('en-IN')}
                </span>
                <span className="bg-[#FF8F00] text-white px-2 py-1 rounded text-xs font-montserrat font-bold">
                  {calculateDiscount()}% OFF
                </span>
              </div>
              <p className="font-roboto text-sm text-[#4A4A4A] mb-4">
                4 Litre coverage • Washable • Low VOC • ISI Marked
              </p>
              <button className="w-full h-12 bg-[#1E88E5] text-white rounded-lg font-montserrat font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition-all duration-150">
                Add to Quote
              </button>
            </div>
          </div>

          {/* Room Mockup */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
              <div
                className="w-full h-full flex items-center justify-center transition-colors duration-400"
                style={{ backgroundColor: selectedColor }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <svg viewBox="0 0 64 64" className="w-20 h-20" fill="white">
                      <path d="M32 8L8 24v32h48V24L32 8zm0 4.5L50 25v27H14V25l18-12.5z"/>
                      <rect x="24" y="32" width="16" height="20" fill="white"/>
                    </svg>
                  </div>
                  <p className="font-roboto text-white/80 text-sm">
                    Wall Preview
                  </p>
                </div>
              </div>
            </div>

            {/* Color Info Badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg border-2 border-[#E0E0E0]"
                  style={{ backgroundColor: selectedColor }}
                />
                <div>
                  <div className="font-montserrat font-semibold text-sm text-[#1C1C1C]">
                    {getCurrentColor().name}
                  </div>
                  <div className="font-roboto text-xs text-[#757575]">
                    {selectedColor.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}