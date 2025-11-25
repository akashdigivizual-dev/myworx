import React from 'react';
import { Users, Layout, Lightbulb } from 'lucide-react';

const Values: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 max-w-4xl">
          <h4 className="text-brand-orange font-bold tracking-widest text-sm mb-4 uppercase">Core Values</h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
            Dynamic Coworking Space Solutions for Modern Businesses.
          </h2>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            MyWorx offers innovative coworking space solutions designed for startups, freelancers, and enterprises. 
            Located in prime areas of Noida, our workspaces combine flexibility, functionality, and modern design. 
            With premium amenities like high-speed WiFi, ergonomic seating, and smart meeting rooms, we create an 
            inspiring environment that enhances productivity and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 text-brand-orange">
                    <Users size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Community</h3>
                <p className="text-gray-500 text-sm mb-8">
                    An environment that fosters collaboration, networking, and inspires innovation.
                </p>
                <div className="mt-auto w-full h-48 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" 
                        alt="Community" 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>

             {/* Card 2 */}
             <div className="flex flex-col bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 text-brand-orange">
                    <Layout size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Flexibility</h3>
                <p className="text-gray-500 text-sm mb-8">
                    Adaptable and scalable workspace solutions tailored to each client's unique needs.
                </p>
                <div className="mt-auto w-full h-48 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" 
                        alt="Flexibility" 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>

             {/* Card 3 */}
             <div className="flex flex-col bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 text-brand-orange">
                    <Lightbulb size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Innovation</h3>
                <p className="text-gray-500 text-sm mb-8">
                    A dynamic workspace that sparks creativity with premium amenities and an inspiring atmosphere.
                </p>
                <div className="mt-auto w-full h-48 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1604328727766-a151d1045ab4?q=80&w=800&auto=format&fit=crop" 
                        alt="Innovation" 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Values;