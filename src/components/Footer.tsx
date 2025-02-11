import { Github, Twitter, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "./Link";

export function Footer() {
  return (
    <footer className="bg-black/90 border-t border-cyan-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text animate-gradient">
                CapsulCode
              </span>
            </h3>
            <p className="text-gray-400">
              Building the future of web development, one pixel at a time.
            </p>
            <p className="text-gray-400">
              Join our newsletter to stay updated with the latest trends.
            </p>
            <form className="flex mt-4">
              <input type="email" placeholder="Enter your email" className="p-2 rounded-l bg-gray-800 text-white focus:outline-none" />
              <button className="bg-cyan-500 px-4 py-2 rounded-r text-white">Subscribe</button>
            </form>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              <li>
                <Link href="#blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookies">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">FAQ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq">General Questions</Link>
              </li>
              <li>
                <Link href="/signin">Pricing & Plans</Link>
              </li>
              <li>
                <Link href="/faq">Technical Support</Link>
              </li>
              <li>
                <Link href="/faq">Getting Started</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="hover:text-cyan-400">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-cyan-400">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-cyan-400">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:capsulcodetechnologies@gmail.com" className="hover:text-cyan-400">
                <Mail className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com" className="hover:text-cyan-400">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-cyan-400">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CapsulCode. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Made with ❤️ by CapsulCode Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
