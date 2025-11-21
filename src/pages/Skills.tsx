import React from 'react';
import {
  MessageCircle, Brain, Users, Lightbulb, Target, BookOpen, Globe,
  Award, Monitor, Languages, Download, ExternalLink, CheckCircle, Star,
  Zap, Trophy, Heart, Rocket, Shield, Code, TrendingUp, Sparkles,
  BarChart, Settings, Compass, Flag, GraduationCap, ArrowRight,
  Briefcase, Coffee, Calendar, FileText, Video, Clock, Building2, Puzzle
} from 'lucide-react';

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
  style?: React.CSSProperties;
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
  <div className={`p-4 sm:p-5 md:p-6 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
  <h2 className={`text-lg sm:text-xl md:text-2xl font-bold ${className}`}>
    {children}
  </h2>
);

const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={`p-4 sm:p-5 md:p-6 ${className}`}>
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
      font-semibold rounded-lg sm:rounded-xl px-4 py-2 sm:px-6 sm:py-3 transition duration-300 ease-in-out uppercase tracking-wider text-sm sm:text-base
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



// --- COMPETENCY CARD COMPONENT ---

interface CompetencyCardProps {
  name: string;
  icon: React.ReactNode;
  index: number;
}

const CompetencyCard: React.FC<CompetencyCardProps> = ({ name, icon, index }) => {
  const colors = [COLORS.BRONZE_LIGHT, COLORS.FOREST_GREEN, COLORS.GOLD, COLORS.BRONZE_DARK];
  const color = colors[index % colors.length];

  return (
    <div
      className="flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
      style={{ borderColor: `${color}30` }}
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 opacity-0 group-hover:opacity-10 transition-opacity"
           style={{ background: `linear-gradient(135deg, transparent 50%, ${color} 50%)` }}></div>

      <div className="relative z-10 flex items-center w-full gap-2 sm:gap-3">
        <div className="p-2 sm:p-3 rounded-full group-hover:scale-110 transition-transform flex-shrink-0"
             style={{ backgroundColor: `${color}20` }}>
          <div style={{ color }}>{icon}</div>
        </div>
        <span className="text-xs sm:text-sm font-semibold flex-1 break-words" style={{ color: COLORS.BRONZE_DARK }}>{name}</span>
        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                     style={{ color }} />
      </div>
    </div>
  );
};

// --- LANGUAGE CARD COMPONENT ---

interface LanguageCardProps {
  name: string;
  level: string;
  flag: string;
  percentage: number;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ name, level, flag, percentage }) => (
  <div className="p-3 sm:p-4 bg-gradient-to-r from-white to-gray-50 rounded-lg sm:rounded-xl hover:shadow-lg transition-all group">
    <div className="flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-2">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform">{flag}</span>
        <span className="font-bold text-base sm:text-lg break-words" style={{ color: COLORS.BRONZE_DARK }}>{name}</span>
      </div>
      <Badge className="text-white shadow-md text-xs" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
        <Star className="h-3 w-3 mr-1" />
        {level}
      </Badge>
    </div>
    <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${percentage}%`, backgroundColor: COLORS.BRONZE_LIGHT }}
      ></div>
    </div>
  </div>
);

// --- TECH SKILL BADGE ---

interface TechSkillBadgeProps {
  tech: string;
  index: number;
}

const TechSkillBadge: React.FC<TechSkillBadgeProps> = ({ tech, index }) => {
  const icons = [Monitor, Code, Settings, Globe, BarChart];
  const Icon = icons[index % icons.length];
  
  return (
    <Badge 
      className="mr-2 mb-2 text-white hover:scale-110 transition-transform cursor-pointer shadow-md group text-xs"
      style={{ backgroundColor: COLORS.BRONZE_LIGHT }}
    >
      <Icon className="h-3 w-3 mr-1 group-hover:rotate-12 transition-transform flex-shrink-0" />
      <span className="break-words">{tech}</span>
    </Badge>
  );
};

