import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} Quote App. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/about" className="hover:text-blue-400 transition duration-300">About Us</a>
          <a href="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
          <a href="/contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
