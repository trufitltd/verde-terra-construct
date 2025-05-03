
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    location: 'New York, USA'
  },
  {
    id: 2,
    title: 'Suspension Bridge',
    category: 'Bridges',
    location: 'San Francisco, USA'
  },
  {
    id: 3,
    title: 'Hydroelectric Dam',
    category: 'Dams',
    location: 'Quebec, Canada'
  },
  {
    id: 4,
    title: 'High-Speed Rail',
    category: 'Railways',
    location: 'Madrid, Spain'
  },
  {
    id: 5,
    title: 'Copper Mining Facility',
    category: 'Mining',
    location: 'Santiago, Chile'
  },
  {
    id: 6,
    title: 'Solar Farm',
    category: 'Solar',
    location: 'Dubai, UAE'
  },
  {
    id: 7,
    title: 'Medical Center',
    category: 'Healthcare',
    location: 'Berlin, Germany'
  },
  {
    id: 8,
    title: 'Residential Skyscraper',
    category: 'Buildings',
    location: 'Singapore'
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-charcoal-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Projects</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects across various sectors, demonstrating our expertise and commitment to excellence.
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
                  <div className="bg-charcoal-light rounded-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-charcoal to-armygreen-dark flex items-center justify-center">
                      <span className="text-white text-opacity-30">{project.category} Image</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold mb-1">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{project.location}</p>
                      <p className="text-armygreen text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button variant="outline" className="border-armygreen text-white hover:bg-armygreen">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
