import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon, StarIcon } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

// Placeholder testimonials (sera vide pour commencer)
const testimonials: Testimonial[] = [
  // Vide pour l'instant, prêt pour ajout futur
];

export function TestimonialsSectionNew() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl mb-6"
          >
            <QuoteIcon className="text-yellow-500" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Ce qu'ils </span>
            <span className="text-yellow-500">disent</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-yellow-500 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Retours d'expérience de clients et collègues avec qui j'ai eu le plaisir de collaborer
          </p>
        </motion.div>

        {testimonials.length > 0 ? (
          <>
            {/* Testimonial carousel */}
            <div className="relative min-h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-4xl mx-auto"
                >
                  <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/30 rounded-3xl p-8 md:p-12 relative">
                    {/* Quote icon decoration */}
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-8 right-8 text-yellow-500/20"
                    >
                      <QuoteIcon size={80} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            size={24}
                            className={
                              i < testimonials[currentIndex].rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-700'
                            }
                          />
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                        "{testimonials[currentIndex].content}"
                      </p>

                      {/* Author info */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                          {testimonials[currentIndex].avatar ? (
                            <img
                              src={testimonials[currentIndex].avatar}
                              alt={testimonials[currentIndex].name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-2xl font-bold text-yellow-500">
                              {testimonials[currentIndex].name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-gray-400">
                            {testimonials[currentIndex].role} @{' '}
                            {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              {testimonials.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="absolute left-0 md:-left-16 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 transition-colors"
                  >
                    <ChevronLeftIcon size={24} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="absolute right-0 md:-right-16 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 transition-colors"
                  >
                    <ChevronRightIcon size={24} />
                  </motion.button>
                </>
              )}
            </div>

            {/* Dots indicator */}
            {testimonials.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-yellow-500 w-8'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border-2 border-yellow-500/20 border-dashed rounded-3xl p-12 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <QuoteIcon className="text-yellow-500/30" size={80} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">Témoignages à venir</h3>
              <p className="text-gray-400 text-lg mb-8">
                Cette section sera bientôt remplie avec les retours de clients et collaborateurs
                satisfaits. Restons connectés !
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-500 font-medium"
              >
                Vous avez travaillé avec moi ? Partagez votre expérience !
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Vous souhaitez travailler ensemble ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition-all"
          >
            Discutons de votre projet
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
