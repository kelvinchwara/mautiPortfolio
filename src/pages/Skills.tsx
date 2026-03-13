import React from 'react';
import {
  MessageCircle, Brain, Users, Lightbulb, Target, BookOpen, Globe,
  Award, Monitor, Languages, Download, CheckCircle, Star,
  Zap, Trophy, Heart, Rocket, Shield, TrendingUp, Sparkles,
  BarChart, Settings, Compass, Flag, GraduationCap, ArrowRight,
  Briefcase, Calendar, FileText, Clock
} from 'lucide-react';

// --- SHIM COMPONENTS ---

interface CardProps {
  children: React.ReactNode;
  className?: string;
<<<<<<< HEAD
  style?: React.CSSProperties;
=======
>>>>>>> 499e8e803f0f996e3d423d586da336a6eb8bc0e8
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
<<<<<<< HEAD
  style?: React.CSSProperties;
=======
>>>>>>> 499e8e803f0f996e3d423d586da336a6eb8bc0e8
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

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`rounded-xl sm:rounded-2xl border-2 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] backdrop-blur-md bg-white/90 ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-5 md:p-6 border-b-2 ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '', style }) => (
  <h2 className={`text-lg sm:text-xl md:text-2xl font-bold ${className}`} style={style}>
    {children}
  </h2>
);

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-5 md:p-6 ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<BadgeProps> = ({ children, className = '', style }) => (
  <span
    className={`inline-flex items-center rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium ${className}`}
    style={style}
  >
    {children}
  </span>
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

// --- STATS CARD COMPONENT ---

interface StatsCardProps {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon: Icon, color }) => (
  <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-white border-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className="flex justify-center mb-2 sm:mb-3">
      <div className="p-2 sm:p-2.5 md:p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" style={{ color }} />
      </div>
    </div>
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style={{ color: COLORS.BRONZE_DARK }}>
      {value}
    </div>
    <div className="text-xs sm:text-sm text-gray-600 font-medium">{label}</div>
  </div>
);

// --- SKILL CATEGORY CARD COMPONENT ---

interface SkillCategoryCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: string[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ title, description, icon: Icon, color, skills }) => (
  <Card className="bg-white relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-0 group-hover:opacity-10 transition-opacity rounded-full"
         style={{ backgroundColor: color }}></div>
    
    <CardHeader>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="p-2 sm:p-2.5 rounded-full shadow-md group-hover:scale-110 transition-transform flex-shrink-0"
             style={{ backgroundColor: `${color}20` }}>
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <CardTitle className="text-base sm:text-lg md:text-xl" style={{ color: COLORS.BRONZE_DARK }}>
            {title}
          </CardTitle>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </CardHeader>
    
    <CardContent>
      <div className="space-y-2 sm:space-y-2.5">
        {skills.map((skill, index) => (
          <div key={index} 
               className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item">
            <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color }} />
            <span className="text-xs sm:text-sm text-gray-700 group-hover/item:text-gray-900 break-words">{skill}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

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
      style={{ borderColor: `${color}40` }}
    >
      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 opacity-0 group-hover:opacity-10 transition-opacity rounded-full"
           style={{ backgroundColor: color }}></div>

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
  <div className="p-4 sm:p-5 bg-gradient-to-r from-white to-gray-50 rounded-lg sm:rounded-xl border-2 hover:shadow-lg transition-all group"
       style={{ borderColor: COLORS.BEIGE }}>
    <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform">{flag}</span>
        <span className="font-bold text-base sm:text-lg break-words" style={{ color: COLORS.BRONZE_DARK }}>{name}</span>
      </div>
      <Badge className="text-white shadow-md text-xs" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
        <Star className="h-3 w-3 mr-1" />
        {level}
      </Badge>
    </div>
    <div className="w-full h-2 sm:h-2.5 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${percentage}%`, backgroundColor: COLORS.BRONZE_LIGHT }}
      ></div>
    </div>
    <div className="text-xs sm:text-sm text-gray-600 mt-2 text-right font-medium">{percentage}%</div>
  </div>
);