// --- CERTIFICATION ITEM ---

interface CertificationItemProps {
  cert: string;
  index: number;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ cert, index }) => (
  <div className="flex items-center p-2 sm:p-3 border-l-4 rounded-r-lg hover:bg-gray-50 transition-colors group" 
       style={{ borderColor: COLORS.GOLD }}>
    <div className="p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 group-hover:scale-110 transition-transform flex-shrink-0" 
         style={{ backgroundColor: `${COLORS.GOLD}20` }}>
      <Trophy className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: COLORS.GOLD }} />
    </div>
    <span className="flex-1 text-xs sm:text-sm break-words" style={{ color: COLORS.BRONZE_DARK }}>{cert}</span>
    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" 
                 style={{ color: COLORS.FOREST_GREEN }} />
  </div>
);

// --- STATS CARD ---

interface StatsCardProps {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon: Icon, color }) => (
  <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-lg sm:rounded-xl shadow-lg border-b-4 transition-all hover:scale-105 hover:shadow-2xl group"
       style={{ borderBottomColor: color }}>
    <div className="p-2 sm:p-2.5 md:p-3 rounded-full w-fit mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" 
         style={{ backgroundColor: `${color}20` }}>
      <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" style={{ color }} />
    </div>
    <p className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-1" style={{ color: COLORS.BRONZE_DARK }}>
      {value}
    </p>
    <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider break-words">{label}</p>
  </div>
);

// --- SKILL CATEGORY CARD ---

