import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50" style={{ background: "hsla(220, 40%, 10%, 0.9)" }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Capsulcode Technologies" className="h-9 w-9 rounded-md object-cover" />
            <div className=" sm:flex items-center gap-1.5">
              <span className="font-mono text-sm font-bold gold-text tracking-tight">
                <span>&lt;</span> Capsulcode <span>/&gt;</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-mono font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/60 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-md text-sm font-mono font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/60 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
