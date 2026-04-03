import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ceoImage from "@/assets/profile.jpg";
import ctoImage from "@/assets/cto.jpg";
import { Target, Eye, Code2, GitBranch, Shield, Zap } from "lucide-react";

const values = [
  { icon: Code2, title: "Clean Code", desc: "We write maintainable, well-documented code that future developers will thank us for." },
  { icon: GitBranch, title: "Agile Process", desc: "Iterative development with transparent sprint cycles and continuous client feedback loops." },
  { icon: Shield, title: "Security First", desc: "Every application is built with OWASP best practices, encrypted data handling, and regular audits." },
  { icon: Zap, title: "Performance", desc: "Optimized builds, lazy loading, edge caching — we obsess over milliseconds so your users don't wait." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="lg:w-[80%] lg:px-10 mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs font-mono text-primary tracking-widest uppercase"><span>&lt;</span> Who We Are <span>/&gt;</span></span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-3">
              About <span className="gold-text">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
              Capsulcode Technologies is a Johannesburg-based software engineering studio specializing in 
              full-stack web and mobile development. Founded by engineers with a shared belief that great 
              software should be accessible to every business — not just the ones with enterprise budgets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding pt-8">
        <div className="lg:w-[80%] lg:px-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <div className="terminal-card h-full">
                <div className="terminal-card-header">
                  <div className="terminal-dot bg-destructive/80" />
                  <div className="terminal-dot bg-primary/60" />
                  <div className="terminal-dot bg-green-500/60" />
                  <span className="text-xs font-mono text-muted-foreground ml-2">vision.md</span>
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="text-primary" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-4 font-mono">Our Vision</h2>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    To be a leading force in digital innovation across Africa and beyond, empowering 
                    businesses and individuals through transformative technology solutions. We envision 
                    a continent where every entrepreneur has access to world-class software infrastructure — 
                    leveling the playing field and enabling African businesses to compete on the global stage. 
                    Our goal is to bridge the digital divide by building technology that is not only powerful 
                    but also affordable and accessible.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="terminal-card h-full">
                <div className="terminal-card-header">
                  <div className="terminal-dot bg-destructive/80" />
                  <div className="terminal-dot bg-primary/60" />
                  <div className="terminal-dot bg-green-500/60" />
                  <span className="text-xs font-mono text-muted-foreground ml-2">mission.md</span>
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-4 font-mono">Our Mission</h2>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    To deliver high-quality, scalable, and innovative digital solutions that solve 
                    real-world problems. We are committed to engineering excellence, continuous learning, 
                    and building lasting partnerships with our clients through transparent communication, 
                    agile delivery methodologies, and reliable post-launch support. Every project we 
                    undertake is backed by rigorous code reviews, automated testing pipelines, and 
                    comprehensive documentation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding pt-8">
        <div className="lg:w-[80%] lg:px-10 mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-primary tracking-widest uppercase"><span>&lt;</span> How We Work <span>/&gt;</span></span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Core <span className="gold-text">Values</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} delay={i * 120}>
                  <div className="glass-card p-6 text-center group hover:border-primary/40 transition-all h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-mono text-sm font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ background: "hsl(220 40% 10%)" }}>
        <div className="lg:w-[80%] lg:px-10 mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-primary tracking-widest uppercase"><span>&lt;</span> The Founders <span>/&gt;</span></span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Meet the <span className="gold-text">Team</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Jonathan Maguru",
                role: "Chief Executive Officer",
                image: ceoImage,
                bio: "Visionary leader with 8+ years in business strategy and product management. Drives Capsulcode's growth and client partnerships.",
              },
              {
                name: "Timothee Makupete Phiri",
                role: "Chief Technology Officer",
                image: ctoImage,
                bio: "Full-stack engineer specializing in scalable architectures. Leads the engineering team and oversees all technical decisions.",
              },
            ].map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 200}>
                <div className="terminal-card group transition-all duration-300 hover:border-primary/40 h-full">
                  <div className="terminal-card-header">
                    <div className="terminal-dot bg-destructive/80" />
                    <div className="terminal-dot bg-primary/60" />
                    <div className="terminal-dot bg-green-500/60" />
                    <span className="text-xs font-mono text-muted-foreground ml-2">{member.name.toLowerCase().replace(/\s/g, '-')}.founder</span>
                  </div>
                  <div className="h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-foreground mb-1 font-mono">
                      {member.name}
                    </h3>
                    <p className="text-primary font-mono text-xs mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
