"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20" ref={heroRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="animate-on-scroll opacity-0 translate-y-4 [animation-delay:100ms]">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  CE
                </span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-on-scroll opacity-0 translate-y-4 [animation-delay:200ms] space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Crafting digital{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                experiences
              </span>
              <br />
              with passion
            </h1>
          </div>

          {/* Subheading */}
          <div className="animate-on-scroll opacity-0 translate-y-4 [animation-delay:300ms]">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Full-stack developer with a love for clean code, beautiful interfaces, and solving complex problems. I turn coffee into code and ideas into reality!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 translate-y-4 [animation-delay:400ms] flex flex-wrap items-center justify-center gap-4">
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2">
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-border hover:border-purple-500/50 text-foreground font-medium transition-all hover:scale-105 hover:bg-purple-500/10">
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="animate-on-scroll opacity-0 translate-y-4 [animation-delay:500ms] flex items-center justify-center gap-4 pt-8">
            {[
              { Icon: Github, label: "GitHub" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Mail, label: "Email" },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                className="w-12 h-12 rounded-full border border-border hover:border-purple-500 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-blue-500 to-purple-600" />
        </div>
      </div>
    </section>
  )
}
