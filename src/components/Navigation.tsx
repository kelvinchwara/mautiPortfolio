import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, X, User, Briefcase, GraduationCap, Phone, Award, Home, 
  ChevronRight, Download, MessageCircle, Sparkles, Settings, 
  BookOpen, Globe, Zap, Mail, MapPin
} from 'lucide-react';

const COLORS = {
  BRONZE_LIGHT: '#A37B5C',
  BRONZE_DARK: '#5E4A35',
  BEIGE: '#d1ac92',
  FOREST_GREEN: '#6AA84F',
  CREAM: '#F5F1E8',
  GOLD: '#D4AF37',
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/about', label: 'About', icon: <User className="h-5 w-5" /> },
    { path: '/skills', label: 'Skills', icon: <Award className="h-5 w-5" /> },
    { path: '/experience', label: 'Experience', icon: <Briefcase className="h-5 w-5" /> },
    { path: '/education', label: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
    { path: '/resources', label: 'Resources', icon: <BookOpen className="h-5 w-5" /> },
    { path: '/contact', label: 'Contact', icon: <Phone className="h-5 w-5" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Top Header Bar - Only visible on small screens */}
      <header 
        className="lg:hidden sticky top-0 z-50 shadow-lg"
        style={{ 
          background: `linear-gradient(135deg, ${COLORS.BRONZE_LIGHT} 0%, ${COLORS.BRONZE_DARK} 100%)` 
        }}
      >
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center border-2"
              style={{ 
                background: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
            >
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-base font-bold text-white">Eliud Mautia</div>
              <div className="text-xs text-white/70 flex items-center gap-1">
                <Sparkles className="h-3 w-3" style={{ color: COLORS.GOLD }} />
                Mathematics Educator
              </div>
            </div>
          </Link>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 border-2 border-white/30 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Menu 
                className={`h-6 w-6 absolute transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                className={`h-6 w-6 absolute transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                }`} 
              />
            </div>
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={() => setIsOpen(false)}
      >
        {/* Mobile Menu Panel - Full Expanded Sidebar */}
        <div 
          className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ 
            background: `linear-gradient(180deg, ${COLORS.BRONZE_LIGHT} 0%, ${COLORS.BRONZE_DARK} 50%, #3d3225 100%)` 
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Sidebar Header */}
          <div 
            className="sticky top-0 z-10 p-5 border-b-2 backdrop-blur-sm"
            style={{ 
              borderColor: 'rgba(255, 255, 255, 0.2)',
              background: 'linear-gradient(135deg, rgba(163, 123, 92, 0.95) 0%, rgba(94, 74, 53, 0.95) 100%)'
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Eliud Mautia</div>
                  <div className="text-xs text-white/70 flex items-center gap-1">
                    <Zap className="h-3 w-3" style={{ color: COLORS.GOLD }} />
                    Navigation Menu
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 border-2 border-white/30 p-2"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <Link 
                key={item.path} 
                to={item.path} 
                onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                className="block"
              >
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 border-2 border-white/30 ${
                    isActive(item.path)
                      ? 'bg-white text-gray-800 shadow-lg border-white scale-[1.02]'
                      : 'text-white hover:bg-white/15 hover:border-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className={`p-2 rounded-lg transition-all duration-200 ${
                        isActive(item.path) ? 'bg-gray-100' : 'bg-white/15'
                      }`}
                    >
                      <div className={isActive(item.path) ? 'text-gray-700' : 'text-white'}>
                        {item.icon}
                      </div>
                    </div>
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                  <ChevronRight 
                    className={`h-5 w-5 transition-all duration-200 ${
                      isActive(item.path) ? 'text-gray-600' : 'text-white/50'
                    }`} 
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Quick Actions */}
          <div className="p-4 border-t-2" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div className="space-y-3">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
                <Button
                  className="w-full flex items-center justify-center gap-2 text-white border-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${COLORS.FOREST_GREEN} 0%, #4a7a38 100%)`,
                    borderColor: 'rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Get in Touch
                </Button>
              </Link>
              <Button
                className="w-full flex items-center justify-center gap-2 text-white border-2"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
                onClick={() => {
                  window.open('/MAUTIA%20ELIUD%20RESUME.pdf', '_blank');
                  setIsOpen(false);
                }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Mobile Contact Info */}
          <div className="p-4 border-t-2" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={{ color: COLORS.GOLD }} />
                <span>+86 130 3830 3477</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: COLORS.GOLD }} />
                <span>mautiaeliud@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ color: COLORS.GOLD }} />
                <span>Chongqing, China</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static Sidebar for Large Screens - Part of Main Body */}
      <aside 
        className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-72 shadow-2xl z-30 border-r-4 border-white/80"
        style={{ 
          background: `linear-gradient(180deg, ${COLORS.BRONZE_DARK} 0%, ${COLORS.BRONZE_LIGHT} 50%, ${COLORS.BEIGE} 100%)` 
        }}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b-2" style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
          <Link to="/" className="flex items-center gap-3 group">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center border-3 shadow-lg transition-transform group-hover:scale-105"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.GOLD} 0%, #F4D03F 100%)`,
                borderColor: COLORS.CREAM,
                borderWidth: '3px'
              }}
            >
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-white group-hover:scale-105 transition-transform">
                Eliud Mautia
              </div>
              <div className="text-xs text-white/70 flex items-center gap-1">
                <Sparkles className="h-3 w-3" style={{ color: COLORS.GOLD }} />
                Mathematics Educator
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => window.scrollTo(0, 0)}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 border-2 border-white/30 ${
                    isActive(item.path)
                      ? 'bg-white text-gray-800 shadow-lg border-white'
                      : 'text-white hover:bg-white/15 hover:border-white'
                  }`}
                >
                  <div 
                    className={`p-2 rounded-lg ${
                      isActive(item.path) ? 'bg-gray-100' : 'bg-white/10'
                    }`}
                  >
                    <div className={isActive(item.path) ? 'text-gray-700' : 'text-white'}>
                      {item.icon}
                    </div>
                  </div>
                  <span className="font-medium">{item.label}</span>
                  {isActive(item.path) && (
                    <ChevronRight className="h-5 w-5 ml-auto text-gray-600" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t-2" style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
          {/* Quick Actions */}
          <div className="space-y-2 mb-4">
            <Link to="/contact">
              <Button
                className="w-full flex items-center justify-center gap-2 text-white border-2 hover:scale-[1.02] transition-all"
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.FOREST_GREEN} 0%, #4a7a38 100%)`,
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                <MessageCircle className="h-4 w-4" />
                Get in Touch
              </Button>
            </Link>
            <a href="/MAUTIA%20ELIUD%20RESUME.pdf" download>
              <Button
                className="w-full flex items-center justify-center gap-2 text-white border-2 hover:scale-[1.02] transition-all"
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.GOLD} 0%, #9a7d27 100%)`,
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div 
            className="p-3 rounded-lg border-2"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.15)'
            }}
          >
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" style={{ color: COLORS.GOLD }} />
                <span>+86 130 3830 3477</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" style={{ color: COLORS.GOLD }} />
                <span>mautiaeliud@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" style={{ color: COLORS.GOLD }} />
                <span>Chongqing, China</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 text-center text-xs text-white/60">
            <div>© Eliud Mautia 2026</div>
            <div className="flex items-center justify-center gap-1 mt-1">
              <span>Designed by</span>
              <a 
                href="https://wa.me/254791639902?text=Hello%20Kelvin%20sagini,%20i%20need%20your%20website%20services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold hover:text-white transition-colors"
                style={{ color: COLORS.GOLD }}
              >
                One-Tech Solutions
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navigation;