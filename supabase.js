import { createClient } from '@supabase/supabase-js'

// Instantiate Supabase
const supabaseUrl = 'https://zztclykblpmhrjtkouyr.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
