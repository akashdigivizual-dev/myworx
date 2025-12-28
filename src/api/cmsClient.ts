/**
 * CMS API Client
 * Handles all communication with Strapi backend
 */

const CMS_URL = import.meta.env.VITE_CMS_URL || 'http://localhost:1337';

interface FetchOptions {
  token?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, any>;
}

interface CMSResponse<T> {
  data: T | T[];
  meta?: any;
}

/**
 * Fetch page content by slug with all sections populated
 */
export const getPageContent = async (slug: string, options: FetchOptions = {}) => {
  const query = new URLSearchParams({
    'filters[slug][$eq]': slug,
    'populate': 'deep,3' // Populate 3 levels deep for nested components
  });

  try {
    const response = await fetch(`${CMS_URL}/api/page-contents?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.token && { 'Authorization': `Bearer ${options.token}` })
      }
    });

    if (!response.ok) {
      console.error(`CMS Error: HTTP ${response.status}`);
      return null;
    }

    const data: CMSResponse<any> = await response.json();
    return data.data && Array.isArray(data.data) ? data.data[0] : null;
  } catch (error) {
    console.error('Failed to fetch page content:', error);
    return null;
  }
};

/**
 * Fetch global settings (site name, logo, etc.)
 */
export const getGlobalSettings = async (options: FetchOptions = {}) => {
  try {
    const response = await fetch(`${CMS_URL}/api/global-settings?populate=*`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.token && { 'Authorization': `Bearer ${options.token}` })
      }
    });

    if (!response.ok) {
      console.error(`CMS Error: HTTP ${response.status}`);
      return null;
    }

    const data: CMSResponse<any> = await response.json();
    return data.data;
  } catch (error) {
    console.error('Failed to fetch global settings:', error);
    return null;
  }
};

/**
 * Fetch all locations
 */
export const getLocations = async (options: FetchOptions = {}) => {
  try {
    const response = await fetch(`${CMS_URL}/api/locations?populate=*`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.token && { 'Authorization': `Bearer ${options.token}` })
      }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data: CMSResponse<any> = await response.json();
    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.error('Failed to fetch locations:', error);
    return [];
  }
};

/**
 * Fetch all services
 */
export const getServices = async (options: FetchOptions = {}) => {
  try {
    const response = await fetch(`${CMS_URL}/api/services?populate=*`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.token && { 'Authorization': `Bearer ${options.token}` })
      }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data: CMSResponse<any> = await response.json();
    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return [];
  }
};

/**
 * Fetch all testimonials
 */
export const getTestimonials = async (options: FetchOptions = {}) => {
  try {
    const response = await fetch(`${CMS_URL}/api/testimonials?populate=*`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.token && { 'Authorization': `Bearer ${options.token}` })
      }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data: CMSResponse<any> = await response.json();
    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
    return [];
  }
};

/**
 * Fetch all FAQs
 */
export const getFAQs = async (options: FetchOptions = {}) => {
  try {
    const response = await fetch(`${CMS_URL}/api/faqs?populate=*`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.token && { 'Authorization': `Bearer ${options.token}` })
      }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data: CMSResponse<any> = await response.json();
    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.error('Failed to fetch FAQs:', error);
    return [];
  }
};

/**
 * Convert relative image paths to full URLs
 * Handles both absolute URLs and relative Strapi paths
 */
export const getImageUrl = (imageData: any): string => {
  if (!imageData) return '';

  // Handle different Strapi response formats
  const url = imageData.url || imageData.data?.attributes?.url || '';

  if (!url) return '';

  // If already absolute URL, return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Prepend CMS URL for relative paths
  return `${CMS_URL}${url}`;
};

/**
 * Get CMS health status
 */
export const checkCMSHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${CMS_URL}/api/health`);
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Generic API request handler
 */
export const apiRequest = async <T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T | null> => {
  try {
    const url = endpoint.startsWith('http') ? endpoint : `${CMS_URL}${endpoint}`;
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.token && { 'Authorization': `Bearer ${options.token}` })
      },
      ...(options.body && { body: JSON.stringify(options.body) })
    });

    if (!response.ok) {
      console.error(`API Error: HTTP ${response.status}`);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    return null;
  }
};

export default {
  getPageContent,
  getGlobalSettings,
  getLocations,
  getServices,
  getTestimonials,
  getFAQs,
  getImageUrl,
  checkCMSHealth,
  apiRequest
};
