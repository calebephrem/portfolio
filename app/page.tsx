"use client"

import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <link rel="icon" href="/sparkles.svg" />
    <div className="relative min-h-screen bg-black">
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl px-4">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-full border border-gray-800/50 bg-black/80 backdrop-blur-xl">
          {/* Logo and Name */}
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/images/profile.png" alt="Profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
            <span className="text-white text-sm md:text-lg font-medium">Caleb</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="flex items-center gap-2 text-white text-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"></span>
              Home
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">
              Projects
            </a>
            <a href="#resume" className="text-gray-400 hover:text-white text-sm transition-colors">
              Resume
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>

          {/* Get In Touch Button (Desktop) */}
          <a href="#contact">
          <button className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-700 text-white text-sm hover:border-gray-600 transition-colors">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            Get in touch
          </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 py-4 px-6 rounded-3xl border border-gray-800/50 bg-black/95 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="flex items-center gap-2 text-white text-sm py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"></span>
                Home
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-white text-sm py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white text-sm py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#resume"
                className="text-gray-400 hover:text-white text-sm py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white text-sm py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="flex items-center justify-center gap-2 px-6 py-3 mt-2 rounded-full border border-gray-700 text-white text-sm hover:border-gray-600 transition-colors">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Hire me
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* </CHANGE> */}

      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-4 md:px-8 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-balance">  
              <span className="text-white">Crafting </span>
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                digital
              </span>
              <br />
              <span className="text-white">experiences
with passion</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto text-pretty">
              Hi, My Name is Caleb Ephrem. I'm a web developer with 2 years of experience,
              building fast, user-friendly websites using React and Next.js. I handle both design and development—from
              creating clean UI to building fully functional web apps with secure backend providers such as
              Firebase. My focus is on clean code, modern design, and smooth performance.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-4">
              {/* Let's Connect Button */}
              <button className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white text-sm md:text-base font-medium transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
