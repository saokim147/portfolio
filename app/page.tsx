'use client'

import { useState, useEffect } from 'react'

// Icons as SVG components
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ArrowDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

// Navigation Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${scrolled ? 'glass rounded-2xl shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-heading font-bold text-xl text-accent hover:text-accent/80 transition-colors">
          VHT
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-muted hover:text-text transition-colors duration-200 text-sm font-medium"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/saokim147"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors duration-200 cursor-pointer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/v%C6%B0%C6%A1ng-ho%C3%A0ng-th%E1%BB%8Bnh-394201287/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors duration-200 cursor-pointer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

    <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
      <p className="text-accent font-medium mb-4 text-sm tracking-widest uppercase">Hello, I&apos;m</p>
      <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-text via-text to-accent bg-clip-text text-transparent animate-gradient">
        Vuong Hoang Thinh
      </h1>
      <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl mx-auto">
        Software Developer passionate about building impactful applications with modern technologies
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a
          href="#projects"
          className="px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-muted/30 text-text font-semibold rounded-lg hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer"
        >
          Contact Me
        </a>
      </div>
      <a
        href="#about"
        className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 animate-bounce cursor-pointer"
      >
        <span className="text-sm">Scroll to explore</span>
        <ArrowDownIcon />
      </a>
    </div>
  </section>
)

// About Section
const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
        About <span className="text-accent">Me</span>
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-muted text-lg leading-relaxed">
            I&apos;m a senior student at the <span className="text-text font-medium">University of Information Technology – VNUHCM</span>,
            expected to graduate in March 2026. With a GPA of 7.18/10, I&apos;ve built a strong foundation in
            software engineering principles.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            My passion lies in creating software that makes a difference. From music recognition systems
            to road safety applications, I enjoy tackling real-world problems with technology.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            I&apos;m proficient in multiple programming languages and frameworks, with hands-on experience
            in both frontend and backend development. I&apos;m always eager to learn new technologies
            and take on challenging projects.
          </p>
        </div>

        <div className="glass rounded-2xl p-8">
          <h3 className="font-heading text-xl font-semibold mb-6 text-accent">Education</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-accent rounded-full mt-2" />
              <div>
                <p className="font-medium text-text">University of Information Technology – VNUHCM</p>
                <p className="text-muted text-sm">Bachelor&apos;s Degree in Software Engineering</p>
                <p className="text-muted text-sm">GPA: 7.18/10 | Expected: March 2026</p>
              </div>
            </div>
          </div>

          <h3 className="font-heading text-xl font-semibold mt-8 mb-4 text-accent">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {['Data Structures & Algorithms', 'OOP', 'Software Engineering'].map((course) => (
              <span key={course} className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-muted">
                {course}
              </span>
            ))}
          </div>

          <h3 className="font-heading text-xl font-semibold mt-8 mb-4 text-accent">Languages</h3>
          <div className="flex items-center gap-4">
            <span className="text-text">Vietnamese</span>
            <span className="text-muted">|</span>
            <span className="text-text">English</span>
            <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full">IELTS 6.5</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Experience Section
const Experience = () => (
  <section id="experience" className="py-24 px-6 bg-primary/20">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
        Work <span className="text-accent">Experience</span>
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

      <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-text">Web Developer Intern</h3>
            <p className="text-accent font-medium">HQSOFT</p>
          </div>
          <span className="text-muted text-sm mt-2 md:mt-0">Feb 2025 - Apr 2025</span>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
            <p className="text-muted">
              Maintained a legacy web application built with <span className="text-text font-medium">Ext.NET + ASP.NET MVC</span> (.NET 4.8 Framework) for interactive user interface
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
            <p className="text-muted">
              Wrote <span className="text-text font-medium">SQL stored procedures</span> in SQL Server to handle data operations and reporting functionalities
            </p>
          </li>
        </ul>

        <div className="mt-6 pt-6 border-t border-muted/20">
          <div className="flex flex-wrap gap-2">
            {['ASP.NET MVC', 'Ext.NET', 'SQL Server', 'C#', '.NET Framework'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: 'Music Recognition',
      description: 'Query-by-humming (QBH) application that detects songs using ResNet model. Features FastAPI backend with Librosa for audio preprocessing and FAISS for high-speed vector similarity search.',
      tech: ['FastAPI', 'React Native', 'Faiss', 'Librosa', 'Python'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Pothole Detection App',
      description: 'Mobile application for detecting road potholes using hardware sensors. Real-time map display with navigation to avoid pothole-affected areas. Deployed on VPS with Docker.',
      tech: ['Java', 'ASP.NET Core', 'Node.js', 'MongoDB', 'Docker'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Insurance Claim Management',
      description: 'Zalo MiniApp for health insurance users to submit and track claim requests. Features OTP verification, JWT authentication, and medical facility directory with location navigation.',
      tech: ['ASP.NET Core', 'React', 'SQL Server', 'Zalo MiniApp SDK'],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 cursor-pointer animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 w-12 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
              <h3 className="font-heading text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
                {project.title}
                <ExternalLinkIcon />
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C#', 'Python', 'Java', 'SQL', 'C/C++', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['ASP.NET MVC', 'React', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Platforms & Tools',
      skills: ['Linux', 'Windows', 'Docker', 'Git', 'SQL Server', 'MongoDB'],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-primary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
          Skills & <span className="text-accent">Technologies</span>
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-accent mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary/50 rounded-lg text-sm text-text hover:bg-accent/20 hover:text-accent transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
        Get in <span className="text-accent">Touch</span>
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-muted text-lg">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <a
          href="mailto:thinvv41@gmail.com"
          className="glass rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-200 group cursor-pointer"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-background transition-all duration-200">
            <MailIcon />
          </div>
          <p className="font-medium text-text mb-1">Email</p>
          <p className="text-muted text-sm break-all">thinvv41@gmail.com</p>
        </a>

        <a
          href="tel:0935190263"
          className="glass rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-200 group cursor-pointer"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-background transition-all duration-200">
            <PhoneIcon />
          </div>
          <p className="font-medium text-text mb-1">Phone</p>
          <p className="text-muted text-sm">0935190263</p>
        </a>

        <a
          href="https://github.com/saokim147"
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-200 group cursor-pointer"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-background transition-all duration-200">
            <GithubIcon />
          </div>
          <p className="font-medium text-text mb-1">GitHub</p>
          <p className="text-muted text-sm">@saokim147</p>
        </a>

        <a
          href="https://www.linkedin.com/in/v%C6%B0%C6%A1ng-ho%C3%A0ng-th%E1%BB%8Bnh-394201287/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-200 group cursor-pointer"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-background transition-all duration-200">
            <LinkedinIcon />
          </div>
          <p className="font-medium text-text mb-1">LinkedIn</p>
          <p className="text-muted text-sm">Vuong Hoang Thinh</p>
        </a>
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 text-muted">
          <LocationIcon />
          <span>Ho Chi Minh City, Vietnam</span>
        </div>
      </div>
    </div>
  </section>
)

// Footer
const Footer = () => (
  <footer className="py-8 px-6 border-t border-muted/10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-muted text-sm">
        © {new Date().getFullYear()} Vuong Hoang Thinh. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/saokim147"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/v%C6%B0%C6%A1ng-ho%C3%A0ng-th%E1%BB%8Bnh-394201287/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  </footer>
)

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
