import React from 'react';
import { 
  GraduationCap, Award, Users, Calendar, Download, ExternalLink, BookOpen,
  Star, Trophy, Target, Sparkles, TrendingUp, Clock, Building2, Heart, Lightbulb, Zap,
  Code, MessageCircle, FileText, Video, Coffee, Rocket, Shield, Brain, Puzzle, Compass, 
  Flag, Settings, BarChart, LineChart, CheckCircle, ArrowRight, MapPin, Globe
} from 'lucide-react';
import { Description } from '@radix-ui/react-toast';

// --- SHIM COMPONENTS ---

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  style?: React.CSSProperties;
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`rounded-xl sm:rounded-2xl border border-white/20 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] backdrop-blur-md bg-white/90 ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={`p-4 sm:p-6 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
  <h2 className={`text-xl sm:text-2xl font-bold ${className}`}>
    {children}
  </h2>
);

const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={`p-4 sm:p-6 ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<BadgeProps> = ({ children, className, variant, style }) => (
  <span
    className={`inline-flex items-center rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium ${className}`}
    style={style}
  >
    {children}
  </span>
);

const Button: React.FC<ButtonProps> = ({ children, className, variant, style, onClick }) => (
  <button
    className={`
      font-semibold rounded-lg sm:rounded-xl px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition duration-300 ease-in-out uppercase tracking-wider
      ${variant === 'outline' ? 'bg-transparent' : ''}
      ${className}
    `}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

// --- COLOR PALETTE ---

const COLORS = {
  BRONZE_LIGHT: '#A37B5C',
  BRONZE_DARK: '#5E4A35',
  BEIGE: '#d1ac92',
  FOREST_GREEN: '#6AA84F',
  CREAM: '#F5F1E8',
  GOLD: '#D4AF37',
};

// --- EDUCATION CARD COMPONENT ---

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, institution, location, year, description, index }) => (
  <div className="relative group">
    {/* Timeline connector */}
    {index === 0 && (
      <div className="absolute left-0 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-transparent via-transparent to-gray-200"></div>
    )}
    
    <div className="border-l-2 sm:border-l-4 pl-4 sm:pl-6 py-3 sm:py-4 relative hover:bg-gray-50 rounded-r-lg sm:rounded-r-xl transition-colors" 
         style={{ borderColor: COLORS.BRONZE_LIGHT }}>
      {/* Timeline dot */}
      <div className="absolute -left-2 sm:-left-3 top-4 sm:top-6 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 sm:border-4 border-white shadow-lg group-hover:scale-125 transition-transform" 
           style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
      
      {/* Year badge */}
      <div className="absolute -left-1 sm:-left-2 -top-1 sm:-top-2">
        <Badge className="text-white text-xs font-bold shadow-md" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
          <Calendar className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
          {year}
        </Badge>
      </div>

      <div className="flex items-start gap-2 sm:gap-3 mb-2">
        <div className="p-1.5 sm:p-2 rounded-full mt-1 group-hover:scale-110 transition-transform flex-shrink-0" 
             style={{ backgroundColor: `${COLORS.GOLD}20` }}>
          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: COLORS.GOLD }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base sm:text-lg mb-1 flex items-center gap-2 break-words" style={{ color: COLORS.BRONZE_DARK }}>
            <span className="break-words">{degree}</span>
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
          </h3>
          <p className="font-semibold text-sm sm:text-base flex items-center gap-2 break-words" style={{ color: COLORS.BRONZE_LIGHT }}>
            <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="break-words">{institution}</span>
          </p>
          <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2 mt-1 break-words">
            <MapPin className="h-3 w-3 flex-shrink-0" />
            <span>{location}</span>
          </p>
        </div>
      </div>
      
      <p className="text-gray-700 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed pl-8 sm:pl-11 break-words">{description}</p>
    </div>
  </div>
);

// --- ACTIVITY CARD COMPONENT ---

interface ActivityCardProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, organization, period, description }) => (
  <div className="border-l-2 sm:border-l-4 pl-4 sm:pl-6 py-3 sm:py-4 relative hover:bg-gray-50 rounded-r-lg sm:rounded-r-xl transition-colors group" 
       style={{ borderColor: COLORS.FOREST_GREEN }}>
    {/* Timeline dot */}
    <div className="absolute -left-2 sm:-left-3 top-4 sm:top-6 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 sm:border-4 border-white shadow-lg group-hover:scale-125 transition-transform" 
         style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
    
    <div className="flex items-start gap-2 sm:gap-3">
      <div className="p-1.5 sm:p-2 rounded-full mt-1 group-hover:scale-110 transition-transform flex-shrink-0" 
           style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
        <Users className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: COLORS.BRONZE_LIGHT }} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-sm sm:text-base mb-1 flex items-center gap-2 break-words" style={{ color: COLORS.BRONZE_DARK }}>
          <span className="break-words">{title}</span>
          <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.GOLD }} />
        </h3>
        <p className="font-medium text-xs sm:text-sm flex items-center gap-2 break-words" style={{ color: COLORS.BRONZE_LIGHT }}>
          <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="break-words">{organization}</span>
        </p>
        <Badge className="mt-2 text-white text-xs" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
          <Clock className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
          {period}
        </Badge>
        <p className="text-gray-700 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed break-words">{description}</p>
      </div>
    </div>
  </div>
);

// --- COURSE CARD COMPONENT ---

interface CourseCardProps {
  name: string;
  provider: string;
  date: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ name, provider, date }) => (
  <div 
    className="p-4 sm:p-5 border-2 rounded-lg sm:rounded-xl hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
    style={{ borderColor: COLORS.BRONZE_LIGHT }}
  >
    {/* Decorative corner */}
    <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 opacity-5 group-hover:opacity-10 transition-opacity" 
         style={{ background: `linear-gradient(135deg, transparent 50%, ${COLORS.BRONZE_LIGHT} 50%)` }}></div>
    
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-3 gap-2">
        <div className="p-1.5 sm:p-2 rounded-full group-hover:scale-110 transition-transform flex-shrink-0" 
             style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
          <Award className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: COLORS.BRONZE_LIGHT }} />
        </div>
        <Badge 
          className="text-white text-xs shadow-md flex-shrink-0"
          style={{ backgroundColor: COLORS.FOREST_GREEN }}
        >
          <Calendar className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
          <span className="hidden xs:inline">{date}</span>
          <span className="xs:hidden">{date.split(' ')[1]}</span>
        </Badge>
      </div>
      
      <h3 className="font-bold text-sm sm:text-base mb-2 group-hover:text-opacity-80 transition-colors break-words" style={{ color: COLORS.BRONZE_DARK }}>
        {name}
      </h3>
      <p className="text-xs sm:text-sm flex items-start gap-2 break-words" style={{ color: COLORS.BRONZE_LIGHT }}>
        <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
        <span className="break-words">{provider}</span>
      </p>
      
      {/* Hover indicator */}
      <div className="mt-3 flex items-center gap-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" 
           style={{ color: COLORS.FOREST_GREEN }}>
        <span>View Details</span>
        <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  </div>
);

// --- STATS CARD COMPONENT ---

interface StatsCardProps {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon: Icon, color }) => (
  <div className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-lg border-b-4 transition-all hover:scale-105 hover:shadow-2xl group"
       style={{ borderBottomColor: color }}>
    <div className="p-2 sm:p-3 rounded-full w-fit mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" 
         style={{ backgroundColor: `${color}20` }}>
      <Icon className="h-6 w-6 sm:h-8 sm:w-8" style={{ color }} />
    </div>
    <p className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: COLORS.BRONZE_DARK }}>
      {value}
    </p>
    <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</p>
  </div>
);

const Education = () => {
  const education = [
    {
      degree: "Masters in Education Arts",
      institution: "Liverpool John Moores University",
      location: "Liverpool, UK",
      year: "2026",
      description: "Pursuing a Master's in Education with a specialization in Leadership and Management to enhance Educational outcomes."
    },
    {
      degree: "Bachelor of Education Arts",
      institution: "University of Nairobi",
      location: "Nairobi, Kenya",
      year: "2018",
      description: "Earned a Bachelor of Education (Arts) with a specialization in Mathematics."
    }
  ];

  const courses = [
    { name: "CAT 3 IBDP MAA", provider: "International Baccalaureate Organisation", date: "Mar 2025" },
    { name: "CAT 2 IBDP MAA", provider: "International Baccalaureate Organisation", date: "Mar 2024" },
    { name: "Learn Today, Lead Tomorrow", provider: "Yew Chung Yew Wah Education Foundation", date: "Feb 2024" },
    { name: "YCYW Service Learning", provider: "Yew Chung International School Chongqing", date: "Mar 2024 - Present" },
    { name: "Additional Math (0606) PD", provider: "Cambridge International Examinations", date: "Jun 2022" },
    { name: "Technology and Online Learning", provider: "Edexcel Examinations Board", date: "Jul 2021" },
    { name: "Leadership Training on Tension Management", provider: "University of Nairobi", date: "Mar 2014" }
  ];

  const activities = [
    {
      title: "Model United Nations Faculty Advisor",
      organization: "Yew Chung International School",
      period: "Nov 2023 - Present",
      description: "Helping the club members under Model United Nation simulation engage and learn more about the principles of the United Nations, SustainableDevelopment Goals (SDG's) and how it functions thus giving them an opportunity to research and debate world issues and their sustainable solutions."
    },
    {
      title: "Secondary House Coordinator",
      organization: "YCIS Chongqing",
      period: "Aug 2024 - Present",
      description: [ " As the coordinator of Secondary House Activities, I am dedicated to ensuring that our house system effectively serves the interests of all community members while fostering an inclusive environment. By meticulously planning and organizing events, I aim to create opportunities for every member of our school to engage and participate fully   . ",
      
        
      ,,,"My focus is on promoting a sense of belonging and unity, ensuring that all voices are heard and respected. Through collaborative efforts and continuous improvement, I strive to enhance the overall experience within our community, making it a welcoming and supportive space for everyone"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ 
      background: `linear-gradient(135deg, ${COLORS.CREAM} 0%, ${COLORS.BEIGE} 50%, #f0e6d2 100%)`,
      backgroundAttachment: 'fixed'
    }}>
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full animate-pulse" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
        <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 rounded-full animate-pulse" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 sm:w-32 sm:h-32 rounded-full animate-pulse" style={{ backgroundColor: COLORS.GOLD }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Enhanced Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 relative px-4">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 sm:mb-6 shadow-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 animate-bounce">
              <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
              <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: COLORS.GOLD }} />
              <span className="break-words">Education & Development</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto" style={{ color: COLORS.BRONZE_LIGHT }}>
              Academic qualifications and professional development journey towards educational excellence
            </p>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-4 sm:mt-6">
              <div className="w-12 h-0.5 sm:w-16 sm:h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
              <Star className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: COLORS.GOLD }} />
              <div className="w-12 h-0.5 sm:w-16 sm:h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            <StatsCard value="2" label="Degrees" icon={GraduationCap} color={COLORS.BRONZE_LIGHT} />
            <StatsCard value="4+" label="Certifications" icon={Award} color={COLORS.FOREST_GREEN} />
            <StatsCard value="2" label="Active Roles" icon={Users} color={COLORS.GOLD} />
            <StatsCard value="10+" label="Years Learning" icon={TrendingUp} color={COLORS.BRONZE_DARK} />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Formal Education Card */}
            <Card className="bg-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center" style={{ color: COLORS.BRONZE_DARK }}>
                  <div className="p-2 sm:p-3 rounded-full mr-2 sm:mr-3 shadow-lg flex-shrink-0" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}>
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="break-words">Formal Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 sm:space-y-6">
                  {education.map((edu, index) => (
                    <EducationCard key={index} {...edu} index={index} />
                  ))}
                </div>
                
                {/* Achievement badge */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-dashed" style={{ borderColor: COLORS.GOLD, backgroundColor: `${COLORS.GOLD}10` }}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Trophy className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" style={{ color: COLORS.GOLD }} />
                    <div className="min-w-0">
                      <p className="font-bold text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Academic Excellence</p>
                      <p className="text-xs sm:text-sm text-gray-600 break-words">Specialized in Mathematics Education & Leadership</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Extra-Curricular Activities Card */}
            <Card className="bg-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center" style={{ color: COLORS.BRONZE_DARK }}>
                  <div className="p-2 sm:p-3 rounded-full mr-2 sm:mr-3 shadow-lg flex-shrink-0" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="break-words text-sm sm:text-xl">Extra-Curricular Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 sm:space-y-6">
                  {activities.map((activity, index) => (
                    <ActivityCard key={index} {...activity} />
                  ))}
                </div>

                {/* Impact badge */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-dashed" style={{ borderColor: COLORS.FOREST_GREEN, backgroundColor: `${COLORS.FOREST_GREEN}10` }}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                    <div className="min-w-0">
                      <p className="font-bold text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Community Impact</p>
                      <p className="text-xs sm:text-sm text-gray-600 break-words">Leading initiatives for student development & engagement</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Courses Section */}
          <Card className="mb-8 sm:mb-12 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full" 
                   style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
            </div>

            <CardHeader className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <CardTitle className="flex items-center" style={{ color: COLORS.BRONZE_DARK }}>
                  <div className="p-2 sm:p-3 rounded-full mr-2 sm:mr-3 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex-shrink-0">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="break-words text-base sm:text-2xl">Professional Courses & Certifications</span>
                </CardTitle>
                <Badge className="text-white shadow-md" style={{ backgroundColor: COLORS.BRONZE_DARK }}>
                  <CheckCircle className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="whitespace-nowrap">{courses.length} Completed</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Journey Timeline */}
          <Card className="mb-8 sm:mb-12 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full" style={{ backgroundColor: COLORS.GOLD }}></div>
            </div>

            <CardContent className="p-6 sm:p-8 relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 shadow-lg" 
                     style={{ background: `linear-gradient(135deg, $${COLORS.BRONZE_LIGHT},$$ {COLORS.FOREST_GREEN})` }}>
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-4 px-4" style={{ color: COLORS.BRONZE_DARK }}>
                  Continuous Learning Philosophy
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1" 
                     style={{ borderColor: `${COLORS.BRONZE_LIGHT}30`, backgroundColor: 'white' }}>
                  <div className="p-2 sm:p-3 rounded-full w-fit mx-auto mb-2 sm:mb-3" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
                    <Brain className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: COLORS.BRONZE_LIGHT }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: COLORS.BRONZE_DARK }}>Knowledge Seeker</h3>
                  <p className="text-xs sm:text-sm text-gray-700 break-words">Constantly pursuing new educational methodologies and best practices</p>
                </div>

                <div className="text-center p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1" 
                     style={{ borderColor: `${COLORS.FOREST_GREEN}30`, backgroundColor: 'white' }}>
                  <div className="p-2 sm:p-3 rounded-full w-fit mx-auto mb-2 sm:mb-3" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                    <Target className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: COLORS.FOREST_GREEN }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: COLORS.BRONZE_DARK }}>Skill Developer </h3>

