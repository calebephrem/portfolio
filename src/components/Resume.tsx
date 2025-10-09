import { Download } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Resume: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('resume');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey, education, and
            achievements
          </p>
          <a>
            <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <Download size={20} />
                <span>Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </a>
        </div>

        <div className="backdrop-blur-sm rounded-2xl p-8">
          <div
            className={`space-y-8 transform transition-all duration-500 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-gray-100/80 dark:bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center space-x-2">
                <span>About Me</span>
                <span className="text-2xl animate-bounce">👋</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                I'm a full-stack developer with over three years of experience
                building digital products that feel smooth, intuitive, and
                genuinely useful. I love the challenge of turning complex
                problems into clean, user-friendly solutions—whether it's
                designing responsive front-ends, engineering scalable back-ends,
                or connecting the dots between design and functionality. My
                workflow is fast-paced and iterative, and I thrive in spaces
                where creativity and collaboration fuel momentum. Outside of
                coding, I’m usually exploring new tech, contributing to
                open-source projects, or sketching out ideas over a strong cup
                of coffee ☕.
              </p>
            </div>

            <div className="bg-gray-100/80 dark:bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Open Source Contribution 🌟',
                  'UI/UX Design 🎨',
                  'Listening to music 🎧',
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center hover:bg-blue-500/20 transition-colors duration-200"
                  >
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
