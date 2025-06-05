import { Skip } from '../types/skip';

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location';

export const fetchSkips = async (postcode: string, area?: string): Promise<Skip[]> => {
  try {
    const params = new URLSearchParams();
    params.append('postcode', postcode);
    if (area) params.append('area', area);
    
    const response = await fetch(`${API_URL}?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch skips: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching skips:', error);
    return [];
  }
};