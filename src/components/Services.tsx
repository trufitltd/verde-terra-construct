
import { Building, Landmark, Building2, Hammer, Pickaxe, SunMedium, Stethoscope, HardHat } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Building,
    title: 'Building Construction',
    description: 'Commercial, residential, and industrial buildings constructed with precision and quality.'
  },
  {
    icon: Landmark,
    title: 'Bridge Engineering',
    description: 'Design and construction of durable bridges connecting communities and facilitating transportation.'
  },
  {
    icon: Building2,
    title: 'Dam Construction',
    description: 'Specialized dam projects engineered for safety, efficiency, and environmental sustainability.'
  },
  {
    icon: Hammer,
    title: 'Railway Systems',
    description: 'Comprehensive railway infrastructure development from planning to implementation.'
  },
  {
    icon: Pickaxe,
    title: 'Mining Operations',
    description: 'Expert mining services with advanced technology and safety standards.'
  },
  {
    icon: SunMedium,
    title: 'Solar Installation',
    description: 'Renewable energy solutions with cutting-edge solar power technology.'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Facilities',
    description: 'Specialized construction and management of modern healthcare facilities.'
  },
  {
    icon: HardHat,
    title: 'Consulting Services',
    description: 'Strategic consulting for construction, infrastructure, and engineering projects.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-charcoal-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive solutions across various industries, combining technical expertise with innovative approaches to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <service.icon className="h-12 w-12 text-armygreen mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