<p className="text-xs sm:text-sm text-gray-700 break-words">Focusing on leadership, technology integration, and innovative teaching</p>
                </div>

                <div className="text-center p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 sm:col-span-2 lg:col-span-1" 
                     style={{ borderColor: `${COLORS.GOLD}30`, backgroundColor: 'white' }}>
                  <div className="p-2 sm:p-3 rounded-full w-fit mx-auto mb-2 sm:mb-3" style={{ backgroundColor: `${COLORS.GOLD}20` }}>
                    <Rocket className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: COLORS.GOLD }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: COLORS.BRONZE_DARK }}>Future Ready</h3>
                  <p className="text-xs sm:text-sm text-gray-700 break-words">Preparing for tomorrow's educational challenges today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-br from-white to-gray-50 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
            </div>

            <CardContent className="p-6 sm:p-8 md:p-12 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6 shadow-xl bg-gradient-to-br from-yellow-400 to-yellow-600">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4" style={{ color: COLORS.BRONZE_DARK }}>
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: COLORS.GOLD }} />
                <span className="break-words">Explore My Academic Journey</span>
              </h3>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4" style={{ color: COLORS.BRONZE_LIGHT }}>
                Discover my complete academic background, certifications, and professional development achievements that shape my educational philosophy.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
                <Button 
                  className="text-white hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl group w-full sm:w-auto"
                  style={{ backgroundColor: COLORS.BRONZE_DARK }}
                >
                  <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                  <span className="whitespace-nowrap">Download Transcripts</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center gap-2 border-2 hover:scale-105 transition-transform shadow-xl group bg-white w-full sm:w-auto"
                  style={{ borderColor: COLORS.FOREST_GREEN, color: COLORS.FOREST_GREEN }}
                >
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="whitespace-nowrap">View Certifications</span>
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>

              {/* Additional info */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
                <div className="flex items-center justify-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md">
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Verified Credentials</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md">
                  <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.BRONZE_LIGHT }} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">International Recognition</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;

