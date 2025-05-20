import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://kzhbmjygrzjardgruunp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6aGJtanlncnpqYXJkZ3J1dW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NTI5MDMsImV4cCI6MjA2MzMyODkwM30.3Z-xjElKc24Iz6tqSkwsAKpcuFmeAihOqigi3cWtI5g';
export const supabase = createClient(supabaseUrl, supabaseKey);
