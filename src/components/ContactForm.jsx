import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Sparkles, Zap } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/10 to-black"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 neon-glow animate-pulse">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-neon-pink animate-pulse" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group/item hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-red-500 to-neon-pink p-3 rounded-lg shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300 hover:text-neon-pink transition-colors">support@styloops.com</p>
                    <p className="text-gray-300 hover:text-neon-pink transition-colors">orders@styloops.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group/item hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-neon-blue to-cyan-500 p-3 rounded-lg shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300 hover:text-neon-blue transition-colors">+91 9519732776</p>
                    <p className="text-gray-300 hover:text-neon-blue transition-colors">Mon-Fri 9am-6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group/item hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-neon-green to-emerald-500 p-3 rounded-lg shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-300 hover:text-neon-green transition-colors">Ratanpur, Panki</p>
                    <p className="text-gray-300 hover:text-neon-green transition-colors">Kanpur, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-neon-pink p-8 rounded-2xl text-white neon-border animate-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 relative z-10">
                <Zap className="w-6 h-6 animate-bounce" />
                Business Hours
              </h3>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between hover:translate-x-2 transition-transform duration-300">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between hover:translate-x-2 transition-transform duration-300">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between hover:translate-x-2 transition-transform duration-300">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-white font-semibold mb-2 group-hover:text-neon-pink transition-colors">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-white/20 bg-black/40 text-white focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-105 placeholder-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-white font-semibold mb-2 group-hover:text-neon-pink transition-colors">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-white/20 bg-black/40 text-white focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-105 placeholder-gray-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-white font-semibold mb-2 group-hover:text-neon-pink transition-colors">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-white/20 bg-black/40 text-white focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-105 placeholder-gray-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="group">
                <label className="block text-white font-semibold mb-2 group-hover:text-neon-pink transition-colors">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-6 py-4 rounded-xl border-2 border-white/20 bg-black/40 text-white focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-105 resize-none placeholder-gray-500"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-neon-pink text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 neon-border animate-glow group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
