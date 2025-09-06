import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactFormData = {
  id?: number
  company_name: string
  contact_person: string
  contact_number: string
  email: string | null
  consultation_time: string | null
  inquiry_details: string
  agreement: boolean
  created_at?: string
}