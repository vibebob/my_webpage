'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function SkillCard({ skill, delay = 0 }) {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 shadow-md border border-gray-200 card-hover"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center gap-3">
        <CheckCircle className="text-success-green flex-shrink-0" size={20} />
        <span className="text-gray-800 font-medium">{skill}</span>
      </div>
    </motion.div>
  );
}
