import React from 'react'
import { Sparkles, Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-black"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-neon-pink animate-pulse" />
              <span className="text-2xl font-bold text-gradient neon-glow">Styloops</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating custom t-shirts that express your unique style. Quality printing, premium fabrics, and unlimited creativity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="glass-effect p-2.5 rounded-full hover:bg-neon-pink hover:neon-border transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="glass-effect p-2.5 rounded-full hover:bg-neon-purple hover:neon-border transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="glass-effect p-2.5 rounded-full hover:bg-neon-blue hover:neon-border transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="glass-effect p-2.5 rounded-full hover:bg-gradient-to-r hover:from-neon-pink hover:to-neon-purple hover:neon-border transition-all hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-neon-pink transition-all hover:translate-x-1">Home</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-neon-pink transition-all hover:translate-x-1">Gallery</a></li>
              <li><a href="#designer" className="text-gray-400 hover:text-neon-pink transition-all hover:translate-x-1">Design Tool</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-neon-pink transition-all hover:translate-x-1">How It Works</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-neon-pink transition-all hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-neon-purple transition-all hover:translate-x-1">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-purple transition-all hover:translate-x-1">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-purple transition-all hover:translate-x-1">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-purple transition-all hover:translate-x-1">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-purple transition-all hover:translate-x-1">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-l-lg glass-effect border border-white/20 focus:outline-none focus:neon-border transition-all text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-neon-pink to-neon-purple px-6 py-3 rounded-r-lg hover:shadow-lg hover:shadow-neon-pink/50 transition-all neon-border">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Styloops. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
