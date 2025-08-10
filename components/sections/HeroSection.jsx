'use client';

import { motion } from 'framer-motion';
import { Eye, Mail, Phone, GraduationCap } from 'lucide-react';
import LiveBadge from '../ui/LiveBadge';
import HeartAnimation from '../ui/HeartAnimation';

export default function HeroSection({ personal }) {
  return (
    <section className="relative min-h-screen gradient-bg flex items-center justify-center text-white overflow-hidden">
      <HeartAnimation />
      
      {/* LIVE 배지와 시청자 수 */}
      <div className="absolute top-6 left-6 flex items-center gap-4">
        <LiveBadge />
        <motion.div 
          className="flex items-center gap-2 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Eye size={16} />
          <span className="text-sm font-medium">1,247명 시청 중</span>
        </motion.div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="text-center z-10 px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {personal.name}
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold mb-2 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {personal.title}
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-white/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {personal.subtitle}
        </motion.p>

        {/* 연락처 정보 */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/90">
              <Mail size={18} />
              <span className="text-sm">{personal.contact.email}</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Phone size={18} />
              <span className="text-sm">{personal.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <GraduationCap size={18} />
              <span className="text-sm">{personal.contact.education}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 그립 이모티콘들 */}
      <motion.div 
        className="absolute bottom-10 left-10 text-4xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🛍️
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 text-4xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        📱
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-20 text-3xl"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎥
      </motion.div>
    </section>
  );
}
