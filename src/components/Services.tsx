
import { Building, Landmark, Building2, Hammer, Pickaxe, SunMedium, Stethoscope, HardHat } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Building,
    title: 'Building Construction',
    description: 'Commercial, residential, and industrial buildings constructed with precision and quality.',
    details: 'Our building construction services include commercial complexes, residential high-rises, industrial facilities, and institutional buildings. We employ modern construction techniques, sustainable materials, and adhere to international safety standards.',
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    icon: Landmark,
    title: 'Bridge Engineering',
    description: 'Design and construction of durable bridges connecting communities and facilitating transportation.',
    details: 'Our bridge engineering team specializes in suspension bridges, cable-stayed bridges, arch bridges, and beam bridges. We handle everything from structural analysis and design to construction management and maintenance planning.',
    image: "/assets/images/bridgeEng.jpg"
  },
  {
    icon: Building2,
    title: 'Dam Construction',
    description: 'Specialized dam projects engineered for safety, efficiency, and environmental sustainability.',
    details: 'We construct gravity dams, arch dams, and embankment dams with meticulous attention to hydraulic engineering principles. Our dam construction services include site investigation, design, construction, and post-construction monitoring.',
    image: "/assets/images/damConstruction.jpg"
  },
  {
    icon: Hammer,
    title: 'Railway Systems',
    description: 'Comprehensive railway infrastructure development from planning to implementation.',
    details: 'Our railway systems division handles track construction, signaling systems, electrification, station construction, and maintenance facilities. We build high-speed railways, metro systems, and conventional rail networks.',
    image: "/assets/images/railwaySyst.jpg"
  },
  {
    icon: Pickaxe,
    title: 'Mining Operations',
    description: 'Expert mining services with advanced technology and safety standards.',
    details: 'Trufit Limited provides comprehensive mining services including site assessment, infrastructure development, mineral extraction, processing plant construction, and environmental rehabilitation. We specialize in both open-pit and underground mining operations.',
    image: "/assets/images/miningOps.jpg"
  },
  {
    icon: SunMedium,
    title: 'Solar Installation',
    description: 'Renewable energy solutions with cutting-edge solar power technology.',
    details: 'Our solar installation services cover utility-scale solar farms, commercial rooftop systems, and residential installations. We handle system design, equipment procurement, installation, grid connection, and maintenance contracts.',
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276"
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Facilities',
    description: 'Specialized construction and management of modern healthcare facilities.',
    details: 'We design and build hospitals, clinics, research laboratories, and specialized treatment centers. Our healthcare construction team understands the unique requirements of medical facilities including sterile environments, specialized equipment installation, and patient-centered design.',
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
  },
  {
    icon: HardHat,
    title: 'Consulting Services',
    description: 'Strategic consulting for construction, infrastructure, and engineering projects.',
    details: 'Our consulting services provide expert guidance on project feasibility, risk assessment, procurement strategies, project management, and quality control. We leverage our extensive industry experience to help clients optimize project outcomes.',
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
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
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Trufit Limited provides comprehensive solutions across various industries, combining technical expertise with innovative approaches to deliver exceptional results.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With over 25 years of experience in construction and engineering, we offer specialized services tailored to meet the unique needs of our clients across different sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card bg-charcoal border-gray-800 overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-armygreen mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="mt-2">
                  <Button variant="link" className="text-armygreen p-0 h-auto hover:text-armygreen-light">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-charcoal rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Our Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-armygreen rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Industry-leading safety records with zero compromise</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-armygreen rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Sustainable practices prioritizing environmental responsibility</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-armygreen rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Advanced engineering techniques and innovative solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-armygreen rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Comprehensive project management from planning to completion</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Contact us to discuss how Trufit Limited can bring expertise and innovation to your next project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-armygreen hover:bg-armygreen-light text-white">
                  Request Quote
                </Button>
                <Button variant="outline" className="border-armygreen text-white hover:bg-armygreen">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
