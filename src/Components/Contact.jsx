import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-pink-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/Images/Wallpaper.jpg')" }}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-3xl font-extrabold hover:text-pink-300 transition">
            Evelynne Bett
          </h1>
          <div className="space-x-6">
            <Link to="/" className="text-white font-bold hover:text-pink-300 transition">Home</Link>
            <Link to="/contact" className="text-white font-bold hover:text-pink-300 transition">Contact Me</Link>
          </div>
        </div>
      </nav>

      {/* Contact Card */}
      <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h2 className="text-3xl font-bold text-pink-400 mb-6">Contact Me</h2>

        {/* Contact Details with Improved Readability */}
        <p className="text-xl font-semibold text-gray-900">
          <a href="mailto:bett.everlyne@gmail.com" className="hover:underline">bett.everlyne@gmail.com</a>
        </p>
        <p className="text-xl font-semibold text-gray-900 mt-3">
          📞 <a href="tel:+254720155133" className="hover:underline">+254 720 155 133</a>
        </p>
        <p className="text-lg text-gray-800 mt-4">
          🕒 <strong>Opening Hours:</strong> 8 AM - 4 PM <br /> Monday - Saturday
        </p>

        {/* Contact Button */}
        <a 
          href="https://calendly.com/raysang98/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
        >
          Book a Meeting
        </a>
      </div>
       
    </div>
    
  );
};

export default Contact;
