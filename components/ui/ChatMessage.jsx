'use client';

import { motion } from 'framer-motion';

export default function ChatMessage({ message, isOwn = false, delay = 0 }) {
  return (
    <motion.div
      className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-3`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className={`${isOwn ? 'chat-bubble-own' : 'chat-bubble'}`}>
        <p className="text-sm">{message}</p>
      </div>
    </motion.div>
  );
}
