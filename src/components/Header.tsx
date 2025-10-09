import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Code,
  User,
  Briefcase,
  FileText,
  Mail,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => scrollToSection('hero')}
          >
            Caleb ✨
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse" />
                )}
              </button>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 group overflow-hidden"
              aria-label="Toggle theme"
            >
              <div className="relative z-10">
                {isDark ? (
                  <Sun
                    size={20}
                    className="transform transition-transform duration-300 group-hover:rotate-12"
                  />
                ) : (
                  <Moon
                    size={20}
                    className="transform transition-transform duration-300 group-hover:-rotate-12"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-x-0 shadow-lg'
              : 'opacity-0 -translate-x-full pointer-events-none'
          }`}
        >
          <nav className="px-4 py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 border-gray-200/20 dark:border-gray-700/20">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-800 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen
                      ? 'slideInLeft 0.3s ease-out forwards'
                      : 'none',
                  }}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
