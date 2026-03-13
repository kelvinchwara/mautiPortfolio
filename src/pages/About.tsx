import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail, Phone, MapPin, Download, BookOpen, Users, Award, Globe, CheckCircle, ArrowRight, Briefcase,
  Star, Trophy, Target, Sparkles, TrendingUp, Clock, Building2, Heart, Lightbulb, Zap,
  GraduationCap, MessageCircle, Flag, Brain, Puzzle, Compass, Shield, Rocket
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

// --- COMPONENTS ---

interface InfoItemProps {
  icon: React.ComponentType<any>;
  text: string;
  href?: string;
  iconColor?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, text, href, iconColor = COLORS.BRONZE_DARK }) => (
  <div className="flex items-center text-gray-700 group hover:bg-gray-50 p-2 sm:p-3 rounded-lg transition-colors min-w-0 border-2 border-transparent hover:border-gray-200">
    <div className="p-2 rounded-full mr-3 group-hover:scale-110 transition-transform flex-shrink-0 border-2" style={{ backgroundColor: `${iconColor}15`, borderColor: `${iconColor}30` }}>
      <Icon className="h-4 w-4" style={{ color: iconColor }} />
    </div>
    {href ? (
      <a href={href} className="hover:underline transition-colors break-all font-medium text-sm" style={{ color: COLORS.BRONZE_DARK }}>
        {text}
      </a>
    ) : (
      <span className="break-words text-sm">{text}</span>
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
  <div className="py-3 border-b-2 border-gray-100 last:border-b-0">
    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
      <Badge className="text-white text-sm font-medium shadow-md border-2 border-white/20" style={{ backgroundColor: color }}>
        <span className="mr-2 text-base">{flag}</span> {language}
      </Badge>
      <span className="text-xs font-medium text-gray-700">{proficiency}</span>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percentage}%`, backgroundColor: color }} />
    </div>
  </div>
);

interface HighlightCardProps {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ value, label, icon: Icon }) => (
  <div
    className="text-center p-5 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.03] border-2 group"
    style={{ borderColor: COLORS.FOREST_GREEN }}
  >
    <div className="p-3 rounded-full w-fit mx-auto mb-3 group-hover:scale-110 transition-transform border-2" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}15`, borderColor: `${COLORS.BRONZE_LIGHT}30` }}>
      <Icon className="h-7 w-7 sm:h-8 sm:w-8" style={{ color: COLORS.BRONZE_LIGHT }} />
    </div>
    <p className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: COLORS.BRONZE_DARK }}>{value}</p>
    <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</p>
  </div>
);

interface PhilosophyCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon: Icon, title, description, color }) => (
  <div className="text-center p-5 sm:p-6 rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 bg-white group" style={{ borderColor: `${color}40` }}>
    <div className="p-3 rounded-full w-fit mx-auto mb-3 group-hover:scale-110 transition-transform border-2" style={{ backgroundColor: `${color}15`, borderColor: `${color}30` }}>
      <Icon className="h-7 w-7 sm:h-8 sm:w-8" style={{ color }} />
    </div>
    <h4 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: COLORS.BRONZE_DARK }}>{title}</h4>
    <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
  </div>
);

interface SkillCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description, color }) => (
  <div className="text-center p-5 sm:p-6 rounded-xl border-2 shadow-lg transition-all hover:shadow-2xl hover:scale-[1.02] bg-white group relative overflow-hidden" style={{ borderColor: color }}>
    <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ background: `linear-gradient(135deg, transparent 50%, ${color} 50%)` }} />
    <div className="relative z-10">
      <div className="p-3 rounded-full w-fit mx-auto mb-3 group-hover:scale-110 transition-transform border-2" style={{ backgroundColor: `${color}15`, borderColor: `${color}30` }}>
        <Icon className="h-7 w-7 sm:h-8 sm:w-8" style={{ color }} />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center justify-center gap-2" style={{ color: COLORS.BRONZE_DARK }}>
        <span>{title}</span>
        <CheckCircle className="h-4 w-4" style={{ color }} />
      </h3>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

