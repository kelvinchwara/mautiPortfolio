import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Phone, MapPin, Linkedin, Github, Twitter,
  Download, ExternalLink, Sparkles, GraduationCap, Award,
  MessageCircle, ChevronDown, Sun, Moon, Star, Zap, Globe,
  BookOpen, Target, TrendingUp, Users, Briefcase
} from 'lucide-react';

// --- SHIM COMPONENTS ---

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  size?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, variant, size, style, onClick }) => (
  <button
    className={`
      font-semibold rounded-lg px-4 py-2 transition duration-300 ease-in-out
      ${variant === 'ghost' ? 'bg-transparent hover:bg-gray-100' : ''}
      ${size === 'sm' ? 'text-sm px-3 py-1' : ''}
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
  BLUE: '#4A90E2',
};

// --- ANIMATED BADGE COMPONENT ---

interface AnimatedBadgeProps {
  text: string;
  icon: React.ReactNode;
  color: string;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({ text, icon, color }) => (
  <div 
    className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium shadow-md hover:scale-105 transition-transform cursor-pointer"
    style={{ backgroundColor: color, color: 'white' }}
  >
    {icon}
    <span>{text}</span>
  </div>
);

// --- CONTACT ITEM COMPONENT ---

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  color: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href, color }) => {
  const content = (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
      <div className="p-1.5 rounded-full group-hover:scale-110 transition-transform" style={{ backgroundColor: `${color}20` }}>
        <div style={{ color }} className="flex items-center">
          {icon}
        </div>
      </div>
      <span className="text-sm text-gray-700 group-hover:text-gray-900">{text}</span>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : content;
};

// --- NAV ITEM COMPONENT ---

interface NavItemProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, href, icon, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium
      ${isActive 
        ? 'text-white shadow-lg' 
        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      }
    `}
    style={isActive ? { backgroundColor: COLORS.BRONZE_DARK } : {}}
  >
    <span className="text-sm">{icon}</span>
    <span>{name}</span>
  </a>
);

