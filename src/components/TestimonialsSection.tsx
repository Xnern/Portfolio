import React, { useEffect, useState } from 'react';
import { Testimonial } from '../utils/types';
import { getTestimonials } from '../utils/testimonialData';
import { QuoteIcon } from 'lucide-react';
export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  useEffect(() => {
    setTestimonials(getTestimonials());
  }, []);
  return <section id="testimonials" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Témoignages Clients</h2>
        <div className="w-20 h-1 bg-yellow-500 mb-12"></div>
        {testimonials.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-900 border border-gray-800 rounded-lg p-8 relative">
                <div className="absolute top-6 right-6 text-yellow-500/20">
                  <QuoteIcon size={42} />
                </div>
                <p className="text-gray-300 mb-6 relative z-10">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  {testimonial.imageUrl ? <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div> : <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4">
                      <span className="text-yellow-500 font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>}
                  <div>
                    <h4 className="font-semibold text-yellow-500">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>)}
          </div> : <div className="text-center py-12 bg-gray-900/30 rounded-lg">
            <p className="text-gray-400">Aucun témoignage pour le moment.</p>
          </div>}
      </div>
    </section>;
}