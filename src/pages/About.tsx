import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail, Phone, MapPin, Download, BookOpen, Users, Award, Globe, CheckCircle, ArrowRight, Briefcase,
  Star, Trophy, Target, Sparkles, TrendingUp, Clock, Building2, Heart, Lightbulb, Zap,
  GraduationCap, Code, MessageCircle, Flag, Settings, Brain, Puzzle, Compass,BarChart,Shield,Rocket
} from 'lucide-react';

// --- COLOR PALETTE ---

const COLORS = {
  BRONZE_LIGHT: '#A37B5C',
  BRONZE_DARK: '#5E4A35',
  BEIGE: '#d1ac92',
  FOREST_GREEN: '#6AA84F',
  CREAM: '#F5F1E8',
  GOLD: '#D4AF37',
};

// --- ICON & LANGUAGE HELPERS ---

interface InfoItemProps {
  icon: React.ComponentType<any>;
  text: string;
  href?: string;
  iconColor?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, text, href, iconColor = COLORS.BRONZE_DARK }) => (
  <div className="flex items-center text-gray-700 group hover:bg-gray-50 p-2 rounded-lg transition-colors min-w-0">
    <div className="p-2 rounded-full mr-3 group-hover:scale-110 transition-transform flex-shrink-0"
      style={{ backgroundColor: `${iconColor}20` }}>
      {/* Rule 3: Small icons */}
      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: iconColor }} />
    </div>
    {href ? (
      <a href={href} className="hover:underline transition-colors break-all font-medium text-xs sm:text-sm" style={{ color: COLORS.BRONZE_DARK }}>
        {/* Rule 2: Body text scale (adjusted down for density) */}
        {text}
      </a>
    ) : (
      <span className="break-words text-xs sm:text-sm">{text}</span> // Rule 6: break-words
    )}
  </div>
);

interface LanguageInfoProps {
  flag: string;
  language: string;
  proficiency: string;
  color: string;
  percentage: number;
}

const LanguageInfo: React.FC<LanguageInfoProps> = ({ flag, language, proficiency, color, percentage }) => (
  <div className="py-3 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center justify-between mb-2">
      <Badge className="text-white text-xs sm:text-sm font-medium shadow-md" style={{ backgroundColor: color }}>
        <span className="mr-2 text-base">{flag}</span> {language}
      </Badge>
      <span className="text-xs sm:text-sm font-medium text-gray-700">{proficiency}</span>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);

interface HighlightCardProps {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ value, label, icon: Icon }) => (
  // Rule 5: Card Padding (p-4 sm:p-6 is applied here)
  <div
    className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg border-b-4 border-l-2 transition-all hover:scale-[1.05] hover:shadow-2xl backdrop-blur-md bg-white/85 group"
    style={{
      borderBottomColor: COLORS.FOREST_GREEN,
      borderLeftColor: COLORS.FOREST_GREEN,
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderRightWidth: 0,
    }}
  >
    <div className="p-3 rounded-full w-fit mx-auto mb-3 group-hover:scale-110 transition-transform"
      style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
      {/* Rule 3: Medium/Large icons */}
      <Icon className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: COLORS.BRONZE_LIGHT }} />
    </div>
    {/* Rule 1: Header (Value) */}
    <p className="text-3xl sm:text-4xl font-extrabold mb-1" style={{ color: COLORS.BRONZE_DARK }}>
      {value}
    </p>
    {/* Rule 2: Body text (Label) */}
    <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</p>
  </div>
);

// --- PHILOSOPHY CARD COMPONENT ---
interface PhilosophyCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon: Icon, title, description, color }) => (
  <div className="text-center p-6 sm:p-8 rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1"
    style={{ borderColor: `${color}30`, backgroundColor: 'white' }}>
    <div className="p-3 rounded-full w-fit mx-auto mb-3" style={{ backgroundColor: `${color}20` }}>
      {/* Rule 3: Medium/Large icons */}
      <Icon className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: color }} />
    </div>
    {/* Rule 1: Titles */}
    <h4 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: COLORS.BRONZE_DARK }}>{title}</h4>
    {/* Rule 2: Body text */}
    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{description}</p>
  </div>
);


