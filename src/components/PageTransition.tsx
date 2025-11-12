import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Check if user has seen the loading screen before
    const hasSeenLoading = localStorage.getItem('hasSeenLoading');

    if (hasSeenLoading === 'true') {
      // Skip loading if user has seen it before
      setIsLoading(false);
      return;
    }

    // Show skip button after 500ms
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 500);

    // Auto-hide loading after 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('hasSeenLoading', 'true');
    }, 2000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsLoading(false);
    localStorage.setItem('hasSeenLoading', 'true');
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
        >
          <div className="text-center relative">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto relative">
                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full"
                />

                {/* Inner circle */}
                <div className="absolute inset-4 bg-yellow-500/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-yellow-500">NB</span>
                </div>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-white">Nathan Berthaud</h2>
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 bg-yellow-500 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-yellow-500 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-yellow-500 rounded-full"
                />
              </div>
            </motion.div>

            {/* Skip button */}
            <AnimatePresence>
              {showSkip && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={handleSkip}
                  className="mt-8 px-6 py-2 border border-yellow-500/30 hover:border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 rounded-lg transition-all text-sm"
                  aria-label="Passer l'animation"
                >
                  Passer →
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
