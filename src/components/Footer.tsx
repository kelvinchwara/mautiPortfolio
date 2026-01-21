import React from 'react';
import {
  Mail, Phone, MapPin, Linkedin, Heart, Send, ArrowRight,
  Globe, Award, BookOpen, Users, Target, Sparkles, Star,
  ExternalLink, Facebook, Twitter, Instagram, Youtube,
  Clock, TrendingUp, Zap, MessageCircle, Download,
  GraduationCap, Briefcase, Coffee, Rocket, Palette,
  ChevronRight, Shield, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

const COLORS = {
  BRONZE_LIGHT: '#A37B5C',
  BRONZE_DARK: '#5E4A35',
  BEIGE: '#d1ac92',
  FOREST_GREEN: '#6AA84F',
  CREAM: '#F5F1E8',
  GOLD: '#D4AF37',
  BLUE: '#4A90E2',
} as const;

const FOOTER_DATA = {
  profile: {
    name: 'Eliud Mautia',
    title: 'Mathematics Educator',
    description: 'Dedicated to fostering creativity and higher-order thinking through innovative teaching methods and personalized learning experiences.',
    badges: [
      { icon: Award, label: 'M.Ed.' },
      { icon: Star, label: 'IB Certified' },
      { icon: TrendingUp, label: 'Expert' },
    ],
  },
  
  stats: [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '1000+', label: 'Students Taught' },
    { icon: Globe, value: '2', label: 'Languages' },
    { icon: Star, value: 'IB', label: 'Certified' },
  ],

  quickLinks: [
    { name: 'About', to: '/about', icon: Users },
    { name: 'Experience', to: '/experience', icon: Briefcase },
    { name: 'Skills', to: '/skills', icon: Target },
    { name: 'Education', to: '/education', icon: GraduationCap },
    { name: 'Resources', to: '/resources', icon: BookOpen },
    { name: 'Contact', to: '/contact', icon: MessageCircle },
  ],

  resources: [
    { name: 'Teaching Philosophy', to: '/resources', icon: BookOpen },
    { name: 'Publications', to: '/resources', icon: Star },
    { name: 'Certifications', to: '/resources', icon: Award },
  ],

  socialLinks: [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/eliudmautia-5245274b',
      label: 'LinkedIn',
      color: COLORS.BLUE
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      color: COLORS.BRONZE_LIGHT
    },
    {
      icon: Youtube,
      href: '#',
      label: 'YouTube',
      color: COLORS.BRONZE_DARK
    },
  ],

  contact: {
    email: 'mautiaeliud@gmail.com',
    phone: '+86 130 3830 3477',
    location: 'Chongqing, China',
    availability: 'Available for consultation',
  },

  highlights: [
    { icon: Globe, text: 'Teaching Excellence Since 2010' },
    { icon: Award, text: 'IB & Cambridge Certified' },
    { icon: Users, text: '1000+ Students Impacted' },
    { icon: Coffee, text: 'Passionate About Mathematics' },
  ],

  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Sitemap', href: '#' },
  ],
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

// Decorative Background Component
const DecorativeBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white animate-pulse" />
    <div 
      className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white animate-pulse" 
      style={{ animationDelay: '1s' }} 
    />
    <div 
      className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-white animate-pulse" 
      style={{ animationDelay: '2s' }} 
    />
  </div>
);

// Wave Divider Component
const WaveDivider = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        className="fill-current"
        style={{ color: COLORS.CREAM }}
      />
    </svg>
  </div>
);

// Footer Link Component
interface FooterLinkProps {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, icon: Icon, children }) => (
  <Link 
    to={to}
    className="flex items-center gap-2 text-gray-100 hover:text-white transition-all duration-300 group py-2 border-b border-transparent hover:border-white/20"
  >
    <Icon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
    <span className="group-hover:translate-x-1 transition-transform duration-300 flex-1">
      {children}
    </span>
    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
  </Link>
);

// Contact Item Component
interface ContactItemProps {
  icon: React.ElementType;
  href?: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, href, children }) => {
  const content = (
    <div className="flex items-center gap-3 text-gray-100 hover:text-white transition-all duration-300 group py-2">
      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-sm">{children}</span>
    </div>
  );

  return href ? <a href={href} className="block">{content}</a> : <div>{content}</div>;
};

// Social Button Component
interface SocialButtonProps {
  icon: React.ElementType;
  href: string;
  label: string;
  color: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
    title={label}
  >
    <div className="p-3 rounded-full bg-white/10 hover:bg-white transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg border border-white/20">
      <Icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
    </div>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-gray-800 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
      {label}
    </div>
  </a>
);

// Stat Card Component
interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 group border border-white/10">
    <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-xs text-gray-200">{label}</div>
  </div>
);

// Profile Section Component
const ProfileSection = () => (
  <div className="lg:col-span-1">
    <div className="flex items-center gap-3 mb-4">
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2 border-white/30"
        style={{ background: `linear-gradient(135deg, ${COLORS.BRONZE_DARK}, ${COLORS.FOREST_GREEN})` }}
      >
        <GraduationCap className="h-7 w-7 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{FOOTER_DATA.profile.name}</h3>
        <div className="flex items-center gap-1 text-xs text-gray-200">
          <Sparkles className="h-3 w-3" />
          <span>{FOOTER_DATA.profile.title}</span>
        </div>
      </div>
    </div>
    
    <p className="text-gray-100 text-sm mb-4 leading-relaxed">
      {FOOTER_DATA.profile.description}
    </p>

    {/* Achievement Badges */}
    <div className="flex flex-wrap gap-2 mb-4">
      {FOOTER_DATA.profile.badges.map((badge, idx) => (
        <div 
          key={idx}
          className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white flex items-center gap-1.5 border border-white/20"
        >
          <badge.icon className="h-3 w-3" />
          {badge.label}
        </div>
      ))}
    </div>

    {/* Social Links */}
    <div className="flex gap-3">
      {FOOTER_DATA.socialLinks.map((social, idx) => (
        <SocialButton key={idx} {...social} />
      ))}
    </div>
  </div>
);