// --- HERO SECTION COMPONENT ---

interface HeroSectionProps {
  COLORS: typeof COLORS;
}

const HeroSection: React.FC<HeroSectionProps> = ({ COLORS }) => (
  <div className="mb-12 sm:mb-16 md:mb-20 pt-12 sm:pt-16 pb-8 sm:pb-12 bg-white rounded-3xl shadow-2xl border-t-8 relative overflow-hidden"
    style={{ borderTopColor: COLORS.BRONZE_LIGHT }}>

    {/* Rule 13: Scaled background circles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-24 sm:h-24 rounded-full" style={{ backgroundColor: COLORS.BRONZE_DARK }}></div>
    </div>

    <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

      {/* Enhanced Image with decorative rings */}
      <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 flex-shrink-0 mb-4 xs:mb-6 sm:mb-8 md:mb-0 md:mr-10 relative">
        <div className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
        <div className="absolute inset-2 rounded-full border-4 opacity-30 animate-pulse"
          style={{ borderColor: COLORS.FOREST_GREEN }}></div>

        <div
          className="absolute inset-0 w-full h-full rounded-full border-4 object-cover shadow-xl flex items-center justify-center text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: COLORS.BRONZE_DARK, borderColor: COLORS.BRONZE_LIGHT }}
        >
          EM
        </div>

        {/* Rule 3: Small icons (Achievement badge) */}
        <div className="absolute -bottom-2 -right-2 z-10">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-1 xs:p-1.5 sm:p-2 shadow-lg animate-bounce">
            <Trophy className="h-3 w-3 xs:h-4 xs:w-4 sm:h-6 sm:w-6 text-white" />
          </div>
        </div>

        {/* Rule 3: Small icons (Verified badge) */}
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-1 xs:p-1.5 sm:p-2 shadow-lg">
            <CheckCircle className="h-3 w-3 xs:h-4 xs:w-4 sm:h-6 sm:w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center md:text-left min-w-0">
        {/* Status Badge - Rule 5 & Rule 2 */}
        <div className="mb-3 sm:mb-4 flex flex-wrap items-center justify-center md:justify-start gap-2">
          <Badge className="text-white text-xs sm:text-sm font-medium shadow-md animate-pulse px-2 py-1 sm:px-3 sm:py-1.5 whitespace-nowrap"
            style={{ backgroundColor: COLORS.FOREST_GREEN }}>
            <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
            Expert Global Educator
          </Badge>
          <Badge className="text-white text-xs sm:text-sm font-medium shadow-md px-2 py-1 sm:px-3 sm:py-1.5 whitespace-nowrap"
            style={{ backgroundColor: COLORS.GOLD }}>
            <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
            IB Examiner
          </Badge>
        </div>

        {/* Rule 1: Headers */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4 flex items-center justify-center md:justify-start gap-2 sm:gap-3 break-words"
          style={{ color: COLORS.BRONZE_DARK }}>
          {/* Rule 3: Large Icon */}
          <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 flex-shrink-0" style={{ color: COLORS.GOLD }} />
          Eliud Mautia
        </h1>

        {/* Rule 2: Body text scale */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed break-words">
          Nurturing <strong className="relative inline-block" style={{ color: COLORS.FOREST_GREEN }}>
            <Lightbulb className="inline h-4 w-4 sm:h-5 sm:w-5 mr-1 flex-shrink-0" />
            Mathematical Excellence
          </strong> across <strong style={{ color: COLORS.BRONZE_LIGHT }}>IBDP, IGCSE, and A-Level</strong> curricula with over a decade of international experience.
        </p>

        {/* Quick highlights */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full whitespace-nowrap">
            {/* Rule 3: Small icon */}
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.BRONZE_LIGHT }} />
            <span className="text-xs sm:text-sm font-medium text-gray-700">10+ Years</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full whitespace-nowrap">
            {/* Rule 3: Small icon */}
            <Globe className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
            <span className="text-xs sm:text-sm font-medium text-gray-700">3 Countries</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full whitespace-nowrap">
            {/* Rule 3: Small icon */}
            <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.BRONZE_DARK }} />
            <span className="text-xs sm:text-sm font-medium text-gray-700">1000+ Students</span>
          </div>
        </div>

        {/* Primary CTA - Rule 5: w-full on mobile, w-auto on larger screens */}
        <a
          href="/MAUTIA%20ELIUD%20RESUME.pdf"
          download
          className="inline-block w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-white shadow-xl hover:scale-[1.05] flex items-center mx-auto md:mx-0 group text-sm sm:text-base whitespace-nowrap"
            style={{ backgroundColor: COLORS.BRONZE_DARK, boxShadow: `0 8px 15px -3px ${COLORS.BRONZE_DARK}50` }}
          >
            {/* Rule 3: Medium icon */}
            <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:animate-bounce flex-shrink-0" />
            Download CV Now
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Button>
        </a>
      </div>
    </div>
  </div>
);