interface SkillCategoryCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: string[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ title, description, icon: Icon, color, skills }) => (
  <Card className="bg-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full" style={{ backgroundColor: color }}></div>
    </div>

    <CardHeader className="relative z-10">
      <CardTitle className="flex items-center flex-wrap gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
        <div className="p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg flex-shrink-0" style={{ backgroundColor: color }}>
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
        </div>
        <span className="break-words">{title}</span>
      </CardTitle>
      <p className="text-xs sm:text-sm text-gray-600 mt-2">{description}</p>
    </CardHeader>
    
    <CardContent className="relative z-10">
      <div className="space-y-2">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color }} />
            <span className="text-xs sm:text-sm text-gray-700 break-words">{skill}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  const competencies = [
    { name: "Communication (Verbal & Written)", icon: <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Analytical Thinking & Data Mining", icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Innovation & Conflict Resolution", icon: <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Leadership & Coaching", icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Problem Solving & Decision Making", icon: <Target className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Cultural Awareness & Inclusivity", icon: <Globe className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Tech Integration & Growth Mindset", icon: <Monitor className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Lifelong Learning & Interpersonal Skills", icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Collaboration & Emotional Intelligence", icon: <Heart className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Planning, Reflection & Organization", icon: <Calendar className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Inquiry-Based & Project Learning", icon: <Compass className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Curriculum Design & Lesson Planning", icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5" /> }
  ];

  const languages = [
    { name: "English", level: "Fluent", flag: "🇺🇸", percentage: 100 },
    { name: "Swahili", level: "Fluent", flag: "🇰🇪", percentage: 100 },
    { name: "Mandarin", level: "Conversational", flag: "🇨🇳", percentage: 70 }
  ];

  const techSkills = [
    "Microsoft Office Suite", "Google Workspace", "Moodle & Google Classroom",
    "GeoGebra & Desmos", "Excel & SPSS"
  ];

  const certifications = [
    "IB DP AA & AI Workshops", "Cambridge IGCSE & A-Level Training",
    "Online Teaching Practices Certificate", "First Aid & CPR"
  ];

  const education = [
    "M.Ed., University of Liverpool John Moores", "B.Ed., Nairobi"
  ];

  const teachingSkills = [
    "Differentiated Instruction",
    "Assessment & Evaluation",
    "Classroom Management",
    "Student Engagement Strategies"
  ];

  const leadershipSkills = [
    "Team Building & Mentoring",
    "Strategic Planning",
    "Change Management",
    "Professional Development"
  ];

  const technicalSkills = [
    "Learning Management Systems",
    "Data Analysis & Reporting",
    "Digital Content Creation",
    "Educational Technology Integration"
  ];

  return (
    <div className="min-h-screen relative" style={{ 
      background: `linear-gradient(135deg, ${COLORS.CREAM} 0%, ${COLORS.BEIGE} 50%, #f0e6d2 100%)`,
      backgroundAttachment: 'fixed'
    }}>
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full animate-pulse" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
        <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-28 h-28 sm:w-48 sm:h-48 rounded-full animate-pulse" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-32 sm:h-32 rounded-full animate-pulse" style={{ backgroundColor: COLORS.GOLD }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Enhanced Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 relative px-2 sm:px-4">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-4 sm:mb-5 md:mb-6 shadow-2xl bg-gradient-to-br from-blue-400 to-blue-600 animate-bounce">
              <Brain className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 flex-shrink-0" style={{ color: COLORS.GOLD }} />
              <span className="break-words">Professional Skills & Expertise</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: COLORS.BRONZE_LIGHT }}>
              Comprehensive skill set cultivated through years of dedication to educational excellence and continuous professional growth
            </p>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
              <div className="w-12 h-1 sm:w-16 sm:h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: COLORS.GOLD }} />
              <div className="w-12 h-1 sm:w-16 sm:h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            <StatsCard value="12+" label="Core Skills" icon={Target} color={COLORS.BRONZE_LIGHT} />
            <StatsCard value="3" label="Languages" icon={Languages} color={COLORS.FOREST_GREEN} />
            <StatsCard value="5+" label="Tech Tools" icon={Monitor} color={COLORS.GOLD} />
            <StatsCard value="4+" label="Certifications" icon={Award} color={COLORS.BRONZE_DARK} />
          </div>

          {/* Skill Categories Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            <SkillCategoryCard
              title="Teaching Excellence"
              description="Core pedagogical competencies"
              icon={BookOpen}
              color={COLORS.BRONZE_LIGHT}
              skills={teachingSkills}
            />
            <SkillCategoryCard
              title="Leadership & Management"
              description="Guiding teams to success"
              icon={Users}
              color={COLORS.FOREST_GREEN}
              skills={leadershipSkills}
            />
            <SkillCategoryCard
              title="Technical Proficiency"
              description="Modern educational tools"
              icon={Monitor}
              color={COLORS.GOLD}
              skills={technicalSkills}
            />
          </div>

          {/* Key Competencies - Enhanced */}
          <Card className="mb-8 sm:mb-10 md:mb-12 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full" 
                   style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
            </div>

            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
                <CardTitle className="flex items-center flex-wrap gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg bg-gradient-to-br from-purple-400 to-purple-600 flex-shrink-0">
                    <Brain className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <span className="break-words">Key Competencies</span>
                </CardTitle>
                <Badge className="text-white shadow-md text-xs" style={{ backgroundColor: COLORS.BRONZE_DARK }}>
                  <CheckCircle className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                  {competencies.length} Essential Skills
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                A comprehensive toolkit for modern educational excellence
              </p>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {competencies.map((skill, index) => (
                  <CompetencyCard key={index} name={skill.name} icon={skill.icon} index={index} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages & Tech Skills Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            
            {/* Languages - Enhanced */}
            <Card className="bg-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center flex-wrap gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg flex-shrink-0" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
                    <Languages className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <span>Languages</span>
                </CardTitle>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Multilingual capabilities for diverse educational contexts
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-3 sm:space-y-4">
                  {languages.map((lang, index) => (
                    <LanguageCard key={index} {...lang} />
                  ))}
                </div>

                {/* Language highlight */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-dashed" 
                     style={{ borderColor: COLORS.FOREST_GREEN, backgroundColor: `${COLORS.FOREST_GREEN}10` }}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                    <div>
                      <p className="font-bold text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Global Communication</p>
                      <p className="text-xs sm:text-sm text-gray-600">Connecting with diverse student communities worldwide</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Skills - Enhanced */}
            <Card className="bg-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center flex-wrap gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg flex-shrink-0" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}>
                    <Monitor className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <span>Technology Skills</span>
                </CardTitle>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Modern tools for enhanced learning experiences
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {techSkills.map((tech, index) => (
                    <TechSkillBadge key={index} tech={tech} index={index} />
                  ))}
                </div>

                {/* Tech proficiency breakdown */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm flex-wrap gap-2">
                    <span className="font-medium text-gray-700">Digital Platforms</span>
                    <Badge style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20`, color: COLORS.BRONZE_DARK }} className="text-xs">
                      Expert
                    </Badge>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '95%', backgroundColor: COLORS.BRONZE_LIGHT }}></div>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm flex-wrap gap-2">
                    <span className="font-medium text-gray-700">Math Software</span>
                    <Badge style={{ backgroundColor: `${COLORS.FOREST_GREEN}20`, color: COLORS.FOREST_GREEN }} className="text-xs">
                      Advanced
                    </Badge>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '90%', backgroundColor: COLORS.FOREST_GREEN }}></div>
                  </div>
                </div>

                {/* Tech highlight */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-dashed" 
                     style={{ borderColor: COLORS.BRONZE_LIGHT, backgroundColor: `${COLORS.BRONZE_LIGHT}10` }}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Zap className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 flex-shrink-0" style={{ color: COLORS.BRONZE_LIGHT }} />
                    <div>
                      <p className="font-bold text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Tech-Enhanced Learning</p>
                      <p className="text-xs sm:text-sm text-gray-600">Integrating digital tools for maximum engagement</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications & Education Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            
            {/* Certifications - Enhanced */}
            <Card className="bg-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full" style={{ backgroundColor: COLORS.GOLD }}></div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center flex-wrap gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex-shrink-0">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <span>Certifications</span>
                </CardTitle>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Professional credentials and specialized training
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-2 sm:space-y-3">
                  {certifications.map((cert, index) => (
                    <CertificationItem key={index} cert={cert} index={index} />
                  ))}
                </div>

                {/* Certification stats */}
                <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="text-center p-2 sm:p-3 rounded-lg" style={{ backgroundColor: `${COLORS.GOLD}10` }}>
                    <Trophy className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-1" style={{ color: COLORS.GOLD }} />
                    <div className="text-xs font-medium text-gray-700 break-words">IB Certified</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-lg" style={{ backgroundColor: `${COLORS.FOREST_GREEN}10` }}>
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-1" style={{ color: COLORS.FOREST_GREEN }} />
                    <div className="text-xs font-medium text-gray-700">Verified</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education - Enhanced */}
            <Card className="bg-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full" style={{ backgroundColor: COLORS.BRONZE_DARK }}></div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center flex-wrap gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg flex-shrink-0" style={{ backgroundColor: COLORS.BRONZE_DARK }}>
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <span>Education</span>
                </CardTitle>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Academic foundation in educational excellence
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-3 sm:space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="p-3 sm:p-4 border-l-4 rounded-r-xl hover:bg-gray-50 transition-colors group" 
                         style={{ borderColor: COLORS.BRONZE_DARK }}>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-full group-hover:scale-110 transition-transform flex-shrink-0" 
                             style={{ backgroundColor: `${COLORS.BRONZE_DARK}20` }}>
                          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: COLORS.BRONZE_DARK }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold block text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>{edu}</span>
                        <Badge className="mt-2 text-white text-xs" style={{ backgroundColor: index === 0 ? COLORS.BRONZE_LIGHT : COLORS.FOREST_GREEN }}>
                          <Clock className="h-3 w-3 mr-1" />
                          {index === 0 ? 'ongoing' : 'completed'}
                        </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Education highlight */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-dashed" 
                     style={{ borderColor: COLORS.BRONZE_DARK, backgroundColor: `${COLORS.BRONZE_DARK}10` }}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Rocket className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 flex-shrink-0" style={{ color: COLORS.BRONZE_DARK }} />
                    <div className="min-w-0">
                      <p className="font-bold text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Continuous Learning</p>
                      <p className="text-xs sm:text-sm text-gray-600">Committed to lifelong professional development</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skill Development Journey */}
          <Card className="mb-8 sm:mb-10 md:mb-12 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
            </div>

            <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-3 sm:mb-4 shadow-lg"
                     style={{ background: `linear-gradient(135deg, $${COLORS.BRONZE_LIGHT},$$ {COLORS.FOREST_GREEN})` }}>
                  <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4 break-words" style={{ color: COLORS.BRONZE_DARK }}>
                  Professional Development Journey
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                  A commitment to continuous growth and skill enhancement throughout my career
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                <div className="text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1" 
                     style={{ borderColor: `${COLORS.BRONZE_LIGHT}30`, backgroundColor: 'white' }}>
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full w-fit mx-auto mb-2 sm:mb-3" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
                    <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" style={{ color: COLORS.BRONZE_LIGHT }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 break-words" style={{ color: COLORS.BRONZE_DARK }}>Continuous Learning</h3>
                  <p className="text-xs sm:text-sm text-gray-700">Actively pursuing new methodologies and educational innovations</p>
                </div>

                <div className="text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1" 
                     style={{ borderColor: `${COLORS.FOREST_GREEN}30`, backgroundColor: 'white' }}>
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full w-fit mx-auto mb-2 sm:mb-3" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                    <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" style={{ color: COLORS.FOREST_GREEN }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 break-words" style={{ color: COLORS.BRONZE_DARK }}>Collaborative Growth</h3>
                  <p className="text-xs sm:text-sm text-gray-700">Learning from peers and mentoring future educators</p>
                </div>

                <div className="text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1" 
                     style={{ borderColor: `${COLORS.GOLD}30`, backgroundColor: 'white' }}>
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full w-fit mx-auto mb-2 sm:mb-3" style={{ backgroundColor: `${COLORS.GOLD}20` }}>
                    <Target className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" style={{ color: COLORS.GOLD }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 break-words" style={{ color: COLORS.BRONZE_DARK }}>Goal-Oriented</h3>
                  <p className="text-xs sm:text-sm text-gray-700">Setting and achieving ambitious professional objectives</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills in Action */}
          <Card className="mb-8 sm:mb-10 md:mb-12 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full" style={{ backgroundColor: COLORS.GOLD }}></div>
            </div>

            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center flex-wrap gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                <div className="p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg bg-gradient-to-br from-green-400 to-green-600 flex-shrink-0">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
                <span>Skills in Action</span>
              </CardTitle>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Real-world application of expertise in educational settings
              </p>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-2 hover:shadow-lg transition-all" 
                     style={{ borderColor: `${COLORS.BRONZE_LIGHT}30` }}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-full flex-shrink-0" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
                      <Users className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: COLORS.BRONZE_LIGHT }} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold mb-2 text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Classroom Leadership</h4>
                      <p className="text-xs sm:text-sm text-gray-700 mb-3">
                        Leading diverse classrooms with cultural sensitivity and innovative teaching approaches
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-xs" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20`, color: COLORS.BRONZE_DARK }}>
                          IB Curriculum
                        </Badge>
                        <Badge className="text-xs" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20`, color: COLORS.BRONZE_DARK }}>
                          Cambridge
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-2 hover:shadow-lg transition-all" 
                     style={{ borderColor: `${COLORS.FOREST_GREEN}30` }}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-full flex-shrink-0" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                      <Monitor className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: COLORS.FOREST_GREEN }} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold mb-2 text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Technology Integration</h4>
                      <p className="text-xs sm:text-sm text-gray-700 mb-3">
                        Leveraging educational technology to create engaging and effective learning experiences
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-xs" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20`, color: COLORS.FOREST_GREEN }}>
                          LMS Expert
                        </Badge>
                        <Badge className="text-xs" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20`, color: COLORS.FOREST_GREEN }}>
                          Digital Tools
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-2 hover:shadow-lg transition-all" 
                     style={{ borderColor: `${COLORS.GOLD}30` }}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-full flex-shrink-0" style={{ backgroundColor: `${COLORS.GOLD}20` }}>
                      <Brain className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: COLORS.GOLD }} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold mb-2 text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Data-Driven Decisions</h4>
                      <p className="text-xs sm:text-sm text-gray-700 mb-3">
                        Using analytics and assessment data to inform instruction and improve student outcomes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-xs" style={{ backgroundColor: `${COLORS.GOLD}20`, color: COLORS.GOLD }}>
                          SPSS
                        </Badge>
                        <Badge className="text-xs" style={{ backgroundColor: `${COLORS.GOLD}20`, color: COLORS.GOLD }}>
                          Excel Analytics
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-2 hover:shadow-lg transition-all" 
                     style={{ borderColor: `${COLORS.BRONZE_DARK}30` }}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-full flex-shrink-0" style={{ backgroundColor: `${COLORS.BRONZE_DARK}20` }}>
                      <Globe className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: COLORS.BRONZE_DARK }} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold mb-2 text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Global Perspective</h4>
                      <p className="text-xs sm:text-sm text-gray-700 mb-3">
                        Bringing international experience and multicultural awareness to every classroom
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-xs" style={{ backgroundColor: `${COLORS.BRONZE_DARK}20`, color: COLORS.BRONZE_DARK }}>
                          3 Languages
                        </Badge>
                        <Badge className="text-xs" style={{ backgroundColor: `${COLORS.BRONZE_DARK}20`, color: COLORS.BRONZE_DARK }}>
                          Cultural Competence
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Growth Timeline */}
          <Card className="mb-8 sm:mb-10 md:mb-12 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
            </div>

            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center flex-wrap gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                <div className="p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg bg-gradient-to-br from-orange-400 to-orange-600 flex-shrink-0">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
                <span>Professional Growth Timeline</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" 
                         style={{ backgroundColor: COLORS.GOLD }}>
                      <Star className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="w-1 h-full bg-gray-200 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-6 sm:pb-8 min-w-0">
                    <Badge className="mb-2 text-white text-xs" style={{ backgroundColor: COLORS.GOLD }}>
                      2014 - 2018
                    </Badge>
                    <h4 className="font-bold mb-1 text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Foundation Building</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Bachelor's degree and initial teaching experience in Kenya</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" 
                         style={{ backgroundColor: COLORS.FOREST_GREEN }}>
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="w-1 h-full bg-gray-200 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-6 sm:pb-8 min-w-0">
                    <Badge className="mb-2 text-white text-xs" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
                      2019 - 2022
                    </Badge>
                    <h4 className="font-bold mb-1 text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>International Experience</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Teaching IB and Cambridge curricula, professional certifications</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" 
                         style={{ backgroundColor: COLORS.BRONZE_LIGHT }}>
                      <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="w-1 h-full bg-gray-200 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-6 sm:pb-8 min-w-0">
                    <Badge className="mb-2 text-white text-xs" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}>
                      2023 - Present
                    </Badge>
                    <h4 className="font-bold mb-1 text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Leadership & Advanced Studies</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Master's program, House Coordinator, MUN Faculty Advisor</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" 
                         style={{ backgroundColor: COLORS.BRONZE_DARK }}>
                      <Flag className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge className="mb-2 text-white text-xs" style={{ backgroundColor: COLORS.BRONZE_DARK }}>
                      Future
                    </Badge>
                    <h4 className="font-bold mb-1 text-sm sm:text-base break-words" style={{ color: COLORS.BRONZE_DARK }}>Continuing Excellence</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Committed to lifelong learning and educational innovation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section - Enhanced */}
          <Card className="bg-gradient-to-br from-white to-gray-50 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
              <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
            </div>

            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-4 sm:mb-5 md:mb-6 shadow-xl bg-gradient-to-br from-purple-400 to-purple-600">
                <FileText className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 flex-shrink-0" style={{ color: COLORS.GOLD }} />
                <span className="break-words">Ready to Explore My Full Profile?</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: COLORS.BRONZE_LIGHT }}>
                Discover how my comprehensive skill set can contribute to your educational institution's success
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="/MAUTIA%20ELIUD%20RESUME.pdf"
                  download
                  className="text-white hover:scale-105 transition-transform flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl shadow-xl group font-semibold text-sm sm:text-base"
                  style={{ backgroundColor: COLORS.BRONZE_DARK }}
                >
                  <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce flex-shrink-0" />
                  <span className="whitespace-nowrap">Download Resume</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>

              {/* Additional info */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-full shadow-md">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Verified Credentials</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-full shadow-md">
                  <Trophy className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.GOLD }} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-full shadow-md">
                  <Globe className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.BRONZE_LIGHT }} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">International Expertise</span>
                </div>
              </div>

              {/* Decorative bottom accent */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                <div className="w-12 h-1 sm:w-16 sm:h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse flex-shrink-0" style={{ color: COLORS.GOLD }} />
                <div className="w-12 h-1 sm:w-16 sm:h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Footer */}
          <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center relative overflow-hidden"
               style={{ background: `linear-gradient(135deg, $${COLORS.BRONZE_DARK},$$ {COLORS.BRONZE_LIGHT})` }}>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 flex flex-wrap items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span className="break-words">Skills That Drive Results</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/20 transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">12+</div>
                  <div className="text-xs sm:text-sm text-white/90 font-medium">Core Competencies</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/20 transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-white/90 font-medium">Tech Platforms</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/20 transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">3</div>
                  <div className="text-xs sm:text-sm text-white/90 font-medium">Languages</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/20 transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">4+</div>
                  <div className="text-xs sm:text-sm text-white/90 font-medium">Certifications</div>
                </div>
              </div>

              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/90 max-w-2xl mx-auto">
                A comprehensive skill portfolio refined through diverse international teaching experiences
              </p>
            </div>
          </div>

          {/* Bottom Inspirational Quote */}
          <div className="mt-8 sm:mt-10 md:mt-12 text-center px-3 sm:px-4">
            <div className="inline-block p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-dashed max-w-3xl"
                 style={{ borderColor: COLORS.GOLD }}>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-2.5 md:p-3 rounded-full" style={{ backgroundColor: `${COLORS.GOLD}20` }}>
                  <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" style={{ color: COLORS.GOLD }} />
                </div>
              </div>
              <blockquote className="text-base sm:text-lg md:text-xl font-medium italic mb-2 sm:mb-3 break-words" 
                          style={{ color: COLORS.BRONZE_DARK }}>
                "Education is not the filling of a pail, but the lighting of a fire."
              </blockquote>
              <p className="text-xs sm:text-sm text-gray-600 font-semibold">- W.B. Yeats</p>
              
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                <div className="w-8 h-0.5 sm:w-12 rounded-full" style={{ backgroundColor: COLORS.GOLD }}></div>
                <Sparkles className="h-4 w-4 flex-shrink-0" style={{ color: COLORS.GOLD }} />
                <div className="w-8 h-0.5 sm:w-12 rounded-full" style={{ backgroundColor: COLORS.GOLD }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Action Button - Mobile friendly */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
        <a
          href="/MAUTIA%20ELIUD%20RESUME.pdf"
          download
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 transition-all group"
          style={{ backgroundColor: COLORS.FOREST_GREEN }}
          title="Download Resume"
        >
          <Download className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white group-hover:animate-bounce" />
        </a>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50 overflow-hidden">
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            backgroundColor: COLORS.FOREST_GREEN,
            width: '0%' // This would be controlled by scroll position in a real implementation
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;


