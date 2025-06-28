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
    <nav className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 animate-navbar-bounce w-full max-w-2xl" style={{ transform: 'translateX(-50%)' }}>
      <div className="bg-black/60 backdrop-blur-2xl border border-white/20 rounded-xl md:rounded-full px-2 py-4 md:px-6 md:py-4 shadow-2xl flex items-center justify-between">
        <div className="flex items-center space-x-1.5 md:space-x-4 w-full justify-between">
          <div className="flex items-center space-x-1 md:space-x-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`p-1.5 md:p-2 rounded-lg transition-colors duration-200 hover:text-white hover:bg-gray-800 ${
                    (location.pathname === item.path || 
                     (item.id === 'home' && location.pathname === '/') ||
                     activeSection === item.id)
                      ? 'text-white bg-gray-800' 
                      : 'text-gray-400'
                  }`}
                  title={item.label}
                >
                  <Icon size={13} className="md:size-[18px]" />
                </Link>
              );
            })}
          </div>
          <div className="h-6 w-px bg-gray-600"></div>
          <div className="flex items-center space-x-1 md:space-x-4">
            <button
              onClick={handleResumeDownload}
              className="text-white transition-colors duration-200 hover:text-blue-400 p-1.5 md:p-2 rounded-lg hover:bg-gray-800"
              title="Download Resume"
            >
              <FileText size={13} className="md:size-[18px]" />
            </button>
            <a
              href="https://github.com/Jimil1407"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 hover:text-blue-400 p-1.5 md:p-2 rounded-lg hover:bg-gray-800"
              title="GitHub"
            >
              <Github size={13} className="md:size-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/jimil-digaswala-b44973192/?trk=public-profile-join-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 hover:text-blue-400 p-1.5 md:p-2 rounded-lg hover:bg-gray-800"
              title="LinkedIn"
            >
              <Linkedin size={13} className="md:size-[18px]" />
            </a>
            <a
              href="https://dev.to/jimil_digaswala_eb1ee38db"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 hover:text-blue-400 p-1.5 md:p-2 rounded-lg hover:bg-gray-800"
              title="DEV Community"
            >
              <Terminal size={13} className="md:size-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
