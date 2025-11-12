import React from 'react';
import { motion } from 'framer-motion';

export function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      {/* Outer circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="#000000"
        stroke="#FFD700"
        strokeWidth="3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      />

      {/* Inner circle accent */}
      <motion.circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="#FFD700"
        strokeWidth="1"
        opacity="0.3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
      />

      {/* N letter */}
      <motion.text
        x="30"
        y="63"
        fill="#FFD700"
        fontSize="36"
        fontWeight="bold"
        fontFamily="monospace"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        N
      </motion.text>

      {/* B letter */}
      <motion.text
        x="56"
        y="63"
        fill="#FFFFFF"
        fontSize="36"
        fontWeight="bold"
        fontFamily="monospace"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        B
      </motion.text>

      {/* Code accent - top left */}
      <motion.text
        x="20"
        y="30"
        fill="#FFD700"
        fontSize="12"
        opacity="0.6"
        fontFamily="monospace"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        {'</>'}
      </motion.text>

      {/* Decorative dots */}
      <motion.circle
        cx="70"
        cy="30"
        r="2"
        fill="#FFD700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9 }}
      />
      <motion.circle
        cx="76"
        cy="30"
        r="2"
        fill="#FFD700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.0 }}
      />
      <motion.circle
        cx="73"
        cy="35"
        r="2"
        fill="#FFD700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1 }}
      />
    </motion.svg>
  );
}
