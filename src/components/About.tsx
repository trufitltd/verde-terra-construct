
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">About Trufit Limited</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Founded in 1998, Trufit Limited has grown to become a leading name in construction and engineering services in Nigeria. With operations across the country and expanding into West Africa, we bring unmatched expertise to every project we undertake.
            </p>
            <p className="text-gray-300 mb-8">
              Our mission is to build sustainable infrastructure that serves communities while preserving the environment. We employ over 1,000 dedicated professionals who share our commitment to excellence, innovation, and integrity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Industry-leading safety records',
                'Sustainable construction practices',
                'Advanced engineering techniques',
                'Comprehensive project management'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-armygreen mr-2" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-armygreen hover:bg-armygreen-light text-white"
              onClick={() => {
                const servicesElement = document.getElementById('services');
                if (servicesElement) servicesElement.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Services
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                  alt="Trufit Limited Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
                  alt="Trufit Limited Construction Site" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                  alt="Trufit Limited Mining Operation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
                  alt="Trufit Limited Solar Installation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
