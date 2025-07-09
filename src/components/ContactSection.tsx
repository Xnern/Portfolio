import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert('Message sent! (This is just a demo)');
  };
  return <section id="contact" className="py-20 px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="w-20 h-1 bg-yellow-500 mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-yellow-500/10 p-3 rounded-lg mr-4">
                  <MailIcon className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-400">hello@devportfolio.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500/10 p-3 rounded-lg mr-4">
                  <MapPinIcon className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500/10 p-3 rounded-lg mr-4">
                  <PhoneIcon className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input type="text" id="name" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input type="email" id="email" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required></textarea>
              </div>
              <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}