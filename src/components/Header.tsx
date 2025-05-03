
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

  const navigation = [
    { name: 'Home', link: '/#home' },
    { name: 'Services', link: '/#services' },
    { name: 'About', link: '/#about' },
    { name: 'Projects', link: '/#projects' },
    { name: 'Contact', link: '/#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('/#')) {
      e.preventDefault();
      const element = document.getElementById(link.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-charcoal shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <img 
            src="/lovable-uploads/80743873-4df1-4fce-80b8-0f9690a4053f.png" 
            alt="Trufit Limited" 
            className="h-10" 
          />
          <span className="text-xl font-bold">TRUFIT LIMITED</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm">
          {navigation.map((item) => (
            <a 
              key={item.name}
              href={item.link}
              className="text-white hover:text-armygreen transition-colors"
              onClick={(e) => handleNavClick(e, item.link)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <Button 
          variant="outline" 
          className="hidden md:flex border-armygreen text-white hover:bg-armygreen"
          onClick={() => {
            const contactElement = document.getElementById('contact');
            if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
          }}
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
              {navigation.map((item) => (
                <a 
                  key={item.name}
                  href={item.link}
                  className="text-gray-400 hover:text-armygreen transition-colors py-2"
                  onClick={(e) => handleNavClick(e, item.link)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-armygreen text-white hover:bg-armygreen"
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }
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
