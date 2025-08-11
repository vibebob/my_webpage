'use client';

import { motion } from 'framer-motion';
import { Play, Calendar, Award } from 'lucide-react';

export default function CareerSection({ careers }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📺 지원자 경력을 소개합니다!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
  
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {careers.map((career, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* 썸네일 영역 */}
              <div className={`h-24 bg-gradient-to-r ${career.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl">🛍️</div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Play size={18} className="text-white" />
                  </div>
                </div>
                {/* 그립 앱 스타일 요소들 */}
                <div className="absolute bottom-2 left-3 flex items-center gap-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* 콘텐츠 영역 */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {career.company}
                  </h3>
                  <span className="bg-grip-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    {career.position}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">{career.period}</span>
                </div>

                <div className="space-y-3">
                  {career.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Award size={16} className="text-grip-orange mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* 그립 앱 이모티콘들 */}
        <motion.div 
          className="text-center mt-12 flex justify-center items-center gap-4 text-3xl"
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            🛍️
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            📱
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            🎥
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            💬
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
