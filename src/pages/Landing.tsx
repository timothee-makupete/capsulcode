import { LoadingScreen } from "../components/LoadingScreen";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useEffect, useState } from "react";
import { ParticleBackground } from "../components/ParticleBackground";
import { Navbar } from "../components/Navbar";
import { TypeWriter } from "../components/TypeWriter";
import { ArrowRight, Code2, Cpu, Globe2, Users, Loader } from "lucide-react";
import { FiLayout, FiSmartphone, FiUsers } from "react-icons/fi";
import { Footer } from "../components/Footer";
import StickyContacts from "../components/StickyContacts";
import { motion } from "framer-motion";
import studyHacks from "/Images/studyHacks.png";
import scoolverse from "/Images/scoolverse.png"
import school from "/Images/school.png"
import hotel from "/Images/hotel.png"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Landing =()=>{
    useIntersectionObserver();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await emailjs.send(
                'service_ozb67p9', 
                'template_1frrtjw',
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: 'capsulcodetechnologies@gmail.com'
                },
                'V0EBQUGjyZpVkiCZu' 
            );
            toast.success('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Failed to send email:', error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const href = anchor.getAttribute("href");
          if (!href) return;
  
          const target = document.querySelector(href);
          if (!target) return;
  
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });
    }, []);
    return (
        <div className="min-h-screen bg-black text-white">
          <LoadingScreen />
          <ParticleBackground />
          <Navbar />
          <StickyContacts/>
    
          
    
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden animate-on-scroll">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-8 mt-[10%]">
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                  <span className="text-cyan-400">
                    Future-Proof &nbsp;
                  </span>
    
                  <TypeWriter
                    text=" Your Digital Presence&nbsp;"
                    speed={70}
                    delay={1400}
                  />
                  <div>
                    <TypeWriter
                      text="with capsulcode cutting-edge technologies. "
                      speed={70}
                      delay={2000}
                    />
                  </div>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto h-22">
                  <TypeWriter
                    text="We craft cutting-edge web experiences that push the boundaries of what's possible. Your vision, our innovation."
                    speed={10}
                    delay={2800}
                  />
                </p>
                <br />
    
                <div className="flex justify-center space-x-4 mt-8">
                  <a href="#contact" className="btn-primary">
                    Get Started <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href="#portfolio" className="btn-secondary">
                    View Our Work
                  </a>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          {/* Services Section */}
          <section id="services" className="py-20 animate-on-scroll">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-16 text-white">
                <TypeWriter text="Our &nbsp;" speed={70} delay={4800} />
                <TypeWriter
                  text="Services"
                  className="text-cyan-400"
                  speed={70}
                  delay={4800}
                />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Globe2 className="h-8 w-8 text-cyan-400 " />,
                    title: "Web Development",
                    description:
                      "Custom web applications built with cutting-edge technologies.",
                  },
                  {
                    icon: <FiLayout className="h-8 w-8 text-cyan-300 " />,
                    title: "UI/UX Design",
                    description:
                      "Beautiful and intuitive interfaces that users love.",
                  },
                  {
                    icon: <Cpu className="h-8 w-8 text-purple-400" />,
                    title: "AI Integration",
                    description:
                      "Smart solutions powered by artificial intelligence.",
                  },
                  {
                    icon: <Code2 className="h-8 w-8 text-pink-400" />,
                    title: "Cloud Solutions",
                    description:
                      "Scalable and secure cloud infrastructure for your applications.",
                  },
                  {
                    icon: <FiSmartphone className="h-8 w-8 text-pink-400" />,
                    title: "Mobile Development",
                    description:
                      "Cross-platform mobile applications for iOS and Android.",
                  },
                  {
                    icon: <FiUsers className="h-8 w-8 text-purple-400" />,
                    title: "Consultation",
                    description:
                      "Expert advice to guide your digital transformation.",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors"
                    whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 0.2 * index }}
                  >
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">
                      <TypeWriter
                        text={service.title}
                        speed={40}
                        delay={index * 500}
                      />
                    </h3>
                    <p className="text-gray-400">
                      <TypeWriter
                        text={service.description}
                        speed={20}
                        delay={1500 + index * 500}
                      />
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Portfolio Section */}
          <section
            id="portfolio"
            className="py-20 bg-gray-900 animate-on-scroll"
          >
            <div className="md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-16">
                <TypeWriter text="Featured &nbsp;" speed={50} />
                <TypeWriter
                  text="Projects"
                  className="text-cyan-400"
                  speed={50}
                  delay={400}
                />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "MSCE Chatbolt - AI Educational Web App",
                    description: "An AI powered learning assistant for MSCE students with minimalistic UI and fast performance.",
                    image: studyHacks
                  },
                  {
                    title: "Aganyu",
                    description: "A platform that people with reliable workers for any short term job.",
                    image: school
                  },
                  {
                    title: "Hotel Website",
                    description: "A professional hotel website featuring room listing, pricing, hero sliders, and mordern hotel-themed UI.",
                    image: hotel
                  },
                  {
                    title: "Scoolverse - School Management System (SaaS)",
                    description: "A mordern, cloud based school management system (Saas) designed to help schools digitize and streamline their operations.",
                    image: scoolverse
                  },
                ].map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-gray-700"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[40vh] object-fit"
                    />
                    <div className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 animate-on-scroll">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-16 text-white">
                Client <span className="text-cyan-400">Testimonials</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Mkandawire",
                    role: "CEO, Takulandilani Lodge",
                    content:
                      "CapsualCode transformed our digital presence with their innovative solutions.",
                  },
                  {
                    name: "Harris Chimwaza",
                    role: "Director, Hope private school",
                    content:
                      "Their expertise in AI integration helped us achieve remarkable results in the institution.",
                  },
                  {
                    name: "Immran Katungwe",
                    role: "Founder, Aganyu Connect",
                    content:
                      "Professional, responsive, and delivered beyond our expectations.",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-800 rounded-lg border border-gray-700"
                  >
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-cyan-400 mr-2" />
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{testimonial.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Contact Section */}
          <section
            id="contact"
            className="py-20 bg-gray-900 animate-on-scroll"
          >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-16 text-white">
                Get in <span className="text-cyan-400">Touch</span>
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white placeholder-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white placeholder-gray-400"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white placeholder-gray-400"
                ></textarea>
                <button type="submit" className="w-full btn-primary" disabled={isLoading}>
                  {isLoading && <Loader className="animate-spin h-4 w-4 mr-2 inline" />}
                  {isLoading ? 'Sending Message' : 'Send Message'}
                </button>
              </form>
            </div>
          </section>
    
          <Footer />
          <ToastContainer theme="dark" position="top-right" />
        </div>
      );
}

export default Landing;
