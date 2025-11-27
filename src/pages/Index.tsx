
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Mail, Phone, MapPin, GraduationCap, Briefcase, Award, ArrowRight, Globe,
  Star, Trophy, Target, Users, BookOpen, Zap, CheckCircle2, Sparkles,
  TrendingUp, Clock, Building2, Heart, Lightbulb, Code, MessageCircle,
  Calendar, FileText, Video, Coffee, Rocket
} from 'lucide-react';

interface ContactBadgeProps {
  icon: React.ComponentType<any>;
  text: string;
  href?: string;
}


// --- COLOR PALETTE ---

const COLORS = {
  BRONZE_LIGHT: '#A37B5C',
  BRONZE_DARK: '#5E4A35',
  BEIGE: '#d1ac92',
  DEEP_OVERLAY: 'rgba(5, 5, 5, 0.4)',
};


// --- HERO SECTION ---

const HeroSection = () => (
  <section className="py-12 sm:py-20 md:py-32 relative">
    {/* Decorative floating elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full opacity-20 animate-pulse"
           style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full opacity-20 animate-pulse"
           style={{ backgroundColor: COLORS.BRONZE_DARK }}></div>
      <div className="absolute top-1/3 right-10 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-20 animate-pulse"
           style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
    </div>

    <div className="container mx-auto px-3 sm:px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Enhanced Profile Icon with multiple decorative rings */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 md:mb-8">
          {/* Outer pulse ring */}
          <div className="absolute inset-0 rounded-full animate-ping opacity-20"
               style={{ background: `linear-gradient(135deg, ${COLORS.BRONZE_LIGHT}, ${COLORS.BRONZE_DARK})` }}></div>

          {/* Middle ring */}
          <div className="absolute inset-2 rounded-full border-4 opacity-30"
               style={{ borderColor: COLORS.BEIGE }}></div>

          {/* Main profile circle */}
          <div
            className="absolute inset-0 rounded-full flex items-center justify-center border-4 border-white shadow-2xl transition duration-500 hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${COLORS.BRONZE_LIGHT}, ${COLORS.BRONZE_DARK})` }}
          >
            <GraduationCap className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-white" strokeWidth={1.5} />
          </div>

          {/* Sparkle decoration */}
          <div className="absolute -top-2 -right-2">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 animate-pulse" />
          </div>
        </div>

        {/* Name with decorative underline */}
        <div className="relative inline-block mb-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Eliud Mautia
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 rounded-full"
               style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
        </div>

        {/* Enhanced Role Badge with icons */}
        <div className="mb-4 sm:mb-6 flex flex-wrap justify-center items-center gap-2 px-2">
          <Badge className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg"
                 style={{ backgroundColor: COLORS.BRONZE_LIGHT, color: 'white' }}>
            <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            IGCSE Teacher
          </Badge>
          <Badge className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg"
                 style={{ backgroundColor: COLORS.BRONZE_DARK, color: 'white' }}>
            <Trophy className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            IBDP Teacher
          </Badge>
          <Badge className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg"
                 style={{ backgroundColor: COLORS.BRONZE_LIGHT, color: 'white' }}>
            <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            A-Level Teacher
          </Badge>
          <Badge className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg animate-pulse"
                 style={{ backgroundColor: '#4caf50', color: 'white' }}>
            <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            IBDP MAA Examiner
          </Badge>
        </div>

        {/* Summary with icon */}
        <div className="relative mb-8 sm:mb-10">
          <div className="absolute -left-3 sm:-left-4 top-0">
            <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300 animate-pulse" />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed px-3 sm:px-4 bg-black bg-opacity-30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white border-opacity-20">
            <Sparkles className="inline h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-300" />
            Highly motivated mathematics educator with extensive experience across international curricula,
            passionate about fostering independent learning through innovative teaching methods.
          </p>
        </div>

        {/* Enhanced Contact Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2">
          <ContactBadge icon={Phone} text="+86 130 3830 3477" href="tel:+8613038303477" />
          <ContactBadge icon={Mail} text="mautiaeliud@gmail.com" href="mailto:mautiaeliud@gmail.com" />
          <ContactBadge icon={MapPin} text="Chongqing, China" />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-3xl mx-auto">
          <StatCard icon={Clock} value="10+" label="Years Experience" />
          <StatCard icon={Building2} value="4+" label="Institutions" />
          <StatCard icon={Globe} value="3" label="Countries" />
          <StatCard icon={Users} value="1000+" label="Students Taught" />
        </div>

        {/* Action Buttons with Enhanced Styling */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          <RouterLink to="/about" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center text-white shadow-2xl hover:scale-[1.05] group"
              style={{ backgroundColor: COLORS.BRONZE_LIGHT, boxShadow: `0 10px 20px -5px ${COLORS.BRONZE_LIGHT}80` }}
            >
              <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              Learn More
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </RouterLink>
          <RouterLink to="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent border-2 text-white hover:bg-white hover:text-gray-900 hover:border-white shadow-xl hover:shadow-2xl hover:scale-[1.05] group"
              style={{ borderColor: COLORS.BEIGE }}
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get In Touch
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </RouterLink>
        </div>

      </div>
    </div>
  </section>
);

// Quick Stats Card Component
interface StatCardProps {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
    <Icon className="h-6 w-6 mx-auto mb-2" style={{ color: COLORS.BRONZE_LIGHT }} />
    <div className="text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>{value}</div>
    <div className="text-xs font-medium text-gray-600">{label}</div>
  </div>
);

const ContactBadge: React.FC<ContactBadgeProps> = ({ icon: Icon, text, href }) => (
  <div className="flex items-center bg-white bg-opacity-95 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg text-sm sm:text-base transition-all hover:scale-[1.05] hover:shadow-xl border-2 border-transparent hover:border-opacity-50 group" 
       style={{ borderColor: COLORS.BRONZE_LIGHT }}>
    <div className="p-2 rounded-full mr-2 group-hover:scale-110 transition-transform" 
         style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
      <Icon className="h-4 w-4" style={{ color: COLORS.BRONZE_DARK }} />
    </div>
    {href ? (
      <a href={href} className="hover:underline font-medium" style={{ color: COLORS.BRONZE_DARK }}>
        {text}
      </a>
    ) : (
      <span className="font-medium" style={{ color: COLORS.BRONZE_DARK }}>{text}</span>
    )}
  </div>
);


// --- OVERVIEW SECTION (Cards) ---

const OverviewSection = () => (
  <section className="py-16 sm:py-24 relative" style={{ backgroundColor: COLORS.BEIGE }}>
    {/* Decorative background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full" style={{ backgroundColor: COLORS.BRONZE_DARK }}></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-lg bg-white">
            <Target className="h-8 w-8" style={{ color: COLORS.BRONZE_LIGHT }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3" 
              style={{ color: COLORS.BRONZE_DARK }}>
            <TrendingUp className="h-8 w-8" style={{ color: COLORS.BRONZE_LIGHT }} />
            Professional Overview
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.BRONZE_DARK }}>
            Comprehensive expertise in international mathematics education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OverviewCard 
            icon={Award} 
            title="Expert Skills" 
            description="Comprehensive skill set in communication, leadership, and educational innovation." 
            linkTo="/skills" 
            buttonText="View Skills" 
            iconColor={COLORS.BRONZE_LIGHT}
            highlights={["Communication", "Leadership", "Innovation"]}
          />
          <OverviewCard 
            icon={Briefcase} 
            title="Rich Experience" 
            description="10+ years teaching IGCSE, IBDP, and A-Level mathematics globally." 
            linkTo="/experience" 
            buttonText="View Experience" 
            iconColor={COLORS.BRONZE_DARK}
            highlights={["IGCSE", "IBDP", "A-Level"]}
          />
          <OverviewCard 
            icon={GraduationCap} 
            title="Education" 
            description="Master's in Education Arts and continuous professional development." 
            linkTo="/education" 
            buttonText="View Education" 
            iconColor={COLORS.BRONZE_LIGHT}
            highlights={["Master's Degree", "Certifications", "Training"]}
          />
        </div>

        {/* Additional Highlights Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <HighlightCard icon={Star} title="Excellence" value="Top Rated" color={COLORS.BRONZE_LIGHT} />
          <HighlightCard icon={Trophy} title="Achievements" value="Multiple Awards" color={COLORS.BRONZE_DARK} />
          <HighlightCard icon={Heart} title="Passion" value="Teaching" color={COLORS.BRONZE_LIGHT} />
          <HighlightCard icon={Zap} title="Innovation" value="Tech-Forward" color={COLORS.BRONZE_DARK} />
        </div>
      </div>
    </div>
  </section>
);

interface OverviewCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  linkTo: string;
  buttonText: string;
  iconColor: string;
  highlights?: string[];
}

const OverviewCard: React.FC<OverviewCardProps> = ({ icon: Icon, title, description, linkTo, buttonText, iconColor, highlights }) => (
  <Card className="text-center bg-white shadow-2xl hover:shadow-3xl relative overflow-hidden group" 
        style={{ borderColor: iconColor, borderWidth: '2px' }}>
    {/* Decorative corner */}
    <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity" 
         style={{ background: `linear-gradient(135deg, transparent 50%, ${iconColor} 50%)` }}></div>
    
    <CardContent className="p-8 relative z-10">
      {/* Icon with animated background */}
      <div className="relative mx-auto mb-4 w-20 h-20">
        <div className="absolute inset-0 rounded-full opacity-20 group-hover:scale-110 transition-transform" 
             style={{ backgroundColor: iconColor }}></div>
        <div className="absolute inset-0 p-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" 
             style={{ background: iconColor, boxShadow: `0 5px 15px -3px ${iconColor}80` }}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 flex items-center justify-center gap-2" 
          style={{ color: COLORS.BRONZE_DARK }}>
        {title}
        <CheckCircle2 className="h-5 w-5" style={{ color: iconColor }} />
      </h3>
      
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">{description}</p>
      
      {/* Highlights badges */}
      {highlights && (
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {highlights.map((highlight, idx) => (
            <Badge key={idx} className="text-xs" style={{ backgroundColor: `${iconColor}20`, color: iconColor }}>
              <CheckCircle2 className="h-3 w-3 mr-1" />
              {highlight}
            </Badge>
          ))}
        </div>
      )}
      
      <RouterLink to={linkTo}>
        <Button
          variant="outline"
          size="sm"
          className="w-full text-sm font-medium border-2 hover:bg-opacity-90 hover:scale-105 transition-all group"
          style={{ backgroundColor: iconColor, color: 'white', borderColor: iconColor }}
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </RouterLink>
    </CardContent>
  </Card>
);

// Highlight Card Component
interface HighlightCardProps {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  color: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ icon: Icon, title, value, color }) => (
  <Card className="bg-white hover:shadow-xl transition-all hover:-translate-y-2">
    <CardContent className="p-6 text-center">
      <div className="p-3 rounded-full w-fit mx-auto mb-3" style={{ backgroundColor: `${color}20` }}>
        <Icon className="h-6 w-6" style={{ color }} />
      </div>
      <div className="text-xs font-medium text-gray-600 mb-1">{title}</div>
      <div className="text-sm font-bold" style={{ color: COLORS.BRONZE_DARK }}>{value}</div>
    </CardContent>
  </Card>
);


// --- LANGUAGES SECTION ---

const LanguagesSection = () => (
  <section className="py-12 sm:py-16 bg-white shadow-inner relative">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Enhanced Header */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-lg" 
             style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
          <Globe className="h-8 w-8" style={{ color: COLORS.BRONZE_LIGHT }} />
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-3" 
            style={{ color: COLORS.BRONZE_DARK }}>
          <MessageCircle className="h-7 w-7" style={{ color: COLORS.BRONZE_LIGHT }} />
          Multilingual Capabilities
        </h2>
        
        <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: COLORS.BRONZE_DARK }}>
          Effective communication across diverse international communities
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <LanguageBadge flag="🇺🇸" language="English" level="" color={COLORS.BRONZE_DARK} proficiency={100} />
          <LanguageBadge flag="🇰🇪" language="Kiswahili" level="" color={COLORS.BRONZE_LIGHT} proficiency={100} />
          
        </div>

        {/* Additional language-related badges */}
        <div className="flex flex-wrap justify-center gap-3">
          <Badge className="px-4 py-2" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20`, color: COLORS.BRONZE_DARK }}>
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Cross-Cultural Communication
          </Badge>
          <Badge className="px-4 py-2" style={{ backgroundColor: `${COLORS.BRONZE_DARK}20`, color: COLORS.BRONZE_DARK }}>
            <Users className="h-4 w-4 mr-2" />
            International Experience
          </Badge>
        </div>
      </div>
    </div>
  </section>
);

interface LanguageBadgeProps {
  flag: string;
  language: string;
  level: string;
  color: string;
  proficiency: number;
}

const LanguageBadge: React.FC<LanguageBadgeProps> = ({ flag, language, level, color, proficiency }) => (
  <div className="relative group">
    <Badge
      className="text-base px-6 py-3 flex items-center shadow-md transition duration-300 hover:scale-[1.05] hover:shadow-xl border-2"
      style={{ backgroundColor: color, color: 'white', borderColor: color }}
    >
      <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">{flag}</span>
      <div className="text-left">
        <div className="font-semibold leading-none text-white flex items-center gap-2">
          {language}
          <CheckCircle2 className="h-4 w-4" />
        </div>
        <div className="text-xs opacity-90 mt-1" style={{ color: COLORS.BEIGE }}>{level}</div>
      </div>
    </Badge>
    
    {/* Proficiency bar */}
    <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${proficiency}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);


// --- MAIN APP ---

const Index = () => {
  return (
    <div 
      className="min-h-screen font-['Inter', sans-serif] antialiased"
      style={{
        backgroundImage: 'url(/eliu.png)', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="min-h-screen" style={{ backgroundColor: COLORS.DEEP_OVERLAY }}> 
        <HeroSection />
        <OverviewSection />
        <LanguagesSection />
      </div>
    </div>
  );
};

export default Index;
