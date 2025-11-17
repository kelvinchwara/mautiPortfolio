import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  BarChart3, 
  Lightbulb, 
  Users, 
  Brain, 
  Globe, 
  Zap, 
  BookOpen,
  Target,
  Puzzle,
  PenTool,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: MessageCircle,
      title: 'Communication Skills',
      skills: [
        'Efficient and Effective Verbal & Written Communication Skills',
        'Interpersonal Relations Skills'
      ],
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: BarChart3,
      title: 'Analytical Skills',
      skills: [
        'Analytical and Data Mining Skills',
        'Problem Solving and Decision Making Skills'
      ],
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Leadership',
      skills: [
        'Passionate, Innovative & Conflict Resolution Skills',
        'Leadership & Coaching Skills'
      ],
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Globe,
      title: 'Cultural Awareness',
      skills: [
        'Culturally Aware, Inclusive & Result Driven Skills',
        'Collaborative, Global Minded & Emotional Intelligence Skills'
      ],
      color: 'bg-orange-100 text-orange-700'
    },
    {
      icon: Zap,
      title: 'Growth & Technology',
      skills: [
        'Curious, Growth Oriented & Technology Integration Skills',
        'Life Long Learning, Skill Connectors Skills'
      ],
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: Target,
      title: 'Planning & Organization',
      skills: [
        'Open Minded, Reflective, Planning and Organisational Skills',
        'Adaptability and Resilience Skills'
      ],
      color: 'bg-gray-100 text-gray-700'
    },
    {
      icon: BookOpen,
      title: 'Educational Excellence',
      skills: [
        'Inquiry & Project Based Learning Skills',
        'Lesson Development, Curriculum Design & Planning Skills'
      ],
      color: 'bg-indigo-100 text-indigo-700'
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set developed through years of educational leadership and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${category.color} mr-3`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="block text-xs p-2 h-auto">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;