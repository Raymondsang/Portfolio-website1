import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, FileText, Layout, Users, PenTool, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/Wallpaer2.jpg')", zIndex: 0 }}
      />

      {/* Navigation */}
      <nav className="relative z-10 w-full bg-black/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="space-x-6 m-4">
            <Link
              to="/"
              className="text-white font-bold hover:text-blue-300 transition"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-white font-bold hover:text-blue-300 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center mt-20">
        <div className="relative bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-xl text-center max-w-md w-full mx-4 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Contact Me <br /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400">
              Everlyn Bett
            </span>
          </h2>

          <p className="text-xl font-semibold text-gray-700">
            <a
              href="mailto:cbett.everlyn@gmail.com"
              className="hover:text-gray-500 transition duration-300"
            >
              cbett.everlyn@gmail.com
            </a>
          </p>
          <p className="text-xl font-semibold text-gray-700 mt-3">
            📞{" "}
            <a href="tel:+254720155133" className="hover:text-gray-500 transition duration-300">
              +254 720 155 133
            </a>
          </p>
          <p className="text-lg text-gray-700 mt-4">
            🕒 <strong>Opening Hours:</strong> 8 AM - 5 PM <br /> Monday -
            Saturday
          </p>

          <a
            href="https://calendly.com/cbett-everlyn/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl inline-block mt-10 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400 text-white font-bold px-6 py-3 rounded-full shadow-2xl hover:from-gray-500 hover:via-gray-400 hover:to-gray-300 transition-all duration-300"
          >
            Book a Meeting
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative z-10 mt-60">
        <div className="bg-gradient-to-b from-transparent to-black pt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Let's Connect
              </h2>
              <div className="flex flex-wrap justify-center space-x-8 mb-12">
                <a
                  href="mailto:cbett.everlyn@gmail.com"
                  className="flex items-center space-x-2 text-gray-700 font-bold hover:text-blue-700 transition"
                >
                  <Mail className="w-6 h-6" />
                  <span>cbett.everlyn@gmail.com</span>
                </a>
                <a
                  href="tel:+254720155133"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition font-bold"
                >
                  <Phone className="w-6 h-6" />
                  <span>+254720155133</span>
                </a>
              </div>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-700 transition">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-700 transition">
                  <Twitter className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          <footer className=" text-white py-8 mt-20">
            <div className="container mx-auto px-6 text-center">
              <p>© 2025 Everlyn Bett. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;