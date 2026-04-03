import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    company: "Success Academy",
    name: "Vincent Nyagondwe",
    role: "Principal",
    quote:
      "Capsulcode Technologies transformed our outdated web presence into a high-performance platform that increased our lead generation by 300%. Their technical depth, attention to detail, and commitment to deadlines made them an invaluable partner. We've since engaged them for two additional projects — they consistently over-deliver.",
  },
  {
    company: "GreenPulse Logistics",
    name: "Thabo Nkosi",
    role: "Chief Technology Officer",
    quote:
      "We needed a real-time fleet tracking dashboard that could handle 10,000+ concurrent connections without breaking a sweat. Capsulcode architected a WebSocket-based solution on a microservices backend that has maintained 99.99% uptime for over 18 months. Their engineering rigour is world-class — they don't just write code, they build systems.",
  },
  {
    company: "Vantage Property Group",
    name: "Sarah Mackenzie",
    role: "Head of Digital",
    quote:
      "From the initial discovery workshop to final deployment, Capsulcode operated like an extension of our team. They delivered a property listing platform with advanced search, virtual tours, and integrated CRM — all within budget and two weeks ahead of schedule. The codebase they handed over was clean, well-documented, and easy to maintain.",
  },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="lg:w-[80%] lg:px-10 mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            <span>&lt;</span> Client feedback <span>/&gt;</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            What Our <span className="gold-text">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            We measure success by the impact we create for our clients. Here's what industry leaders
            have to say about partnering with Capsulcode Technologies on mission-critical projects.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.company} delay={i * 150}>
            <div className="glass-card p-6 flex flex-col h-full">
              <Quote size={28} className="text-primary/40 mb-4 shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border/40 pt-4">
                <p className="text-foreground font-semibold text-sm font-mono">{t.name}</p>
                <p className="text-primary text-xs font-mono">{t.role}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t.company}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
