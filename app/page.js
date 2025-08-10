'use client';

import { resumeData } from '../data/resume';
import HeroSection from '../components/sections/HeroSection';
import CareerSection from '../components/sections/CareerSection';
import SkillsSection from '../components/sections/SkillsSection';
import AboutSection from '../components/sections/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection personal={resumeData.personal} />
      <CareerSection careers={resumeData.careers} />
      <SkillsSection skills={resumeData.skills} />
      <AboutSection 
        introduction={resumeData.introduction} 
        strengths={resumeData.strengths} 
      />
      
      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <span className="text-2xl">🛍️</span>
            <span className="text-2xl">📱</span>
            <span className="text-2xl">🎥</span>
            <span className="text-2xl">💬</span>
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-gray-400 mb-4">
            그립컴퍼니 상상협력팀 지원을 위한 자기소개 페이지
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ for Grip
          </p>
        </div>
      </footer>
    </main>
  );
}
