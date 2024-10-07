import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-pale-dogwood py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pastel-pink">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary-300 transition duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary-300 transition duration-300">About</Link></li>
              <li><Link to="/courses" className="hover:text-secondary-300 transition duration-300">Courses</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-300 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pastel-pink">Contact Us</h3>
            <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> +91 9810312095</p>
            <p className="flex items-center"><Mail size={18} className="mr-2" /> arcacademy.in@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pastel-pink">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/arcacademy.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300 transition duration-300"><Facebook /></a>
              <a href="https://www.instagram.com/arcacademy.in/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300 transition duration-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 ARC ACADEMY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer