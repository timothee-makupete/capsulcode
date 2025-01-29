import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { TypeWriter } from './components/TypeWriter';
import { ArrowRight, Code2, Cpu, Globe2, Sparkles, Users } from 'lucide-react';
import { FiCode, FiLayout, FiSmartphone, FiUsers } from 'react-icons/fi';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  useIntersectionObserver();

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (!href) return;
  
        const target = document.querySelector(href);
        if (!target) return;
  
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }, []);
  

  return (
    <div className="min-h-screen bg-black text-white">
      <LoadingScreen />
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mt-[10%]">
            <h1 className="text-3xl md:text-5xl font-bold">
              <span  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Future-Proof &nbsp;</span>
             
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
          
            <div className="flex justify-center space-x-4 opacity-0 mt-[15%] animate-fade-in" style={{ animationDelay: '6s' }}>
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
          <h2 className="text-4xl font-bold text-center mb-16">
            <TypeWriter text="Our &nbsp;" speed={50} />
            <TypeWriter
              text="Services"
              className="text-cyan-400"
              speed={50}
              delay={200}
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="h-8 w-8 text-cyan-400 " />,
                title: 'Web Development',
                description:
                  'Custom web applications built with cutting-edge technologies.',
              },
              {
                icon: <FiLayout className="h-8 w-8 text-cyan-300 " />,
                title: 'UI/UX Design',
                description:
                  'Beautiful and intuitive interfaces that users love.',
              },
              {
                icon: <Cpu className="h-8 w-8 text-purple-400" />,
                title: 'AI Integration',
                description:
                  'Smart solutions powered by artificial intelligence.',
              },
              {
                icon: <Code2 className="h-8 w-8 text-pink-400" />,
                title: 'Cloud Solutions',
                description:
                  'Scalable and secure cloud infrastructure for your applications.',
              },
              {
                icon: <FiSmartphone className="h-8 w-8 text-pink-400" />,
                title: 'Mobile Development',
                description:
                  'Cross-platform mobile applications for iOS and Android.',
              },
              {
                icon: <FiUsers className="h-8 w-8 text-purple-400" />,
                title: 'Consultation',
                description:
                  'Expert advice to guide your digital transformation.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900/50 backdrop-blur-xl rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 transform hover:scale-[1.02]"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                title: 'AI-Powered Analytics Dashboard',
                description: 'Real-time data visualization platform',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'E-Commerce Platform',
                description: 'Next-generation shopping experience',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-cyan-500/20"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Client <span className="text-cyan-400">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart',
                content:
                  'CapsualCode transformed our digital presence with their innovative solutions.',
              },
              {
                name: 'Michael Chen',
                role: 'CTO, DataFlow',
                content:
                  'Their expertise in AI integration helped us achieve remarkable results.',
              },
              {
                name: 'Emma Williams',
                role: 'Founder, EcoTech',
                content:
                  'Professional, responsive, and delivered beyond our expectations.',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900/50 backdrop-blur-xl rounded-lg border border-cyan-500/20"
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
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black animate-on-scroll">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-md focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-md focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-md focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            ></textarea>
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Send Message <Sparkles className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;