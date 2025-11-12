import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (password: string) => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mot de passe simple pour le moment (à changer en production)
    const ADMIN_PASSWORD = 'admin123';

    if (password === ADMIN_PASSWORD) {
      onLogin(password);
      setError('');
    } else {
      setError('Mot de passe incorrect');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <motion.div
          animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8 shadow-2xl"
        >
          {/* Lock icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="w-20 h-20 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <LockIcon className="text-yellow-500" size={40} />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Admin Panel
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Entrez le mot de passe pour accéder
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Mot de passe"
                className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-xl text-white focus:border-yellow-500 focus:outline-none transition-all pr-12"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-500 transition-colors"
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm text-center bg-red-500/10 border border-red-500/30 rounded-lg py-2"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition-all shadow-lg shadow-yellow-500/30"
            >
              Se connecter
            </motion.button>
          </form>

          {/* Helper text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 text-xs text-center mt-6"
          >
            Mot de passe par défaut : admin123
          </motion.p>
        </motion.div>

        {/* Back to home link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6"
        >
          <a
            href="/"
            className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
          >
            ← Retour à l'accueil
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
