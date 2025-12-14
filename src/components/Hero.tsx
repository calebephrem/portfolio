import { ChevronDown, Code2, Coffee, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const greetings = ['Hello! 👋', 'Hi there! 🌟', 'Welcome! ✨', 'Hey! 🚀'];
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/50 dark:to-gray-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Animated greeting */}
          <div className="mb-6 overflow-hidden h-16">
            <div
              className="text-2xl md:text-3xl text-blue-400 font-medium transform transition-transform duration-500"
              style={{ transform: `translateY(-${currentGreeting * 4}rem)` }}
            >
              {greetings.map((greeting, index) => (
                <div
                  key={index}
                  className="h-16 flex items-center justify-center"
                >
                  {greeting}
                </div>
              ))}
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Caleb
            </span>
          </h1>

          {/* Animated subtitle */}
          <div className="text-xl md:text-2xl text-gray-300 mb-8 flex items-center justify-center space-x-2 flex-wrap">
            <span className="text-gray-600 dark:text-gray-300">
              Crafting digital experiences
            </span>
            <Code2 className="text-blue-400 animate-spin-slow" />
            <span className="text-gray-600 dark:text-gray-300">
              with passion
            </span>
            <Coffee className="text-purple-400 animate-bounce" />
          </div>

          {/* Description */}
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer with a love for clean code, beautiful
            interfaces, and solving complex problems. I turn coffee into code
            and ideas into reality! ☕→💻
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View My Work</span>
                <Sparkles className="group-hover:animate-spin" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch 💬
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors duration-200">
            Scroll to explore
          </span>
          <ChevronDown
            className="text-blue-400 group-hover:text-purple-400 transition-colors duration-200"
            size={24}
          />
        </div>
      </button>
    </section>
  );
};

export default Hero;
