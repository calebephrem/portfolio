import { Github, Mail, Send } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Discord from '../assets/discord.svg';
import { mailToMe } from '../utils/utils';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await mailToMe(formData.subject, formData.message);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'quantumpandaprog@gmail.com',
      href: 'mailto:quantumpandaprog@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      emoji: '📧',
    },
    {
      icon: Discord,
      label: 'Discord',
      value: 'calebephrem',
      href: 'https://discord.gg/calebephrem',
      color: 'from-teal-600 to-green-500',
      emoji: '💬',
    },
    {
      icon: Github,
      label: 'Github',
      value: 'calebephrem',
      href: 'https://github.com/calebephrem',
      color: 'from-purple-500 to-pink-500',
      emoji: '🧑‍💻',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>{' '}
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you! Let's create something amazing together 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center space-x-2">
                <span>Let's Connect</span>
                <span className="text-2xl">🤝</span>
              </h3>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon: any = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105 ${
                        isVisible
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-10 opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        {typeof Icon === 'string' ? (
                          <img
                            src={Icon}
                            alt={info.label}
                            className="w-5 h-5"
                          />
                        ) : (
                          <Icon size={20} />
                        )}
                      </div>
                      <div>
                        <div className="text-gray-900 dark:text-white font-semibold flex items-center space-x-2">
                          <span>{info.label}</span>
                          <span>{info.emoji}</span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-400 transition-colors duration-200">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Fun illustration */}
              <div className="mt-8 text-center">
                <div className="text-6xl animate-bounce">🎯</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  Always ready for new opportunities!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center space-x-2">
                <span>Send Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={7}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hi! 👋"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send
                          className="group-hover:translate-x-1 transition-transform duration-200"
                          size={20}
                        />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
