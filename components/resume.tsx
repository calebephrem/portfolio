"use client"

import { useEffect, useRef } from "react"
import { Briefcase, GraduationCap, Download } from "lucide-react"

const experience = [
  {
    role: "Senior Web Developer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description: "Leading frontend development for enterprise-level applications using React and Next.js",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2022 - 2023",
    description: "Built and maintained multiple client websites with modern web technologies",
  },
  {
    role: "Junior Developer",
    company: "Startup Labs",
    period: "2021 - 2022",
    description: "Contributed to various projects, focusing on responsive design and user experience",
  },
]

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    period: "2017 - 2021",
    description: "Graduated with honors, specialized in web development and software engineering",
  },
]

export function Resume() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-on-scroll opacity-0 translate-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Experience &{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              My professional journey and academic background
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-12 animate-on-scroll opacity-0 translate-y-4 [animation-delay:100ms]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative space-y-8 pl-8 border-l-2 border-border">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative animate-on-scroll opacity-0 translate-y-4"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-background" />

                  <div className="group">
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">{item.role}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">{item.company}</span>
                        <span>•</span>
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-12 animate-on-scroll opacity-0 translate-y-4 [animation-delay:200ms]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="relative space-y-8 pl-8 border-l-2 border-border">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative animate-on-scroll opacity-0 translate-y-4"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-background" />

                  <div className="group">
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                        {item.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">{item.school}</span>
                        <span>•</span>
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center animate-on-scroll opacity-0 translate-y-4 [animation-delay:300ms]">
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 inline-flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
