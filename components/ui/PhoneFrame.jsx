'use client';

import { motion } from 'framer-motion';

export default function PhoneFrame({ children }) {
  return (
    <motion.div
      className="relative mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* 핸드폰 프레임 */}
      <div className="relative w-80 h-[600px] mx-auto">
        {/* 핸드폰 외곽선 */}
        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800">
          {/* 상단 노치 */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
          
          {/* 하단 홈 인디케이터 */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
          
          {/* 화면 영역 */}
          <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
            {/* 상태바 */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black text-white text-xs flex items-center justify-between px-6 z-20">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-white rounded-sm">
                  <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                </div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* 앱 콘텐츠 영역 */}
            <div className="absolute top-8 left-0 right-0 bottom-0">
              {children}
            </div>
          </div>
        </div>
        
        {/* 반사 효과 */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm"></div>
      </div>
    </motion.div>
  );
}
