import { Github, Linkedin, Moon, Sun, FileText, User, Home, Briefcase, Mail, Map, Code2, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { useActiveSection } from '@/hooks/use-active-section';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  const location = useLocation();
  const { scrollToSection } = useSmoothScroll();
  const activeSection = useActiveSection();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navItems = [
    { id: 'home', label: 'Home', path: '/#home', icon: Home },
    { id: 'projects', label: 'Projects', path: '/#projects', icon: Code2 },
    { id: 'experience', label: 'Experience', path: '/#experience', icon: Briefcase },
    { id: 'journey', label: 'Journey', path: '/journey', icon: Map },
    { id: 'contact', label: 'Contact', path: '/#contact', icon: Mail },
  ];

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (item.id === 'journey') {
      // For external routes, don't prevent default - let the Link handle it
      return;
    }
    
    // For hash links, prevent default and use smooth scrolling
    e.preventDefault();
    
    if (location.pathname === '/') {
      scrollToSection(item.id);
    } else {
      // If we're not on the home page, navigate to home with hash
      window.location.href = `/#${item.id}`;
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1-QHrHU0AR9iNTTbn24b2SR98gTrCCSWw/view';
    link.download = 'Jimil_Resume.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-navbar-bounce" style={{ transform: 'translateX(-50%)' }}>
      <div className="bg-black/60 backdrop-blur-2xl border border-white/20 rounded-full px-4 py-2 shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`p-2 rounded-lg transition-colors duration-200 hover:text-white hover:bg-gray-800 ${
                    (location.pathname === item.path || 
                     (item.id === 'home' && location.pathname === '/') ||
                     activeSection === item.id)
                      ? 'text-white bg-gray-800' 
                      : 'text-gray-400'
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
              className="text-white transition-colors duration-200 hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800"
              title="Download Resume"
            >
              <FileText size={18} />
            </button>
            <a
              href="https://github.com/Jimil1407"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jimil-digaswala-b44973192/?trk=public-profile-join-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://dev.to/jimil_digaswala_eb1ee38db"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800"
              title="DEV Community"
            >
              <Terminal size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
