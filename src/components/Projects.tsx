
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from 'lucide-react';

const projectCategories = [
  'All',
  'Buildings',
  'Bridges',
  'Dams',
  'Railways',
  'Mining',
  'Solar',
  'Healthcare'
];

const projectsData = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'Buildings',
    location: 'Abuja, Nigeria',
    completionDate: 'January 2023',
    description: 'A 12-story modern office building featuring sustainable design elements and energy-efficient systems.',
    image: 'https://images.unsplash.com/photo-1486325825272-29683ddd5971'
  },
  {
    id: 2,
    title: 'Suspension Bridge',
    category: 'Bridges',
    location: 'Lagos, Nigeria',
    completionDate: 'March 2022',
    description: 'A 500-meter suspension bridge connecting two industrial zones and easing transportation.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df'
  },
  {
    id: 3,
    title: 'Hydroelectric Dam',
    category: 'Dams',
    location: 'Kainji, Nigeria',
    completionDate: 'November 2021',
    description: 'A major dam project with hydroelectric power generation capacity of 150MW.',
    image: 'https://images.unsplash.com/photo-1518032553888-29914859d773'
  },
  {
    id: 4,
    title: 'High-Speed Rail',
    category: 'Railways',
    location: 'Kaduna-Abuja, Nigeria',
    completionDate: 'August 2022',
    description: 'A modern rail system connecting major cities with high-speed trains and state-of-the-art stations.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3'
  },
  {
    id: 5,
    title: 'Copper Mining Facility',
    category: 'Mining',
    location: 'Jos, Nigeria',
    completionDate: 'May 2023',
    description: 'A comprehensive mining operation with processing facilities and environmental protection systems.',
    image: 'https://images.unsplash.com/photo-1518435435493-daef2a1847a4'
  },
  {
    id: 6,
    title: 'Solar Farm',
    category: 'Solar',
    location: 'Sokoto, Nigeria',
    completionDate: 'April 2023',
    description: '50MW solar power generation facility providing clean energy to surrounding communities.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276'
  },
  {
    id: 7,
    title: 'Medical Center',
    category: 'Healthcare',
    location: 'Port Harcourt, Nigeria',
    completionDate: 'February 2022',
    description: 'A state-of-the-art medical facility with specialized departments and advanced medical equipment.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3'
  },
  {
    id: 8,
    title: 'Residential Skyscraper',
    category: 'Buildings',
    location: 'Lagos, Nigeria',
    completionDate: 'December 2022',
    description: 'A luxury residential tower with 40 floors featuring modern amenities and smart home technology.',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f'
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  const toggleProjectDetails = (projectId: number) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <section id="projects" className="py-20 bg-charcoal-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Projects</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-4">
            Explore our diverse portfolio of successful projects across various sectors, demonstrating our expertise and commitment to excellence.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each project represents Trufit Limited's dedication to quality, innovation, and sustainable development practices.
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-charcoal mb-8">
            {projectCategories.map(category => (
              <TabsTrigger 
                key={category}
                value={category}
                onClick={() => setActiveTab(category)}
                className="data-[state=active]:bg-armygreen data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects.map((project, idx) => (
                <div key={project.id} className="project-card" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="bg-charcoal-light rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-bold text-lg">{project.title}</h3>
                        <Badge variant="outline" className="bg-armygreen bg-opacity-20 text-armygreen border-none">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{project.location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-400 text-sm mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{project.completionDate}</span>
                      </div>

                      {expandedProject === project.id && (
                        <p className="text-gray-300 text-sm my-3">
                          {project.description}
                        </p>
                      )}
                      
                      <Button 
                        variant="link" 
                        className="text-armygreen p-0 h-auto hover:text-armygreen-light"
                        onClick={() => toggleProjectDetails(project.id)}
                      >
                        {expandedProject === project.id ? 'Show Less' : 'View Details'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-armygreen text-white hover:bg-armygreen"
            onClick={() => window.open('/projects', '_self')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