// --- SKILLS SECTION COMPONENT ---

interface SkillCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description, color }) => (
  // Rule 5: Card Padding
  <div className="text-center p-6 sm:p-8 rounded-2xl border-2 border-white/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.05] backdrop-blur-md bg-white/85 group relative overflow-hidden"
    style={{ borderColor: color }}>
    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity"
      style={{ background: `linear-gradient(135deg, transparent 50%, ${color} 50%)` }}></div>

    <div className="relative z-10">
      <div className="p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
        {/* Rule 3: Large Icon */}
        <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color }} />
      </div>
      {/* Rule 1: Titles */}
      <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center justify-center gap-2" style={{ color: COLORS.BRONZE_DARK }}>
        {title}
        {/* Rule 3: Small Icon */}
        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color }} />
      </h3>
      {/* Rule 2: Body text */}
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">{description}</p>
    </div>
  </div>
);

const SkillsSection: React.FC = () => (
  <div className="mb-16">
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-lg bg-white">
        {/* Rule 3: Large Icon */}
        <Brain className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: COLORS.BRONZE_LIGHT }} />
      </div>
      {/* Rule 1: Headers */}
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 flex items-center justify-center gap-3" style={{ color: COLORS.BRONZE_DARK }}>
        {/* Rule 3: Large Icon */}
        <Zap className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
        Core Skills & Expertise
      </h2>
      {/* Rule 2: Body text */}
      <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-700">
        A comprehensive skill set built through years of dedicated teaching and continuous professional development
      </p>
    </div>

    {/* Rule 6: Gaps & Rule 9/10: Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
      <SkillCard
        icon={BookOpen}
        title="Mathematics Expertise"
        description="Deep knowledge in IBDP, IGCSE, and A-Level curricula, with a focus on Analysis and Approaches. Skilled in teaching complex concepts like calculus, algebra, and statistics."
        color={COLORS.BRONZE_LIGHT}
      />
      <SkillCard
        icon={Users}
        title="Teaching & Mentoring"
        description="Over 10 years of experience nurturing independent learners through innovative teaching methods, technology integration, and personalized student support."
        color={COLORS.FOREST_GREEN}
      />
      <SkillCard
        icon={Award}
        title="IB Examination"
        description="Certified IB DP Mathematics Examiner for MAA, ensuring high standards in assessment and providing valuable insights into exam preparation."
        color={COLORS.GOLD}
      />
      <SkillCard
        icon={Code}
        title="Technology Integration"
        description="Proficient in tools like GeoGebra, Desmos, and digital platforms to enhance visual learning and interactive mathematics education."
        color={COLORS.BRONZE_DARK}
      />
      <SkillCard
        icon={Target}
        title="Leadership & Organization"
        description="Strong skills in planning, communication, and teamwork, with experience founding educational initiatives like Elton Soma School."
        color={COLORS.BRONZE_LIGHT}
      />
      <SkillCard
        icon={Puzzle}
        title="Problem Solving"
        description="Advanced analytical skills applied to real-world educational challenges, fostering critical thinking in students across diverse backgrounds."
        color={COLORS.FOREST_GREEN}
      />
    </div>
  </div>
);

// --- HIGHLIGHTS SECTION ---

const HighlightsSection: React.FC = () => (
  <div className="mb-16">
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-600">
        {/* Rule 3: Medium Icon */}
        <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
      </div>
      {/* Rule 1: Headers */}
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 flex items-center justify-center gap-3" style={{ color: COLORS.BRONZE_DARK }}>
        {/* Rule 3: Medium Icon */}
        <BarChart className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
        Career Highlights
      </h2>
      {/* Rule 2: Body text */}
      <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-700">
        Proven track record of excellence in international mathematics education
      </p>
    </div>

    {/* Rule 8: Stats Grid & Rule 6: Gaps */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      <HighlightCard value="10+" label="Years Experience" icon={Clock} />
      <HighlightCard value="1000+" label="Students Taught" icon={Users} />
      <HighlightCard value="4+" label="Institutions" icon={Building2} />
      <HighlightCard value="3" label="Countries" icon={Globe} />
    </div>
  </div>
);


