
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">About Verde Terra</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Founded in 1998, Verde Terra has grown to become a global leader in construction and engineering services. With operations in over 50 countries, we bring unmatched expertise to every project we undertake.
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
            
            <Button className="bg-armygreen hover:bg-armygreen-light text-white">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48 bg-gray-700">
                {/* Placeholder for image 1 */}
                <div className="w-full h-full bg-gradient-to-br from-charcoal-light to-armygreen-dark flex items-center justify-center">
                  <span className="text-white text-opacity-30 text-lg">Building Image</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-700">
                {/* Placeholder for image 2 */}
                <div className="w-full h-full bg-gradient-to-tr from-charcoal-light to-armygreen-dark flex items-center justify-center">
                  <span className="text-white text-opacity-30 text-lg">Construction Image</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden h-64 bg-gray-700">
                {/* Placeholder for image 3 */}
                <div className="w-full h-full bg-gradient-to-bl from-charcoal-light to-armygreen-dark flex items-center justify-center">
                  <span className="text-white text-opacity-30 text-lg">Mining Image</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-48 bg-gray-700">
                {/* Placeholder for image 4 */}
                <div className="w-full h-full bg-gradient-to-tl from-charcoal-light to-armygreen-dark flex items-center justify-center">
                  <span className="text-white text-opacity-30 text-lg">Solar Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
