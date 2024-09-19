import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quote App</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/home" className="hover:underline">Home</Link> {/* Use Link */}
            </li>
            <li>
              <Link to="/quotes" className="hover:underline">Quotes</Link> {/* Use Link */}
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link> {/* Use Link */}
            </li>
            <li>
              <Link to="/api/user/login" className="hover:underline">Login</Link> {/* Use Link */}
            </li>
            <li>
              <Link to="/api/user/signup" className="hover:underline">Sign Up</Link> {/* Use Link */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