</svg>
                <span className="hidden sm:inline">Let's Connect</span>
                <span className="sm:hidden">Connect</span>
              </button>

              {/* Icon Buttons */}
              <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </button>

              <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>

              <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-20 overflow-hidden">
            <div className="relative">
              <div className="tech-ticker">
                <div className="tech-ticker-track">
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="tech-ticker-set">
                      {[
                        {
                          name: "Tailwind",
                          color: "text-cyan-400",
                          icon: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
                        },
                        {
                          name: "Bootstrap",
                          color: "text-purple-500",
                          icon: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.907 2.06-2.068 2.06v-1.218c.537 0 .672-.588.824-1.206.266-1.076.702-1.94 1.5-2.268-.798-.328-1.234-1.192-1.5-2.267-.152-.618-.287-1.207-.824-1.207V7.552c1.161 0 1.661.741 2.068 2.06.409 1.324 1.098 2.16 2.226 2.267z",
                        },
                        {
                          name: "JavaScript",
                          color: "text-yellow-400",
                          icon: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
                        },
                        {
                          name: "TypeScript",
                          color: "text-blue-500",
                          icon: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
                        },
                        {
                          name: "Firebase",
                          color: "text-orange-400",
                          icon: "M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14.203a.542.542 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z",
                        },
                        {
                          name: "MongoDB",
                          color: "text-emerald-500",
                          icon: "M299.052 61.73c-20.8-24.9-38.714-50.186-42.373-55.438a.92.92 0 00-1.347 0c-3.66 5.252-21.573 30.538-42.373 55.438-178.54 229.718 28.118 384.746 28.118 384.746l1.733 1.167c1.545 23.925 5.397 58.357 5.397 58.357h15.408s3.852-34.238 5.392-58.357l1.733-1.36c.193.193 206.853-154.835 28.312-384.553zm-43.14 381.441s-9.25-7.978-11.75-12.059v-.39l11.17-250.146c0-.777 1.154-.777 1.154 0l11.17 250.146v.39c-2.5 4.081-11.745 12.06-11.745 12.06z",
                        },
                        {
                          name: "Canva",
                          color: "text-blue-400",
                          icon: "M24 11.7c0-.6-.4-1.2-.9-1.4C20.6 9.1 17.8 5.9 17 3.5c-.2-.6-.8-.9-1.4-.9-1.9.1-3.9.3-5.6.9-.6.2-1.1.7-1.2 1.4-.2 1.1-.4 2.2-.5 3.3-1.3.6-2.4 1.6-3.1 2.9-.4.8-.7 1.6-.8 2.5-.1.9-.1 1.8.1 2.6.3 1.6 1.1 3.1 2.4 4.2 1 .8 2.1 1.4 3.4 1.7.9.2 1.9.3 2.8.2 1.5-.1 2.9-.6 4.2-1.4.6-.4 1.2-.9 1.7-1.5.4-.5.8-1 1.1-1.6.6-1.2.9-2.5.9-3.8 0-.5 0-1-.1-1.5.3-.3.5-.7.5-1.1zm-6.8 8.1c-1.1.6-2.4.9-3.7.8-.8-.1-1.6-.3-2.3-.6-1-.4-1.9-1-2.6-1.8-.9-1-1.5-2.2-1.7-3.5-.1-.8-.1-1.6.1-2.3.2-.8.5-1.5.9-2.2.6-.9 1.5-1.7 2.5-2.2.1-.1.3-.1.4-.2 0 .9.1 1.9.2 2.8.1 1 .3 2 .6 2.9.4 1.2 1 2.3 1.8 3.3.5.6 1 1.1 1.6 1.5.4.3.9.6 1.4.8-.1.3-.3.5-.5.7-.3.3-.5.5-.8.7-.2.2-.4.3-.6.4zm4.4-5.6c-.3.8-.7 1.6-1.3 2.3-.4.5-.9 1-1.4 1.4-.6.5-1.3.9-2 1.2-.1 0-.2.1-.3.1-.3-.2-.6-.4-.9-.6-.5-.4-1-.8-1.4-1.3-.7-.9-1.2-1.8-1.6-2.9-.3-.8-.5-1.7-.6-2.6-.1-.9-.2-1.8-.2-2.7 0-.2 0-.4.1-.6 1.5-.5 3-.7 4.6-.8.1 0 .2 0 .3.1.5 1.5 2.1 4.1 5.1 5.6.1.1.2.2.2.3 0 .4-.1.8-.3 1.1z",
                        },
                        {
                          name: "Figma",
                          color: "text-pink-500",
                          icon: "M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z",
                        },
                      ].map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-900/50 border border-gray-800 whitespace-nowrap"
                        >
                          <svg className={`w-5 h-5 ${tech.color}`} viewBox="0 0 24 24" fill="currentColor">
                            <path d={tech.icon} />
                          </svg>
                          <span className="text-gray-300 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* </CHANGE> */}
        </section>

        <section id="skills" className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Skills &{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Tech Stack
                </span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Passionate about creating seamless digital experiences with modern technologies
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Frontend Development",
                  skills: ["React", "Javascript / TypeScript", "Tailwind CSS", "React Native", "Three.js", "Expo"],
                  icon: "💻",
                },
                {
                  title: "Backend & Database",
                  skills: ["Node.js", "Express", "Firebase", "MongoDB","Discord.js"],
                  icon: "🔧",
                },
                {
                  title: "Tools",
                  skills: ["Figma", "VSCode", "Git & GitHub", "Postman", "Vercel", "Android Studio"],
                  icon: "🎨",
                },
              ].map((category, idx) => (
                <div
                  key={idx}
                  className="group bg-gray-900/30 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl md:text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm md:text-base text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* </CHANGE> */}

        <section id="projects" className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Recent{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg">Showcasing some of my recent work</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {[
    {
      title: 'Quantum Theme',
      description:
        "The Quantum theme unifies your coding environment with a sleek, futuristic aesthetic across both VS Code and Zsh. Whether you're coding in clarity, shadow, or shimmer, there’s a Quantum theme variant for your mood",
      tech: ['Shell', 'Azure DevOps'],
      image:
        'https://repository-images.githubusercontent.com/1034837676/1428342b-8dba-4146-83d4-b07d9569e6c9',
      liveUrl:
        'https://quantum-theme.vercel.app',
      githubUrl: 'https://github.com/calebephrem/quantum-vscode',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'PandaBot',
      description:
        "PandaBot is a multifunctional Discord bot designed to enhance your server with moderation tools, fun commands, and utility features. Built with Discord.js and Node.js, PandaBot offers seamless integration and easy customization to fit a community's needs.",
      tech: ['JavaScript', 'Node.js', 'Discord.js', 'MongoDB', 'Express'],
      image:
        'https://media.gettyimages.com/id/1477731951/vector/chat-bot-robot-virtual-assistance-artificial-intelligence.jpg?s=612x612&w=gi&k=20&c=gvkIyWMHK7LyfkLGNpGlqmaiwREmtU_QMGh4crUne6c=',
      liveUrl: 'https://discord.gg/MuZFAeVHgp',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'UCID',
      description:
        "UCID (Unique Custom ID) is a blazing-fast, secure, and customizable JavaScript library for generating unique identifiers, with full control over format and randomness. Whether you're building distributed systems, tagging resources, or creating unique filenames, UCID gives you the power to generate IDs that are readable, reliable, and collision-resistant.",
      tech: ['JavaScript', 'Node.js'],
      image:
        'https://repository-images.githubusercontent.com/1048472827/edab0d1f-6a6e-4764-bcfa-fe73ff50eee1',
      liveUrl: 'https://npmjs.com/package/unique-custom-id',
      githubUrl: 'https://github.com/calebephrem/unique-custom-id',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'QuillBot',
      description:
        'A Discord bot that provides code compilation and math expression solving capabilities, making it a versatile tool for developers and students alike.',
      tech: ['JavaScript', 'Node.js', 'Discord.js', 'Piston API', 'Groq API'],
      image:
        'https://media.istockphoto.com/id/2057625445/photo/earth-and-mars.jpg?s=612x612&w=0&k=20&c=lNQ6zZYf2gJPV3s_3ts51EG633BVrxHgnvF0xEN3PhU=',
      liveUrl: 'https://discord.gg/MuZFAeVHgp',
      gradient: 'from-red-500 to-pink-500',
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
    },
    {
      title: 'Jtilities',
      description:
        'A lightweight, modular library of JavaScript utility functions designed to simplify everyday coding tasks',
      tech: ['JavaScript', 'Node.js'],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbS_dEn-t4ZT8hGbVL3OLN9e_GD8waB6rhQ&s',
      liveUrl: 'https://js-fireworks.netlify.app',
      githubUrl: 'https://github.com/calebephrem/js-fireworks',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Zap TCM',
      description:
        'Zap TCM (Zap Todo Control Manager) is a blazing-fast, Git-inspired CLI tool for managing todos like code. Create branches for different projects, switch between them, and keep your workflow lightning clean ⚡',
      tech: ['JavaScript', 'Node.js', 'NPM'],
      image:
        'https://thumbs.dreamstime.com/b/comic-book-illustration-13696258.jpg',
      githubUrl: 'https://github.com/calebephrem/js-fireworks',
      gradient: 'from-purple-500 to-orange-500',
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
    },
    {
      title: 'HangmanBot',
      description:
        'HangmanBot is an interactive Discord bot that brings the classic Hangman game to your server. Challenge your friends, guess letters, and have fun!',
      tech: ['JavaScript', 'Node.js', 'Discord.js'],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gQag-KM5bFfcimPeLTl8DLXA_RyVziA6JA&s',
      liveUrl: 'https://discord.gg/MuZFAeVHgp',
      gradient: 'from-orange-500 to-red-500',
    },
  ].map((project, idx) => (
                <div
                  key={idx}
                  className="group bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="aspect-video overflow-hidden bg-gray-900">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4">{project.description.length < 125 ? project.description : project.description.slice(0, 125) + '...'}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white text-sm font-medium transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live
                      </a>
                      {project.githubUrl && <a
                        href={project.githubUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-700 hover:border-gray-600 text-white text-sm font-medium transition-all"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a> }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* </CHANGE> */}

        <section id="resume" className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                My{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Resume
                </span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg">Learn more about my journey and experience</p>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 md:p-10 mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">About Me</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                I'm a full-stack developer with over three years of experience building digital products that feel smooth, intuitive, and genuinely useful. I love the challenge of turning complex problems into clean, user-friendly solutions—whether it's designing responsive front-ends, engineering scalable back-ends, or connecting the dots between design and functionality. My workflow is fast-paced and iterative, and I thrive in spaces where creativity and collaboration fuel momentum. Outside of coding, I’m usually exploring new tech, contributing to open-source projects, or sketching out ideas over a strong cup of coffee ☕.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-3">Hobbies</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 mt-2"></span>
                        <div>
                          <h5 className="text-sm md:text-base text-white font-medium">Coding</h5>
                          <p className="text-xs md:text-sm text-gray-500">always ofc</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 mt-2"></span>
                        <div>
                          <h5 className="text-sm md:text-base text-white font-medium">Listening to piano</h5>
                          <p className="text-xs md:text-sm text-gray-500">when i code</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 mt-2"></span>
                        <div>
                          <h5 className="text-sm md:text-base text-white font-medium">Drawing</h5>
                          <p className="text-xs md:text-sm text-gray-500">sometimes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-3">Education</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 mt-2"></span>
                        <div>
                          <h5 className="text-sm md:text-base text-white font-medium">Self-Taught Developer</h5>
                          <p className="text-xs md:text-sm text-gray-500">Online Courses & Projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-medium transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </section>
        {/* </CHANGE> */}

        <section id="contact" className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Get In{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg">Let's work together on your next project</p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
              <a
                href="https://discord.gg/calebephrem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white text-sm md:text-base font-medium transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
                Discord
              </a>

              <a
                href="https://github.com/calebephrem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="mailto:quantumpandaprog@gmail.com"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>

            {/* Contact Form */}
            <form className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 md:p-10">
              <div className="space-y-6">

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="What is it about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                    Content
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
                    placeholder="Tell me about your project or just say hi!"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-medium transition-all hover:scale-[1.02]"
                  onClick={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLButtonElement;
                    const subj = (form.form!.elements.namedItem('email') as HTMLInputElement).value;
                    const msg = (form.form!.elements.namedItem('project') as HTMLTextAreaElement).value;
                    window.location.href = `mailto:quantumpandaprog@gmail.com?subject=${encodeURIComponent(
    subj
  )}&body=${encodeURIComponent(msg)}`;
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* </CHANGE> */}

        <footer className="py-12 px-4 md:px-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* About Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src="/images/profile.png" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-white text-lg font-medium">Caleb</span>
                </div>
                <p className="text-sm text-gray-400">Building digital experiences one line of code at a time. ⚡</p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Fun Section */}
              <div>
                <h4 className="text-white font-semibold mb-4">Fun Facts</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>🚀 Powered by caffeine</li>
                  <li>🐛 Bugs are just features</li>
                  <li>💡 Ideas welcome!</li>
                  <li>🎨 Design enthusiast</li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-400 text-center md:text-left">
                  © 2025 Caleb. Made with ❤️ and lots of <span className="text-emerald-400">{"</>"}</span>
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms
                  </a>
                  <span className="text-gray-600">•</span>
                  <p className="text-sm text-gray-400">
                    Status: <span className="text-emerald-400">Coding ofc</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* </CHANGE> */}
      </main>
    </div>
    </>
  )
}
