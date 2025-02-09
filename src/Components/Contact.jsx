import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, FileText, Layout, Users, PenTool, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-pink-50">
     
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/Wallpaper.jpg')" }}
      />

      <nav className="absolute top-0 left-0 w-full z-50 bg-black/10">
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

      <div className="">
        
        <div className="relative z-10 bg-white backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Contact Me <br /> <br />
            Evelynne Bett.
          </h2>

          <p className="text-xl font-semibold text-gray-900">
            <a
              href="mailto:bett.everlyne@gmail.com"
              className="hover:text-pink-600"
            >
              bett.everlyne@gmail.com
            </a>
          </p>
          <p className="text-xl font-semibold text-gray-900 mt-3">
            📞{" "}
            <a href="tel:+254720155133" className="hover:text-pink-600">
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
            className="text-xl inline-block mt-10 bg-gradient-to-r from-white/70 to-gray-400 hover: text-black font-black px-6 py-3 rounded-full shadow-2xl hover:from-pink-200 hover:to-white/70 transition-all duration-300"
          >
            Book a Meeting
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
