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
<<<<<<< HEAD
  Shield,
  Briefcase
=======
  Shield
>>>>>>> 499e8e803f0f996e3d423d586da336a6eb8bc0e8
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
<<<<<<< HEAD
        {/* Work Experience Hero Header */}
        <div className="text-center mb-16">
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-50 via-white to-blue-50 border border-emerald-200/50 shadow-xl rounded-2xl p-12">
            <div className="bg-emerald-100/50 p-4 rounded-xl inline-flex mb-6 shadow-lg">
              <Briefcase className="h-12 w-12 text-emerald-700" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent mb-6 leading-tight">
              Work Experience
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              A proven track record of excellence in international mathematics education
            </p>
          </Card>
        </div>

        <div className="text-center mb-12">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-gray-200 shadow-md rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">Professional Skills & Expertise</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive skill set cultivated through years of dedication to educational excellence and continuous professional growth
            </p>
          </Card>
=======
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set developed through years of educational leadership and innovation
          </p>
>>>>>>> 499e8e803f0f996e3d423d586da336a6eb8bc0e8
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