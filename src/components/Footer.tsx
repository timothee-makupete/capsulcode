import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Github, Send, Terminal, Code2, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="border-t border-border/50" style={{ background: "hsl(220, 40%, 8%)" }}>
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="font-mono text-lg font-bold text-primary mb-2 flex items-center gap-2">
              <Send size={16} /> Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Subscribe to our dev digest for engineering insights, product updates, and tech industry analysis delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dev@email.com"
                className="flex-1 px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-mono text-sm"
              >
                <Send size={16} />
              </button>
            </form>
            {subscribed && (
              <p className="text-primary text-xs font-mono mt-2">✓ subscription.success()</p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-lg font-bold text-primary mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  <span className="text-primary/50">→</span> {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Capsulcode" className="h-9 w-9 rounded-md object-cover" />
              <div>
                <span className="font-mono text-sm font-bold gold-text block">capsulcode</span>
                <span className="text-xs text-muted-foreground font-mono">technologies</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Engineering robust, scalable software solutions for businesses ready to compete in the digital economy. Based in Johannesburg, serving clients across Africa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Capsulcode-Technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors text-foreground hover:text-primary border border-border/50"
              >
                <Github size={18} />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61553338654051"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors text-foreground hover:text-primary border border-border/50"
              >
                <Facebook size={18} />
              </a>
              <a
                href="tel:+265897512670"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors text-foreground hover:text-primary border border-border/50"
              >
                <Phone size={18} />
              </a>
              <a
                href="tel:+265883529587"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors text-foreground hover:text-primary border border-border/50"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center text-muted-foreground font-mono">
            © {new Date().getFullYear()} Capsulcode Technologies. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 font-mono flex items-center gap-1.5">
            <Terminal size={12} /> If not us, then who? <Code2 size={12} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
