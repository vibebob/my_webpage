'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, GraduationCap, ArrowLeft, Share, MoreVertical } from 'lucide-react';
import LiveBadge from '../ui/LiveBadge';
import HeartAnimation from '../ui/HeartAnimation';
import PhoneFrame from '../ui/PhoneFrame';

export default function HeroSection({ personal }) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden pt-20">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 text-6xl opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          🛍️
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 text-6xl opacity-10"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          📱
        </motion.div>
        <motion.div 
          className="absolute top-1/2 left-10 text-4xl opacity-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🎥
        </motion.div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 mt-8">
            공공사업 기획/운영 지원자 김도연 
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            지원자에게 궁금한 점이 있으신가요? 바로 라이브로 확인하세요! 
          </p>
        </motion.div>

        {/* 핸드폰 프레임 */}
        <PhoneFrame>
          {/* 라이브 방송 화면 */}
          <div className="relative h-full gradient-bg overflow-hidden">
            {/* 상단 네비게이션 */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-black/20 backdrop-blur-sm flex items-center justify-between px-4 z-30">
              <motion.button
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={16} className="text-white" />
              </motion.button>
              
              <div className="flex items-center gap-2">
                <LiveBadge />
                <span className="text-white text-xs font-medium">152명 시청 중</span>
              </div>
              
              <div className="flex items-center gap-2">
                <motion.button
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share size={16} className="text-white" />
                </motion.button>
                <motion.button
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MoreVertical size={16} className="text-white" />
                </motion.button>
              </div>
            </div>

            {/* 하트 애니메이션 */}
            <HeartAnimation />

            {/* 메인 콘텐츠 */}
            <div className="flex flex-col justify-center items-center h-full px-4 pt-12 pb-20">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {personal.name}
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-white/90 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {personal.title}
                </motion.p>
                
                <motion.p 
                  className="text-sm text-white/80 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  {personal.subtitle}
                </motion.p>

                {/* 연락처 정보 카드 */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-xs mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/90">
                      <Mail size={14} />
                      <span className="text-xs">{personal.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Phone size={14} />
                      <span className="text-xs">{personal.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <GraduationCap size={14} />
                      <span className="text-xs">{personal.contact.education}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* 하단 채팅/상호작용 영역 */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/20 backdrop-blur-sm flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <motion.button
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-lg">💬</span>
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-lg">🎁</span>
                </motion.button>
              </div>
              
              <motion.button
                className="px-6 py-2 bg-grip-red text-white rounded-full font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                채용하기
              </motion.button>
              
              <motion.button
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-white text-lg">❤️</span>
              </motion.button>
            </div>
          </div>
        </PhoneFrame>

        {/* 설명 텍스트 */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >

        </motion.div>
      </div>
    </section>
  );
}
