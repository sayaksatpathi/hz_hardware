import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Excellent quality products and very helpful staff. They guided me through the entire paint selection process for my home renovation. The delivery was prompt and prices were competitive.",
      name: "Rajesh Kumar",
      location: "Mumbai",
      event: "Home Renovation",
      rating: 5
    },
    {
      id: 2,
      text: "As a contractor, I've been sourcing materials from HZ Hardware for over 5 years. Their bulk supply rates are unbeatable and they always have stock ready. Highly recommend for construction professionals.",
      name: "Priya Sharma",
      location: "Delhi",
      event: "Contractor Services",
      rating: 5
    },
    {
      id: 3,
      text: "Great experience! Needed some specific plumbing fittings urgently and they arranged it within hours. The WhatsApp support is very responsive. Will definitely come back for my next project.",
      name: "Amit Patel",
      location: "Pune",
      event: "Emergency Repair",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-[36px] md:text-[44px] text-[#1C1C1C] mb-4">
            Customer Reviews
          </h2>
          <p className="font-roboto text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-500 ${
                index === activeIndex ? 'ring-2 ring-[#1E88E5] shadow-[0_4px_20px_rgba(30,136,229,0.2)]' : ''
              }`}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F57C00] text-[#F57C00]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-roboto text-[14px] italic text-[#4A4A4A] leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="border-t border-[#E0E0E0] pt-4">
                <div className="font-montserrat font-semibold text-[15px] text-[#1C1C1C]">
                  {testimonial.name}
                </div>
                <div className="font-roboto text-[13px] text-[#757575]">
                  {testimonial.event} — {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - 1 Card with Carousel */}
        <div className="md:hidden mb-8">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === activeIndex ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F57C00] text-[#F57C00]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-roboto text-[14px] italic text-[#4A4A4A] leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="border-t border-[#E0E0E0] pt-4">
                    <div className="font-montserrat font-semibold text-[15px] text-[#1C1C1C]">
                      {testimonial.name}
                    </div>
                    <div className="font-roboto text-[13px] text-[#757575]">
                      {testimonial.event} — {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-[#F57C00] w-8'
                  : 'bg-[#E0E0E0] hover:bg-[#BDBDBD]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}