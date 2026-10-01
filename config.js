// Połączenie z Supabase (to samo, co w głównej stronie Dynasty 8).
// Wklej dane z: Supabase → Project Settings → API.
// UWAGA: klucz "anon" / "public" (NIGDY "service_role").
// Bezpieczeństwo zapewniają reguły RLS z pliku supabase.sql.
// Zostaw puste, aby używać generatora bez zapisu w bazie.
window.D8_CONFIG = {
  SUPABASE_URL: '',        // np. https://abcdefgh.supabase.co
  SUPABASE_ANON_KEY: ''    // długi klucz zaczynający się od eyJ...
};
