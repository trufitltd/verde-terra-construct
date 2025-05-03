
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
          <Building size={32} className="text-armygreen" />
          <span className="text-xl font-bold">VERDE TERRA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm">
          {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-armygreen transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <Button 
          variant="outline" 
          className="hidden md:flex border-armygreen text-white hover:bg-armygreen"
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
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-armygreen transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-armygreen text-white hover:bg-armygreen"
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
