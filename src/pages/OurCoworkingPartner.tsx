import React from 'react';
import { Award, Handshake, TrendingUp, Users, Globe, Target, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';

interface PartnerBenefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PartnerType {
  id: number;
  title: string;
  description: string;
  benefits: string[];
}

const OurCoworkingPartner: React.FC = () => {
  const partnerBenefits: PartnerBenefit[] = [
    {
      id: 1,
      title: "Revenue Sharing",
      description: "Competitive commission structure with transparent revenue sharing model",
      icon: <TrendingUp size={32} />
    },
    {
      id: 2,
      title: "Marketing Support",
      description: "Co-marketing initiatives, branded materials, and promotional support",
      icon: <Globe size={32} />
    },
    {
      id: 3,
      title: "Training & Resources",
      description: "Comprehensive training programs and resources for your team",
      icon: <Award size={32} />
    },
    {
      id: 4,
      title: "Dedicated Support",
      description: "Dedicated partner manager and 24/7 technical support",
      icon: <Users size={32} />
    },
    {
      id: 5,
      title: "Technology Platform",
      description: "Access to our advanced booking and management systems",
      icon: <Target size={32} />
    },
    {
      id: 6,
      title: "Brand Credibility",
      description: "Leverage Myworx's trusted brand and market presence",
      icon: <Handshake size={32} />
    }
  ];

  const partnerTypes: PartnerType[] = [
    {
      id: 1,
      title: "Corporate Partners",
      description: "For large organizations looking to provide coworking solutions to employees",
      benefits: [
        "Bulk membership discounts",
        "Dedicated account management",
        "Custom billing arrangements",
        "Priority booking for meeting rooms",
        "Team building event spaces",
        "White-label solutions available"
      ]
    },
    {
      id: 2,
      title: "Referral Partners",
      description: "Earn commissions by referring new members to our coworking spaces",
      benefits: [
        "Up to 10% commission per referral",
        "Lifetime referral tracking",
        "Marketing materials provided",
        "Monthly payouts",
        "Performance bonuses",
        "Exclusive partner portal"
      ]
    },
    {
      id: 3,
      title: "Location Partners",
      description: "Co-locate and operate coworking spaces together in new cities",
      benefits: [
        "Shared revenue model",
        "Operational support",
        "Brand presence in new markets",
        "Shared infrastructure costs",
        "Joint marketing campaigns",
        "Territory protection"
      ]
    },
    {
      id: 4,
      title: "Service Partners",
      description: "Provide complementary services within our coworking spaces",
      benefits: [
        "Access to diverse customer base",
        "Flexible service arrangements",
        "Cross-promotion opportunities",
        "Co-branded marketing",
        "Premium space allocation",
        "Revenue sharing options"
      ]
    }
  ];

  const successStories = [
    {
      id: 1,
      partner: "Tech Consultancy Pro",
      story: "Increased member base by 40% through partnership with Myworx referral program",
      growth: "+40%"
    },
    {
      id: 2,
      partner: "Enterprise Solutions Ltd",
      story: "Established Myworx memberships across 3 office locations for 200+ employees",
      growth: "200+ Users"
    },
    {
      id: 3,
      partner: "StartUp Accelerator Hub",
      story: "Partnered to provide dedicated workspace for 50+ portfolio companies",
      growth: "50+ Companies"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-black overflow-hidden">
        <img 
          alt="Our Coworking Partners" 
          className="w-full h-full object-cover opacity-50" 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
          <div className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <a href="/" className="text-primary hover:underline cursor-pointer">Home</a>
            <ChevronRight size={16} className="text-gray-400" />
            <span>Our Coworking Partner</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">Our Coworking Partners</h1>
        </div>
      </div>

      {/* Partnership Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
              <span className="text-gray-900">Grow Together with My</span><span style={{color: '#F39620'}}>worx</span>
            </h2>
            <p className="text-gray-600 text-lg text-center mb-8">
              Join our network of successful partners and expand your business with Myworx. We offer flexible partnership models designed to support your growth and success.
            </p>
            
            <div className="bg-white border-l-4 border-brand-orange rounded-lg p-8 mb-12">
              <p className="text-gray-900 font-semibold mb-2">Why Partner with Myworx?</p>
              <p className="text-gray-700">
                As a leading coworking provider in Noida with 1500+ seating capacity across 4 prime locations, we offer established market presence, proven operations, and a growing community of professionals and startups ready to benefit from partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Partnership Benefits
          </h2>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{color: '#F39620'}}>
            Access comprehensive support and resources to drive your partnership success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit) => (
              <div 
                key={benefit.id}
                className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex justify-center" style={{color: '#F39620'}}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Partnership Models
          </h2>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{color: '#F39620'}}>
            Choose the partnership model that works best for your business
          </p>

          <div className="space-y-8">
            {partnerTypes.map((partnerType) => (
              <div 
                key={partnerType.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white"
              >
                <div className="bg-gradient-to-r from-brand-orange to-orange-600 text-black p-8">
                  <h3  className="text-2xl font-bold mb-2">{partnerType.title}</h3>
                  <p style={{color: '#F39620'}}>{partnerType.description}</p>
                </div>
                
                <div className="p-8">
                  <h4 className="font-bold mb-6" style={{color: '#F39620'}}>Key Benefits:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {partnerType.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{color: '#F39620'}} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Partner Success Stories
          </h2>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto">
            See how our partners have grown and succeeded with <span className="text-gray-900">My</span><span style={{color: '#F39620'}}>worx</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div 
                key={story.id}
                className="bg-gray-50 rounded-lg p-8 border border-gray-200"
              >
                <div className="text-4xl font-bold mb-4" style={{color: '#F39620'}}>{story.growth}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{story.partner}</h3>
                <p className="text-gray-600 text-sm">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Myworx */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose <span className="text-gray-900">My</span><span style={{color: '#F39620'}}>worx</span> as Your Partner?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <Award size={24} className="flex-shrink-0 mt-1" style={{color: '#F39620'}} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Industry Experience</h3>
                  <p className="text-gray-600 text-sm">3+ years of proven operations in the coworking space with established credibility</p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <Users size={24} className="flex-shrink-0 mt-1" style={{color: '#F39620'}} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Large Community</h3>
                  <p className="text-gray-600 text-sm">Access to our diverse member base of professionals, startups, and enterprises</p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <TrendingUp size={24} className="flex-shrink-0 mt-1" style={{color: '#F39620'}} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Growth Potential</h3>
                  <p className="text-gray-600 text-sm">Proven business model with strong market demand and expansion opportunities</p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <Handshake size={24} className="flex-shrink-0 mt-1" style={{color: '#F39620'}} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">True Partnership</h3>
                  <p className="text-gray-600 text-sm">We invest in your success with ongoing support, training, and joint growth initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-orange to-orange-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-black max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg mb-8" style={{color: '#F39620'}}>
              Join our growing network of successful partners and unlock new opportunities for growth and revenue generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-brand-orange px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a 
                href="mailto:contact@myworx.in"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-brand-orange transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCoworkingPartner;
