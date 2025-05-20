import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://bscypztmkhtbxemdkuis.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzY3lwenRta2h0YnhlbWRrdWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NDYzNzksImV4cCI6MjA2MzMyMjM3OX0.3-_3c1mDYEet0R44-wT_1_3jB8G1Ul1UlG35vvaK-r0';
export const supabase = createClient(supabaseUrl, supabaseKey);
