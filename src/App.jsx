import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductGallery from './components/ProductGallery'
import CustomDesigner from './components/CustomDesigner'
import HowItWorks from './components/HowItWorks'
import AboutUs from './components/AboutUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  const [bgColor, setBgColor] = useState('#000000')
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    // Update background color based on scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Change background color based on scroll position
      if (scrollY < windowHeight * 0.5) {
        setBgColor('#000000')
      } else if (scrollY < windowHeight * 1.5) {
        setBgColor('#0a0a0a')
      } else if (scrollY < windowHeight * 2.5) {
        setBgColor('#0f0f0f')
      } else if (scrollY < windowHeight * 3.5) {
        setBgColor('#141414')
      } else if (scrollY < windowHeight * 4.5) {
        setBgColor('#0a0a0a')
      } else {
        setBgColor('#000000')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="min-h-screen overflow-x-hidden"
      style={{ 
        backgroundColor: bgColor,
        transition: 'background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Enhanced 3D Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-red-900/10 pointer-events-none"></div>
      
      {/* Animated 3D Spheres - White */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="fixed top-40 right-20 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-float-reverse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="fixed bottom-20 left-1/4 w-72 h-72 bg-white/6 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-1/2 right-10 w-64 h-64 bg-white/8 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }}></div>
      
      {/* 3D Rotating Cubes */}
      <div className="fixed top-1/4 left-1/3 w-32 h-32 bg-3d-cube animate-rotate-3d opacity-30 pointer-events-none"></div>
      <div className="fixed bottom-1/3 right-1/4 w-40 h-40 bg-3d-cube animate-rotate-3d opacity-20 pointer-events-none" style={{ animationDelay: '5s' }}></div>
      
      {/* Glowing Orbs - White */}
      <div className="fixed top-1/3 right-1/3 w-24 h-24 bg-white/20 rounded-full animate-pulse-glow pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-1/2 w-20 h-20 bg-white/15 rounded-full animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Gradient Mesh */}
      <div className="fixed inset-0 bg-gradient-to-tr from-red-950/5 via-transparent to-red-900/5 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-bl from-transparent via-red-950/5 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Features />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProductGallery />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CustomDesigner />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <HowItWorks />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutUs />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactForm />
        </motion.div>
        
        <Footer />
      </div>
      
      <Cart />
    </div>
  )
}

export default App
