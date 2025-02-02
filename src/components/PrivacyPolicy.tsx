import { ParticleBackground } from "./ParticleBackground";
import {
  ShieldCheck,
  Database,
  Users,
  Lock,
  Cookie,
  Link,
  UserX,
  RefreshCcw,
  Mail,
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import StickyContacts from "./StickyContacts";

export function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <ParticleBackground />
      <StickyContacts/>
    
      <div className="relative max-w-6xl md:max-w-3xl mx-auto p-6 mb-10 mt-[15vh]">
        <div className="">
          <h1 className=" flex flex-col  font-bold mb-4 text-white flex items-center">
            <p>
              <ShieldCheck className="mr-2 h-16 w-16 text-cyan-400" />
            </p>
            <p className="text-2xl tracking-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">PRIVACY POLICY</p>
          </h1>
          <br />
          <p className="text-gray-300 mb-6 text-center">
            Last Updated: January {new Date().getFullYear()} <br />
            Your privacy is critically important to us. This Privacy Policy
            document outlines the types of personal information we collect, how
            it's used, and your rights regarding your data.
          </p>
          <br />
          <motion.div className="p-6 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400  p-4 rounded-lg mb-4"
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <Database className="mr-2 text-cyan-400" /> Data Collection
            </h2>
            <p className="text-gray-300 mt-2">
              We collect information in the following ways:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              <li>
                Information you provide directly (e.g., account registration,
                contact forms)
              </li>
              <li>
                Automatically collected data through cookies and tracking
                technologies
              </li>
              <li>Third-party integrations and services</li>
              <li>
                Publicly available information from social media platforms
              </li>
            </ul>
          </motion.div>

          <motion.div className="p-6 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400  p-4 rounded-lg mb-4" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <Users className="mr-2 text-cyan-300" /> Data Usage
            </h2>
            <p className="text-gray-300 mt-2">We use the collected data to:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              <li>Provide and maintain our services</li>
              <li>Improve user experience and personalize content</li>
              <li>Communicate with users about updates and offers</li>
              <li>Analyze website performance and usage patterns</li>
              <li>Comply with legal obligations</li>
            </ul>
          </motion.div>

          <motion.div className="p-6 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400  p-4 rounded-lg mb-4" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 0.4  }}>
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <Lock className="mr-2 text-purple-500" /> Security Measures
            </h2>
            <p className="text-gray-300 mt-2">
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              <li>SSL/TLS encryption</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication protocols</li>
              <li>Data anonymization techniques</li>
            </ul>
          </motion.div>

          <motion.div className="p-6 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400  p-4 rounded-lg mb-4" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <Cookie className="mr-2 text-cyan-300" /> Cookies
            </h2>
            <p className="text-gray-300 mt-2">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              <li>Remember user preferences</li>
              <li>Analyze traffic patterns</li>
              <li>Deliver targeted advertisements</li>
              <li>Monitor service performance</li>
            </ul>
            <p className="text-gray-300 mt-2">
              You can manage cookie preferences through your browser settings.
            </p>
          </motion.div>

          <motion.div className="p-6 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400  p-4 rounded-lg mb-4" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <Link className="mr-2 text-purple-500" /> Third-Party Links
            </h2>
            <p className="text-gray-300 mt-2">
              Our website may contain links to external sites. We are not
              responsible for the content or privacy practices of these
              third-party sites.
            </p>
          </motion.div>

          <motion.div className="p-6 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400  p-4 rounded-lg mb-4" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 1.2 }}>
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <UserX className="mr-2 text-cyan-300" /> Children's Privacy
            </h2>
            <p className="text-gray-300 mt-2">
              Our services are not directed to individuals under 16. We do not
              knowingly collect personal information from children without
              parental consent.
            </p>
          </motion.div>

          <motion.div className="p-6 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400  p-4 rounded-lg mb-4" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 1.4 }}>
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <RefreshCcw className="mr-2 text-purple-300" /> Policy Changes
            </h2>
            <p className="text-gray-300 mt-2">
              We may update this policy periodically. Significant changes will
              be notified through our website or email.
            </p>
          </motion.div>
          <motion.div className="p-6 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400  p-4 rounded-lg mb-4" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 1.6 }}>
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <Mail className="mr-2 text-cyan-300" /> Contact Information
            </h2>
            <p className="text-gray-300 mt-2">
              For privacy-related inquiries, please contact us at:
            </p>
            <a
              href="mailto:capsulcodetechnologies@gmail.com"
              className="text-blue-400 hover:underline"
            >
              capsulcodetechnologies@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
