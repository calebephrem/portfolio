"use client"

import { useEffect, useRef } from "react"
import { Code2, Palette, Database, Zap, Globe, Shield } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, performant UIs with React, Next.js, and modern JavaScript",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces with Figma and Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Integration",
    description: "Connecting apps with Firebase, Supabase, and RESTful APIs",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing load times, bundle sizes, and runtime performance",
  },
  {
    icon: Globe,
    title: "Web Standards",
    description: "Following best practices for SEO, accessibility, and web vitals",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Implementing authentication, authorization, and data protection",
  },
]

export function Skills() {
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
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-on-scroll opacity-0 translate-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills &{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="animate-on-scroll opacity-0 translate-y-4 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full p-6 rounded-2xl border border-border bg-card hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6 text-blue-500" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
