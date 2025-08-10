'use client';

import { motion } from 'framer-motion';
import { Play, Building2, Calendar, Award } from 'lucide-react';

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
            📺 방송 경력
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 플랫폼에서의 성공적인 방송 경험을 소개합니다
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
              <div className={`h-32 bg-gradient-to-r ${career.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 size={48} className="text-white" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Play size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* 콘텐츠 영역 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
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

                {/* 재생 버튼 */}
                <motion.button
                  className="mt-6 w-full bg-gradient-to-r from-grip-red to-grip-orange text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Play size={16} />
                    상세 보기
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 그립 이모티콘 */}
        <motion.div 
          className="text-center mt-12 text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎬
        </motion.div>
      </div>
    </section>
  );
}
