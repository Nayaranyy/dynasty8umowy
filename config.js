// Połączenie z Supabase (to samo, co w głównej stronie Dynasty 8).
// Wklej dane z: Supabase → Project Settings → API.
// UWAGA: klucz "anon" / "public" (NIGDY "service_role").
// Bezpieczeństwo zapewniają reguły RLS z pliku supabase.sql.
// Zostaw puste, aby używać generatora bez zapisu w bazie.
window.D8_CONFIG = {
  SUPABASE_URL: 'https://fslvnrkodobmorgcwfwh.supabase.co',        // np. https://abcdefgh.supabase.co
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzbHZucmtvZG9ibW9yZ2N3ZndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NzkwODgsImV4cCI6MjEwNjQ1NTA4OH0.jKSUGj4PMdS9sgyGEF2AXGP8FXVBJZNpwEHzVo5yEnk'    // długi klucz zaczynający się od eyJ...
};
