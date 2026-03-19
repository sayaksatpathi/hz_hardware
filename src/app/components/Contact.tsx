import { useState } from 'react';
import { MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', phone: '', product: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-[36px] md:text-[44px] text-[#1C1C1C] mb-4">
            Get in Touch
          </h2>
          <p className="font-roboto text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
            Have questions or need a quote? We're here to help you with your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-montserrat font-medium text-sm text-[#1C1C1C] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 bg-[#F5F5F5] border border-transparent rounded-lg font-roboto text-[15px] focus:bg-white focus:border-[#1E88E5] focus:outline-none transition-all shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block font-montserrat font-medium text-sm text-[#1C1C1C] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 bg-[#F5F5F5] border border-transparent rounded-lg font-roboto text-[15px] focus:bg-white focus:border-[#1E88E5] focus:outline-none transition-all shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block font-montserrat font-medium text-sm text-[#1C1C1C] mb-2">
                  Product/Service Required
                </label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-[#F5F5F5] border border-transparent rounded-lg font-roboto text-[15px] focus:bg-white focus:border-[#1E88E5] focus:outline-none transition-all shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
                  placeholder="e.g., Paint, Power Tools, etc."
                />
              </div>

              <div>
                <label className="block font-montserrat font-medium text-sm text-[#1C1C1C] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent rounded-lg font-roboto text-[15px] focus:bg-white focus:border-[#1E88E5] focus:outline-none transition-all shadow-[0_1px_4px_rgba(0,0,0,0.06)] resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-[#F57C00] text-white rounded-lg font-montserrat font-semibold text-sm uppercase tracking-wider hover:scale-[1.02] hover:brightness-110 transition-all duration-150"
              >
                Request Quote
              </button>

              <div className="text-center pt-4">
                <p className="font-roboto text-sm text-[#757575] mb-3">
                  Or chat instantly on WhatsApp
                </p>
                <a
                  href="https://wa.me/91xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#25D366] text-white rounded-lg font-montserrat font-semibold text-sm hover:brightness-110 transition-all duration-150"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-[#E3F2FD] rounded-lg p-4 text-center">
                <p className="font-roboto text-sm text-[#1E88E5]">
                  ✓ We reply within 2 hours on WhatsApp
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-[#F5F5F5] rounded-xl p-6 space-y-4">
              <h3 className="font-montserrat font-semibold text-[20px] text-[#1C1C1C] mb-4">
                Visit Our Store
              </h3>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1E88E5] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-montserrat font-semibold text-sm text-[#1C1C1C] mb-1">
                    Address
                  </div>
                  <p className="font-roboto text-[15px] text-[#4A4A4A] leading-relaxed">
                    123 Hardware Street, Industrial Area<br />
                    Mumbai, Maharashtra - 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1E88E5] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-montserrat font-semibold text-sm text-[#1C1C1C] mb-1">
                    Phone
                  </div>
                  <p className="font-roboto text-[15px] text-[#4A4A4A]">
                    +91 xxxxx xxxxx<br />
                    +91 xxxxx xxxxx
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#1E88E5] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-montserrat font-semibold text-sm text-[#1C1C1C] mb-1">
                    Working Hours
                  </div>
                  <p className="font-roboto text-[15px] text-[#4A4A4A]">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}