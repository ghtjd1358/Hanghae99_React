import { createClient } from "@supabase/supabase-js";

// 1) project url
const SUPABASE_PROJECT_URL = "https://uhbtfernylritqbdpmjr.supabase.co";

// 2) anon key
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoYnRmZXJueWxyaXRxYmRwbWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3MzE0NDUsImV4cCI6MjA0MDMwNzQ0NX0.XCdXSoGG9Ex8HyeAvWXnvuquFMDwIkFF5IDNO8ClIcM";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
export default supabase;