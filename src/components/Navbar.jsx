import React, { useState, useEffect } from 'react'
import { Menu, X, ShoppingCart, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Design', href: '#designer' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark shadow-2xl shadow-red-500/10 neon-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-red-500 animate-pulse" />
            <span className="text-2xl font-bold text-gradient neon-glow">Styloops</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-red-500 font-medium transition-all duration-200 hover:scale-110"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-200 flex items-center space-x-2 neon-border animate-glow">
              <ShoppingCart className="w-4 h-4" />
              <span>Order Now</span>
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-red-500 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full font-semibold flex items-center justify-center space-x-2 neon-border">
              <ShoppingCart className="w-4 h-4" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
