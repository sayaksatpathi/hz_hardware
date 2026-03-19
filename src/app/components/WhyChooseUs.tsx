import { useEffect, useRef, useState } from 'react';
import { Award, TrendingUp, Users, Clock, Wrench, Shield } from 'lucide-react';

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, label: 'Quality Products', value: 10000, suffix: '+', description: 'Premium products in stock' },
    { icon: TrendingUp, label: 'Trusted Brands', value: 500, suffix: '+', description: 'Top brands available' },
    { icon: Users, label: 'Happy Customers', value: 50000, suffix: '+', description: 'Satisfied customers served' },
    { icon: Clock, label: 'Years Experience', value: 15, suffix: '+', description: 'Years in business' },
    { icon: Wrench, label: 'Expert Advice', value: 100, suffix: '%', description: 'Professional consultation' },
    { icon: Shield, label: 'Warranty Support', value: 100, suffix: '%', description: 'Full warranty coverage' }
  ];

  const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 1200;
      const steps = 60;
      const increment = end / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span>
        {count.toLocaleString('en-IN')}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#F5F5F5] relative overflow-hidden">
      {/* Corrugated Metal Texture Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, #757575 10px, #757575 12px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-[36px] md:text-[44px] text-[#1C1C1C] mb-4">
            Why Choose HZ Hardware
          </h2>
          <p className="font-roboto text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
            Your trusted partner for quality hardware and construction materials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center"
                style={{
                  animation: isVisible ? `fadeUp 350ms ease-out ${index * 60}ms both` : 'none'
                }}
              >
                <div className="w-16 h-16 bg-[#1E88E5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-montserrat font-extrabold text-[44px] text-[#1C1C1C] mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="font-montserrat font-semibold text-[20px] text-[#1C1C1C] mb-2">
                  {stat.label}
                </h3>
                <p className="font-roboto text-[15px] text-[#4A4A4A]">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlighted Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="font-montserrat font-bold text-[28px] text-[#F57C00] border-b-2 border-[#F57C00] inline-block pb-1">
              Competitive Pricing
            </div>
          </div>
          <div className="text-center">
            <div className="font-montserrat font-bold text-[28px] text-[#F57C00] border-b-2 border-[#F57C00] inline-block pb-1">
              Fast Delivery
            </div>
          </div>
          <div className="text-center">
            <div className="font-montserrat font-bold text-[28px] text-[#F57C00] border-b-2 border-[#F57C00] inline-block pb-1">
              Expert Advice
            </div>
          </div>
          <div className="text-center">
            <div className="font-montserrat font-bold text-[28px] text-[#F57C00] border-b-2 border-[#F57C00] inline-block pb-1">
              Quality Assured
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}