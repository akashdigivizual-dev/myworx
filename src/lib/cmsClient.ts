/**
 * MyWorx CMS API Client
 * Handles all communication with Strapi backend
 * Usage: import { cms } from '@/lib/cmsClient'
 */

interface StrapiResponse<T> {
  data: T | T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiError {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: unknown;
  };
}

type ApiResponse<T> = StrapiResponse<T> | StrapiError;

const CMS_URL = import.meta.env.VITE_CMS_URL || 'http://localhost:1337';
const CMS_TOKEN = import.meta.env.VITE_CMS_TOKEN || '';

class CMSClient {
  private baseUrl: string;
  private token: string;

  constructor(baseUrl: string = CMS_URL, token: string = CMS_TOKEN) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
    this.token = token;
  }

  /**
   * Generic API request method
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/api${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`CMS API Error: ${endpoint}`, errorData);
        throw new Error(`API Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch ${endpoint}:`, error);
      throw error;
    }
  }

  /**
   * Format image URL from Strapi response
   */
  private getImageUrl(imageData: any): string {
    if (!imageData) return '';

    // Handle different Strapi image response formats
    if (typeof imageData === 'string') {
      return `${this.baseUrl}${imageData}`;
    }

    if (imageData.url) {
      return `${this.baseUrl}${imageData.url}`;
    }

    if (imageData.data?.attributes?.url) {
      return `${this.baseUrl}${imageData.data.attributes.url}`;
    }

    return '';
  }

  /**
   * Get global site settings
   */
  async getGlobalSettings() {
    const response = await this.request<StrapiResponse<any>>(
      '/global-setting?populate=*'
    );

    if ('error' in response) {
      console.error('Error fetching global settings:', response.error);
      return null;
    }

    const data = Array.isArray(response.data) ? response.data[0] : response.data;
    return data?.attributes || null;
  }

  /**
   * Get all locations with their packages
   */
  async getLocations() {
    const response = await this.request<StrapiResponse<any[]>>(
      '/locations?populate=*&pagination[pageSize]=100'
    );

    if ('error' in response) {
      console.error('Error fetching locations:', response.error);
      return [];
    }

    const locations = Array.isArray(response.data) ? response.data : [response.data];
    return locations.map((item) => ({
      id: item.id,
      ...item.attributes,
      image: this.getImageUrl(item.attributes.thumbnail),
      images: Array.isArray(item.attributes.images?.data)
        ? item.attributes.images.data.map((img: any) =>
            this.getImageUrl(img.attributes)
          )
        : [],
    }));
  }

  /**
   * Get single location by slug
   */
  async getLocationBySlug(slug: string) {
    const response = await this.request<StrapiResponse<any[]>>(
      `/locations?filters[slug][$eq]=${slug}&populate=*`
    );

    if ('error' in response) {
      console.error(`Error fetching location ${slug}:`, response.error);
      return null;
    }

    const data = Array.isArray(response.data) ? response.data[0] : response.data;
    if (!data) return null;

    return {
      id: data.id,
      ...data.attributes,
      image: this.getImageUrl(data.attributes.thumbnail),
      images: Array.isArray(data.attributes.images?.data)
        ? data.attributes.images.data.map((img: any) =>
            this.getImageUrl(img.attributes)
          )
        : [],
    };
  }

  /**
   * Get all packages/pricing plans
   */
  async getPackages(filters?: { location?: string; service?: string }) {
    let query = '/packages?populate=*';

    if (filters?.location) {
      query += `&filters[location][slug][$eq]=${filters.location}`;
    }

    if (filters?.service) {
      query += `&filters[service][$eq]=${filters.service}`;
    }

    const response = await this.request<StrapiResponse<any[]>>(query);

    if ('error' in response) {
      console.error('Error fetching packages:', response.error);
      return [];
    }

    const packages = Array.isArray(response.data) ? response.data : [response.data];
    return packages.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  }

  /**
   * Get all services
   */
  async getServices() {
    const response = await this.request<StrapiResponse<any[]>>(
      '/services?populate=*&pagination[pageSize]=100'
    );

    if ('error' in response) {
      console.error('Error fetching services:', response.error);
      return [];
    }

    const services = Array.isArray(response.data) ? response.data : [response.data];
    return services.map((item) => ({
      id: item.id,
      ...item.attributes,
      image: this.getImageUrl(item.attributes.image),
    }));
  }

  /**
   * Get single service by slug
   */
  async getServiceBySlug(slug: string) {
    const response = await this.request<StrapiResponse<any[]>>(
      `/services?filters[slug][$eq]=${slug}&populate=*`
    );

    if ('error' in response) {
      console.error(`Error fetching service ${slug}:`, response.error);
      return null;
    }

    const data = Array.isArray(response.data) ? response.data[0] : response.data;
    if (!data) return null;

    return {
      id: data.id,
      ...data.attributes,
      image: this.getImageUrl(data.attributes.image),
    };
  }

  /**
   * Get FAQs by category
   */
  async getFAQs(category?: string) {
    let query = '/faqs?populate=*&sort=order:asc';

    if (category) {
      query += `&filters[category][$eq]=${category}`;
    }

    const response = await this.request<StrapiResponse<any[]>>(query);

    if ('error' in response) {
      console.error('Error fetching FAQs:', response.error);
      return [];
    }

    const faqs = Array.isArray(response.data) ? response.data : [response.data];
    return faqs.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  }

  /**
   * Get all testimonials
   */
  async getTestimonials() {
    const response = await this.request<StrapiResponse<any[]>>(
      '/testimonials?populate=*&sort=position:asc'
    );

    if ('error' in response) {
      console.error('Error fetching testimonials:', response.error);
      return [];
    }

    const testimonials = Array.isArray(response.data) ? response.data : [response.data];
    return testimonials.map((item) => ({
      id: item.id,
      ...item.attributes,
      image: this.getImageUrl(item.attributes.image),
    }));
  }

  /**
   * Get page content by slug
   */
  async getPageContent(slug: string) {
    const response = await this.request<StrapiResponse<any[]>>(
      `/page-contents?filters[slug][$eq]=${slug}&populate[sections][populate]=*`
    );

    if ('error' in response) {
      console.error(`Error fetching page ${slug}:`, response.error);
      return null;
    }

    const data = Array.isArray(response.data) ? response.data[0] : response.data;
    if (!data) return null;

    return {
      id: data.id,
      ...data.attributes,
      sections: (data.attributes.sections || []).map((section: any) => ({
        ...section,
        image: section.image ? this.getImageUrl(section.image) : null,
      })),
    };
  }

  /**
   * Check CMS health/availability
   */
  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`, {
        method: 'GET',
      });
      return response.ok;
    } catch (error) {
      console.warn('CMS health check failed:', error);
      return false;
    }
  }

  /**
   * Get amenities
   */
  async getAmenities() {
    const response = await this.request<StrapiResponse<any[]>>(
      '/amenities?pagination[pageSize]=100'
    );

    if ('error' in response) {
      console.error('Error fetching amenities:', response.error);
      return [];
    }

    const amenities = Array.isArray(response.data) ? response.data : [response.data];
    return amenities.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  }
}

// Create singleton instance
export const cms = new CMSClient();

// For custom instances if needed
export default CMSClient;
