import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Code2, Layers, Braces, Cpu, Smartphone, Wrench, RefreshCw } from "lucide-react";
import serviceStatic from "@/assets/service-static-web.jpg";
import serviceDynamic from "@/assets/service-dynamic-web.jpg";
import serviceWebApp from "@/assets/service-web-app.jpg";
import serviceAndroid from "@/assets/service-android.jpg";

const allServices = [
  {
    name: "Static Web Development",
    description: "Lightning-fast, SEO-optimized static websites built with modern JAMstack architecture. Perfect for corporate landing pages, portfolios, and marketing sites. We leverage frameworks like Astro, Hugo, and Next.js SSG to deliver sub-second load times with zero server overhead. Includes responsive design, accessibility compliance (WCAG 2.1), and CDN deployment.",
    price: "MWK199,999.00 - MWK299,999.00",
    image: serviceStatic,
    icon: Code2,
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
  },
  {
    name: "Dynamic Web Development",
    description: "Full-stack dynamic websites powered by robust backend systems and relational databases. We build content management platforms, e-commerce stores, and multi-user portals with secure authentication, RESTful APIs, and real-time data synchronization. Every project includes admin dashboards, analytics integration, and automated deployment pipelines.",
    price: "MWK349,999.00 - MWK449,999.00",
    image: serviceDynamic,
    icon: Layers,
    stack: ["React", "Node.js", "PostgreSQL", "REST API"],
  },
  {
    name: "Web Based Application",
    description: "Enterprise-grade web applications engineered for scale and reliability. From SaaS platforms to internal business tools, we architect complex systems using microservices patterns, event-driven design, and cloud-native infrastructure. Features include role-based access control, real-time collaboration, webhook integrations, and comprehensive API documentation.",
    price: "MWK599,999.00 +",
    image: serviceWebApp,
    icon: Braces,
    stack: ["React", "TypeScript", "Docker", "AWS"],
  },
  {
    name: "Android App Development",
    description: "High-performance Android applications built with Kotlin and React Native for optimal user experience. We handle the complete lifecycle — from wireframing and prototyping to Play Store submission and post-launch monitoring. Includes push notifications, offline-first architecture, biometric authentication, and crash reporting analytics.",
    price: "MWK599,999.00 +",
    image: serviceAndroid,
    icon: Cpu,
    stack: ["Kotlin", "React Native", "Firebase"],
  },
  {
    name: "iOS App Development",
    description: "Premium iOS applications crafted with Swift and SwiftUI, meeting Apple's Human Interface Guidelines for a polished, native feel. We optimize for performance across iPhone and iPad, with support for Core Data persistence, CloudKit sync, HealthKit/ARKit integrations, and seamless App Store deployment with TestFlight beta distribution.",
    price: "MWK699,999.00 +",
    image: serviceAndroid,
    icon: Smartphone,
    stack: ["Swift", "SwiftUI", "Xcode", "TestFlight"],
  },
  {
    name: "One-time Web Maintenance",
    description: "Comprehensive audit and maintenance sprint for existing websites. We perform thorough code review, dependency updates, security vulnerability patching, performance profiling with Lighthouse, broken link remediation, database optimization, and cross-browser compatibility testing. Delivered with a detailed report and actionable recommendations.",
    price: "MWK199,999.00 +",
    image: serviceStatic,
    icon: Wrench,
    stack: ["Audit", "Security", "Performance"],
  },
  {
    name: "Monthly Subscription Web Maintenance",
    description: "Proactive ongoing maintenance with guaranteed SLA response times. Includes weekly security scans, automated backups, uptime monitoring with instant alerts, monthly performance reports, content updates, dependency management, and priority bug fixes. Think of us as your dedicated DevOps team — without the overhead of a full-time hire.",
    price: "MWK149,999.00 / month",
    image: serviceDynamic,
    icon: RefreshCw,
    stack: ["Monitoring", "CI/CD", "Backups"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="lg:w-[80%] lg:px-10 mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs font-mono text-primary tracking-widest uppercase"><span>&lt;</span> Service catalog <span>/&gt;</span></span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-3">
              Our <span className="gold-text">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
              End-to-end software engineering services designed for startups and enterprises alike. 
              We don't just write code — we architect solutions that scale with your business, 
              backed by clean documentation, automated testing, and continuous deployment workflows.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-8">
        <div className="lg:w-[80%] lg:px-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.name} delay={i * 100}>
                  <div className="terminal-card group transition-all duration-300 hover:border-primary/40 h-full">
                    <div className="terminal-card-header">
                      <div className="terminal-dot bg-destructive/80" />
                      <div className="terminal-dot bg-primary/60" />
                      <div className="terminal-dot bg-green-500/60" />
                      <span className="text-xs font-mono text-muted-foreground ml-2">{service.name.toLowerCase().replace(/\s/g, '-')}</span>
                    </div>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon size={18} className="text-primary" />
                        <h3 className="text-base font-bold text-foreground font-mono">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.stack.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-xs font-mono text-primary/70 bg-secondary border border-primary/10">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                        <span className="text-primary font-bold text-lg font-mono">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
