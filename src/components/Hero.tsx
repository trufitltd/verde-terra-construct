
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-overlay relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/90 to-charcoal/70"></div>
      <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
          <span className="text-gradient">Building Tomorrow</span>
          <span className="text-white"> With Strength Today</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Premier construction and engineering solutions for infrastructure, energy, healthcare, and mining projects worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-armygreen hover:bg-armygreen-light text-white px-8 py-6 text-lg">
            Our Services
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '25+', text: 'Years Experience' },
            { number: '500+', text: 'Projects Completed' },
            { number: '50+', text: 'Countries Served' },
            { number: '1000+', text: 'Team Members' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-armygreen">{stat.number}</p>
              <p className="text-sm text-gray-300">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
