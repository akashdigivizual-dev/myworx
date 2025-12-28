/**
 * useContent - React hook for fetching content from CMS with caching and fallback
 * Usage: const { data, loading, error, fallback } = useContent('locations')
 */

import { useEffect, useState, useCallback, useRef } from 'react';
import { cms } from './cmsClient';

interface UseContentOptions {
  cacheTime?: number; // milliseconds
  enableFallback?: boolean;
  fallbackData?: any;
}

interface UseContentResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  fallback: boolean;
  refetch: () => Promise<void>;
}

// Simple in-memory cache
const cmsCache = new Map<string, { data: any; timestamp: number }>();

export function useContent<T = any>(
  contentType: 'locations' | 'services' | 'packages' | 'faqs' | 'testimonials' | 'global-settings',
  options: UseContentOptions = {}
): UseContentResult<T> {
  const { cacheTime = 5 * 60 * 1000, enableFallback = true, fallbackData = null } = options;

  const [data, setData] = useState<T | null>(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [fallback, setFallback] = useState(false);
  const isMountedRef = useRef(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setFallback(false);

      // Check cache
      const cached = cmsCache.get(contentType);
      if (cached && Date.now() - cached.timestamp < cacheTime) {
        if (isMountedRef.current) {
          setData(cached.data);
          setLoading(false);
        }
        return;
      }

      // Check CMS health
      const isHealthy = await cms.checkHealth();

      if (!isHealthy) {
        throw new Error('CMS is unavailable');
      }

      // Fetch content based on type
      let result;
      switch (contentType) {
        case 'locations':
          result = await cms.getLocations();
          break;
        case 'services':
          result = await cms.getServices();
          break;
        case 'packages':
          result = await cms.getPackages();
          break;
        case 'faqs':
          result = await cms.getFAQs();
          break;
        case 'testimonials':
          result = await cms.getTestimonials();
          break;
        case 'global-settings':
          result = await cms.getGlobalSettings();
          break;
        default:
          throw new Error(`Unknown content type: ${contentType}`);
      }

      // Cache the result
      cmsCache.set(contentType, {
        data: result,
        timestamp: Date.now(),
      });

      if (isMountedRef.current) {
        setData(result as T);
      }
    } catch (err) {
      console.error(`Error fetching ${contentType}:`, err);

      if (isMountedRef.current) {
        setError(err as Error);

        // Use fallback if available
        if (enableFallback && fallbackData) {
          setData(fallbackData);
          setFallback(true);
        } else {
          setData(null);
        }
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [contentType, cacheTime, enableFallback, fallbackData]);

  useEffect(() => {
    isMountedRef.current = true;
    fetchData();

    return () => {
      isMountedRef.current = false;
    };
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    fallback,
    refetch: fetchData,
  };
}

/**
 * useContentBySlug - Hook for fetching single content item by slug
 */
export function useContentBySlug<T = any>(
  contentType: 'locations' | 'services' | 'page-content',
  slug: string,
  options: UseContentOptions = {}
): UseContentResult<T> {
  const { cacheTime = 5 * 60 * 1000, enableFallback = true, fallbackData = null } = options;

  const [data, setData] = useState<T | null>(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [fallback, setFallback] = useState(false);
  const isMountedRef = useRef(true);

  const fetchData = useCallback(async () => {
    if (!slug) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setFallback(false);

      // Check cache
      const cacheKey = `${contentType}-${slug}`;
      const cached = cmsCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < cacheTime) {
        if (isMountedRef.current) {
          setData(cached.data);
          setLoading(false);
        }
        return;
      }

      // Check CMS health
      const isHealthy = await cms.checkHealth();
      if (!isHealthy) {
        throw new Error('CMS is unavailable');
      }

      // Fetch content
      let result;
      switch (contentType) {
        case 'locations':
          result = await cms.getLocationBySlug(slug);
          break;
        case 'services':
          result = await cms.getServiceBySlug(slug);
          break;
        case 'page-content':
          result = await cms.getPageContent(slug);
          break;
        default:
          throw new Error(`Unknown content type: ${contentType}`);
      }

      // Cache the result
      cmsCache.set(cacheKey, {
        data: result,
        timestamp: Date.now(),
      });

      if (isMountedRef.current) {
        setData(result as T);
      }
    } catch (err) {
      console.error(`Error fetching ${contentType} by slug ${slug}:`, err);

      if (isMountedRef.current) {
        setError(err as Error);

        if (enableFallback && fallbackData) {
          setData(fallbackData);
          setFallback(true);
        } else {
          setData(null);
        }
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [slug, contentType, cacheTime, enableFallback, fallbackData]);

  useEffect(() => {
    isMountedRef.current = true;
    fetchData();

    return () => {
      isMountedRef.current = false;
    };
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    fallback,
    refetch: fetchData,
  };
}

/**
 * Clear cache for testing/updates
 */
export function clearCMSCache() {
  cmsCache.clear();
}
