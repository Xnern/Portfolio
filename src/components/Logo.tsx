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
      {/* Background circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="#000000"
        stroke="#FFD700"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      />

      {/* Character silhouette - body */}
      <motion.path
        d="M 50 35 Q 50 30 50 25 L 50 55"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Head */}
      <motion.circle
        cx="50"
        cy="22"
        r="10"
        fill="#FFFFFF"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      />

      {/* Hair - left side */}
      <motion.path
        d="M 42 18 Q 38 15 36 20 Q 35 25 38 28"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />

      {/* Hair - right side */}
      <motion.path
        d="M 58 18 Q 62 15 64 20 Q 65 25 62 28"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />

      {/* Hair - top */}
      <motion.path
        d="M 45 15 Q 50 12 55 15"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      />

      {/* Arms */}
      <motion.path
        d="M 50 40 L 35 50 M 50 40 L 65 50"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />

      {/* Legs */}
      <motion.path
        d="M 50 55 L 42 75 M 50 55 L 58 75"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      />
    </motion.svg>
  );
}
