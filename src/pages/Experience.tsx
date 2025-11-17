import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, Calendar, Download, ExternalLink, Briefcase, 
  CheckCircle2, Award, TrendingUp, Users, BookOpen, Target,
  Sparkles, Clock, Globe, Building2, Star, Trophy,
  ArrowRight, FileText, Zap, Activity, GraduationCap
} from 'lucide-react';

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

const COLORS = {
  primary: '#A37B5C',
  secondary: '#5E4A35',
  background: '#d1ac92',
  lightBg: '#f5f1ed',
  success: '#4caf50',
} as const;

const experienceData = [
  {
    id: 1,
    title: "IGCSE | IBDP Teacher of Mathematics",
    company: "Yew Chung International School",
    location: "Chongqing, China",
    period: "Aug 2023 - Present",
    duration: "1+ years",
    status: "Current Position",
    type: "Full-time",
    icon: Star,
    color: COLORS.primary,
    responsibilities: [
      "Delivering comprehensive instruction in IGCSE, AA, and AI IBDP Mathematics at both Standard and Higher Levels",
      "Conducting continuous assessment of student progress, maintaining records per school requirements",
      "Developing differentiated instructional materials for diverse student needs",
      "Participating in curriculum development and review processes",
      "Integrating technology into teaching methodologies",
      "Collaborating with colleagues, parents, and students"
    ],
    achievements: ["IBDP Program", "Technology Integration", "Curriculum Development"]
  },
  {
    id: 2,
    title: "IGCSE | IBDP Teacher of Mathematics",
    company: "Sandford International School",
    location: "Addis Ababa, Ethiopia",
    period: "Aug 2021 - Jul 2023",
    duration: "2 years",
    type: "Full-time",
    icon: Trophy,
    color: COLORS.secondary,
    responsibilities: [
      "Taught IGCSE, AA, and AI IBDP Mathematics at Standard and Higher levels",
      "Researched and integrated effective teaching aids",
      "Supported school volleyball and football teams",
      "Led parent-teacher conferences",
      "Conducted life skills training during PHSE sessions",
      "Maintained communication with students and parents"
    ],
    achievements: ["Sports Coaching", "Parent Engagement", "Life Skills Training"]
  },
  {
    id: 3,
    title: "IGCSE | A-Level Teacher of Mathematics",
    company: "British International School",
    location: "Addis Ababa, Ethiopia",
    period: "Sep 2019 - Jul 2021",
    duration: "2 years",
    type: "Full-time",
    icon: Award,
    color: COLORS.primary,
    responsibilities: [
      "Taught IGCSE and A-Level Mathematics",
      "Conducted after-school remedial classes",
      "Implemented Think, Pair, Share strategy",
      "Coached students in regional 'Mathletics' competition",
      "Introduced innovative teaching methods"
    ],
    achievements: ["Mathletics Competition", "Innovative Methods", "Remedial Programs"]
  },
  {
    id: 4,
    title: "IGCSE | IBDP | A-Level Teacher & Lead Teacher",
    company: "Nairobi Home School",
    location: "Nairobi, Kenya",
    period: "Jan 2018 - Jul 2019",
    duration: "1.5 years",
    type: "Full-time • Leadership",
    icon: Target,
    color: COLORS.secondary,
    responsibilities: [
      "Led development of mathematics curricula for multiple systems",
      "Directed recruitment and assessment of teaching staff",
      "Taught Mathematics at IGCSE, IB, and A-Level",
      "Managed school operations",
      "Implemented student welfare programs"
    ],
    achievements: ["Leadership Role", "Staff Recruitment", "Multi-curriculum"]
  }
];

const statsData = [
  { icon: Clock, label: 'Years Experience', value: '10+', color: COLORS.primary },
  { icon: Building2, label: 'Institutions', value: '4+', color: COLORS.secondary },
  { icon: Globe, label: 'Countries', value: '3', color: COLORS.primary },
  { icon: Users, label: 'Students Taught', value: '1000+', color: COLORS.secondary },
];

const skillsData = [
  { name: "IGCSE Math", icon: BookOpen },
  { name: "IBDP Math", icon: GraduationCap },
  { name: "A-Level Math", icon: Award },
  { name: "Curriculum Design", icon: FileText },
  { name: "Educational Tech", icon: Zap },
  { name: "Leadership", icon: Target },
];

