import './globals.css'

export const metadata = {
  title: '그립컴퍼니 상상협력팀 지원 - 공공사업 전문가',
  description: '공공과 민간을 잇는 디지털 네이티브 사업기획자의 그립컴퍼니 지원 페이지입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-pretendard">
        {children}
      </body>
    </html>
  )
}
