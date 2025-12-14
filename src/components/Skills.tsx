import React, { useEffect, useState } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setMousePosition({
      x: (mouseX - centerX) / (rect.width / 2),
      y: (mouseY - centerY) / (rect.height / 2),
    });
  };

  const getCardTransform = (index: number) => {
    if (hoveredCard !== index) return 'rotateX(0deg) rotateY(0deg)';

    const tiltX = mousePosition.y * -10; // Invert Y for natural tilt
    const tiltY = mousePosition.x * 10;

    return `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const technologies = [
    {
      name: 'React',
      category: 'Frontend',
      gradient: 'from-blue-400 via-blue-500 to-cyan-500',
      bgPattern:
        'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      level: 95,
      shadow: 'shadow-blue-500/25',
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
      bgPattern:
        'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      level: 95,
      shadow: 'shadow-yellow-500/25',
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      gradient: 'from-blue-600 via-blue-700 to-indigo-700',
      bgPattern:
        'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      level: 88,
      shadow: 'shadow-blue-700/25',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      gradient: 'from-teal-400 via-cyan-500 to-blue-500',
      bgPattern:
        'bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20',
      level: 92,
      shadow: 'shadow-teal-500/25',
    },
    {
      name: 'Three.js',
      category: 'Frontend',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgPattern:
        'bg-gradient-to-br from-purple-50 to-red-50 dark:from-purple-900/20 dark:to-red-900/20',
      level: 72,
      shadow: 'shadow-purple-500/25',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      gradient: 'from-green-500 via-green-600 to-emerald-600',
      bgPattern:
        'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      level: 93,
      shadow: 'shadow-green-500/25',
    },
    {
      name: 'Express',
      category: 'Backend',
      gradient: 'from-gray-600 via-gray-700 to-gray-800',
      bgPattern:
        'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-900/20',
      level: 92,
      shadow: 'shadow-gray-500/25',
    },
    {
      name: 'Discord.js',
      category: 'Backend',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgPattern:
        'bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20',
      level: 87,
      shadow: 'shadow-indigo-500/25',
    },
    {
      name: 'React Native',
      category: 'Mobile',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgPattern:
        'bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20',
      level: 88,
      shadow: 'shadow-indigo-500/25',
    },
    {
      name: 'Expo',
      category: 'Mobile',
      gradient: 'from-gray-700 via-gray-800 to-black',
      bgPattern:
        'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-900/20',
      level: 89,
      shadow: 'shadow-gray-500/25',
    },
    {
      name: 'MongoDB',
      category: 'Database',
      gradient: 'from-green-600 via-green-700 to-green-800',
      bgPattern:
        'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      level: 91,
      shadow: 'shadow-green-600/25',
    },
    {
      name: 'Firebase',
      category: 'Cloud',
      gradient: 'from-orange-400 via-red-500 to-yellow-500',
      bgPattern:
        'bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20',
      level: 94,
      shadow: 'shadow-orange-500/25',
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>{' '}
            & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive collection of technologies I use to build modern,
            scalable, and beautiful applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative ${
                tech.bgPattern
              } rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 ${
                tech.shadow
              } hover:shadow-2xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                perspective: '1000px',
                animationDelay: `${index * 100}ms`,
                transform: `${isVisible ? 'translate-y-0' : 'translate-y-10'} ${
                  hoveredCard === index ? 'scale(1.05) translateY(-12px)' : ''
                }`,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePosition({ x: 0, y: 0 });
              }}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}
              ></div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100"></div>
                <div className="absolute -bottom-1 right-1/3 w-2 h-2 bg-white/25 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-400 delay-200"></div>
              </div>

              <div
                className="relative z-10 transition-transform py-3 px-5 duration-200 ease-out"
                style={{
                  transform:
                    hoveredCard === index
                      ? getCardTransform(index)
                      : 'rotateX(0deg) rotateY(0deg)',
                }}
              >
                {/* Tech Name */}
                <h3
                  className={`text-xl font-bold mb-4 bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                >
                  {tech.name}
                </h3>

                {/* Skill Level Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span
                      className={`text-xs font-bold bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent`}
                    >
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${tech.gradient} rounded-full transform origin-left transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{
                        width: isVisible ? `${tech.level}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-gradient-to-r ${tech.gradient} rounded-tr-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Fun stats */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '13+', label: 'Technologies Mastered', emoji: '🛠️' },
            { number: '50+', label: 'Projects Completed', emoji: '🎯' },
            { number: '3+', label: 'Years Experience', emoji: '⏳' },
            { number: '100%', label: 'Passion for Code', emoji: '💯' },
          ].map((stat, _) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
