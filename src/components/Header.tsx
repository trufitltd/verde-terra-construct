
import { useState, useEffect } from 'react';
import { Building, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-charcoal shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-white">
          <img 
            src="/lovable-uploads/80743873-4df1-4fce-80b8-0f9690a4053f.png" 
            alt="Trufit Limited" 
            className="h-10" 
          />
          <span className="text-xl font-bold">TRUFIT LIMITED</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm">
          {[
            { name: 'Home', link: '#home' },
            { name: 'Services', link: '#services' },
            { name: 'About', link: '#about' },
            { name: 'Projects', link: '#projects' },
            { name: 'Contact', link: '#contact' }
          ].map((item) => (
            <a 
              key={item.name}
              href={item.link}
              className="text-white hover:text-armygreen transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <Button 
          variant="outline" 
          className="hidden md:flex border-armygreen text-white hover:bg-armygreen"
          onClick={() => window.location.href = '#contact'}
        >
          Get a Quote
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-dark absolute w-full py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Home', link: '#home' },
                { name: 'Services', link: '#services' },
                { name: 'About', link: '#about' },
                { name: 'Projects', link: '#projects' },
                { name: 'Contact', link: '#contact' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.link}
                  className="text-gray-400 hover:text-armygreen transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-armygreen text-white hover:bg-armygreen"
                onClick={() => {
                  window.location.href = '#contact';
                  setMobileMenuOpen(false);
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
