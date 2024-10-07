import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism' : ''}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://static.wixstatic.com/media/d34dcd_2dd17479257d4b16911ddc29787675ca~mv2.png" alt="Arc Academy Logo" className="w-16 h-16" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-pale-dogwood hover:text-pastel-pink hover-effect">Home</Link>
          <Link to="/about" className="text-pale-dogwood hover:text-pastel-pink hover-effect">About</Link>
          <Link to="/courses" className="text-pale-dogwood hover:text-pastel-pink hover-effect">Courses</Link>
          <Link to="/contact" className="text-pale-dogwood hover:text-pastel-pink hover-effect">Contact</Link>
        </nav>
        <button className="md:hidden text-pale-dogwood" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden glassmorphism">
          <nav className="flex flex-col items-center py-4">
            <Link to="/" className="py-2 text-pale-dogwood hover:text-pastel-pink" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="py-2 text-pale-dogwood hover:text-pastel-pink" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/courses" className="py-2 text-pale-dogwood hover:text-pastel-pink" onClick={() => setIsMenuOpen(false)}>Courses</Link>
            <Link to="/contact" className="py-2 text-pale-dogwood hover:text-pastel-pink" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header