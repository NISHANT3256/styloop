import React, { useEffect, useRef, useState } from 'react'
import { Sparkles, ArrowRight, Shirt, Zap, Star, Flame, ChevronDown, Play } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grain overlay */}
      <div className="grain-overlay"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-purple-950/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)] animate-pulse-slow"></div>
      </div>
      
      {/* Floating orbs with parallax */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-500/20 to-neon-pink/20 rounded-full filter blur-3xl animate-float" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s', transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-purple-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s', transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)` }}></div>
      
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-neon-pink rounded-full animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 glass-effect px-6 py-3 rounded-full border border-white/10 hover:border-neon-pink/50 transition-all duration-500 group cursor-pointer">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-neon-pink animate-spin-slow" />
                <div className="absolute inset-0 bg-neon-pink blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-sm font-semibold text-white tracking-wider">PREMIUM CUSTOM PRINTING</span>
              <Zap className="w-5 h-5 text-neon-yellow animate-pulse" />
            </div>
            
            {/* Main heading with 3D effect */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold leading-none">
                <span className="block text-white" style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}>
                  YOUR
                </span>
                <span className="block gradient-text-animated" style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }}>
                  DESIGN
                </span>
                <span className="block text-white" style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}>
                  YOUR STYLE
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
              Transform your ideas into wearable art. Print 
              <span className="text-neon-pink font-bold"> anything you imagine </span>
              on premium t-shirts with our cutting-edge technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white px-10 py-5 rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <Play className="w-6 h-6 fill-current" />
                  <span>Start Creating</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="group glass-effect text-white px-10 py-5 rounded-full font-semibold text-lg border-2 border-white/20 hover:border-red-500 transition-all duration-500 hover:scale-105">
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore Designs</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* 3D T-Shirt Display */}
          <div className="relative perspective-1000 hidden lg:block">
            <div className="relative transform-3d" style={{ transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)` }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-neon-pink rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Main card */}
              <div className="relative glass-dark p-12 rounded-3xl border border-white/10 hover:border-neon-pink/50 transition-all duration-500 group">
                {/* T-shirt container */}
                <div className="relative h-[500px] bg-gradient-to-br from-red-950/30 via-black to-purple-950/30 rounded-2xl overflow-hidden">
                  {/* Animated background grid */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                  </div>
                  
                  {/* Floating t-shirt */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative animate-float-slow">
                      <Shirt className="w-64 h-64 text-red-500 drop-shadow-2xl" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 30px rgba(220, 38, 38, 0.5))' }} />
                      
                      {/* Orbiting elements */}
                      <div className="absolute top-0 right-0 animate-spin-slow" style={{ animationDuration: '10s' }}>
                        <Star className="w-8 h-8 text-neon-yellow" />
                      </div>
                      <div className="absolute bottom-0 left-0 animate-spin-slow" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
                        <Sparkles className="w-8 h-8 text-neon-blue" />
                      </div>
                      <div className="absolute top-1/2 left-0 animate-bounce-slow">
                        <Zap className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner badges */}
                  <div className="absolute top-6 right-6 glass-effect px-4 py-2 rounded-full border border-red-500/30">
                    <span className="text-xs text-white font-semibold tracking-wider">PREMIUM</span>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 glass-effect px-4 py-2 rounded-full border border-red-600/30">
                    <span className="text-xs text-white font-semibold tracking-wider">HD QUALITY</span>
                  </div>
                </div>
                
                {/* Features list */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {['Premium Cotton', 'HD Printing', 'Fast Delivery', 'Eco-Friendly'].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 glass-effect px-4 py-3 rounded-xl border border-white/5 hover:border-red-500/30 transition-all duration-300 group/item">
                      <div className="w-2 h-2 bg-neon-green rounded-full group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-sm text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-gray-400 font-medium tracking-wider">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-6 h-6 text-red-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
