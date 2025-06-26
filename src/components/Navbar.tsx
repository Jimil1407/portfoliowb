
import { Github, Linkedin, Moon, FileText, User, Home, Briefcase, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/', icon: Home },
    { id: 'about', label: 'About', path: '/about', icon: User },
    { id: 'journey', label: 'Journey', path: '/journey', icon: Briefcase },
    { id: 'projects', label: 'Projects', path: '/#projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', path: '/#contact', icon: Mail },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jimil_Mansoori_Resume.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-black/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setActiveSection(item.id)}
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 ${
                    (location.pathname === item.path || 
                     (item.id === 'home' && location.pathname === '/') ||
                     activeSection === item.id)
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  title={item.label}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
          
          <div className="h-6 w-px bg-gray-600"></div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleResumeDownload}
              className="text-white hover:text-blue-400 transition-all duration-200 hover:scale-110 p-2 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-lg"
              title="Download Resume"
            >
              <FileText size={18} />
            </button>
            <a
              href="https://github.com/Jimil1407"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-200 hover:scale-110 p-2 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-lg"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-200 hover:scale-110 p-2 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-lg"
            >
              <Linkedin size={18} />
            </a>
            <button className="text-white hover:text-blue-400 transition-all duration-200 hover:scale-110 p-2 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-lg">
              <Moon size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
