import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Briefcase, GraduationCap, Phone, Award } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <User className="h-4 w-4" /> },
    { path: '/about', label: 'About', icon: <User className="h-4 w-4" /> },
    { path: '/skills', label: 'Skills', icon: <Award className="h-4 w-4" /> },
    { path: '/experience', label: 'Experience', icon: <Briefcase className="h-4 w-4" /> },
    { path: '/education', label: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
    { path: '/resources', label: 'Resources', icon: <Award className="h-4 w-4" /> },
    { path: '/contact', label: 'Contact', icon: <Phone className="h-4 w-4" /> }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav style={{ background: 'linear-gradient(135deg, #A37B5C, #5E4A35)' }} className="shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            Eliud Mautia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`flex items-center space-x-2 text-white hover:bg-white hover:text-gray-800 transition-all duration-200 ${
                    isActive(item.path) ? 'bg-white text-gray-800' : ''
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white hover:text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start flex items-center space-x-2 text-white hover:bg-white hover:text-gray-800 ${
                      isActive(item.path) ? 'bg-white text-gray-800' : ''
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;