const About: React.FC = () => {
  return (
    <div className="min-h-screen font-['Inter', sans-serif] antialiased pt-8 pb-12 relative" style={{
      background: `linear-gradient(135deg, ${COLORS.CREAM} 0%, ${COLORS.BEIGE} 50%, #f0e6d2 100%)`,
      backgroundAttachment: 'fixed'
    }}>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {/* Rule 13: Decorative floating circles */}
        <div className="absolute top-20 left-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full animate-pulse" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 sm:w-48 sm:h-48 rounded-full animate-pulse" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full animate-pulse" style={{ backgroundColor: COLORS.BRONZE_DARK }}></div>
      </div>

      {/* Rule 4: Container padding applied here */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* --- HERO SECTION --- */}
          <HeroSection COLORS={COLORS} />

          {/* Skills Section */}
          <SkillsSection />

          {/* Highlights Section */}
          <HighlightsSection />

          {/* Professional Summary & Founder - Rule 9: Main content grid & Rule 6: Gaps */}
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12">
            <Card className="bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: `linear-gradient(135deg, transparent 50%, ${COLORS.BRONZE_LIGHT} 50%)` }}></div>

              {/* Rule 5: Card Padding */}
              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full mr-3" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
                    {/* Rule 3: Medium icon */}
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" style={{ color: COLORS.BRONZE_LIGHT }} />
                  </div>
                  {/* Rule 1: Titles */}
                  <h2 className="text-xl sm:text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>
                    Professional Summary
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Rule 2: Body text scale & Rule 6: Text Overflow */}
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed flex items-start break-words">
                    <Shield className="h-5 w-5 mr-2 mt-1 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                    <span>
                      I am a highly motivated and innovative professional with a flexible mindset,
                      adept at embracing new ideas and changes, and driven by a commitment to
                      achieving results through teamwork. I excel in leadership, organization, and
                      interpersonal communication, bringing extensive experience in Secondary
                      Mathematics education across IGCSE, A Level, IB Diploma, and 8.4.4. systems.
                      As a passionate educator, I employ an effective and positive teaching style,
                      leveraging technology to cultivate independent learners.
                    </span>
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed flex items-start break-words">
                    <Heart className="h-5 w-5 mr-2 mt-1 flex-shrink-0" style={{ color: COLORS.BRONZE_LIGHT }} />
                    <span>
                      My advanced skills in communication, planning, socialization, and problem
                      solving empower me to excel as a mathematics educator. I aspire to secure a
                      teaching position that fosters creativity and higher-order thinking through
                      advanced teaching methods, enhancing student performance while promoting
                      an environment of continuous learning, unlearning, and relearning.
                    </span>
                  </p>
                </div>

                {/* Expertise badges */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="text-xs sm:text-sm whitespace-nowrap" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20`, color: COLORS.FOREST_GREEN }}>
                    <Target className="h-3 w-3 mr-1 flex-shrink-0" />
                    Leadership
                  </Badge>
                  <Badge className="text-xs sm:text-sm whitespace-nowrap" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20`, color: COLORS.BRONZE_LIGHT }}>
                    <Compass className="h-3 w-3 mr-1 flex-shrink-0" />
                    Innovation
                  </Badge>
                  <Badge className="text-xs sm:text-sm whitespace-nowrap" style={{ backgroundColor: `${COLORS.BRONZE_DARK}20`, color: COLORS.BRONZE_DARK }}>
                    <MessageCircle className="h-3 w-3 mr-1 flex-shrink-0" />
                    Communication
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: `linear-gradient(225deg, transparent 50%, ${COLORS.FOREST_GREEN} 50%)` }}></div>

              {/* Rule 5: Card Padding */}
              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full mr-3" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                    {/* Rule 3: Medium icon */}
                    <Building2 className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                  </div>
                  {/* Rule 1: Titles */}
                  <h2 className="text-xl sm:text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>
                    Founder of Elton Soma School
                  </h2>
                </div>

                {/* Rule 2: Body text scale */}
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 break-words">
                  <Rocket className="inline h-5 w-5 mr-2 flex-shrink-0" style={{ color: COLORS.GOLD }} />
                  Established Elton Soma School in Kenya to provide quality STEM education, fostering innovation and critical thinking among students. The school emphasizes holistic development and prepares students for global challenges through a robust curriculum and extracurricular activities.
                </p>

                <a href="https://soma-school.onrender.com/" target="_blank" rel="noopener noreferrer" className="block mb-4">
                  {/* Rule 5: w-full on mobile, w-auto on larger screens */}
                  <Button
                    size="sm"
                    className="w-full sm:w-auto text-white shadow-md hover:shadow-lg hover:scale-[1.03] group/btn text-sm sm:text-base whitespace-nowrap"
                    style={{ backgroundColor: COLORS.FOREST_GREEN }}
                  >
                    <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
                    Visit School Website
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </a>

                {/* School highlights - Rule 6: Gaps */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="text-center p-3 rounded-lg" style={{ backgroundColor: `${COLORS.FOREST_GREEN}10` }}>
                    <GraduationCap className="h-6 w-6 mx-auto mb-1 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                    <div className="text-xs sm:text-sm font-medium text-gray-700">STEM Focus</div>
                  </div>
                  <div className="text-center p-3 rounded-lg" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}10` }}>
                    <Heart className="h-6 w-6 mx-auto mb-1 flex-shrink-0" style={{ color: COLORS.BRONZE_LIGHT }} />
                    <div className="text-xs sm:text-sm font-medium text-gray-700">Holistic Ed.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Certifications & Core Info Grid - Rule 6: Gaps */}
          <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12">

            {/* Certifications Section */}
            <Card className="bg-white md:col-span-2 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
              </div>

              {/* Rule 5: Card Padding */}
              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full mr-3 shadow-lg" style={{ backgroundColor: COLORS.GOLD }}>
                    {/* Rule 3: Medium icon */}
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white flex-shrink-0" />
                  </div>
                  {/* Rule 1: Titles */}
                  <h2 className="text-xl sm:text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>
                    Key Certifications & Expertise
                  </h2>
                </div>

                <ul className="space-y-4 text-base text-gray-700">
                  <li className="flex items-start border-l-2 sm:border-l-4 pl-4 py-3 hover:bg-gray-50 rounded-r-lg transition-colors"
                    style={{ borderColor: COLORS.FOREST_GREEN }}>
                    <div className="p-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                      {/* Rule 3: Medium icon */}
                      <Trophy className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                    </div>
                    {/* Rule 2: Body text scale */}
                    <p className="text-sm sm:text-base break-words"><strong>IB DP Mathematics Examiner:</strong> Qualified and active examiner for the International Baccalaureate Diploma Programme (IBDP) Mathematics Analysis and Approaches (MAA).</p>
                  </li>
                  <li className="flex items-start border-l-2 sm:border-l-4 pl-4 py-3 hover:bg-gray-50 rounded-r-lg transition-colors"
                    style={{ borderColor: COLORS.FOREST_GREEN }}>
                    <div className="p-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                      {/* Rule 3: Medium icon */}
                      <Flag className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                    </div>
                    {/* Rule 2: Body text scale */}
                    <p className="text-sm sm:text-base break-words"><strong>Cambridge International (CIE) Certification:</strong> Experienced in teaching IGCSE and A-Level Mathematics with strong track record in student results.</p>
                  </li>

                  <li className="flex items-start border-l-2 sm:border-l-4 pl-4 py-3 hover:bg-gray-50 rounded-r-lg transition-colors"
                    style={{ borderColor: COLORS.FOREST_GREEN }}>
                    <div className="p-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                      {/* Rule 3: Medium icon */}
                      <Settings className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                    </div>
                    {/* Rule 2: Body text scale */}
                    <p className="text-sm sm:text-base break-words"><strong>Technology Integration Specialist:</strong> Proficient in utilizing digital tools and platforms (e.g., GeoGebra, Desmos) to enhance mathematics instruction and visual learning.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact & Language Card (Single Column) - Rule 6: Gaps */}
            <div className="md:col-span-1 space-y-3 sm:space-y-4 md:space-y-6">
              {/* Contact Information */}
              <Card className="bg-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: `radial-gradient(circle, ${COLORS.BRONZE_LIGHT} 0%, transparent 70%)` }}></div>

                {/* Rule 5: Card Padding */}
                <CardContent className="p-4 sm:p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full mr-2 shadow-md flex-shrink-0" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}>
                      {/* Rule 3: Medium icon */}
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    {/* Rule 1: Titles */}
                    <h3 className="text-xl sm:text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>
                      Contact Information
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <InfoItem icon={Phone} text="+86 130 3830 3477 (China)" href="tel:+8613038303477" iconColor={COLORS.FOREST_GREEN} />
                    <InfoItem icon={Phone} text="+254 720 059 892 (Kenya)" href="tel:+254720059892" iconColor={COLORS.FOREST_GREEN} />
                    <InfoItem icon={Mail} text="mautiaeliud@gmail.com" href="mailto:mautiaeliud@gmail.com" iconColor={COLORS.BRONZE_LIGHT} />
                    <InfoItem icon={MapPin} text="401122, Chongqing, China" iconColor={COLORS.BRONZE_DARK} />
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="bg-white shadow-2xl relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: `radial-gradient(circle, ${COLORS.FOREST_GREEN} 0%, transparent 70%)` }}></div>

                {/* Rule 5: Card Padding */}
                <CardContent className="p-4 sm:p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full mr-2 shadow-md flex-shrink-0" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
                      {/* Rule 3: Medium icon */}
                      <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    {/* Rule 1: Titles */}
                    <h3 className="text-xl sm:text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>
                      Languages
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {/* Rule 2: Body text scale applied in LanguageInfo */}
                    <LanguageInfo flag="🇺🇸" language="English" proficiency="Native/Bilingual" color={COLORS.BRONZE_DARK} percentage={100} />
                    <LanguageInfo flag="🇰🇪" language="Kiswahili" proficiency="Native/Bilingual" color={COLORS.BRONZE_LIGHT} percentage={100} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Teaching Philosophy Section */}
          <Card className="bg-white mb-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
            </div>

            {/* Rule 5: Card Padding */}
            <CardContent className="p-6 sm:p-8 relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${COLORS.BRONZE_LIGHT}, ${COLORS.FOREST_GREEN})` }}>
                  {/* Rule 3: Medium/Large icon */}
                  <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                {/* Rule 1: Headers */}
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 flex items-center justify-center gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" style={{ color: COLORS.BRONZE_LIGHT }} />
                  Teaching Philosophy
                </h2>
              </div>

              {/* Rule 10: Philosophy cards grid & Rule 6: Gaps */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <PhilosophyCard
                  icon={Heart}
                  title="Student-Centric"
                  description="Cultivating a supportive, inclusive, and encouraging classroom where every student feels safe to engage and explore complex ideas."
                  color={COLORS.BRONZE_LIGHT}
                />
                <PhilosophyCard
                  icon={Brain}
                  title="Active Inquiry"
                  description="Moving beyond rote memorization to promote conceptual understanding through critical thinking, problem-solving, and real-world application."
                  color={COLORS.FOREST_GREEN}
                />
                <PhilosophyCard
                  icon={Code}
                  title="Tech-Forward"
                  description="Strategically integrating digital tools like GeoGebra and Desmos to visualize abstract concepts and facilitate interactive, discovery-based learning."
                  color={COLORS.BRONZE_DARK}
                />
              </div>
            </CardContent>
            
          </Card>
          {/* Additional Achievements Section */}
        <Card className="bg-gradient-to-br from-white to-gray-50 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full" style={{ backgroundColor: COLORS.GOLD }}></div>
          </div>

          <CardContent className="p-8 relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-600">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.BRONZE_DARK }}>
                Key Achievements & Impact
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 rounded-xl hover:bg-white transition-colors border-l-4" 
                    style={{ borderColor: COLORS.FOREST_GREEN }}>
                <div className="p-2 rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                  <TrendingUp className="h-6 w-6" style={{ color: COLORS.FOREST_GREEN }} />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: COLORS.BRONZE_DARK }}>Student Success</h4>
                  <p className="text-sm text-gray-700">Consistently achieving high pass rates and excellent student outcomes across all curricula</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-xl hover:bg-white transition-colors border-l-4" 
                    style={{ borderColor: COLORS.BRONZE_LIGHT }}>
                <div className="p-2 rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
                  <Rocket className="h-6 w-6" style={{ color: COLORS.BRONZE_LIGHT }} />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: COLORS.BRONZE_DARK }}>Educational Innovation</h4>
                  <p className="text-sm text-gray-700">Founded Elton Soma School to expand access to quality STEM education</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-xl hover:bg-white transition-colors border-l-4" 
                    style={{ borderColor: COLORS.GOLD }}>
                <div className="p-2 rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: `${COLORS.GOLD}20` }}>
                  <Award className="h-6 w-6" style={{ color: COLORS.GOLD }} />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: COLORS.BRONZE_DARK }}>Professional Recognition</h4>
                  <p className="text-sm text-gray-700">Selected as IB DP Mathematics Examiner, contributing to global educational standards</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-xl hover:bg-white transition-colors border-l-4" 
                    style={{ borderColor: COLORS.FOREST_GREEN }}>
                <div className="p-2 rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                  <Globe className="h-6 w-6" style={{ color: COLORS.FOREST_GREEN }} />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: COLORS.BRONZE_DARK }}>International Impact</h4>
                  <p className="text-sm text-gray-700">Teaching experience across 3 countries, enriching diverse student communities</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center mt-12 p-12 rounded-3xl relative overflow-hidden" 
              style={{ background: `linear-gradient(135deg, ${COLORS.BRONZE_DARK} 0%, ${COLORS.BRONZE_LIGHT} 100%)` }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-white shadow-lg">
              <Briefcase className="h-8 w-8" style={{ color: COLORS.BRONZE_DARK }} />
            </div>
            
            <p className="text-2xl font-bold mb-2 text-white">
              Ready to Explore More?
            </p>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Discover detailed professional experience, qualifications, and the journey that shaped this educational career
            </p>
            {/* Key Stats - Rule 6: Gaps */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full whitespace-nowrap">
                {/* Rule 3: Small icon */}
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.BRONZE_DARK }} />
                <span className="text-xs sm:text-sm font-medium text-gray-700">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full whitespace-nowrap">
                {/* Rule 3: Small icon */}
                <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.BRONZE_DARK }} />
                <span className="text-xs sm:text-sm font-medium text-gray-700">1000+ Students Taught</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full whitespace-nowrap">
                {/* Rule 3: Small icon */}
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: COLORS.BRONZE_DARK }} />
                <span className="text-xs sm:text-sm font-medium text-gray-700">3 Countries</span>
              </div>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="block">
              <Button
                size="lg"
                className="w-full sm:w-auto text-white shadow-lg hover:shadow-xl hover:scale-[1.03] group/cta text-base sm:text-lg whitespace-nowrap"
                style={{ backgroundColor: COLORS.BRONZE_DARK }}
              >
                <Download className="h-5 w-5 mr-2 flex-shrink-0" />
                Download Full Resume
                <ArrowRight className="ml-2 h-5 w-5 group-hover/cta:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default About;
            
           