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

-- Enable Row Level Security (optional but recommended)
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insert from anonymous users
CREATE POLICY "Allow anonymous inserts" ON contact_inquiries
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow select for authenticated users (admin)
CREATE POLICY "Allow select for all" ON contact_inquiries
  FOR SELECT
  USING (true);