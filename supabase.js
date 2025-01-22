// supabase.js
const supabaseUrl = 'https://bsdmeykcyqebmmgnawyt.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZG1leWtjeXFlYm1tZ25hd3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MzM3MjUsImV4cCI6MjA1MzEwOTcyNX0.zLGBQIRooJ1bIGCEjJ88aIVeLFJNe7D_ZfI3KpakhDs'; // Replace with your Anon Key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

export default supabase;