// --- TECH SKILL BADGE ---

interface TechSkillBadgeProps {
  tech: string;
  index: number;
}

const TechSkillBadge: React.FC<TechSkillBadgeProps> = ({ tech, index }) => {
  const colors = [COLORS.BRONZE_LIGHT, COLORS.FOREST_GREEN, COLORS.GOLD, COLORS.BRONZE_DARK];
  const color = colors[index % colors.length];
  
  return (
    <Badge 
      className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 shadow-md hover:scale-105 transition-transform cursor-default border-2"
      style={{ 
        backgroundColor: `${color}15`, 
        color: color,
        borderColor: `${color}40`
      }}
    >
      {tech}
    </Badge>
  );
};

// --- MAIN SKILLS COMPONENT ---

const Skills = () => {
  const competencies = [
    { name: "Efficient & Effective Verbal & Written Communication Skills", icon: <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Adaptable Teaching Methodologies for Diverse Learning Needs", icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Passionate, Innovative & Conflict Resolution Skills", icon: <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Leadership, Management & Coaching Skills", icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Problem Solving & Decision Making Skills", icon: <Target className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Culturally Aware, Inclusive, Adaptability & Resilience Skills", icon: <Globe className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Curious, Growth Oriented & Technology Integration Skills", icon: <Monitor className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Life Long Learning & Interpersonal Relations Skills", icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Collaborative, Global Minded & Emotional Intelligence Skills", icon: <Heart className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Open Minded, Reflective, Planning & Organizational Skills", icon: <Calendar className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Project-Based Learning & Inquiry-Based Instruction Skills", icon: <Compass className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Lesson Development, Curriculum Design & Planning Skills", icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { name: "Proficient in Safeguarding, Child Protection & Pastoral Care", icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5" /> }
  ];

  const languages = [
    { name: "English", level: "Fluent", flag: "🇬🇧", percentage: 100 },
    { name: "Swahili", level: "Fluent", flag: "🇰🇪", percentage: 100 },
    { name: "Chinese", level: "Intermediate", flag: "🇨🇳", percentage: 60 },
  ];

  const techSkills = [
    "Microsoft Office Suite", "Google Workspace", "Moodle & Google Classroom",
    "GeoGebra & Desmos", "Excel & SPSS", "Power BI"
  ];

  const certifications = [
    "IB DP AA & AI Workshops", "Cambridge IGCSE & A-Level Training",
    "Online Teaching Practices Certificate", "First Aid & CPR"
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
<<<<<<< HEAD
    <div className="min-h-screen font-['Inter'] relative" style={{ 
      background: `linear-gradient(135deg, ${COLORS.CREAM} 0%, ${COLORS.BEIGE} 50%, #f0e6d2 100%)`,
      backgroundAttachment: 'fixed'
    }}>
      {/* HEADER SECTION */}
      <header className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8" style={{
        background: `linear-gradient(180deg, ${COLORS.BRONZE_DARK} 0%, ${COLORS.BRONZE_LIGHT} 50%, transparent 100%)`
      }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full animate-pulse" style={{ backgroundColor: COLORS.GOLD }}></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 sm:w-48 sm:h-48 rounded-full animate-pulse" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-32 sm:h-32 rounded-full animate-pulse" style={{ backgroundColor: COLORS.CREAM }}></div>
=======
    <div className="min-h-screen font-['Inter']" style={{ 
      backgroundColor: COLORS.CREAM
    }}>
      {/* HEADER SECTION */}
      <header className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full animate-pulse" style={{ backgroundColor: COLORS.GOLD }}></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 sm:w-48 sm:h-48 rounded-full animate-pulse" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-32 sm:h-32 rounded-full animate-pulse" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
>>>>>>> 499e8e803f0f996e3d423d586da336a6eb8bc0e8
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8">
<<<<<<< HEAD
            {/* Profile Icon Container with Border */}
            <div className="relative inline-block mb-4 sm:mb-5">
              <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: COLORS.GOLD }}></div>
              <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 shadow-2xl" style={{ 
                background: `linear-gradient(135deg, ${COLORS.BRONZE_LIGHT} 0%, ${COLORS.BRONZE_DARK} 100%)`,
                borderColor: COLORS.GOLD
              }}>
                <Brain className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
              </div>
            </div>
            
            <div className="mx-auto max-w-4xl p-6 sm:p-8 rounded-2xl border-2 shadow-2xl bg-gradient-to-br from-white/95 via-cream/90 to-beige/80 backdrop-blur-sm hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 border-bronze-light group max-h-48 overflow-hidden" style={{ borderColor: COLORS.BRONZE_LIGHT }}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-3 sm:mb-4 text-white drop-shadow-lg group-hover:text-opacity-95 transition-colors">
                Professional Skills & Expertise
              </h1>
              <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-md group-hover:text-white/90 transition-colors">
                Comprehensive skill set cultivated through years of dedication to educational excellence and continuous professional growth
              </p>
            </div>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
              <div className="w-12 h-1 sm:w-16 sm:h-1.5 rounded-full bg-white/50"></div>
              <div className="p-1.5 sm:p-2 rounded-full border-2 border-white/50" style={{ backgroundColor: COLORS.GOLD }}>
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="w-12 h-1 sm:w-16 sm:h-1.5 rounded-full bg-white/50"></div>
            </div>
            
            {/* Quick Info Badges */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 text-xs sm:text-sm font-medium text-white" style={{ borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <Trophy className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                13+ Core Skills
              </div>
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 text-xs sm:text-sm font-medium text-white" style={{ borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <Globe className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                3 Languages
              </div>
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 text-xs sm:text-sm font-medium text-white" style={{ borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <Award className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                4+ Certifications
              </div>
=======
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-4 sm:mb-5 shadow-xl bg-gradient-to-br from-blue-400 to-blue-600">
              <Brain className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4" style={{ color: COLORS.BRONZE_DARK }}>
              Professional Skills & Expertise
            </h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: COLORS.BRONZE_LIGHT }}>
              Comprehensive skill set cultivated through years of dedication to educational excellence and continuous professional growth
            </p>
            
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
              <div className="w-12 h-1 sm:w-16 sm:h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: COLORS.GOLD }} />
              <div className="w-12 h-1 sm:w-16 sm:h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