// --- MAIN HEADER COMPONENT ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showQuickActions, setShowQuickActions] = useState(false);

  const navItems = [
    { name: 'About', href: '#about', icon: <Users className="h-4 w-4" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="h-4 w-4" /> },
    { name: 'Skills', href: '#skills', icon: <Target className="h-4 w-4" /> },
    { name: 'Education', href: '#education', icon: <GraduationCap className="h-4 w-4" /> },
    { name: 'Contact', href: '#contact', icon: <MessageCircle className="h-4 w-4" /> }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-4 w-4" />, href: '#', label: 'LinkedIn', color: COLORS.BLUE },
    { icon: <Github className="h-4 w-4" />, href: '#', label: 'GitHub', color: COLORS.BRONZE_DARK },
    { icon: <Twitter className="h-4 w-4" />, href: '#', label: 'Twitter', color: COLORS.FOREST_GREEN },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div 
        className="fixed top-0 w-full z-50 py-2 text-center text-white text-sm font-medium shadow-md"
        style={{ background: `linear-gradient(135deg, $${COLORS.BRONZE_DARK},$$ {COLORS.FOREST_GREEN})` }}
      >
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <Sparkles className="h-4 w-4" />
          <span>Award-Winning Mathematics Educator | IB & Cambridge Certified</span>
          <Star className="h-4 w-4" />
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`
          fixed top-10 w-full z-40 transition-all duration-300
          ${isScrolled 
            ? 'bg-white/98 backdrop-blur-lg shadow-xl' 
            : 'bg-white/95 backdrop-blur-sm'
          }
          border-b border-gray-200
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="relative group cursor-pointer">
                {/* Animated Avatar/Logo */}
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `linear-gradient(135deg, $${COLORS.BRONZE_LIGHT},$$ {COLORS.GOLD})` }}
                >
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                {/* Online Status Indicator */}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>
                    Eliud Mautia
                  </h1>
                  <Award className="h-5 w-5" style={{ color: COLORS.GOLD }} />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium" style={{ color: COLORS.BRONZE_LIGHT }}>
                    Mathematics Educator
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
                    <span className="text-xs text-gray-500">Available</span>
                  </div>
                </div>
                {/* Achievement Badges */}
                <div className="flex gap-1 mt-1">
                  <div className="px-2 py-0.5 rounded text-xs font-medium" style={{ backgroundColor: `${COLORS.GOLD}20`, color: COLORS.GOLD }}>
                    M.Ed.
                  </div>
                  <div className="px-2 py-0.5 rounded text-xs font-medium" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20`, color: COLORS.FOREST_GREEN }}>
                    IB Certified
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <NavItem
                  key={item.name}
                  {...item}
                  isActive={activeSection === item.name.toLowerCase()}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                />
              ))}
            </nav>

            {/* Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                className="flex items-center gap-2 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                style={{ backgroundColor: COLORS.BRONZE_DARK }}
              >
                <Download className="h-4 w-4" />
                Resume
              </Button>
              
              <Button
                className="flex items-center gap-2 border-2 hover:scale-105 transition-all"
                style={{ 
                  borderColor: COLORS.FOREST_GREEN, 
                  color: COLORS.FOREST_GREEN,
                  backgroundColor: 'white'
                }}
              >
                <MessageCircle className="h-4 w-4" />
                Contact
              </Button>

              {/* Quick Actions Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowQuickActions(!showQuickActions)}
                  className="p-2"
                >
                  <ChevronDown className={`h-5 w-5 transition-transform ${showQuickActions ? 'rotate-180' : ''}`} style={{ color: COLORS.BRONZE_DARK }} />
                </Button>

                {showQuickActions && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase">Quick Actions</p>
                    </div>
                    <div className="py-2 space-y-1">
                      <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                        <BookOpen className="h-4 w-4" style={{ color: COLORS.BRONZE_LIGHT }} />
                        <span className="text-sm text-gray-700">View Portfolio</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                        <Award className="h-4 w-4" style={{ color: COLORS.GOLD }} />
                        <span className="text-sm text-gray-700">Certifications</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                        <TrendingUp className="h-4 w-4" style={{ color: COLORS.FOREST_GREEN }} />
                        <span className="text-sm text-gray-700">Teaching Philosophy</span>
                      </a>
                    </div>
                    <div className="px-3 py-2 border-t border-gray-100">
                      <div className="flex gap-2">
                        {socialLinks.map((social, idx) => (
                          <a
                            key={idx}
                            href={social.href}
                            className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            title={social.label}
                          >
                            <div style={{ color: social.color }}>{social.icon}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" style={{ color: COLORS.BRONZE_DARK }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: COLORS.BRONZE_DARK }} />
              )}
            </Button>
          </div>

          {/* Contact Bar - Desktop */}
          <div className="hidden xl:flex items-center justify-between pb-3 border-t border-gray-100 pt-3">
            <div className="flex items-center gap-4">
              <ContactItem
                icon={<Mail className="h-4 w-4" />}
                text="mautiaeliud@gmail.com"
                href="mailto:mautiaeliud@gmail.com"
                color={COLORS.BRONZE_LIGHT}
              />
              <ContactItem
                icon={<Phone className="h-4 w-4" />}
                text="+254 123 456 789"
                href="tel:+254123456789"
                color={COLORS.FOREST_GREEN}
              />
              <ContactItem
                icon={<MapPin className="h-4 w-4" />}
                text="Nairobi, Kenya"
                color={COLORS.GOLD}
              />
            </div>

            <div className="flex items-center gap-3">
              <AnimatedBadge
                icon={<Globe className="h-3 w-3" />}
                text="3 Languages"
                color={COLORS.BRONZE_LIGHT}
              />
              <AnimatedBadge
                icon={<Users className="h-3 w-3" />}
                text="15+ Years Experience"
                color={COLORS.FOREST_GREEN}
              />
              <AnimatedBadge
                icon={<Star className="h-3 w-3" />}
                text="IB Expert"
                color={COLORS.GOLD}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 animate-fadeIn">
              <div className="px-2 pt-4 pb-3 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ 
                      backgroundColor: activeSection === item.name.toLowerCase() ? `${COLORS.BRONZE_DARK}10` : 'transparent'
                    }}
                  >
                    <div style={{ color: COLORS.BRONZE_DARK }}>
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="px-4 py-3 border-t border-gray-200 space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Contact Information</p>
                <ContactItem
                  icon={<Mail className="h-4 w-4" />}
                  text="mautiaeliud@gmail.com"
                  href="mailto:mautiaeliud@gmail.com"
                  color={COLORS.BRONZE_LIGHT}
                />
                <ContactItem
                  icon={<Phone className="h-4 w-4" />}
                  text="+254 123 456 789"
                  href="tel:+254123456789"
                  color={COLORS.FOREST_GREEN}
                />
                <ContactItem
                  icon={<MapPin className="h-4 w-4" />}
                  text="Nairobi, Kenya"
                  color={COLORS.GOLD}
                />
              </div>

              {/* Mobile Achievement Badges */}
              <div className="px-4 py-3 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Highlights</p>
                <div className="flex flex-wrap gap-2">
                  <AnimatedBadge
                    icon={<Globe className="h-3 w-3" />}
                    text="3 Languages"
                    color={COLORS.BRONZE_LIGHT}
                  />
                  <AnimatedBadge
                    icon={<Users className="h-3 w-3" />}
                    text="15+ Years"
                    color={COLORS.FOREST_GREEN}
                  />
                  <AnimatedBadge
                    icon={<Star className="h-3 w-3" />}
                    text="IB Certified"
                    color={COLORS.GOLD}
                  />
                  <AnimatedBadge
                    icon={<Award className="h-3 w-3" />}
                    text="M.Ed."
                    color={COLORS.BRONZE_DARK}
                  />
                </div>
              </div>

              {/* Mobile Social Links */}
              <div className="px-4 py-3 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Connect</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all hover:scale-105"
                      title={social.label}
                    >
                      <div style={{ color: social.color }}>{social.icon}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="px-4 py-4 border-t border-gray-200 space-y-2">
                <Button
                  className="w-full flex items-center justify-center gap-2 text-white shadow-lg"
                  style={{ backgroundColor: COLORS.BRONZE_DARK }}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button
                  className="w-full flex items-center justify-center gap-2 border-2"
                  style={{ 
                    borderColor: COLORS.FOREST_GREEN, 
                    color: COLORS.FOREST_GREEN,
                    backgroundColor: 'white'
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Get in Touch
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-32"></div>

      {/* Add custom animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
