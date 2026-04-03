import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Send, MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="lg:w-[80%] lg:px-10 mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs font-mono text-primary tracking-widest uppercase"><span>&lt;</span> Let's connect <span>/&gt;</span></span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-3">
              Get in <span className="gold-text">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
              Whether you're launching a new product, modernizing legacy systems, or need a dedicated 
              development partner — we're ready to discuss your requirements. Our team typically responds 
              within 24 hours with an initial assessment and project roadmap.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="lg:w-[80%] lg:px-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="terminal-card">
                <div className="terminal-card-header">
                  <div className="terminal-dot bg-destructive/80" />
                  <div className="terminal-dot bg-primary/60" />
                  <div className="terminal-dot bg-green-500/60" />
                  <span className="text-xs font-mono text-muted-foreground ml-2">new-inquiry.form</span>
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-bold text-primary mb-6 font-mono">Send us a Message</h2>
                  {submitted && (
                    <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
                      ✓ message.sent() — We'll get back to you soon.
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@domain.com"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+265 XXX XX XX XX"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Subject"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project requirements..."
                      rows={11}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity font-mono"
                    >
                      <Send size={14} /> submit()
                    </button>
                  </form>
                </div>
              </div>
            </ScrollReveal>

            {/* Info + Map */}
            <div className="space-y-8">
              <ScrollReveal direction="right">
                <div className="terminal-card">
                  <div className="terminal-card-header">
                    <div className="terminal-dot bg-destructive/80" />
                    <div className="terminal-dot bg-primary/60" />
                    <div className="terminal-dot bg-green-500/60" />
                    <span className="text-xs font-mono text-muted-foreground ml-2">contact-info.json</span>
                  </div>
                  <div className="p-8">
                    <h2 className="text-xl font-bold text-primary mb-6 font-mono">Contact Info</h2>
                    <div className="space-y-4">
                      {[
                        { icon: MapPin, label: "Address", text: "Malawi, Mzuzu, Luwinga" },
                        { icon: Mail, label: "Email", text: "capsulcodetechnologies@gmail.com" },
                        { icon: Phone, label: "Phone", text: "+265 883 52 95 87 / +265 897 51 26 70" },
                        { icon: Clock, label: "Hours", text: "Mon – Fri, 08:00 – 17:00 CAT" },
                      ].map(({ icon: Icon, label, text }) => (
                        <div key={label} className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon size={16} className="text-primary" />
                          </div>
                          <div>
                            <span className="text-xs font-mono text-muted-foreground block">{label}</span>
                            <span className="text-foreground/80 text-sm">{text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Map */}
              <ScrollReveal direction="right" delay={150}>
                <div className="terminal-card overflow-hidden">
                  <div className="terminal-card-header">
                    <div className="terminal-dot bg-destructive/80" />
                    <div className="terminal-dot bg-primary/60" />
                    <div className="terminal-dot bg-green-500/60" />
                    <span className="text-xs font-mono text-muted-foreground ml-2">location.map</span>
                  </div>
                  <div className="h-72">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76421.01185948691!2d33.937748481182155!3d-11.431472401724825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x191d3a60f10f1269%3A0xd6716109fdcf70c2!2sMzuzu%2C%20Malawi!5e1!3m2!1sen!2sus!4v1775230021700!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Head Office Location"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
