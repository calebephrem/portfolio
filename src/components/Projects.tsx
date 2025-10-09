import { ExternalLink, Github } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ellipsify } from '../utils/utils';

const Projects: React.FC = () => {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Quantum Theme',
      description:
        'The Quantum theme unifies your coding environment with a sleek, futuristic aesthetic across both VS Code and Zsh.',
      tech: ['Shell', 'Azure DevOps'],
      image:
        'https://repository-images.githubusercontent.com/1034837676/1428342b-8dba-4146-83d4-b07d9569e6c9',
      liveUrl:
        'https://marketplace.visualstudio.com/items?itemName=CalebEphrem.quantum',
      githubUrl: 'https://github.com/calebephrem/quantum',
      gradient: 'from-blue-500 to-cyan-500',
      emoji: '🎨',
    },
    {
      title: 'UCID',
      description:
        "UCID (Unique Custom ID) is a blazing-fast, secure, and customizable JavaScript library for generating unique identifiers — with full control over format and randomness. Whether you're building distributed systems, tagging resources, or creating unique filenames, UCID gives you the power to generate IDs that are readable, reliable, and collision-resistant.",
      tech: ["JavaScript", "Node.js"],
      image:
        'https://repository-images.githubusercontent.com/1048472827/edab0d1f-6a6e-4764-bcfa-fe73ff50eee1',
      liveUrl: 'https://npmjs.com/package/unique-custom-id',
      githubUrl: 'https://github.com/calebephrem/unique-custom-id',
      gradient: 'from-purple-500 to-pink-500',
      emoji: '🔥',
    },
    {
      title: 'Taskline',
      description:
        'Taskline transforms your .todo files into a sleek, interactive todo app—right inside VS Code. No more typing out tasks manually. Just click, complete, and conquer your day. ⚡',
      tech: ['JavaScript', 'Azure DevOps', 'Node.js', 'VS Code API'],
      image:
        'https://github.com/calebephrem/taskline/raw/main/assets/icon.png?raw=true',
      liveUrl: 'https://marketplace.visualstudio.com/items?itemName=CalebEphrem.taskline',
      githubUrl: 'https://github.com/calebephrem/taskline',
      gradient: 'from-green-500 to-teal-500',
      emoji: '✅',
    },
    {
      title: 'Mars Explorer',
      description:
        'explorer-mars is a web-based experience that lets you explore the Red Planet in 3D.',
      tech: ['JavaScript', 'Tailwind', 'Three.js', 'CSS', 'HTML'],
      image:
        'https://media.istockphoto.com/id/2057625445/photo/earth-and-mars.jpg?s=612x612&w=0&k=20&c=lNQ6zZYf2gJPV3s_3ts51EG633BVrxHgnvF0xEN3PhU=',
      liveUrl: 'https://explorer-mars.netlify.app',
      githubUrl: 'https://github.com/calebephrem/mars-explorer',
      gradient: 'from-orange-500 to-red-500',
      emoji: '🪐',
    },
    {
      title: 'Joycipe',
      description:
        'A beautifully themed mobile app built with React Native, Expo, and Firebase to discover, save... delicious recipes from around the world.',
      tech: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
      image:
        'https://d3m7xw68ay40x8.cloudfront.net/assets/2016/06/29142855/restaurant-proper-feat-img.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/calebephrem/joycipe',
      gradient: 'from-indigo-500 to-purple-500',
      emoji: '🍲',
    },
    {
      title: 'JS Fireworks',
      description:
        'A simple web project that triggers fireworks wherever you click on the page. No libraries, no build tools — just HTML, CSS, and JavaScript.',
      tech: ['JavaScript', 'CSS', 'HTML'],
      image:
        'https://github.com/calebephrem/js-fireworks/raw/main/assets/screenshot.png',
      liveUrl: 'https://js-fireworks.netlify.app',
      githubUrl: 'https://github.com/calebephrem/js-fireworks',
      gradient: 'from-yellow-500 to-orange-500',
      emoji: '🎆',
    },
  ];

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>{' '}
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work - from concept to deployment, each
            project tells a story of innovation and craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Floating emoji */}
                <div className="absolute top-4 right-4 text-3xl transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {project.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {ellipsify({ text: project.description, length: 125 })}
                  {/* {project.description} */}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-xs font-medium rounded-full text-white hover:border-gray-400 transition-all duration-200 transform hover:scale-105`}
                      style={{
                        animationDelay: `${index * 200 + techIndex * 50}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => openLink(project.liveUrl)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r ${project.gradient} rounded-lg font-medium text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 group/btn`}
                  >
                    <ExternalLink
                      size={16}
                      className="group-hover/btn:rotate-12 transition-transform duration-200"
                    />
                    <span>View Live</span>
                  </button>

                  <button
                    onClick={() => openLink(project.githubUrl)}
                    className="flex items-center justify-center p-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-all duration-200 transform hover:scale-105 group/btn"
                  >
                    <Github
                      size={16}
                      className="text-gray-700 dark:text-white group-hover/btn:rotate-12 transition-transform duration-200"
                    />
                  </button>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        {/* <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <span>View All Projects</span>
              <ExternalLink
                className="group-hover:rotate-12 transition-transform duration-200"
                size={20}
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
