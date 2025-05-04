import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { 
      name: 'facebook',
      icon: <Facebook className="h-5 w-5" />,
      url: 'https://facebook.com/trufitlimited'
    },
    { 
      name: 'twitter',
      icon: <Twitter className="h-5 w-5" />,
      url: 'https://twitter.com/trufitlimited'
    },
    { 
      name: 'linkedin',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://linkedin.com/company/trufitlimited'
    },
    { 
      name: 'instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://instagram.com/trufitlimited'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contact Us</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, consultations, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <div className="bg-charcoal-light p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-armygreen h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-400">No 12 Umaru Dikko Street, Off Ebitu Ikiwe Street, Jabi, Abuja</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-armygreen h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-400">+234 703 364 3027</p>
                    <p className="text-gray-400">+234 803 389 6895</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-armygreen h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-400">info@trufitltd.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-armygreen h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Working Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-gray-400 hover:bg-armygreen hover:text-white transition-all"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
              
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-charcoal border-gray-700 text-white"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-charcoal border-gray-700 text-white"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-charcoal border-gray-700 text-white"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-charcoal border-gray-700 text-white min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-armygreen hover:bg-armygreen-light text-white">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;