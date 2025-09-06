# Supabase Setup Guide

## 1. Supabase 프로젝트 설정

1. [Supabase](https://supabase.com)에 가입하고 새 프로젝트를 생성합니다.
2. 프로젝트가 생성되면 Settings > API 에서 다음 정보를 복사합니다:
   - Project URL
   - anon public key

## 2. 환경 변수 설정

`.env.local` 파일을 열고 다음 값을 업데이트합니다:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_ADMIN_PASSWORD=admin123!@#  # 원하는 비밀번호로 변경
```

## 3. 데이터베이스 테이블 생성

Supabase 대시보드에서 SQL Editor를 열고 `supabase-schema.sql` 파일의 내용을 실행합니다.

또는 직접 SQL Editor에서 다음 쿼리를 실행:

```sql
-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id SERIAL PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(255) NOT NULL,
  contact_number VARCHAR(50) NOT NULL,
  email VARCHAR(255),
  consultation_time VARCHAR(255),
  inquiry_details TEXT NOT NULL,
  agreement BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add index for faster queries
CREATE INDEX idx_contact_inquiries_created_at ON contact_inquiries(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insert from anonymous users
CREATE POLICY "Allow anonymous inserts" ON contact_inquiries
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow select for all
CREATE POLICY "Allow select for all" ON contact_inquiries
  FOR SELECT
  USING (true);
```

## 4. 사용 방법

### 일반 사용자
- 메인 페이지 하단의 입력폼을 통해 문의를 제출할 수 있습니다.

### 관리자
- `/admin` 페이지로 이동
- 설정한 비밀번호 입력 (기본: `admin123!@#`)
- 접수된 문의 내역을 확인하고 관리할 수 있습니다.

## 보안 참고사항

- `.env.local` 파일은 절대 Git에 커밋하지 마세요.
- 프로덕션 환경에서는 더 강력한 비밀번호를 사용하세요.
- 필요시 Supabase의 Row Level Security를 더 엄격하게 설정할 수 있습니다.