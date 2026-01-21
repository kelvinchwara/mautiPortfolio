import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Briefcase, GraduationCap, Phone, Award, Home, ChevronRight, Download, MessageCircle } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/about', label: 'About', icon: <User className="h-5 w-5" /> },
    { path: '/skills', label: 'Skills', icon: <Award className="h-5 w-5" /> },
    { path: '/experience', label: 'Experience', icon: <Briefcase className="h-5 w-5" /> },
    { path: '/education', label: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
    { path: '/resources', label: 'Resources', icon: <Award className="h-5 w-5" /> },
    { path: '/contact', label: 'Contact', icon: <Phone className="h-5 w-5" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        style={{ background: `linear-gradient(135deg, ${COLORS.BRONZE_LIGHT}, ${COLORS.BRONZE_DARK})` }} 
        className={`shadow-lg sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-2xl' : ''
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 border-2 border-white/30">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-white animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">
                  Eliud Mautia
                </div>
                <div className="text-xs text-white/70">Mathematics Educator</div>
              </div>
            </Link>


            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 hover:text-white transition-all duration-200 border-2 border-white/30"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="fixed right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto shadow-2xl animate-slideIn"
            style={{ 
              background: `linear-gradient(180deg, ${COLORS.BRONZE_LIGHT} 0%, ${COLORS.BRONZE_DARK} 100%)` 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header */}
            <div className="sticky top-0 z-10 p-6 border-b-2 border-white/20 backdrop-blur-sm bg-gradient-to-r from-transparent to-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 border-2 border-white/30">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Eliud Mautia</div>
                    <div className="text-xs text-white/70">Menu</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 transition-all duration-200 border-2 border-white/30"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="p-4 space-y-2">
              <div className="mb-4">
                <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2 px-4">
                  Navigation
                </div>
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                    >
                      <div
                        className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 border-2 ${
                          isActive(item.path)
                            ? 'bg-white text-gray-800 shadow-lg scale-[1.02] border-white'
                            : 'text-white hover:bg-white/20 hover:border-white/30 border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg transition-all duration-200 ${
                            isActive(item.path) ? 'bg-gray-100' : 'bg-white/20'
                          }`}>
                            <div className={isActive(item.path) ? 'text-gray-800' : 'text-white'}>
                              {item.icon}
                            </div>
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        {isActive(item.path) && (
                          <ChevronRight className="h-5 w-5 text-gray-800" />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Quick Actions */}
              <div className="border-t-2 border-white/20 pt-4">
                <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2 px-4">
                  Quick Actions
                </div>
                <div className="space-y-2 px-4">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button
                      className="w-full flex items-center justify-center gap-2 text-white bg-white/20 hover:bg-white/30 border-2 border-white/30 hover:border-white/50 transition-all duration-200"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Get in Touch
                    </Button>
                  </Link>
                  <Button
                    className="w-full flex items-center justify-center gap-2 text-white bg-white/20 border-2 border-white/30 shadow-lg"
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

              {/* Mobile Info */}
              <div className="border-t-2 border-white/20 pt-4 mt-4">
                <div className="px-4 py-3 rounded-lg bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm font-semibold text-white">Highlights</span>
                  </div>
                  <div className="space-y-1 text-xs text-white/80">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span>10+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span>IB & Cambridge Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span>1000+ Students Taught</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="sticky bottom-0 p-4 border-t-2 border-white/20 backdrop-blur-sm bg-gradient-to-r from-transparent to-white/10">
              <div className="text-center text-xs text-white/70">
                <div className="mb-1">© Eliud Mautia 2026 All Rights Reserved</div>
                <div className="flex items-center justify-center gap-1">
                  <span>Designed by</span>
                  <a 
                    href="https://wa.me/254791639902?text=Hello%20Kelvin%20sagini,%20i%20need%20your%20website%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-white transition-colors underline hover:no-underline"
                  >
                    One-Tech Solutions Ltd
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        /* Custom scrollbar for mobile menu */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  );
};

export default Navigation;