import supabase from './supabase.js';

export async function fetchHeroImages() {
    const { data, error } = await supabase.storage.from('hero').list('');
    if (error) {
        console.error('Error fetching images:', error.message);
        return [];
    }
    return data.map(file => supabase.storage.from('hero').getPublicUrl(file.name).data.publicUrl);
}