// Quick Links Section
const QuickLinksSection = () => (
  <div>
    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 pb-2 border-b border-white/20">
      <Zap className="h-5 w-5" style={{ color: COLORS.GOLD }} />
      Quick Links
    </h3>
    <ul className="space-y-1 text-sm">
      {FOOTER_DATA.quickLinks.map((link) => (
        <li key={link.name}>
          <FooterLink to={link.to} icon={link.icon}>
            {link.name}
          </FooterLink>
        </li>
      ))}
    </ul>
  </div>
);

// Resources Section
const ResourcesSection = () => (
  <div>
    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 pb-2 border-b border-white/20">
      <BookOpen className="h-5 w-5" style={{ color: COLORS.GOLD }} />
      Resources
    </h3>
    <ul className="space-y-1 text-sm mb-6">
      {FOOTER_DATA.resources.map((link) => (
        <li key={link.name}>
          <FooterLink to={link.to} icon={link.icon}>
            {link.name}
          </FooterLink>
        </li>
      ))}
    </ul>

    {/* Download Resume Button */}
    <div className="mb-4">
      <a
        href="/MAUTIA%20ELIUD%20RESUME.pdf"
        download
        className="flex items-center gap-2 px-4 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm font-semibold group border border-white/30"
      >
        <Download className="h-4 w-4 group-hover:animate-bounce" />
        Download CV
        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
      </a>
    </div>

    {/* Newsletter Signup */}
    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
      <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
        <Send className="h-4 w-4" />
        Stay Updated
      </h4>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 px-3 py-2 rounded bg-white/20 text-white placeholder-gray-300 text-sm border border-white/20 focus:outline-none focus:border-white/40"
        />
        <button 
          className="px-3 py-2 rounded text-white text-sm font-medium transition-all hover:scale-105"
          style={{ backgroundColor: COLORS.FOREST_GREEN }}
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

// Contact Section
const ContactSection = () => (
  <div>
    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 pb-2 border-b border-white/20">
      <MessageCircle className="h-5 w-5" style={{ color: COLORS.GOLD }} />
      Get in Touch
    </h3>
    <div className="space-y-3 mb-6">
      <ContactItem icon={Mail} href={`mailto:${FOOTER_DATA.contact.email}`}>
        {FOOTER_DATA.contact.email}
      </ContactItem>
      <ContactItem icon={Phone} href={`tel:${FOOTER_DATA.contact.phone}`}>
        {FOOTER_DATA.contact.phone}
      </ContactItem>
      <ContactItem icon={MapPin}>
        {FOOTER_DATA.contact.location}
      </ContactItem>
      <ContactItem icon={Clock}>
        {FOOTER_DATA.contact.availability}
      </ContactItem>
    </div>

    {/* Quick Contact Form */}
    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
      <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
        <MessageCircle className="h-4 w-4" />
        Quick Message
      </h4>
      <textarea
        placeholder="Type your message..."
        className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-300 text-sm border border-white/20 focus:outline-none focus:border-white/40 mb-2 resize-none"
        rows={3}
      />
      <button 
        className="w-full px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
        style={{ backgroundColor: COLORS.BRONZE_LIGHT }}
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </div>
  </div>
);

// Decorative Divider
const DecorativeDivider = () => (
  <div className="relative my-8">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-white/30" />
    </div>
    <div className="relative flex justify-center">
      <div className="px-6 bg-transparent">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-white opacity-70" />
          <span className="text-white text-sm opacity-70">Crafted with passion</span>
          <Heart className="h-5 w-5 text-white opacity-70" />
        </div>
      </div>
    </div>
  </div>
);

// Bottom Bar Component
const BottomBar = () => (
  <div className="pt-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center gap-2 text-gray-200 text-sm">
          <span>© Eliud Mautia 2025 All Rights Reserved</span>
        </div>

        {/* Designer Credit */}
        <div className="flex items-center gap-2 text-gray-300 text-xs">
          <Palette className="h-3 w-3" style={{ color: COLORS.GOLD }} />
          <span>Designed by</span>
          <a
            href="https://www.linkedin.com/in/kelvin-chwara"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-white transition-colors underline decoration-dotted"
          >
            Kelvin Chwara
          </a>
        </div>
      </div>

      {/* Legal Links */}
      <div className="flex gap-4 text-sm">
        {FOOTER_DATA.legal.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium border border-white/20 hover:scale-105"
      >
        <ArrowRight className="h-4 w-4 rotate-[-90deg]" />
        Back to Top
      </button>
    </div>
  </div>
);

// ============================================================================
// MAIN FOOTER COMPONENT
// ============================================================================

const Footer = () => {
  return (
    <footer 
      className="relative overflow-hidden pt-20" 
      style={{ 
        background: `linear-gradient(135deg, ${COLORS.BRONZE_DARK} 0%, ${COLORS.BRONZE_LIGHT} 50%, ${COLORS.BEIGE} 100%)` 
      }}
    >
      <DecorativeBackground />
      <WaveDivider />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {FOOTER_DATA.stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <ProfileSection />
          <QuickLinksSection />
          <ResourcesSection />
          <ContactSection />
        </div>

        <DecorativeDivider />
        <BottomBar />
        
      </div>
    </footer>
  );
};

export default Footer;