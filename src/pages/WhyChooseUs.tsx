import React from 'react';
import { Wifi, Monitor, Layout, Lock, Coffee, Gamepad2, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="w-12 h-12 text-primary" />,
    title: "High Speed Internet",
    description: "Stay connected with light speed internet service for seamless work and collaboration."
  },
  {
    icon: <Monitor className="w-12 h-12 text-primary" />,
    title: "Ergonomic Work Stations",
    description: "Expert curated work stations and furniture that don't hurt your back or work."
  },
  {
    icon: <Layout className="w-12 h-12 text-primary" />,
    title: "Modern Interiors",
    description: "Fully equipped meeting rooms perfect for collaboration and brainstorming."
  },
  {
    icon: <Lock className="w-12 h-12 text-primary" />,
    title: "Secure Access",
    description: "Get a safe workspace with 24/7 CCTV surveillance and only authorized access."
  },
  {
    icon: <Coffee className="w-12 h-12 text-primary" />,
    title: "Complimentary Beverages",
    description: "Refresh yourself with complimentary tea, coffee, and water throughout the day."
  },
  {
    icon: <Gamepad2 className="w-12 h-12 text-primary" />,
    title: "Recreational Centre",
    description: "Recharge yourself with fun games, activities, and networking opportunities."
  },
  {
    icon: <Sparkles className="w-12 h-12 text-primary" />,
    title: "Cleaning Service",
    description: "A clean and hygienic space makes work better. Daily cleaning protocols."
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "No Lock-In Period",
    description: "Scale your office space without worrying about rigid lease periods."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
            Beyond the DESK
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl">
            Best Coworking Space in Noida – Start Working Smarter Today
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 p-4 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-lg w-fit group-hover:from-primary/30 group-hover:to-orange-500/30 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-24 text-center">
          <button className="bg-primary hover:bg-orange-600 text-white py-3 md:py-4 px-8 md:px-12 font-bold uppercase tracking-widest text-xs md:text-sm rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50">
            Book Your Workspace Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
