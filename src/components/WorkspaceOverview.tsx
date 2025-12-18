import React from 'react';

interface WorkspaceFeature {
  number: string;
  title: string;
  description: string;
}

const features: WorkspaceFeature[] = [
  {
    number: '01',
    title: 'Work',
    description: 'Artistically designed and well-lit office space that will boost your productivity.'
  },
  {
    number: '02',
    title: 'Chill',
    description: 'Take a well-deserved break from work and unwind in a premium office space.'
  },
  {
    number: '03',
    title: 'Network',
    description: 'Engage with other professionals and grow your network.'
  }
];

const WorkspaceOverview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-semibold text-lg mb-4">About MyWorx</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Work at the Best Coworking Space in Noida</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At <strong>MyWorx</strong>, we provide expertly designed work environments that rank among the <strong>best coworking space in Noida</strong>, perfect for individuals, entrepreneurs, and freelancers. Combining quality and innovation, we offer ready-to-move modern office setups. Enjoy comfortable, spacious workspaces in prime locations with excellent transport connectivity for a seamless and productive work experience.
            </p>
          </div>

          {/* Right Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <div className="text-4xl font-bold text-primary mb-2">{feature.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceOverview;
