/**
 * EXAMPLE: How to integrate CMS data with your React pages
 * This shows the pattern you'll follow for all pages
 * 
 * Copy this pattern to each page component
 */

import React, { useEffect, useState } from 'react';
import { getPageContent, getImageUrl } from '../api/cmsClient';

interface PageSection {
  __component: string;
  [key: string]: any;
}

interface PageData {
  attributes: {
    title: string;
    seoTitle: string;
    seoDescription: string;
    sections: PageSection[];
  };
}

const HomePageExample: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPageContent = async () => {
      try {
        setLoading(true);
        const data = await getPageContent('home'); // slug matches Strapi entry
        
        if (!data) {
          setError('Failed to load page content');
          setLoading(false);
          return;
        }

        setPageData(data);
        setError(null);
      } catch (err) {
        console.error('Error loading page:', err);
        setError('Failed to load page');
      } finally {
        setLoading(false);
      }
    };

    loadPageContent();
  }, []);

  // Handle loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error || !pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h1>
          <p className="text-gray-600">{error || 'Content not available'}</p>
          <p className="text-sm text-gray-400 mt-4">
            CMS may be temporarily unavailable. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const { sections } = pageData.attributes;

  return (
    <div className="bg-white">
      {/* Render sections dynamically based on component type */}
      {sections && sections.length > 0 ? (
        sections.map((section, index) => {
          switch (section.__component) {
            // Hero Section
            case 'shared.hero-section':
              return (
                <HeroSectionRenderer
                  key={index}
                  data={section}
                />
              );

            // Text Section
            case 'shared.text-section':
              return (
                <TextSectionRenderer
                  key={index}
                  data={section}
                />
              );

            // Card Grid (for features, benefits, etc.)
            case 'shared.card-grid':
              return (
                <CardGridRenderer
                  key={index}
                  data={section}
                />
              );

            // Testimonials Section
            case 'shared.testimonials-section':
              return (
                <TestimonialSectionRenderer
                  key={index}
                  data={section}
                />
              );

            // FAQ Section
            case 'shared.faq-section':
              return (
                <FAQSectionRenderer
                  key={index}
                  data={section}
                />
              );

            // CTA Section
            case 'shared.cta-section':
              return (
                <CTASectionRenderer
                  key={index}
                  data={section}
                />
              );

            // Image with Text
            case 'shared.image-with-text':
              return (
                <ImageWithTextRenderer
                  key={index}
                  data={section}
                />
              );

            default:
              console.warn(`Unknown component: ${section.__component}`);
              return null;
          }
        })
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No content available</p>
        </div>
      )}
    </div>
  );
};

/**
 * SECTION RENDERERS - These components render each Strapi section type
 */

// Hero Section Renderer
const HeroSectionRenderer: React.FC<{ data: PageSection }> = ({ data }) => {
  const backgroundImageUrl = getImageUrl(data.backgroundImage?.data?.attributes);

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full bg-black overflow-hidden">
      {backgroundImageUrl && (
        <img
          alt={data.title}
          className="w-full h-full object-cover opacity-50"
          src={backgroundImageUrl}
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">
          {data.title}
        </h1>
        {data.description && (
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto px-4">
            {data.description}
          </p>
        )}
        {data.ctaButton && data.ctaLink && (
          <a
            href={data.ctaLink}
            className="mt-8 px-8 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
          >
            {data.ctaButton}
          </a>
        )}
      </div>
    </div>
  );
};

// Text Section Renderer
const TextSectionRenderer: React.FC<{ data: PageSection }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {data.title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {data.title}
            </h2>
          )}
          {data.content && (
            <div className="prose prose-lg text-gray-600 mb-8">
              {data.content}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Card Grid Renderer
const CardGridRenderer: React.FC<{ data: PageSection }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {data.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {data.title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cards && Array.isArray(data.cards.data) && data.cards.data.map((card: any, idx: number) => (
            <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              {card.attributes.image?.data && (
                <img
                  src={getImageUrl(card.attributes.image.data.attributes)}
                  alt={card.attributes.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              {card.attributes.icon && (
                <div className="text-4xl mb-4">{card.attributes.icon}</div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.attributes.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {card.attributes.description}
              </p>
              {card.attributes.link && (
                <a href={card.attributes.link} className="text-brand-orange font-bold hover:underline">
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Section Renderer
const TestimonialSectionRenderer: React.FC<{ data: PageSection }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {data.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {data.title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.testimonials && Array.isArray(data.testimonials.data) && data.testimonials.data.map((testimonial: any, idx: number) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              {testimonial.attributes.clientImage?.data && (
                <img
                  src={getImageUrl(testimonial.attributes.clientImage.data.attributes)}
                  alt={testimonial.attributes.clientName}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
              )}
              <p className="text-gray-600 italic mb-4">"{testimonial.attributes.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">{testimonial.attributes.clientName}</p>
                  <p className="text-sm text-gray-500">{testimonial.attributes.clientTitle}</p>
                </div>
                {testimonial.attributes.rating && (
                  <div className="flex gap-1">
                    {[...Array(testimonial.attributes.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section Renderer
const FAQSectionRenderer: React.FC<{ data: PageSection }> = ({ data }) => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {data.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {data.title}
          </h2>
        )}
        <div className="space-y-4">
          {data.faqs && Array.isArray(data.faqs.data) && data.faqs.data.map((faq: any) => {
            const faqId = faq.id;
            const isExpanded = expandedId === faqId;

            return (
              <div
                key={faqId}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : faqId)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 text-left">
                    {faq.attributes.question}
                  </h3>
                  <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {isExpanded && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600">{faq.attributes.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// CTA Section Renderer
const CTASectionRenderer: React.FC<{ data: PageSection }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-orange to-orange-600">
      <div className="container mx-auto px-4 md:px-6 text-center text-white">
        {data.title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.title}
          </h2>
        )}
        {data.description && (
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
        {data.buttonText && data.buttonLink && (
          <a
            href={data.buttonLink}
            className="inline-block px-8 py-3 bg-white text-brand-orange font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {data.buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

// Image with Text Renderer
const ImageWithTextRenderer: React.FC<{ data: PageSection }> = ({ data }) => {
  const imageUrl = getImageUrl(data.image?.data?.attributes);
  const isImageLeft = data.imagePosition === 'left';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
          {imageUrl && (
            <div className="md:w-1/2">
              <img
                src={imageUrl}
                alt={data.title}
                className="w-full rounded-lg"
              />
            </div>
          )}
          <div className="md:w-1/2">
            {data.title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {data.title}
              </h2>
            )}
            {data.description && (
              <p className="text-gray-600 mb-6">
                {data.description}
              </p>
            )}
            {data.buttonText && data.buttonLink && (
              <a
                href={data.buttonLink}
                className="inline-block px-6 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
              >
                {data.buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageExample;
