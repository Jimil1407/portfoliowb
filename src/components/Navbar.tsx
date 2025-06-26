
import { Github, Linkedin, Moon } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full px-6 py-3">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-white ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-400'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="h-6 w-px bg-gray-700"></div>
          
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={18} />
            </a>
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <Moon size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
