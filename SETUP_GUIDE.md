# 🚀 그립 지원 페이지 설정 가이드

## 다른 노트북에서 프로젝트 시작하기

### 1. 필수 소프트웨어 설치
- **Node.js**: https://nodejs.org/ (LTS 버전)
- **Git**: https://git-scm.com/
- **VS Code**: https://code.visualstudio.com/

### 2. 프로젝트 다운로드
```bash
git clone https://github.com/vibebob/my_webpage.git
cd my_webpage
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 또는 `http://localhost:3001` 확인

### 4. 개인 정보 수정
`data/resume.js` 파일에서 다음 정보를 실제 정보로 수정:

```javascript
personal: {
  name: "실제 이름", // [성명] → 실제 이름
  contact: {
    email: "실제이메일@example.com", // [이메일] → 실제 이메일
    phone: "010-1234-5678", // [전화번호] → 실제 전화번호
  }
},
careers: [
  {
    period: "2022.03 - 2024.03 (약 2년)", // 실제 기간으로 수정
  }
]
```

### 5. 주요 파일 구조
```
├── app/page.js              # 메인 페이지
├── data/resume.js           # 개인 정보 및 이력서 데이터
├── components/sections/     # 페이지 섹션들
│   ├── HeroSection.jsx      # 핸드폰 프레임 + 라이브 방송
│   ├── CareerSection.jsx    # 경력 섹션
│   ├── SkillsSection.jsx    # 스킬 섹션
│   └── AboutSection.jsx     # 자기소개 섹션
└── components/ui/           # 재사용 UI 컴포넌트
    ├── PhoneFrame.jsx       # 핸드폰 프레임
    ├── LiveBadge.jsx        # LIVE 배지
    └── ...
```

### 6. 커스터마이징 포인트
- **색상**: `tailwind.config.js`에서 그립 브랜드 컬러 수정
- **애니메이션**: `components/ui/` 폴더의 컴포넌트들
- **레이아웃**: `components/sections/` 폴더의 섹션들
- **텍스트**: `data/resume.js`에서 모든 텍스트 수정

### 7. 배포 준비
```bash
npm run build
npm run start
```

### 8. 문제 해결
- **포트 충돌**: 다른 포트 사용 (3001, 3002 등)
- **모듈 에러**: `npm install` 재실행
- **스타일 문제**: 브라우저 캐시 삭제

---
**Happy Coding! 🎉**
