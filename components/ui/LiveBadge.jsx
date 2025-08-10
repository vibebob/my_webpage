'use client';

import { motion } from 'framer-motion';

export default function LiveBadge() {
  return (
    <motion.div
      className="live-badge inline-flex items-center gap-2"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      LIVE
    </motion.div>
  );
}
