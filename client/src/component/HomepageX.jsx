import React from 'react';
import { Link } from 'react-router-dom';

const HomepageX = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-center text-xl font-bold text-gray-700 mb-4">
          You have to log in to view any Quote
        </h2>
        
        <div className="space-x-4">
          <Link to="/api/user/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </Link>
          <Link to="/api/user/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Signup
          </Link>
        </div>
      </main>

    </div>
  );
};

export default HomepageX;
