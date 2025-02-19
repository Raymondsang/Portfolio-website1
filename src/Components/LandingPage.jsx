import React from "react";
import {
  Phone,
  Mail,
  FileText,
  Layout,
  Users,
  PenTool,
  Linkedin,
  Twitter,
} from "lucide-react";

const LandingPage = () => {
  const services = [
    {
      title: "Customer Service Champion",
      description:
        "Delivering exceptional customer services with enforced standards and best practices for optimal customer satisfaction",
      icon: <Users className="w-8 h-8 text-black" />,
    },
    {
      title: "Virtual Assistant",
      description:
        "Comprehensive support including inbox management, calendar organization, and travel planning",
      icon: <Layout className="w-8 h-8 text-black" />,
    },
    {
      title: "Queue Management",
      description:
        "Enhancing customer experiences through digital channel migration and efficient floor management",
      icon: <Users className="w-8 h-8 text-black" />,
    },
    {
      title: "Operations Management",
      description:
        "Expert handling of internal accounts maintenance and credit operations support",
      icon: <FileText className="w-8 h-8 text-black" />,
    },
    {
      title: "Team Leadership",
      description:
        "Building and supporting effective teams with focus on resource allocation and high-impact initiatives",
      icon: <Users className="w-8 h-8 text-black" />,
    },
    {
      title: "Innovation Champion",
      description:
        "Driving operational excellence and digital transformation in banking services",
      icon: <PenTool className="w-8 h-8 text-black" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="min-h-screen relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Wallpaper2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Navigation */}
        <nav className="absolute w-full top-0 z-50 bg-blue/10 ">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-6">
                <a
                  href="/"
                  className="text-gray-700 hover:text-blue-500 transition font-bold px-4 py-2"
                >
                  Home
                </a>

                <a
                  href="/Contact"
                  className="text-gray-700 hover:text-blue-500 transition font-bold px-4 py-2"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-black leading-tight text-blue-400">
                UI/UX Design & Customer Service
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-black">
                Senior Customer Service Professional with 12+ years of experience in
                customer service excellence, operations management, and digital
                transformation.
              </p>
              <div className="font-black text-blue-400 text-4xl mt-8 mb-16 font-mono">
                    <p>Everlyn Bett</p>
                  </div>
              <div className="flex space-x-4">
                <a
                  href="https://calendly.com/cbett-everlyn/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <button className="bg-gradient-to-r from-blue-400 to-white text-black px-8 py-3 rounded-full">
                    Hire Me
                  </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-transparent rounded-full transform -rotate-6"></div>
              <img
                src="/Images/profile.jpg"
                alt="Profile"
                className="relative rounded-full w-96 h-96 object-cover mx-auto shadow-2xl"
              />
             
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-blue-300 via-blue-200 to-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-700">
                Professional Background
              </h3>
              <p className="text-gray-700 mb-6">
                Accomplished bank custodian, senior teller and customer-centric
                service desk officer with 12+ years of experience in the banking
                industry. Proficient at improving customer satisfaction and
                service delivery by leveraging excellent communication,
                interpersonal, and problem-solving skills.
              </p>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-700">
                  Core Competencies
                </h4>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                  <h5 className="font-bold text-gray-700">
                    Customer Service Champion
                  </h5>
                  <ul className="text-gray-600 font-black mt-2 space-y-2">
                    <li>
                      • Enforcement of service standards and best practices
                    </li>
                    <li>• Managing customer queries through CRM systems</li>
                    <li>• Analyzing customer experience dashboards</li>
                    <li>• Elevating NPS and customer satisfaction</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                  <h5 className="font-bold text-gray-700">
                    Virtual Assistant Excellence
                  </h5>
                  <ul className="text-gray-600 font-black mt-2 space-y-2">
                    <li>• Inbox and Calendar Management</li>
                    <li>• Travel Research and Itinerary Planning</li>
                    <li>• Project Management and Data Entry</li>
                    <li>• Stakeholder Management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-6">
                  <h4 className="font-bold mb-2 text-gray-700">
                    Banking Operations
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Customer Service</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-6">
                  <h4 className="font-black mb-2 text-gray-700">
                    Queue Management
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Digital Channel Migration</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-6">
                  <h4 className="font-bold mb-2 text-gray-700">
                    Google Workspace
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray/10">
                      <span>Productivity Tools</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-4">
                  <h4 className="font-bold mb-2 text-gray-800">Leadership</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-800">
                      <span>Team Management</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-gray-700 font-bold text-center mb-16">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg 
                     hover:bg-blue-50 hover:transform hover:-translate-y-2 
                     transition duration-300"
              >
                <div className="mb-6 text-blue-400">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-white to-blue-100"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-black">
              Let's Connect
            </h2>
            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="mailto:cbett.everlyn@gmail.com"
                className="flex items-center space-x-2 text-black font-black hover:text-blue-500 transition"
              >
                <Mail className="w-6 h-6" />
                <span>cbett.everlyn@gmail.com</span>
              </a> <br />
              <a
                href="tel:+254720155133"
                className="flex items-center space-x-2 text-black hover:text-blue-500 transition font-black"
              >
                <Phone className="w-6 h-6" />
                <span>+254720155133</span>
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-black hover:text-blue-500 transition">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-black hover:text-blue-500 transition">
                <Twitter className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-100 text-gray-800 text-xl font-black py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Everlyn Bett. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
