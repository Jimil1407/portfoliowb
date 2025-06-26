
import { Github, Linkedin, Moon, FileText, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'journey', label: 'Journey', path: '/journey' },
    { id: 'projects', label: 'Projects', path: '/#projects' },
    { id: 'contact', label: 'Contact', path: '/#contact' },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jimil_Mansoori_Resume.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 ${
                  (location.pathname === item.path || 
                   (item.id === 'home' && location.pathname === '/') ||
                   activeSection === item.id)
                    ? 'text-white shadow-lg' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="h-6 w-px bg-gray-600"></div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/about"
              className="text-white hover:text-blue-400 transition-all duration-200 hover:scale-110 p-2 hover:bg-gray-800 rounded-lg"
              title="About Me"
            >
              <User size={18} />
            </Link>
            <button
              onClick={handleResumeDownload}
              className="text-white hover:text-blue-400 transition-all duration-200 hover:scale-110 p-2 hover:bg-gray-800 rounded-lg"
              title="Download Resume"
            >
              <FileText size={18} />
            </button>
            <a
              href="https://github.com/Jimil1407"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-200 hover:scale-110 p-2 hover:bg-gray-800 rounded-lg"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-200 hover:scale-110 p-2 hover:bg-gray-800 rounded-lg"
            >
              <Linkedin size={18} />
            </a>
            <button className="text-white hover:text-blue-400 transition-all duration-200 hover:scale-110 p-2 hover:bg-gray-800 rounded-lg">
              <Moon size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
