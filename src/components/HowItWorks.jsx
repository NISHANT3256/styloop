import React from 'react'
import { Palette, ShoppingCart, Truck, Smile } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Palette,
      title: 'Design',
      description: 'Choose from our collection or upload your own design. Customize colors, text, and placement.',
      color: 'from-purple-500 to-pink-500',
      step: '01'
    },
    {
      icon: ShoppingCart,
      title: 'Order',
      description: 'Select your size, quantity, and add to cart. Secure checkout with multiple payment options.',
      color: 'from-blue-500 to-cyan-500',
      step: '02'
    },
    {
      icon: Truck,
      title: 'Delivery',
      description: 'We print and ship your custom t-shirt within 3-5 business days with tracking.',
      color: 'from-orange-500 to-red-500',
      step: '03'
    },
    {
      icon: Smile,
      title: 'Enjoy',
      description: 'Receive your premium quality custom t-shirt and wear it with pride!',
      color: 'from-green-500 to-emerald-500',
      step: '04'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/10 to-black"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 neon-glow">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From design to delivery, we make custom t-shirt printing simple and fun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="glass-dark border border-white/10 rounded-2xl p-8 hover:neon-border transition-all duration-500 h-full hover:-translate-y-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-6 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-neon-pink/20 transition-colors duration-500">
                  {step.step}
                </div>

                <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-gradient transition-all duration-300">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">{step.description}</p>
                
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-neon-pink/50 to-transparent animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-red-600 to-neon-pink text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 hover:scale-110 transition-all duration-300 neon-border animate-glow">
            Start Your Design Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
