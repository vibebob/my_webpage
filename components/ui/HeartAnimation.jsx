'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function HeartAnimation() {
  return (
    <motion.div
      className="absolute top-16 right-4 heart-animation"
      animate={{ 
        y: [0, -20, 0],
        scale: [1, 1.2, 1],
        opacity: [1, 0.8, 1]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Heart size={20} fill="currentColor" />
    </motion.div>
  );
}
