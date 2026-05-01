import React from 'react'
import { Palette, Zap, Shield, Truck, Award, Heart } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: 'Unlimited Creativity',
      description: 'Print any design, text, or image you want. Your imagination is the only limit.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Get your custom t-shirts delivered within 3-5 business days.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: '100% premium cotton fabric with high-definition, long-lasting prints.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders above $50. Track your order in real-time.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Satisfaction Guaranteed',
      description: '100% money-back guarantee if you\'re not completely satisfied.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Eco-Friendly',
      description: 'Sustainable printing process with eco-friendly inks and materials.',
      color: 'from-teal-500 to-green-500'
    }
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 neon-glow">
            Why Choose <span className="text-gradient">Styloops</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We combine quality, creativity, and convenience to deliver the perfect custom t-shirt experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative glass-dark p-8 rounded-2xl hover:shadow-2xl hover:shadow-neon-pink/20 transition-all duration-500 hover:-translate-y-3 border border-white/10 hover:neon-border overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed relative z-10">
                {feature.description}
              </p>

              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-500 rounded-b-2xl`}></div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