>>>>>>> 499e8e803f0f996e3d423d586da336a6eb8bc0e8
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
          <StatsCard value="13+" label="Core Skills" icon={Target} color={COLORS.BRONZE_LIGHT} />
          <StatsCard value="3" label="Languages" icon={Languages} color={COLORS.FOREST_GREEN} />
          <StatsCard value="6+" label="Tech Tools" icon={Monitor} color={COLORS.GOLD} />
          <StatsCard value="4+" label="Certifications" icon={Award} color={COLORS.BRONZE_DARK} />
        </div>

        {/* Skill Categories Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12">
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

        {/* Key Competencies */}
        <Card className="mb-8 sm:mb-12 bg-white relative overflow-hidden border-2" style={{ borderColor: COLORS.BEIGE }}>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full"
                 style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
          </div>

          <CardHeader style={{ borderColor: COLORS.BEIGE }}>
            <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
              <CardTitle className="flex items-center gap-2 sm:gap-3" style={{ color: COLORS.BRONZE_DARK }}>
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

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
              {competencies.map((competency, index) => (
                <CompetencyCard
                  key={index}
                  {...competency}
                  index={index}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages & Tech Skills */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Languages */}
          <Card className="bg-white border-2" style={{ borderColor: COLORS.BEIGE }}>
            <CardHeader style={{ borderColor: COLORS.BEIGE }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-2.5 rounded-full shadow-md bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0">
                  <Languages className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-base sm:text-lg md:text-xl" style={{ color: COLORS.BRONZE_DARK }}>
                    Language Proficiency
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Multilingual communication skills</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {languages.map((lang, index) => (
                  <LanguageCard key={index} {...lang} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tech Skills */}
          <Card className="bg-white border-2" style={{ borderColor: COLORS.BEIGE }}>
            <CardHeader style={{ borderColor: COLORS.BEIGE }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-2.5 rounded-full shadow-md bg-gradient-to-br from-green-400 to-green-600 flex-shrink-0">
                  <Monitor className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-base sm:text-lg md:text-xl" style={{ color: COLORS.BRONZE_DARK }}>
                    Technical Skills
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Educational technology proficiency</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {techSkills.map((tech, index) => (
                  <TechSkillBadge key={index} tech={tech} index={index} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="mb-8 sm:mb-12 bg-white border-2" style={{ borderColor: COLORS.BEIGE }}>
          <CardHeader style={{ borderColor: COLORS.BEIGE }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-full shadow-md bg-gradient-to-br from-yellow-400 to-orange-500 flex-shrink-0">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-base sm:text-lg md:text-xl" style={{ color: COLORS.BRONZE_DARK }}>
                  Professional Certifications
                </CardTitle>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Recognized credentials and achievements</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <div key={index} 
                     className="flex items-center gap-3 p-3 sm:p-4 rounded-lg border-2 hover:shadow-lg transition-all"
                     style={{ borderColor: `${COLORS.GOLD}30`, backgroundColor: `${COLORS.GOLD}5` }}>
                  <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.GOLD }}>
                    <Trophy className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-800 break-words">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
<<<<<<< HEAD
        <Card className="relative overflow-hidden shadow-3xl border-4 animate-pulse-border [animation-duration:4s] backdrop-blur-xl" style={{ 
          borderColor: `linear-gradient(45deg, ${COLORS.BRONZE_LIGHT}, ${COLORS.GOLD}, ${COLORS.FOREST_GREEN})`,
          background: `linear-gradient(135deg, #ffffff 0%, ${COLORS.CREAM} 30%, ${COLORS.BEIGE} 60%, #f8f4f0 100%)`,
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)'
        }}>
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* Layer 1 */}
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full animate-float1 [animation-duration:8s]" style={{ backgroundColor: `${COLORS.GOLD}80` }}></div>
            {/* Layer 2 */}
            <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full animate-float2 [animation-duration:10s] [animation-delay:2s]" style={{ backgroundColor: `${COLORS.FOREST_GREEN}80` }}></div>
            {/* Layer 3 */}
            <div className="absolute top-1/4 right-1/4 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full animate-float3 [animation-duration:12s] [animation-delay:4s]" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}80` }}></div>
            {/* Layer 4 */}
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full animate-float4 [animation-duration:9s] [animation-delay:1s]" style={{ backgroundColor: `${COLORS.CREAM}80` }}></div>
          </div>

          <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl mb-6 sm:mb-8 md:mb-10 shadow-2xl border-4 hover:rotate-6 active:rotate-12 transition-all duration-500 cursor-pointer group/icon" style={{ 
              background: `linear-gradient(135deg, ${COLORS.GOLD} 0%, #F4D03F 50%, ${COLORS.FOREST_GREEN} 100%)`,
              borderColor: COLORS.CREAM,
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)'
            }}
            onClick={() => { /* Optional confetti effect */ }}
            role="img" aria-label="Download profile documents">
              <FileText className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white group-hover/icon:rotate-y-180 transition-transform duration-700" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-tight text-black drop-shadow-2xl [animation:fade-in-up_0.8s_ease-out_0.1s_both] tracking-tight">
              Ready to Explore My Full Profile?
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-8 sm:leading-9 text-gray-900 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent px-4 py-2 rounded-2xl backdrop-blur-sm border border-gray-200/50 shadow-xl animate-fade-in-up">
=======
        <Card className="bg-gradient-to-br from-white to-gray-50 relative overflow-hidden shadow-2xl border-2" style={{ borderColor: COLORS.BEIGE }}>
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
>>>>>>> 499e8e803f0f996e3d423d586da336a6eb8bc0e8
              Discover how my comprehensive skill set can contribute to your educational institution's success
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="/MAUTIA%20ELIUD%20RESUME.pdf"
                download
<<<<<<< HEAD
                className="group/button text-white hover:scale-110 focus:scale-110 active:scale-105 focus-visible:ring-4 ring-gold/50 transition-all duration-300 flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-2xl shadow-2xl font-bold text-base sm:text-lg md:text-xl border-2 backdrop-blur-md hover:backdrop-blur-none relative overflow-hidden focus:outline-none"
                style={{ 
                  background: 'rgba(255,255,255,0.2)',
                  borderColor: 'rgba(255,255,255,0.4)',
                  boxShadow: '0 8px 32px rgba(106,168,79,0.4)'
                }}
                aria-label="Download Mautia Eliud's comprehensive resume (PDF)"
              >
                <div className="relative">
                  <Download className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 group-hover/button:animate-bounce flex-shrink-0 relative z-10" />
                </div>
                <span className="relative z-10 whitespace-nowrap tracking-wide text-sm sm:text-base md:text-lg text-gray-900">Download Resume</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 group-hover/button:translate-x-2 transition-transform duration-300 flex-shrink-0 relative z-10" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 -skew-x-12 transform -translate-x-[100%] group-hover/button:translate-x-[100%] animate-shimmer"></div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 p-2">
              <div className="group flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-400 cursor-default relative overflow-hidden" style={{ borderColor: `${COLORS.FOREST_GREEN}40` }} role="img" aria-label="Verified professional credentials">
                <div className="p-1.5 sm:p-2 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 group-hover:animate-spin-slow" style={{ color: COLORS.FOREST_GREEN }} />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900 whitespace-nowrap relative z-10 tracking-wide">Verified Credentials</span>
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -skew-x-12 transform -translate-x-full group-hover:translate-x-full duration-1000 animate-shimmer-slow"></div>
              </div>
              <div className="group flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-400 cursor-default relative overflow-hidden" style={{ borderColor: `${COLORS.GOLD}40` }} role="img" aria-label="Multiple teaching awards received">
                <div className="p-1.5 sm:p-2 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: `${COLORS.GOLD}20` }}>
                  <Trophy className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 group-hover:animate-bounce" style={{ color: COLORS.GOLD }} />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900 whitespace-nowrap relative z-10 tracking-wide">Award-Winning Educator</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -skew-x-12 transform -translate-x-full group-hover:translate-x-full duration-1000 animate-shimmer-slow"></div>
              </div>
              <div className="group flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-400 cursor-default relative overflow-hidden" style={{ borderColor: `${COLORS.BRONZE_DARK}40` }} role="img" aria-label="Experienced team leadership">
                <div className="p-1.5 sm:p-2 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: `${COLORS.BRONZE_DARK}20` }}>
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 group-hover:animate-pulse" style={{ color: COLORS.BRONZE_DARK }} />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900 whitespace-nowrap relative z-10 tracking-wide">Team Leader</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -skew-x-12 transform -translate-x-full group-hover:translate-x-full duration-1000 animate-shimmer-slow"></div>
=======
                className="text-white hover:scale-105 transition-transform flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl shadow-xl group font-semibold text-sm sm:text-base"
                style={{ backgroundColor: COLORS.BRONZE_DARK }}
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce flex-shrink-0" />
                <span className="whitespace-nowrap">Download Resume</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-full shadow-md border-2" style={{ borderColor: COLORS.BEIGE }}>
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Verified Credentials</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-full shadow-md border-2" style={{ borderColor: COLORS.BEIGE }}>
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.GOLD }} />
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Award-Winning Educator</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-full shadow-md border-2" style={{ borderColor: COLORS.BEIGE }}>
                <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.BRONZE_DARK }} />
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Team Leader</span>
>>>>>>> 499e8e803f0f996e3d423d586da336a6eb8bc0e8
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;