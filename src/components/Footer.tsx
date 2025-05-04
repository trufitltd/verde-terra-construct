
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <img 
                src="/lovable-uploads/80743873-4df1-4fce-80b8-0f9690a4053f.png" 
                alt="Trufit Limited" 
                className="h-10" 
              />
              <h3 className="text-xl font-bold text-white">TRUFIT LIMITED</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Building a sustainable future through innovation, quality, and dedication to excellence in all our projects.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-armygreen mr-2 mt-1" />
                <p className="text-gray-400">No 12 Umaru Dikko Street, Off Ebitu Ikiwe Street, Jabi, Abuja</p>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-armygreen mr-2 mt-1" />
                <a href="mailto:info@trufitltd.com" className="text-gray-400 hover:text-armygreen">
                  info@trufitltd.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-armygreen mr-2 mt-1" />
                <div className="text-gray-400">
                  <p>+234 703 364 3027</p>
                  <p>+234 803 389 6895</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', link: '#home', onClick: () => scrollToSection('home') }, 
                { name: 'About Us', link: '#about', onClick: () => scrollToSection('about') }, 
                { name: 'Services', link: '#services', onClick: () => scrollToSection('services') }, 
                { name: 'Projects', link: '#projects', onClick: () => scrollToSection('projects') }, 
                { name: 'Contact Us', link: '#contact', onClick: () => scrollToSection('contact') }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-gray-400 hover:text-armygreen transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      link.onClick();
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Building Construction', link: '#services' }, 
                { name: 'Bridge Engineering', link: '#services' }, 
                { name: 'Dam Construction', link: '#services' }, 
                { name: 'Railway Systems', link: '#services' }, 
                { name: 'Mining Operations', link: '#services' }, 
                { name: 'Solar Installation', link: '#services' }
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.link} 
                    className="text-gray-400 hover:text-armygreen transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on our latest projects and industry insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-4 py-2 bg-charcoal border border-gray-700 rounded-l-md text-white focus:outline-none focus:border-armygreen"
              />
              <button className="bg-armygreen hover:bg-armygreen-light px-4 py-2 rounded-r-md text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Trufit Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
