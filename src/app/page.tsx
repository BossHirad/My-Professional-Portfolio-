import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaPalette, FaRocket, FaDownload, FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Haji</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  <FaRocket className="mr-2" />
                  Available for new opportunities
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Software Developer &{" "}
                  <span className="text-blue-600 dark:text-blue-400">UI/UX Designer</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                  I craft exceptional digital experiences through clean code and thoughtful design. 
                  Specializing in modern web applications that users love to interact with.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get in touch
                </a>
                <a 
                  href="#projects" 
                  className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
                >
                  View Projects
                </a>
                <a 
                  href="/resume.pdf" 
                  className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
                >
                  <FaDownload className="mr-2" />
                  Download CV
                </a>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com/BossHirad" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="mailto:bosshirad16@gmail.com" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" title="Send email to bosshirad16@gmail.com">
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Haji profile photo"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Passionate about creating digital experiences</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                I&apos;m Haji, a dedicated software developer and UI/UX designer with a passion for creating 
                exceptional digital experiences. With experience at companies like Jtech, I&apos;ve learned 
                that great design and clean code go hand in hand.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                I believe in building applications that not only look great but also provide 
                seamless user experiences. Every project is an opportunity to push boundaries 
                and create something meaningful.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                <FaCode className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Clean Code</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Writing maintainable, scalable code that stands the test of time</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                <FaPalette className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">User-Centered Design</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Creating interfaces that users love to interact with</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Frontend</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">HTML5 & CSS3</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">JavaScript</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-18 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">React.js</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-17 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Next.js</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Design</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">UI/UX Design</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-18 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Figma</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-17 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">TailwindCSS</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-18 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Responsive Design</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-19 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Backend</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">PHP</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-18 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">MySQL</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-17 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Laravel</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-15 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">RESTful APIs</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Node.js</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-17 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Express.js</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-15 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Tools & Others</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Git & GitHub</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">VS Code</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-19 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Agile/Scrum</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-15 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Problem Solving</span>
                  <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div className="w-18 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Jtech Website Redesign</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Complete redesign of Jtech&apos;s corporate website focusing on modern aesthetics, 
                  improved user experience, and enhanced conversion rates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">Figma</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center">
                    View Project <FaExternalLinkAlt className="ml-1 w-3 h-3" />
                  </a>
                  <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm">Case Study</a>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">Personal</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Portfolio Web App</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Modern portfolio website built with Next.js and TailwindCSS, showcasing 
                  professional design principles and responsive development.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center">
                    View Project <FaExternalLinkAlt className="ml-1 w-3 h-3" />
                  </a>
                  <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm">Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">UI/UX Designer & Web Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Jtech</p>
                </div>
                <span className="text-slate-500 dark:text-slate-400 text-sm">2022 - 2024</span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Led the complete redesign of the company website, improving user engagement by 40%
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developed responsive web applications using React.js and modern CSS frameworks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborated with cross-functional teams to deliver high-quality digital products
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Implemented user-centered design principles to create intuitive user interfaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What Clients Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FaStar className="w-4 h-4" />
                  <FaStar className="w-4 h-4" />
                  <FaStar className="w-4 h-4" />
                  <FaStar className="w-4 h-4" />
                  <FaStar className="w-4 h-4" />
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                &quot;Haji delivered an exceptional website redesign that exceeded our expectations. 
                His attention to detail and user experience expertise made all the difference.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  S
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Sadam Hassan</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">CEO, Jtech</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FaStar className="w-4 h-4" />
                  <FaStar className="w-4 h-4" />
                  <FaStar className="w-4 h-4" />
                  <FaStar className="w-4 h-4" />
                  <FaStar className="w-4 h-4" />
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                &quot;Working with Haji was a pleasure. He understood our vision perfectly and 
                delivered a modern, functional website that our users love.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  N
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Najma Bashir</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Marketing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s discuss how we can create something amazing together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                  <a href="mailto:bosshirad16@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    bosshirad16@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FaLinkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">LinkedIn</h3>
                  <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="text-blue-600 dark:text-blue-400 hover:underline">
                    linkedin.com/in/haji
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FaGithub className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">GitHub</h3>
                  <a href="https://github.com/BossHirad" className="text-blue-600 dark:text-blue-400 hover:underline">
                    github.com/BossHirad
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Available for:</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Full-time positions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Freelance projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Contract work
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  UI/UX consulting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Haji. Built with Next.js and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