// --- HERO SECTION ---
const HeroSection = () => (
  <div 
    className="mb-12 sm:mb-16 pt-8 sm:pt-12 pb-8 sm:pb-12 bg-white rounded-2xl shadow-2xl border-2 relative overflow-hidden"
    style={{ borderColor: COLORS.BRONZE_LIGHT }}
  >
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <div className="absolute top-5 right-5 w-32 h-32 rounded-full border-4" style={{ borderColor: COLORS.BRONZE_LIGHT }} />
      <div className="absolute bottom-5 left-5 w-40 h-40 rounded-full border-4" style={{ borderColor: COLORS.FOREST_GREEN }} />
    </div>

    <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Profile Image */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 flex-shrink-0 mb-6 md:mb-0 md:mr-10 relative">
        <div className="absolute inset-0 rounded-full animate-ping opacity-15" style={{ backgroundColor: COLORS.BRONZE_LIGHT }} />
        <div className="absolute inset-2 rounded-full border-4 opacity-40" style={{ borderColor: COLORS.FOREST_GREEN }} />
        <div
          className="absolute inset-0 w-full h-full rounded-full border-4 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white hover:scale-105 transition-transform shadow-xl"
          style={{ backgroundColor: COLORS.BRONZE_DARK, borderColor: COLORS.BRONZE_LIGHT }}
        >
          EM
        </div>
        <div className="absolute -bottom-2 -right-2 z-10">
          <div className="p-2 rounded-full shadow-lg border-2 border-white" style={{ background: `linear-gradient(135deg, ${COLORS.GOLD}, #9a7d27)` }}>
            <Trophy className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="absolute -top-2 -right-2 z-10">
          <div className="p-2 rounded-full shadow-lg border-2 border-white" style={{ background: `linear-gradient(135deg, ${COLORS.FOREST_GREEN}, #4a7a38)` }}>
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center md:text-left min-w-0 w-full">
        <div className="mb-4 flex flex-wrap items-center justify-center md:justify-start gap-2">
          <Badge className="text-white text-sm font-medium shadow-md animate-pulse px-3 py-1.5 border-2 border-white/30" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
            <Star className="h-4 w-4 mr-2" />
            Expert Global Educator
          </Badge>
          <Badge className="text-white text-sm font-medium shadow-md px-3 py-1.5 border-2 border-white/30" style={{ backgroundColor: COLORS.GOLD }}>
            <Award className="h-4 w-4 mr-2" />
            IB Examiner
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 flex flex-wrap items-center justify-center md:justify-start gap-3" style={{ color: COLORS.BRONZE_DARK }}>
          <Sparkles className="h-8 w-8" style={{ color: COLORS.GOLD }} />
          Eliud Mautia
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-xl leading-relaxed">
          Nurturing <strong style={{ color: COLORS.FOREST_GREEN }}>Mathematical Excellence</strong> across <strong style={{ color: COLORS.BRONZE_LIGHT }}>IBDP, IGCSE, and A-Level</strong> curricula with over a decade of international experience.
        </p>

        {/* Quick highlights */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border-2" style={{ borderColor: COLORS.BRONZE_LIGHT }}>
            <Clock className="h-4 w-4" style={{ color: COLORS.BRONZE_LIGHT }} />
            <span className="text-sm font-medium text-gray-700">10+ Years</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border-2" style={{ borderColor: COLORS.FOREST_GREEN }}>
            <Globe className="h-4 w-4" style={{ color: COLORS.FOREST_GREEN }} />
            <span className="text-sm font-medium text-gray-700">3 Countries</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border-2" style={{ borderColor: COLORS.BRONZE_DARK }}>
            <Users className="h-4 w-4" style={{ color: COLORS.BRONZE_DARK }} />
            <span className="text-sm font-medium text-gray-700">1000+ Students</span>
          </div>
        </div>

        <a href="/MAUTIA%20ELIUD%20RESUME.pdf" download className="inline-block">
          <Button
            size="lg"
            className="text-white shadow-xl hover:scale-[1.03] flex items-center group border-2 border-white/30"
            style={{ backgroundColor: COLORS.BRONZE_DARK, boxShadow: `0 8px 20px -3px ${COLORS.BRONZE_DARK}50` }}
          >
            <Download className="h-5 w-5 mr-3 group-hover:animate-bounce" />
            <span>Download CV Now</span>
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const About: React.FC = () => {
  return (
    <div 
      className="min-h-screen font-['Inter', sans-serif] antialiased pt-6 sm:pt-8 pb-12 relative"
      style={{ background: `linear-gradient(135deg, ${COLORS.CREAM} 0%, ${COLORS.BEIGE} 50%, #f0e6d2 100%)`, backgroundAttachment: 'fixed' }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full animate-pulse" style={{ backgroundColor: COLORS.BRONZE_LIGHT }} />
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full animate-pulse" style={{ backgroundColor: COLORS.FOREST_GREEN }} />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <HeroSection />

          {/* Skills Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 shadow-lg border-2 bg-white" style={{ borderColor: COLORS.BRONZE_LIGHT }}>
                <Brain className="h-7 w-7" style={{ color: COLORS.BRONZE_LIGHT }} />
              </div>
              <h2 className="text-3xl font-bold mb-3 flex items-center justify-center gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                <Zap className="h-7 w-7" style={{ color: COLORS.FOREST_GREEN }} />
                Core Skills & Expertise
              </h2>
              <p className="text-base max-w-2xl mx-auto text-gray-700">
                A comprehensive skill set built through years of dedicated teaching and continuous professional development
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <SkillCard icon={BookOpen} title="Mathematics Expertise" description="Deep knowledge in IBDP, IGCSE, and A-Level curricula, with a focus on Analysis and Approaches." color={COLORS.BRONZE_LIGHT} />
              <SkillCard icon={Users} title="Teaching & Mentoring" description="Over 10 years nurturing independent learners through innovative teaching methods." color={COLORS.FOREST_GREEN} />
              <SkillCard icon={Award} title="IB Examination" description="Certified IB DP Mathematics Examiner for MAA, ensuring high standards in assessment." color={COLORS.GOLD} />
              <SkillCard icon={Target} title="Leadership & Organization" description="Strong skills in planning, communication, and teamwork." color={COLORS.BRONZE_DARK} />
              <SkillCard icon={Puzzle} title="Problem Solving" description="Advanced analytical skills applied to real-world educational challenges." color={COLORS.FOREST_GREEN} />
              <SkillCard icon={Globe} title="Global Perspective" description="International experience across diverse educational systems." color={COLORS.BRONZE_LIGHT} />
            </div>
          </div>

          {/* Highlights Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 shadow-lg" style={{ background: `linear-gradient(135deg, ${COLORS.GOLD}, #9a7d27)` }}>
                <Trophy className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3" style={{ color: COLORS.BRONZE_DARK }}>Career Highlights</h2>
              <p className="text-base max-w-2xl mx-auto text-gray-700">Proven track record of excellence in international mathematics education</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <HighlightCard value="10+" label="Years Experience" icon={Clock} />
              <HighlightCard value="1000+" label="Students Taught" icon={Users} />
              <HighlightCard value="4+" label="Institutions" icon={Building2} />
              <HighlightCard value="3" label="Countries" icon={Globe} />
            </div>
          </div>

          {/* Professional Summary & Founder */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white border-2 relative overflow-hidden group" style={{ borderColor: COLORS.BRONZE_LIGHT }}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2.5 rounded-full mr-3 border-2" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}15`, borderColor: `${COLORS.BRONZE_LIGHT}30` }}>
                    <Users className="h-6 w-6" style={{ color: COLORS.BRONZE_LIGHT }} />
                  </div>
                  <h2 className="text-xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>Professional Summary</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-base text-gray-700 leading-relaxed flex items-start">
                    <Shield className="h-5 w-5 mr-2 mt-1 flex-shrink-0" style={{ color: COLORS.FOREST_GREEN }} />
                    <span>Highly motivated and innovative professional with a flexible mindset, adept at embracing new ideas and driven by a commitment to achieving results through teamwork.</span>
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed flex items-start">
                    <Heart className="h-5 w-5 mr-2 mt-1 flex-shrink-0" style={{ color: COLORS.BRONZE_LIGHT }} />
                    <span>Advanced skills in communication, planning, socialization, and problem solving empower me to excel as a mathematics educator.</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge className="text-sm border-2" style={{ backgroundColor: `${COLORS.FOREST_GREEN}15`, color: COLORS.FOREST_GREEN, borderColor: `${COLORS.FOREST_GREEN}30` }}>
                    <Target className="h-3 w-3 mr-1" /> Leadership
                  </Badge>
                  <Badge className="text-sm border-2" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}15`, color: COLORS.BRONZE_LIGHT, borderColor: `${COLORS.BRONZE_LIGHT}30` }}>
                    <Compass className="h-3 w-3 mr-1" /> Innovation
                  </Badge>
                  <Badge className="text-sm border-2" style={{ backgroundColor: `${COLORS.BRONZE_DARK}15`, color: COLORS.BRONZE_DARK, borderColor: `${COLORS.BRONZE_DARK}30` }}>
                    <MessageCircle className="h-3 w-3 mr-1" /> Communication
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 relative overflow-hidden group" style={{ borderColor: COLORS.FOREST_GREEN }}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2.5 rounded-full mr-3 border-2" style={{ backgroundColor: `${COLORS.FOREST_GREEN}15`, borderColor: `${COLORS.FOREST_GREEN}30` }}>
                    <Building2 className="h-6 w-6" style={{ color: COLORS.FOREST_GREEN }} />
                  </div>
                  <h2 className="text-xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>Founder of Elton Soma School</h2>
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  <Rocket className="inline h-5 w-5 mr-2" style={{ color: COLORS.GOLD }} />
                  Established Elton Soma School in Kenya to provide quality STEM education, fostering innovation and critical thinking among students.
                </p>
                <a href="https://soma-school.onrender.com/" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="text-white shadow-md hover:shadow-lg hover:scale-[1.02] group border-2 border-white/30" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
                    <Globe className="h-4 w-4 mr-2" />
                    Visit School Website
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact & Languages */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white border-2 md:col-span-2" style={{ borderColor: COLORS.GOLD }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2.5 rounded-full mr-3 shadow-lg border-2 border-white/30" style={{ backgroundColor: COLORS.GOLD }}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>Key Certifications & Expertise</h2>
                </div>
                <ul className="space-y-4 text-base text-gray-700">
                  <li className="flex items-start border-l-4 pl-4 py-2 hover:bg-gray-50 rounded-r-lg transition-colors" style={{ borderColor: COLORS.FOREST_GREEN }}>
                    <div className="p-2 rounded-full mr-3" style={{ backgroundColor: `${COLORS.FOREST_GREEN}15` }}>
                      <Trophy className="h-5 w-5" style={{ color: COLORS.FOREST_GREEN }} />
                    </div>
                    <p><strong>IB DP Mathematics Examiner:</strong> Qualified examiner for IBDP Mathematics Analysis and Approaches (MAA).</p>
                  </li>
                  <li className="flex items-start border-l-4 pl-4 py-2 hover:bg-gray-50 rounded-r-lg transition-colors" style={{ borderColor: COLORS.BRONZE_LIGHT }}>
                    <div className="p-2 rounded-full mr-3" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}15` }}>
                      <Flag className="h-5 w-5" style={{ color: COLORS.BRONZE_LIGHT }} />
                    </div>
                    <p><strong>Cambridge International Certification:</strong> Experienced in IGCSE and A-Level Mathematics teaching.</p>
                  </li>
                  <li className="flex items-start border-l-4 pl-4 py-2 hover:bg-gray-50 rounded-r-lg transition-colors" style={{ borderColor: COLORS.GOLD }}>
                    <div className="p-2 rounded-full mr-3" style={{ backgroundColor: `${COLORS.GOLD}15` }}>
                      <Puzzle className="h-5 w-5" style={{ color: COLORS.GOLD }} />
                    </div>
                    <p><strong>Technology Integration Specialist:</strong> Proficient in GeoGebra, Desmos, and digital platforms.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="bg-white border-2" style={{ borderColor: COLORS.BRONZE_LIGHT }}>
                <CardContent className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full mr-3 shadow-md border-2 border-white/30" style={{ backgroundColor: COLORS.BRONZE_LIGHT }}>
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: COLORS.BRONZE_DARK }}>Contact</h3>
                  </div>
                  <div className="space-y-1">
                    <InfoItem icon={Phone} text="+86 130 3830 3477" href="tel:+8613038303477" iconColor={COLORS.FOREST_GREEN} />
                    <InfoItem icon={Mail} text="mautiaeliud@gmail.com" href="mailto:mautiaeliud@gmail.com" iconColor={COLORS.BRONZE_LIGHT} />
                    <InfoItem icon={MapPin} text="Chongqing, China" iconColor={COLORS.BRONZE_DARK} />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2" style={{ borderColor: COLORS.FOREST_GREEN }}>
                <CardContent className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full mr-3 shadow-md border-2 border-white/30" style={{ backgroundColor: COLORS.FOREST_GREEN }}>
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: COLORS.BRONZE_DARK }}>Languages</h3>
                  </div>
                  <div className="space-y-1">
                    <LanguageInfo flag="🇺🇸" language="English" proficiency="Native/Bilingual" color={COLORS.BRONZE_DARK} percentage={100} />
                    <LanguageInfo flag="🇰🇪" language="Kiswahili" proficiency="Native/Bilingual" color={COLORS.BRONZE_LIGHT} percentage={100} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <Card className="bg-white border-2 mb-12" style={{ borderColor: COLORS.BRONZE_LIGHT }}>
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 shadow-lg" style={{ background: `linear-gradient(135deg, ${COLORS.BRONZE_LIGHT}, ${COLORS.FOREST_GREEN})` }}>
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-3 flex items-center justify-center gap-3" style={{ color: COLORS.BRONZE_DARK }}>
                  <Heart className="h-6 w-6" style={{ color: COLORS.BRONZE_LIGHT }} />
                  Teaching Philosophy
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <PhilosophyCard icon={Heart} title="Student-Centric" description="Cultivating a supportive, inclusive classroom where every student feels safe to engage and explore complex ideas." color={COLORS.BRONZE_LIGHT} />
                <PhilosophyCard icon={Brain} title="Active Inquiry" description="Moving beyond rote memorization to promote conceptual understanding through critical thinking and problem-solving." color={COLORS.FOREST_GREEN} />
                <PhilosophyCard icon={Puzzle} title="Tech-Forward" description="Integrating digital tools like GeoGebra and Desmos to visualize abstract concepts and facilitate discovery-based learning." color={COLORS.BRONZE_DARK} />
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <div 
            className="text-center p-8 sm:p-10 rounded-2xl relative overflow-hidden border-2 border-white/20"
            style={{ background: `linear-gradient(135deg, ${COLORS.BRONZE_DARK} 0%, ${COLORS.BRONZE_LIGHT} 100%)` }}
          >
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-white shadow-lg">
                <Briefcase className="h-7 w-7" style={{ color: COLORS.BRONZE_DARK }} />
              </div>
              <p className="text-2xl sm:text-3xl font-bold mb-3 text-white">Ready to Explore More?</p>
              <p className="text-base mb-6 text-white/90 max-w-2xl mx-auto">
                Discover detailed professional experience, qualifications, and the journey that shaped this educational career
              </p>
              <a href="/MAUTIA%20ELIUD%20RESUME.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-white shadow-lg hover:scale-[1.03] border-2 border-white/30" style={{ backgroundColor: COLORS.BRONZE_DARK }}>
                  <Download className="h-5 w-5 mr-2" />
                  Download Full Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;