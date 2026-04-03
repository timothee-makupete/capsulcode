import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Terminal, Braces, Cpu, Layers, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";
import heroBg from "@/assets/hero-bg.jpg";
import serviceStatic from "@/assets/service-static-web.jpg";
import serviceDynamic from "@/assets/service-dynamic-web.jpg";
import serviceWebApp from "@/assets/service-web-app.jpg";
import serviceAndroid from "@/assets/service-android.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const services = [
  { name: "Static Web Development", image: serviceStatic, icon: Code2 },
  { name: "Dynamic Web Development", image: serviceDynamic, icon: Layers },
  { name: "Web Based Application", image: serviceWebApp, icon: Braces },
  { name: "Android App Development", image: serviceAndroid, icon: Cpu },
];

const projects = [
  {
    title: "QR Code Restaurant Management System",
    shortDesc: "A modern web application that allows restaurant customers to browse the menu, view daily specials, and place orders by scanning a QR code at their table",
    fullDesc: "Developed a modern web application that allows restaurant customers to browse the menu, view daily specials, and place orders by scanning a QR code at their table. The system replaces tradition paper menus, and streamlines the ordering processDeveloped a modern web application that allows restaurant customers to browse the menu, view daily specials, and place orders by scanning a QR code at their table. The system replaces tradition paper menus, and streamlines the ordering process. The backend is built with Node.js and Express, providing a RESTful API for menu management, order processing, and real-time updates. The frontend is developed using React and Tailwind CSS, delivering a responsive and intuitive user interface. Key features include dynamic menu rendering based on QR code data, real-time order status tracking for customers and staff, and an admin dashboard for restaurant managers to update menu items and view analytics. The application has been deployed on AWS with a PostgreSQL database, ensuring scalability and reliability during peak dining hours.",
    image: project1,
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    demoUrl: "https://red-valley-lodge.netlify.app/",
    githubUrl: "https://github.com/timothee-makupete/redvarry",
  },
  {
    title: "MSCE Chatbolt AI Educational Web App",
    shortDesc: "An AI-powered learning assistant for MSCE students. The application features a ChatGPT like UI/UX and is optimized for fast performance, helping students navigate subjects, access exam tips, and receive study guidance through an interactive chatbot interface.",
    fullDesc: "Engineered an AI-powered learning assistant for MSCE students. The application features a ChatGPT like UI/UX and is optimized for fast performance, helping students navigate subjects, access exam tips, and receive study guidance through an interactive chatbot interface. The backend is built with Node.js and Express, integrating OpenAI's GPT-3.5 API for natural language processing and response generation. The frontend is developed using React Native, providing a seamless experience across both iOS and Android devices. Key features include a conversational interface that allows students to ask questions in natural language, real-time response generation with contextual understanding, and a personalized study dashboard that tracks progress and suggests resources based on user interactions. The application has been deployed on Render, ensuring scalability and low latency for users across different regions.",
    image: project2,
    tech: ["React Native", "Firebase", "Node.js", "MongoDB", "WebSocket"],
    demoUrl: "https://msce-chatbolt.netlify.app/",
    githubUrl: "https://github.com/JONATHAN-MAGURU/msce-ai-chatbot",
  },
  {
    title: "Aganyu Task Connect",
    shortDesc: "A real-time collaborative task management platform that connects people with reliable workers for any short term job.",
    fullDesc: "Created a real-time collaborative task management platform that connects people with reliable workers for any short term job. The platform allows users to post tasks, browse available jobs, and communicate with potential workers in real-time, streamlining the process of finding help for various tasks. The backend is built with Node.js and Express, utilizing Socket.IO for real-time communication and MongoDB for data storage. The frontend is developed using React and Tailwind CSS, delivering a responsive and user-friendly interface. Key features include dynamic task posting with geolocation tagging, real-time chat functionality between task posters and workers, and a rating system to ensure quality and reliability. The application has been deployed on Heroku, providing scalability and accessibility for users across different regions.",
    image: project3,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Vercel Edge"],
    demoUrl: "https://aganyu-task-connect.netlify.app/",
    githubUrl: "https://github.com/JONATHAN-MAGURU/aganyu-task-connect",
  },
];

const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Lines of Code", value: "1M+" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Happy Clients", value: "30+" },
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 40% 10% / 0.7), hsl(220 40% 13%))" }} />
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-up">
          {/* Terminal-style label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-border mt-4 mb-8">
            <Terminal size={14} className="text-primary" />
            <span className="text-xs font-mono text-muted-foreground tracking-wide">
              ~/capsulcode <span className="text-primary animate-blink">_</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="code-bracket">{"{ "}</span>
            <span className="gold-text">Capsulcode</span>
            <span className="code-bracket">{" }"}</span>
            <br />
            <span className="text-foreground text-2xl md:text-5xl">Technologies</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-4 max-w-2xl mx-auto">
            Encapsulating Innovation, Delivering Excellence
          </p>
          <p className="text-sm text-muted-foreground/70 font-mono mb-10 max-w-xl mx-auto">
            We architect, build, and ship production-ready software solutions — from responsive web platforms to native mobile applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity font-mono text-sm"
            >
              ./explore-services <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-colors font-mono text-sm"
            >
              ./get-in-touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/50 py-8" style={{ background: "hsl(220 40% 10%)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="lg:w-[80%] lg:px-10 mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-primary tracking-widest uppercase"><span>&lt;</span> What we build <span>/&gt;</span></span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                Our <span className="gold-text">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
                From concept to deployment, we engineer robust digital products using modern frameworks, 
                clean architecture patterns, and industry best practices. Every line of code is written 
                with scalability, security, and performance in mind.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.name} delay={i * 120}>
                  <div className="glass-card overflow-hidden group transition-all duration-300 h-full">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 p-2 rounded-md bg-background/80 backdrop-blur-sm border border-border/50">
                        <Icon size={18} className="text-primary" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-semibold text-foreground mb-4 font-mono">
                        {service.name}
                      </h3>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:opacity-80 transition-opacity font-medium font-mono"
                      >
                        view_more() <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}

            {/* View More Services Card */}
            <ScrollReveal delay={services.length * 120}>
              <Link
                to="/services"
                className="glass-card flex flex-col items-center justify-center min-h-[300px] group transition-all duration-300 hover:border-primary/60 h-full"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Rocket size={28} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 font-mono">
                  View All Services
                </h3>
                <p className="text-muted-foreground text-xs font-mono">
                  explore_full_catalog()
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding" style={{ background: "hsl(220 40% 10%)" }}>
        <div className="lg:w-[80%] lg:px-10 mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-primary tracking-widest uppercase"><span>&lt;</span> Our work <span>/&gt;</span></span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                Featured <span className="gold-text">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
                A curated selection of production applications we've engineered and deployed. 
                Each project represents real-world problem solving with measurable business impact — 
                from high-traffic e-commerce platforms to mission-critical mobile applications.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 150}>
                <div className="terminal-card group transition-all duration-300 hover:border-primary/40 h-full">
                  <div className="terminal-card-header">
                    <div className="terminal-dot bg-destructive/80" />
                    <div className="terminal-dot bg-primary/60" />
                    <div className="terminal-dot bg-green-500/60" />
                    <span className="text-xs font-mono text-muted-foreground ml-2">{project.title.toLowerCase().replace(/\s/g, '-')}.tsx</span>
                  </div>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 font-mono">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-secondary text-primary/80 border border-primary/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:opacity-80 transition-opacity font-mono font-medium"
                    >
                      inspect() <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Index;
