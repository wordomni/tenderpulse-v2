import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nniayuagwyqbkjfrikoj.supabase.co'

const supabaseKey = 'sb_publishable_9KDJtrZhxKf02k_dXh7a4g_9SqJ_PWA'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
