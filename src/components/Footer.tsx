
import { Building } from 'lucide-react';

const Footer = () => {
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
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Projects', 'Careers', 'News & Updates', 'Contact Us'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-armygreen transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {['Building Construction', 'Bridge Engineering', 'Dam Construction', 'Railway Systems', 'Mining Operations', 'Solar Installation'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-armygreen transition-colors">
                    {service}
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
