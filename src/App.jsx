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
      <div className="fixed inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-purple-950/10 pointer-events-none"></div>
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
    </div>
  )
}

export default App