const highlightsData = [
  {
    icon: GraduationCap,
    title: "Multi-Curriculum Expert",
    description: "Proficient in IGCSE, IBDP (AA & AI), and A-Level Mathematics programs",
    bgColor: COLORS.primary,
  },
  {
    icon: Globe,
    title: "International Experience",
    description: "Taught in China, Ethiopia, and Kenya with diverse student populations",
    bgColor: COLORS.secondary,
  },
  {
    icon: Target,
    title: "Leadership & Innovation",
    description: "Led curriculum development and implemented innovative teaching strategies",
    bgColor: COLORS.primary,
  },
  {
    icon: Zap,
    title: "Technology Integration",
    description: "Successfully integrated modern educational technology into teaching",
    bgColor: COLORS.secondary,
  },
];

const trustIndicators = [
  "Verified Experience",
  "International Credentials",
  "Professional References",
];

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

const DecorativeBackground = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden">
    <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: COLORS.secondary }} />
    <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 rounded-full" style={{ backgroundColor: COLORS.primary }} />
    <div className="absolute top-1/3 right-1/4 w-20 h-20 sm:w-32 sm:h-32 rounded-full" style={{ backgroundColor: COLORS.secondary }} />
  </div>
);

const PageHeader = () => (
  <div className="text-center mb-8 sm:mb-12 px-4">
    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 sm:mb-6 shadow-lg bg-white">
      <Briefcase className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: COLORS.primary }} />
    </div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3" style={{ color: COLORS.secondary }}>
      <Activity className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: COLORS.primary }} />
      <span>Work Experience</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4" style={{ color: COLORS.secondary }}>
      A proven track record of excellence in international mathematics education
    </p>
  </div>
);

const StatCard = ({ icon: Icon, label, value, color }: typeof statsData[0]) => (
  <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
    <CardContent className="p-4 sm:p-6 text-center">
      <div className="flex justify-center mb-2 sm:mb-3" style={{ color }}>
        <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>
      <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: COLORS.secondary }}>
        {value}
      </div>
      <div className="text-xs font-medium leading-tight" style={{ color: COLORS.primary }}>
        {label}
      </div>
    </CardContent>
  </Card>
);

const SkillBadge = ({ name, icon: Icon }: typeof skillsData[0]) => (
  <Badge 
    className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
    style={{ backgroundColor: COLORS.secondary, color: 'white' }}
  >
    <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
    <span className="whitespace-nowrap">{name}</span>
  </Badge>
);

const TimelineDot = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-20">
    <div 
      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
      style={{ backgroundColor: color }}
    >
      <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
    </div>
  </div>
);

interface ExperienceCardProps {
  experience: typeof experienceData[0];
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const Icon = experience.icon;
  
