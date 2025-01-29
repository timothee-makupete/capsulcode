import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from './Link';

export function Footer() {
  return (
    <footer className="bg-black/90 border-t border-cyan-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">CapsualCode</h3>
            <p className="text-gray-400">
              Building the future of web development, one pixel at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#testimonials">Testimonials</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
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
              <Link href="mailto:contact@capsualcode.com" className="hover:text-cyan-400">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} CapsualCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}