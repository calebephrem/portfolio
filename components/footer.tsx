"use client"

import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© 2025 Caleb Ephrem. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>and Next.js</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Github, label: "GitHub", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Mail, label: "Email", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full border border-border hover:border-purple-500 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
