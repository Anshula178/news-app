// src/components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <>
    <h1 className="text-5xl text-black font-bold mb-8 text-center">Contact Us</h1>
    <div className="container mx-auto px-4 py-8 space-x-9 ms-20">
      
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:border-blue-500"
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:border-blue-500"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="space-y-6 space-x-6">
          <h2 className="text-2xl font-bold ms-4 mt-9">Our Office</h2>
          <div className="text-gray-800 font-semibold mb-2">
            <p><span className="font-bold mb-2">Address:</span> 481 Creekside Lane Avila Beach, CA 93424</p>
            <p><span className="font-bold mb-2">Phone:</span></p>
            <ul className="list-disc pl-6 mb-2">
              <li>+53 345 7953 32453</li>
              <li>+53 345 7557 822112</li>
            </ul>
            <p><span className="font-bold mb-2">Email:</span> yourmail@gmail.com</p>
            <p><span className="font-bold mb-2">Working Hours:</span> Monday - Friday, 9 AM - 6 PM</p>
          </div> 
          
          <div className="mt-20">
            <h2 className="text-2xl mt-6  font-bold mb-4">Connect with Us</h2>
            <ul className="flex-col ">
              <li><a href="#" className="text-gray-800 hover:underline mb-2">Facebook</a></li>
              <li><a href="#" className="text-gray-800 hover:underline mb-2">Twitter</a></li>
              <li><a href="#" className="text-gray-800 hover:underline mb-2">Instagram</a></li>
              <li><a href="#" className="text-gray-800 hover:underline mb-2">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      
    </div>
    </>
  );
};

export default ContactUs;
