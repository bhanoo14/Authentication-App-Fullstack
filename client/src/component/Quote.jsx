import React from 'react';

function Quote() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <section className="text-center p-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Quote App</h2>
        <p className="text-lg mb-8">
          Discover, save, and share your favorite quotes. Get inspired every day!
        </p>
        <a
          href="/quotes"
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Browse Quotes
        </a>
      </section>

      <section className="flex justify-center mt-12">
        <div className="p-6 bg-white shadow-lg rounded-xl max-w-md">
          <h3 className="text-2xl font-bold mb-4">Quote of the Day</h3>
          <p className="text-gray-700 italic">
            "The only way to do great work is to love what you do." – Steve Jobs
          </p>
        </div>
      </section>
    </main>
  );
}

export default Quote;
