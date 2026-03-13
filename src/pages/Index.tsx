import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Mail, Phone, MapPin, GraduationCap, Briefcase, Award, ArrowRight,
  Star, Trophy, Target, BookOpen, MessageCircle, Sparkles, Download
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

const Index = () => {
  return (
    <div className="min-h-screen font-['Inter', sans-serif] antialiased" style={{ backgroundColor: COLORS.BEIGE }}>
      
      {/* Profile Image Section - Top Div */}
      <div 
        className="w-full flex justify-center pt-8 pb-6"
        style={{ background: `linear-gradient(180deg, ${COLORS.BRONZE_DARK} 0%, ${COLORS.BRONZE_LIGHT} 60%, ${COLORS.BEIGE} 100%)` }}
      >
        <div className="relative">
          {/* Decorative Ring */}
          <div 
            className="absolute inset-0 rounded-full animate-pulse opacity-30"
            style={{ 
              width: '220px', 
              height: '220px', 
              border: `4px solid ${COLORS.GOLD}`,
              transform: 'translate(-10px, -10px)'
            }}
          />
          {/* Profile Image Container */}
          <div 
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 shadow-2xl"
            style={{ borderColor: COLORS.GOLD }}
          >
            <img 
              src="/eliu.png" 
              alt="Eliud Mautia" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Badge */}
          <div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full border-2 shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${COLORS.FOREST_GREEN} 0%, #4a7a38 100%)`,
              borderColor: COLORS.CREAM
            }}
          >
            <div className="flex items-center gap-1.5 text-white text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>Mathematics Educator</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brief Introduction Section */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: COLORS.BRONZE_DARK }}>
            Eliud Mautia
          </h1>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 sm:w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }} />
            <Star className="h-5 w-5" style={{ color: COLORS.GOLD }} />
            <div className="w-12 sm:w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.BRONZE_LIGHT }} />
          </div>

          {/* Role Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span 
              className="px-3 py-1.5 rounded-full text-sm font-medium text-white border-2"
              style={{ background: COLORS.BRONZE_DARK, borderColor: 'rgba(255,255,255,0.3)' }}
            >
              IGCSE Teacher
            </span>
            <span 
              className="px-3 py-1.5 rounded-full text-sm font-medium text-white border-2"
              style={{ background: COLORS.BRONZE_LIGHT, borderColor: 'rgba(255,255,255,0.3)' }}
            >
              IBDP Teacher
            </span>
            <span 
              className="px-3 py-1.5 rounded-full text-sm font-medium text-white border-2"
              style={{ background: COLORS.FOREST_GREEN, borderColor: 'rgba(255,255,255,0.3)' }}
            >
              A-Level Teacher
            </span>
          </div>

          {/* Brief Bio */}
          <p className="text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: COLORS.BRONZE_DARK }}>
            Highly motivated mathematics educator with extensive experience across international curricula. 
            Passionate about fostering independent learning through innovative teaching methods and 
            dedicated to student success.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl border-2 text-center" style={{ backgroundColor: COLORS.CREAM, borderColor: COLORS.BRONZE_LIGHT }}>
              <div className="text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>10+</div>
              <div className="text-sm" style={{ color: COLORS.BRONZE_LIGHT }}>Years Experience</div>
            </div>
            <div className="p-4 rounded-xl border-2 text-center" style={{ backgroundColor: COLORS.CREAM, borderColor: COLORS.BRONZE_LIGHT }}>
              <div className="text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>1000+</div>
              <div className="text-sm" style={{ color: COLORS.BRONZE_LIGHT }}>Students Taught</div>
            </div>
            <div className="p-4 rounded-xl border-2 text-center" style={{ backgroundColor: COLORS.CREAM, borderColor: COLORS.BRONZE_LIGHT }}>
              <div className="text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>3</div>
              <div className="text-sm" style={{ color: COLORS.BRONZE_LIGHT }}>Countries</div>
            </div>
            <div className="p-4 rounded-xl border-2 text-center" style={{ backgroundColor: COLORS.CREAM, borderColor: COLORS.BRONZE_LIGHT }}>
              <div className="text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>IB</div>
              <div className="text-sm" style={{ color: COLORS.BRONZE_LIGHT }}>Certified</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink to="/contact">
              <Button
                className="text-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all border-2 text-lg font-semibold"
                style={{ backgroundColor: COLORS.FOREST_GREEN, borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </RouterLink>
            <a href="/MAUTIA%20ELIUD%20RESUME.pdf" download>
              <Button
                className="text-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all border-2 text-lg font-semibold"
                style={{ backgroundColor: COLORS.GOLD, borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group">
              <div 
                className="p-5 rounded-xl border-4 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                style={{ backgroundColor: COLORS.CREAM, borderColor: COLORS.BRONZE_LIGHT }}
              >
                <Target className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform" style={{ color: COLORS.BRONZE_DARK }} />
                <h3 className="font-semibold mb-1" style={{ color: COLORS.BRONZE_DARK }}>About Me</h3>
                <p className="text-xs" style={{ color: COLORS.BRONZE_LIGHT }}>Learn more about me</p>
                <RouterLink to="/about">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 w-full group-hover:translate-x-1 transition-all border-2 font-semibold text-sm"
                    style={{ 
                      borderColor: COLORS.BRONZE_LIGHT,
                      color: COLORS.BRONZE_DARK,
                      backgroundColor: COLORS.CREAM
                    }}
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </RouterLink>
              </div>
            </div>
            <div className="group">
              <div 
                className="p-5 rounded-xl border-4 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                style={{ backgroundColor: COLORS.CREAM, borderColor: COLORS.FOREST_GREEN }}
              >
                <Award className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform" style={{ color: COLORS.BRONZE_DARK }} />
                <h3 className="font-semibold mb-1" style={{ color: COLORS.BRONZE_DARK }}>Skills</h3>
                <p className="text-xs" style={{ color: COLORS.BRONZE_LIGHT }}>My expertise</p>
                <RouterLink to="/skills">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 w-full group-hover:translate-x-1 transition-all border-2 font-semibold text-sm"
                    style={{ 
                      borderColor: COLORS.FOREST_GREEN,
                      color: COLORS.BRONZE_DARK,
                      backgroundColor: COLORS.CREAM
                    }}
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </RouterLink>
              </div>
            </div>
            <div className="group">
              <div 
                className="p-5 rounded-xl border-4 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                style={{ backgroundColor: COLORS.CREAM, borderColor: COLORS.BRONZE_DARK }}
              >
                <Briefcase className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform" style={{ color: COLORS.BRONZE_DARK }} />
                <h3 className="font-semibold mb-1" style={{ color: COLORS.BRONZE_DARK }}>Experience</h3>
                <p className="text-xs" style={{ color: COLORS.BRONZE_LIGHT }}>My journey</p>
                <RouterLink to="/experience">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 w-full group-hover:translate-x-1 transition-all border-2 font-semibold text-sm"
                    style={{ 
                      borderColor: COLORS.BRONZE_DARK,
                      color: COLORS.BRONZE_DARK,
                      backgroundColor: COLORS.CREAM
                    }}
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </RouterLink>
              </div>
            </div>
            <div className="group">
              <div 
                className="p-5 rounded-xl border-4 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                style={{ backgroundColor: COLORS.CREAM, borderColor: COLORS.GOLD }}
              >
                <GraduationCap className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform" style={{ color: COLORS.BRONZE_DARK }} />
                <h3 className="font-semibold mb-1" style={{ color: COLORS.BRONZE_DARK }}>Education</h3>
                <p className="text-xs" style={{ color: COLORS.BRONZE_LIGHT }}>My qualifications</p>
                <RouterLink to="/education">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 w-full group-hover:translate-x-1 transition-all border-2 font-semibold text-sm"
                    style={{ 
                      borderColor: COLORS.GOLD,
                      color: COLORS.BRONZE_DARK,
                      backgroundColor: COLORS.CREAM
                    }}
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;