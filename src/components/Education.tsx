import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Masters in Education Arts',
      institution: 'Liverpool John Moores University',
      location: 'Liverpool, UK',
      year: '2026',
      status: 'In Progress',
      description: 'Pursuing a Master\'s in Education with a specialization in Leadership and Management to enhance Educational outcomes.'
    },
    {
      degree: 'Bachelor of Education Arts',
      institution: 'University of Nairobi',
      location: 'Nairobi, Kenya',
      year: '2018',
      status: 'Completed',
      description: 'Bachelors of Education (Arts), Specialized in Mathematics.'
    }
  ];

  const courses = [
    { name: 'CAT 3 IBDP MAA', provider: 'International Baccalaureate Organisation', date: 'Mar 2025' },
    { name: 'CAT 2 IBDP MAA', provider: 'International Baccalaureate Organisation', date: 'Mar 2024' },
    { name: 'Learn Today, Lead Tomorrow', provider: 'Yew Chung Yew Wah Education Foundation', date: 'Feb 2024' },
    { name: 'YCYW Service Learning', provider: 'Yew Chung International School Chongqing', date: 'Mar 2024 - Present' },
    { name: 'Additional Math (0606) PD', provider: 'Cambridge International Examinations', date: 'Jun 2022' },
    { name: 'Technology and Online Learning', provider: 'Edexcel Examinations Board', date: 'Jul 2021' }
  ];

  const activities = [
    {
      title: 'Model United Nations Faculty Advisor',
      organization: 'Yew Chung International School',
      location: 'Chongqing, China',
      period: 'Nov 2023 - Present',
      description: 'Helping club members engage in UN simulations, learning about UN principles, SDGs, and global issues.'
    },
    {
      title: 'Secondary House Coordinator',
      organization: 'YCIS Chongqing',
      location: 'Chongqing, China',
      period: 'Aug 2024 - Present',
      description: 'Coordinating house activities to foster inclusive environment and community engagement.'
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Development</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development in educational leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
              Formal Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                    <Badge className={edu.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}>
                      {edu.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Courses */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-blue-600" />
              Professional Courses
            </h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{course.name}</h4>
                  <p className="text-blue-600 text-sm mb-1">{course.provider}</p>
                  <p className="text-gray-600 text-xs">{course.date}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Extra-curricular Activities */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Leadership & Activities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h4>
                <p className="text-blue-600 font-medium mb-1">{activity.organization}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{activity.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;