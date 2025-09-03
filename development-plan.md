# 동풍직구 랜딩페이지 개발 계획서

## 🎯 프로젝트 개요
- **프로젝트명**: 동풍직구 랜딩페이지
- **목적**: 중국 직구 및 수입 대행 서비스 소개 및 고객 유치
- **기술 스택**: 
  - **Frontend**: Next.js 15, TypeScript, Tailwind CSS
  - **UI Components**: Shadcn/ui, Lucide Icons
  - **Animation**: Framer Motion
  - **Backend**: Supabase (백엔드 필요시)
  - **Deployment**: Vercel

## 📋 주요 기능 요구사항

### 1. Hero Section
- 메인 헤더: "중국에서 한국까지, 모든 직구와 수입을 한 번에"
- 서브타이틀과 CTA 버튼 (견적요청, 서비스시작)
- 동풍직구 로고 활용
- 반응형 디자인

### 2. 서비스 소개 섹션
- **해외구매대행**: 구매→결제→발송 원스톱 서비스
- **배송대행**: DF-FORWARDER 창고 검수/재포장
- **특송서비스**: 웨이하이→한국 직항 루트 (75,000원/CBM)

### 3. 맞춤형 3PL 서비스
- 포장 갈이/보강
- 스티커 작업
- 소포장/선물포장
- 의류 미싱작업
- 상품 조립
- OEM/ODM 제작

### 4. 강점 소개
- 웨이하이 항만 기반 최단거리
- 창고 보관 무료
- 1:1 전담 관리팀
- 소량~대량 유연한 지원

### 5. 이용 방법 (Process Flow)
- Step 1: 구매/배송 신청
- Step 2: 견적/수수료 확인
- Step 3: 검수/포장 작업
- Step 4: 특송/해운 발송
- Step 5: 통관 및 국내 배송

### 6. CTA Section
- 견적 요청 폼 또는 버튼
- 카카오톡 문의 연결

## 🏗️ 기술 아키텍처

### Frontend (Next.js 15)
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServiceIntro.tsx
│   │   ├── CustomServices.tsx
│   │   ├── Advantages.tsx
│   │   ├── ProcessFlow.tsx
│   │   └── CTASection.tsx
│   └── ui/              # Shadcn/ui 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── tabs.tsx
│       ├── accordion.tsx
│       └── toast.tsx
├── lib/
│   ├── utils.ts        # cn() 유틸리티 함수
│   └── animations.ts   # Framer Motion 프리셋
├── hooks/
│   └── use-toast.ts
└── public/
    ├── logo.png
    └── images/
```

### Backend (Supabase - 필요시)
- **견적 요청 테이블**: 고객 정보, 요청 내용
- **문의 내역 관리**
- **이메일 알림 시스템**

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary Blue**: #0099CC (로고 기반)
- **Dark**: #333333 (텍스트)
- **Background**: #FFFFFF, #F8F9FA
- **Accent**: #FFB800 (CTA 버튼)

### 타이포그래피
- **Heading**: Pretendard Bold (한글), Inter Bold (영문)
- **Body**: Pretendard Regular, Inter Regular
- **크기**: Responsive (Mobile-first)

### 컴포넌트 스타일
- **카드**: Shadcn Card 컴포넌트 활용, 그림자 효과
- **버튼**: Shadcn Button variants (default, primary, outline, ghost)
- **아이콘**: Lucide Icons 통일 사용
- **애니메이션**: 
  - Framer Motion: 섹션 진입, 스크롤 애니메이션
  - Tailwind Animate: 호버, 트랜지션 효과

## 📱 반응형 디자인
- Mobile: 320px ~ 768px
- Tablet: 768px ~ 1024px
- Desktop: 1024px ~

## 🚀 개발 단계

### Phase 1: 프로젝트 초기화 (Day 1)
- [x] Next.js 15 프로젝트 생성
- [x] TypeScript, Tailwind CSS 설정
- [x] ESLint, Prettier 설정
- [x] 기본 폴더 구조 생성

### Phase 2: 컴포넌트 개발 (Day 2-3)
- [ ] Layout 컴포넌트 (Header, Footer)
- [ ] HeroSection 컴포넌트
- [ ] ServiceIntro 섹션
- [ ] CustomServices 섹션
- [ ] Advantages 섹션
- [ ] ProcessFlow 섹션
- [ ] CTASection 컴포넌트

### Phase 3: 기능 구현 (Day 4)
- [ ] 견적 요청 폼 (Supabase 연동)
- [ ] 카카오톡 채널 연결
- [ ] 스무스 스크롤
- [ ] 애니메이션 효과

### Phase 4: 최적화 (Day 5)
- [ ] SEO 메타태그
- [ ] 이미지 최적화
- [ ] 성능 최적화
- [ ] 접근성 개선

### Phase 5: 배포 (Day 6)
- [ ] Vercel 배포 설정
- [ ] 도메인 연결
- [ ] Analytics 설정
- [ ] 모니터링 설정

## 🔧 개발 환경 설정

### 필수 패키지
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@supabase/supabase-js": "^2.45.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "tailwind-merge": "^2.0.0",
    "clsx": "^2.0.0",
    "class-variance-authority": "^0.7.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-dropdown-menu": "^2.1.0",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-select": "^2.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### UI 라이브러리 설정

#### Shadcn/ui 설치
```bash
npx shadcn@latest init
# 다음 설정 선택:
# - TypeScript: Yes
# - Style: Default
# - Base color: Blue
# - CSS variables: Yes

# 필요한 컴포넌트 추가
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add tabs
npx shadcn@latest add accordion
npx shadcn@latest add toast
```

## 📊 성과 지표 (KPI)
- 페이지 로딩 속도: < 2초
- Lighthouse 점수: > 90
- 모바일 반응성: 100%
- 견적 요청 전환율: > 5%

## 🔐 보안 고려사항
- HTTPS 강제
- 입력 데이터 검증
- Rate Limiting
- CORS 설정
- 환경 변수 관리

## 📝 추가 고려사항
- 다국어 지원 (한국어/중국어) - 추후
- 실시간 채팅 위젯 - 추후
- 블로그/뉴스 섹션 - 추후
- 고객 후기 섹션 - 추후

## 🛠️ 개발 환경 구축 명령어

### 1. Next.js 15 프로젝트 생성
```bash
npx create-next-app@latest dongpung-landing --typescript --tailwind --app
cd dongpung-landing
```

### 2. Shadcn/ui 설치
```bash
npx shadcn@latest init
npx shadcn@latest add button card form input dialog tabs accordion toast
```

### 3. 추가 패키지 설치
```bash
npm install framer-motion lucide-react @supabase/supabase-js
npm install -D @types/node
```

### 4. 프로젝트 구조 생성
```bash
mkdir -p src/components/{layout,sections,ui}
mkdir -p src/lib src/hooks
mkdir -p public/images
```

## 🎯 즉시 시작 가능한 작업
1. Next.js 15 프로젝트 초기화 (위 명령어 실행)
2. Shadcn/ui 설정 및 컴포넌트 설치
3. 로고 파일 public 폴더로 이동
4. Tailwind CSS 테마 커스터마이징 (동풍직구 브랜드 컬러)
5. Hero Section 개발 시작

---
*이 계획서는 실제 개발 진행 중 조정될 수 있습니다.*