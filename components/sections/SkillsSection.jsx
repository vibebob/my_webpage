'use client';

import { motion } from 'framer-motion';
import { MessageCircle, User, CheckCircle } from 'lucide-react';
import ChatMessage from '../ui/ChatMessage';
import SkillCard from '../ui/SkillCard';

export default function SkillsSection({ skills }) {
  const chatMessages = [
    { message: "공공사업 경험이 어느 정도인가요?", isOwn: false },
    { message: "✅ 정부/지자체 협력사업 5년 경험", isOwn: true },
    { message: "✅ 제안서 작성 및 입찰 성공 다수", isOwn: true },
    { message: "데이터 분석 능력은 어떠신가요?", isOwn: false },
    { message: "✅ AI 도구 활용 및 데이터 기반 의사결정", isOwn: true },
    { message: "✅ 디지털 플랫폼 비즈니스 모델 이해", isOwn: true },
    { message: "커뮤니케이션 능력은?", isOwn: false },
    { message: "✅ 다양한 이해관계자 대상 협상 경험", isOwn: true },
    { message: "✅ 프로젝트 전주기 관리 능력", isOwn: true },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            💬 실시간 Q&A
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            면접관과의 실시간 대화를 통해 핵심 역량을 확인해보세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* 채팅창 영역 */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-6 h-96 overflow-y-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="text-grip-red" size={20} />
              <span className="font-semibold text-gray-900">실시간 채팅</span>
            </div>
            
            <div className="space-y-4">
              {chatMessages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  message={msg.message}
                  isOwn={msg.isOwn}
                  delay={index * 0.3}
                />
              ))}
            </div>
          </motion.div>

          {/* 스킬 카드 영역 */}
          <div className="space-y-8">
            {/* 핵심 역량 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-grip-red" size={24} />
                핵심 역량
              </h3>
              <div className="grid gap-4">
                {skills.core.map((skill, index) => (
                  <SkillCard key={index} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </motion.div>

            {/* 기술 역량 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-accent-blue" size={24} />
                기술 역량
              </h3>
              <div className="grid gap-4">
                {skills.technical.map((skill, index) => (
                  <SkillCard key={index} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </motion.div>

            {/* 커뮤니케이션 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-success-green" size={24} />
                커뮤니케이션
              </h3>
              <div className="grid gap-4">
                {skills.communication.map((skill, index) => (
                  <SkillCard key={index} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 그립 이모티콘 */}
        <motion.div 
          className="text-center mt-12 text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💭
        </motion.div>
      </div>
    </section>
  );
}
