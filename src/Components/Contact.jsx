import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, FileText, Layout, Users, PenTool, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/Wallpaper.jpg')", zIndex: 0 }}
      />

      {/* Navigation */}
      <nav className="relative z-10 w-full bg-black/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="space-x-6 m-4">
            <Link
              to="/"
              className="text-white font-bold hover:text-pink-300 transition"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-white font-bold hover:text-pink-300 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center mt-20">
        <div className="relative bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-xl text-center max-w-md w-full mx-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Contact Me <br /> <br />
            Everlyne Bett.
          </h2>

          <p className="text-xl font-semibold text-gray-900">
            <a
              href="mailto:bett.everlyne@gmail.com"
              className="hover:text-pink-600 transition duration-300"
            >
              bett.everlyne@gmail.com
            </a>
          </p>
          <p className="text-xl font-semibold text-gray-900 mt-3">
            📞{" "}
            <a href="tel:+254720155133" className="hover:text-pink-600 transition duration-300">
              +254 720 155 133
            </a>
          </p>
          <p className="text-lg text-gray-800 mt-4">
            🕒 <strong>Opening Hours:</strong> 8 AM - 4 PM <br /> Monday -
            Saturday
          </p>

          <a
            href="https://calendly.com/raysang98/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl inline-block mt-10 bg-gradient-to-r from-pink-300 to-white hover:from-white hover:to-pink-300 text-black font-black px-6 py-3 rounded-full shadow-2xl transition-all duration-300"
          >
            Book a Meeting
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative z-10 mt-60">
        <div className="bg-gradient-to-b from-pink-50 to-black pt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-black">
                Let's Connect
              </h2>
              <div className="flex flex-wrap justify-center space-x-8 mb-12">
                <a
                  href="mailto:bett.everlyne@gmail.com"
                  className="flex items-center space-x-2 text-black font-black hover:text-pink-500 transition"
                >
                  <Mail className="w-6 h-6" />
                  <span>bett.everlyne@gmail.com</span>
                </a>
                <a
                  href="tel:+254720155133"
                  className="flex items-center space-x-2 text-black hover:text-pink-500 transition font-black"
                >
                  <Phone className="w-6 h-6" />
                  <span>+254720155133</span>
                </a>
              </div>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-black hover:text-pink-500 transition">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" className="text-black hover:text-pink-500 transition">
                  <Twitter className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          <footer className="bg-black text-white py-8 mt-20">
            <div className="container mx-auto px-6 text-center">
              <p>© 2025 Everlyne Bett. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;