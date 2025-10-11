import { ArrowUp, Heart } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-200 dark:bg-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Caleb Ephrem ✨
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              Crafting digital experiences with passion, creativity, and
              cutting-edge technology. Let's build something amazing together!
              🚀
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-500 dark:text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500 animate-pulse" size={16} />
              <span>and lots of</span>
              <span className="text-yellow-500">☕</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center justify-center space-x-2">
              <span>Quick Links</span>
              <span>🔗</span>
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-gray-500 dark:text-gray-400 dark:hover:text-blue-400 hover:text-blue-400 duration-200 text-sm hover:translate-x-1 transform transition-transform"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center justify-center md:justify-end space-x-2">
              <span>Let's Connect</span>
              <span>🤝</span>
            </h3>
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <p>
                📧 <a href="mailto:quantumpandaprog@gmail.com">quantumpandaprog@gmail.com</a>
              </p>
              <p>
                💬 <a href="https://discord.gg/calebephrem">https://discord.gg/calebephrem</a>
              </p>
              <p>
                🧑‍💻 <a href="https://github.com/calebephrem">https://github.com/calebephrem</a>
              </p>
            </div>

            {/* Fun Quote */}
            <div className="mt-4 p-3 bg-gray-300/50 dark:bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                "Code is poetry written in logic" 🎭
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Caleb Ephrem. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-500 dark:text-gray-400 text-xs">
              Scroll to top
            </span>
            <button
              onClick={scrollToTop}
              className="group p-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
              aria-label="Scroll to top"
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-200"
              />
            </button>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="text-center mt-8">
          <div className="inline-block animate-spin-slow">
            <div className="text-4xl">🐼</div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
            Keep coding, keep growing! 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
