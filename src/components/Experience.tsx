import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'IGCSE | IBDP Teacher of Mathematics',
      company: 'Yew Chung International School',
      location: 'Chongqing, China',
      period: 'Aug 2023 - Present',
      type: 'Current Position',
      responsibilities: [
        'Delivering comprehensive instruction in IGCSE, AA, and AI IBDP Mathematics at both Standard and Higher Levels',
        'Conducting continuous assessment of student progress with meticulous record maintenance',
        'Developing differentiated instructional materials for diverse student needs',
        'Integrating technology effectively into teaching methodologies',
        'Collaborating with colleagues, parents, and students for supportive learning environment'
      ]
    },
    {
      title: 'IGCSE | IBDP Teacher of Mathematics',
      company: 'Sandford International School',
      location: 'Addis Ababa, Ethiopia',
      period: 'Aug 2021 - Jul 2023',
      type: 'Previous Role',
      responsibilities: [
        'Taught IGCSE, AA, and AI IBDP Mathematics at Standard and Higher levels',
        'Researched and integrated effective teaching aids for classroom engagement',
        'Contributed to extracurricular activities supporting volleyball and football teams',
        'Led parent-teacher conferences with detailed academic insights',
        'Conducted life skills training and stress management guidance'
      ]
    },
    {
      title: 'IGCSE | A-Level Teacher of Mathematics',
      company: 'British International School',
      location: 'Addis Ababa, Ethiopia',
      period: 'Sep 2019 - Jul 2021',
      type: 'Previous Role',
      responsibilities: [
        'Taught IGCSE and A-Level Mathematics focusing on student proficiency',
        'Conducted after-school remedial classes for critical thinking enhancement',
        'Implemented Think, Pair, Share strategy for conceptual understanding',
        'Coached students in regional Mathletics competition',
        'Introduced innovative teaching methods to curriculum'
      ]
    },
    {
      title: 'Lead Teacher & Mathematics Educator',
      company: 'Nairobi Home School',
      location: 'Nairobi, Kenya',
      period: 'Jan 2018 - Jul 2019',
      type: 'Leadership Role',
      responsibilities: [
        'Led development of mathematics curricula for multiple educational systems',
        'Directed recruitment and assessment of teaching staff',
        'Managed school operations and coordinated resources',
        'Implemented student welfare programs',
        'Taught Mathematics at IGCSE, IB, and A-Level'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Current Position': return 'bg-green-100 text-green-700';
      case 'Leadership Role': return 'bg-purple-100 text-purple-700';
      default: return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Extensive experience in international mathematics education across multiple curricula
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  </div>
                  <p className="text-lg text-blue-600 font-medium mb-2">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <Badge className={`${getTypeColor(exp.type)} mt-2 lg:mt-0`}>
                  {exp.type}
                </Badge>
              </div>
              
              <div className="space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{resp}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;