  return (
    <div className="relative">
      <TimelineDot icon={Icon} color={experience.color} />
      
      <Card 
        className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 bg-white border-2 ${
          index % 2 === 0 ? 'lg:mr-[52%]' : 'lg:ml-[52%]'
        }`} 
        style={{ borderColor: experience.color }}
      >
        {/* Status Badge */}
        {experience.status && (
          <div className="absolute -top-2 sm:-top-3 right-2 sm:right-4 z-10">
            <Badge 
              className="px-2 py-0.5 sm:px-3 sm:py-1 flex items-center gap-1 shadow-md animate-pulse text-xs"
              style={{ backgroundColor: COLORS.success, color: 'white' }}
            >
              <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <span className="hidden xs:inline">{experience.status}</span>
              <span className="xs:hidden">Current</span>
            </Badge>
          </div>
        )}

        <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
          {/* Company Info */}
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 sm:p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: COLORS.lightBg }}>
              <Building2 className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: experience.color }} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-xs sm:text-sm truncate" style={{ color: experience.color }}>
                {experience.company}
              </h3>
              <span className="text-xs text-gray-500">{experience.type}</span>
            </div>
          </div>

          {/* Job Title */}
          <CardTitle className="text-lg sm:text-xl mb-3 flex items-start gap-2 leading-tight" style={{ color: COLORS.secondary }}>
            <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 sm:mt-1 flex-shrink-0" style={{ color: experience.color }} />
            <span className="break-words">{experience.title}</span>
          </CardTitle>
          
          {/* Meta Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 text-sm">
            <MetaItem icon={MapPin} text={experience.location} color={experience.color} />
            <MetaItem icon={Calendar} text={experience.period} color={experience.color} />
            <MetaItem icon={Clock} text={experience.duration} color={experience.color} />
          </div>

          {/* Achievement Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
            {experience.achievements.map((achievement, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="text-xs font-medium border-2 hover:scale-105 transition-transform whitespace-nowrap"
                style={{ borderColor: experience.color, color: experience.color }}
              >
                <CheckCircle2 className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>{achievement}</span>
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
          {/* Responsibilities */}
          <div className="flex items-center mb-3 sm:mb-4 pb-2 border-b" style={{ borderColor: COLORS.lightBg }}>
            <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 flex-shrink-0" style={{ color: experience.color }} />
            <h4 className="font-semibold text-xs sm:text-sm" style={{ color: COLORS.secondary }}>
              Key Responsibilities & Achievements
            </h4>
          </div>

          <ul className="space-y-2 sm:space-y-3">
            {experience.responsibilities.map((resp, respIndex) => (
              <li 
                key={respIndex} 
                className="flex items-start group hover:bg-gray-50 p-1.5 sm:p-2 rounded-lg transition-colors"
              >
                <div 
                  className="mt-1 sm:mt-1.5 mr-2 sm:mr-3 p-0.5 sm:p-1 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: COLORS.lightBg }}
                >
                  <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: experience.color }} />
                </div>
                <span className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">{resp}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const MetaItem = ({ icon: Icon, text, color }: { icon: any; text: string; color: string }) => (
  <div className="flex items-center p-1.5 sm:p-2 rounded-lg min-w-0" style={{ backgroundColor: COLORS.lightBg }}>
    <Icon className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color }} />
    <span className="text-xs sm:text-sm truncate" style={{ color: COLORS.secondary }}>{text}</span>
  </div>
);

const HighlightCard = ({ icon: Icon, title, description, bgColor }: typeof highlightsData[0]) => (
  <div className="flex items-start p-3 sm:p-4 rounded-xl hover:shadow-md transition-all" style={{ backgroundColor: COLORS.lightBg }}>
    <div className="p-2 sm:p-3 rounded-full mr-3 sm:mr-4 bg-white flex-shrink-0">
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: bgColor }} />
    </div>
    <div className="min-w-0 flex-1">
      <h4 className="font-semibold mb-1 text-sm sm:text-base break-words" style={{ color: COLORS.secondary }}>
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-gray-600 break-words">{description}</p>
    </div>
  </div>
);

const CareerHighlights = () => (
  <Card 
    className="mt-12 sm:mt-16 bg-gradient-to-br from-white to-gray-50 border-2 hover:shadow-2xl transition-all duration-300"
    style={{ borderColor: COLORS.primary }}
  >
    <CardHeader className="border-b px-4 sm:px-6 py-4 sm:py-6" style={{ borderColor: COLORS.lightBg }}>
      <CardTitle className="flex items-center text-xl sm:text-2xl" style={{ color: COLORS.secondary }}>
        <div className="p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: COLORS.lightBg }}>
          <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: COLORS.primary }} />
        </div>
        <span>Career Highlights</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6 pb-4 sm:pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {highlightsData.map((highlight, idx) => (
          <HighlightCard key={idx} {...highlight} />
        ))}
      </div>
    </CardContent>
  </Card>
);

const CTASection = () => (
  <Card 
    className="mt-8 sm:mt-12 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300 border-2"
    style={{ borderColor: COLORS.primary }}
  >
    <CardContent className="p-6 sm:p-8 md:p-10 text-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: COLORS.secondary }} />
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: COLORS.primary }} />
      </div>

      <div className="relative z-10">
        <div 
          className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6"
          style={{ backgroundColor: COLORS.lightBg }}
        >
          <FileText className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: COLORS.primary }} />
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4" style={{ color: COLORS.secondary }}>
          <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" style={{ color: COLORS.primary }} />
          <span className="break-words">Interested in My Professional Background?</span>
        </h3>
        
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4" style={{ color: COLORS.primary }}>
          Explore my complete work history, achievements, and educational philosophy. 
          Download my comprehensive CV or connect with my professional references.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
          <a href="/MAUTIA%20ELIUD%20RESUME.pdf" download className="inline-flex w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              style={{ backgroundColor: COLORS.primary }}
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="whitespace-nowrap">Download Full CV</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </Button>
          </a>
          
          <a href="/resources" className="inline-flex w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 hover:bg-opacity-10 transition-all hover:scale-105 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              style={{ borderColor: COLORS.secondary, color: COLORS.secondary }}
            >
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="whitespace-nowrap">View Resources</span>
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </Button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t px-4" style={{ borderColor: COLORS.lightBg }}>
          {trustIndicators.map((indicator, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: COLORS.success }} />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap" style={{ color: COLORS.secondary }}>
                {indicator}
              </span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const Experience = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.background }}>
      <div className="relative overflow-hidden">
        <DecorativeBackground />

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            <PageHeader />

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {statsData.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Skills Section */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
              {skillsData.map((skill, index) => (
                <SkillBadge key={index} {...skill} />
              ))}
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line - Hidden on mobile, visible on large screens */}
              <div 
                className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full" 
                style={{ backgroundColor: COLORS.primary, opacity: 0.3 }}
              />

              <div className="space-y-8 sm:space-y-12">
                {experienceData.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
              </div>
            </div>

            <CareerHighlights />
            <CTASection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
