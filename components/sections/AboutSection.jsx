'use client';

import { motion } from 'framer-motion';
import { Star, Package, TrendingUp, Users, Target, Zap } from 'lucide-react';

export default function AboutSection({ introduction, strengths }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📦 지원자 소개
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            부족함을 매울 수 있는 열정을 지닌 지원자를 소개합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* 상품 카드 */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* 상품 이미지 영역 */}
            <div className="h-64 bg-gradient-to-br from-grip-red via-grip-orange to-grip-pink relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">👨‍💼</div>
                  <h3 className="text-2xl font-bold">디지털 네이티브</h3>
                  <p className="text-lg opacity-90">공공사업 전문가</p>
                </div>
              </div>
              
              {/* 가격 태그 */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-bold">특별가</span>
              </div>
            </div>

            {/* 상품 정보 */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-yellow-400" size={20} fill="currentColor" />
                <Star className="text-yellow-400" size={20} fill="currentColor" />
                <Star className="text-yellow-400" size={20} fill="currentColor" />
                <Star className="text-yellow-400" size={20} fill="currentColor" />
                <Star className="text-yellow-400" size={20} fill="currentColor" />
                <span className="text-gray-600 ml-2">리뷰 5.0</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {introduction.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Package className="text-grip-red" size={20} />
                  <span className="text-gray-700">경력: 공공기관 + 스타트업</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-grip-orange" size={20} />
                  <span className="text-gray-700">특별가: AI/데이터 분석 능력 보유</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-grip-pink" size={20} />
                  <span className="text-gray-700">그립 상상협력팀 최적화</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {introduction.content}
              </p>

              {/* 구매 버튼 */}
              <motion.button
                className="w-full bg-gradient-to-r from-grip-red to-grip-orange text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🛒 지금 채용하기
              </motion.button>
            </div>
          </motion.div>

          {/* 강점 리스트 */}
          <div className="space-y-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-grip-red"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-grip-red/10 rounded-full p-3 flex-shrink-0">
                    {index === 0 && <Users className="text-grip-red" size={24} />}
                    {index === 1 && <Zap className="text-grip-red" size={24} />}
                    {index === 2 && <Target className="text-grip-red" size={24} />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {strength.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 그립 이모티콘들 */}
        <div className="flex justify-center gap-8 mt-16">
          <motion.div 
            className="text-4xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎯
          </motion.div>
          <motion.div 
            className="text-4xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            🚀
          </motion.div>
          <motion.div 
            className="text-4xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            💪
          </motion.div>
        </div>
      </div>
    </section>
  );
}
