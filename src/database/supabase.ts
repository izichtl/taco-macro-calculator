import {createClient} from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPA_URL as string
const supabaseKey: string =  process.env.SUPA_KEY as string
export const supabase = createClient(supabaseUrl, supabaseKey)

