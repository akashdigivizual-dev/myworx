import React from 'react';

const statsData = [
  { number: '3+', label: 'Years of Operations', desc: 'Spaces designed by experts to inspire your best work.' },
  { number: '4+', label: 'Prime Locations', desc: "Work at prime locations in Noida's dynamic business environment." },
  { number: '01', label: 'Main Cities', desc: "Work in Noida's top business hub, the center for growing enterprises." },
  { number: '1500+', label: 'Seating Capacity', desc: 'We offer flexible seating for individuals, startups, and teams to work efficiently.' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {statsData.map((stat, index) => (
            <div key={index} className={`pt-8 md:pt-0 ${index !== 0 ? 'md:pl-8' : ''}`}>
              <h3 className="text-5xl lg:text-6xl font-light text-brand-orange mb-4">{stat.number}</h3>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{stat.label}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;