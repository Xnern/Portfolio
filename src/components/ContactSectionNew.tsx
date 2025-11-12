import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  MapPinIcon,
  SendIcon,
  CheckCircleIcon,
} from 'lucide-react';

export function ContactSectionNew() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <MapPinIcon size={24} />,
      label: 'Localisation',
      value: 'Nancy, France',
    },
    {
      icon: <GithubIcon size={24} />,
      label: 'GitHub',
      value: 'Xnern',
      link: 'https://github.com/Xnern',
    },
    {
      icon: <LinkedinIcon size={24} />,
      label: 'LinkedIn',
      value: 'Nathan Berthaud',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 md:px-8 bg-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            <MailIcon className="text-yellow-500" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Travaillons </span>
            <span className="text-yellow-500">Ensemble</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-yellow-500 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un projet en tête ? Une question ? N'hésitez pas à me contacter, je serais ravi d'en
            discuter avec vous !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Contactez-moi
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Je suis actuellement ouvert aux opportunités de freelance et aux collaborations
                intéressantes. Que vous ayez un projet en tête ou simplement une question,
                n'hésitez pas à me contacter !
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-yellow-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.8 }}
              className="relative mt-12"
            >
              <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold text-yellow-500 mb-2">Disponible</h4>
                <p className="text-gray-400">Pour des projets freelance et collaborations</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-3xl p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nom
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-black border ${
                      errors.name ? 'border-red-500' : 'border-yellow-500/30'
                    } rounded-xl text-white focus:border-yellow-500 focus:outline-none transition-all`}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-black border ${
                      errors.email ? 'border-red-500' : 'border-yellow-500/30'
                    } rounded-xl text-white focus:border-yellow-500 focus:outline-none transition-all`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Sujet
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-black border ${
                      errors.subject ? 'border-red-500' : 'border-yellow-500/30'
                    } rounded-xl text-white focus:border-yellow-500 focus:outline-none transition-all`}
                    placeholder="Sujet de votre message"
                  />
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-black border ${
                      errors.message ? 'border-red-500' : 'border-yellow-500/30'
                    } rounded-xl text-white focus:border-yellow-500 focus:outline-none transition-all resize-none`}
                    placeholder="Votre message..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircleIcon size={24} />
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <SendIcon size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
