import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link } from "./Link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-cyan-500/20 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text animate-gradient">
                CapsulCode
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="#services">Services</Link>
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#testimonials">Testimonials</Link>
              <Link href="#contact">Contact</Link>
              <button className="btn-primary px-2 py-2 rounded-lg">Get a Quote</button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg">
          <Link href="#services" className="block">
            Services
          </Link>
          <Link href="#portfolio" className="block">
            Portfolio
          </Link>
          <Link href="#testimonials" className="block">
            Testimonials
          </Link>
          <Link href="#contact" className="block">
            Contact
          </Link>
          <Link href="/signin" className="block btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
