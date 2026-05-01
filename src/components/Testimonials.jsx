import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      image: 'SJ',
      rating: 5,
      text: 'Absolutely love the quality! Ordered custom t-shirts for my team and everyone was impressed. The printing is crisp and the fabric feels premium.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Mike Chen',
      role: 'Event Organizer',
      image: 'MC',
      rating: 5,
      text: 'Perfect for our event! Fast delivery, great prices, and the designs turned out exactly as we wanted. Will definitely order again.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fashion Blogger',
      image: 'ER',
      rating: 5,
      text: 'The custom designer tool is so easy to use! I created my own unique designs and the results exceeded my expectations. Highly recommend!',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'David Park',
      role: 'Startup Founder',
      image: 'DP',
      rating: 5,
      text: 'Great service from start to finish. The team helped me with my design and the final product was perfect for our company merchandise.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Lisa Thompson',
      role: 'Artist',
      image: 'LT',
      rating: 5,
      text: 'As an artist, I\'m very particular about print quality. Styloops nailed it! My artwork looks amazing on their t-shirts.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'James Wilson',
      role: 'Fitness Coach',
      image: 'JW',
      rating: 5,
      text: 'Ordered bulk t-shirts for my gym members. The quality is outstanding and the prices are very competitive. Customer service is top-notch!',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 neon-glow">
            Why Choose <span className="text-gradient">Styloops</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're committed to delivering exceptional quality and service for your custom t-shirt needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-dark p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-neon-pink/20 transition-all duration-500 hover:-translate-y-3 relative border border-white/10 hover:neon-border group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10 group-hover:text-neon-pink/30 transition-colors duration-500" />
              
              <div className="flex items-center mb-6 relative z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg group-hover:text-gradient transition-all duration-300">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 text-white neon-border animate-glow relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-2">Ready to Create Your Custom T-Shirt?</h3>
              <p className="text-white/90">Start your journey with us today!</p>
            </div>
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/50 hover:scale-110 transition-all duration-300 whitespace-nowrap border-2 border-white hover:bg-white hover:text-black">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
