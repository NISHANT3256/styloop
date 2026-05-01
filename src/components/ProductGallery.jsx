import React, { useState } from 'react'
import { Heart, ShoppingCart, Eye, Sparkles, Zap, Star } from 'lucide-react'

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const categories = ['all', 'trending', 'minimalist', 'artistic', 'typography']

  const products = [
    { 
      id: 1, 
      name: 'Neon Dreams', 
      category: 'artistic', 
      price: 29.99, 
      color: 'from-neon-pink via-purple-600 to-neon-purple',
      bubbles: [
        { color: 'from-pink-500 to-purple-600', position: 'top-0 -right-8' },
        { color: 'from-purple-500 to-pink-600', position: 'bottom-4 -left-6' },
        { color: 'from-fuchsia-500 to-pink-500', position: 'top-8 -left-8' }
      ]
    },
    { 
      id: 2, 
      name: 'Cyber Punk', 
      category: 'typography', 
      price: 24.99, 
      color: 'from-neon-blue via-cyan-500 to-blue-600',
      bubbles: [
        { color: 'from-cyan-400 to-blue-600', position: 'top-2 -right-6' },
        { color: 'from-blue-500 to-cyan-500', position: 'bottom-0 -left-8' },
        { color: 'from-sky-400 to-blue-500', position: 'top-10 -right-10' }
      ]
    },
    { 
      id: 3, 
      name: 'Electric Wave', 
      category: 'minimalist', 
      price: 27.99, 
      color: 'from-yellow-400 via-orange-500 to-red-500',
      bubbles: [
        { color: 'from-orange-400 to-red-500', position: 'top-4 -left-6' },
        { color: 'from-yellow-400 to-orange-500', position: 'bottom-2 -right-8' },
        { color: 'from-red-400 to-pink-500', position: 'top-0 -right-4' }
      ]
    },
    { 
      id: 4, 
      name: 'Retro Future', 
      category: 'trending', 
      price: 32.99, 
      color: 'from-purple-600 via-pink-500 to-rose-500',
      bubbles: [
        { color: 'from-purple-500 to-pink-600', position: 'top-6 -right-10' },
        { color: 'from-pink-500 to-rose-500', position: 'bottom-6 -left-6' },
        { color: 'from-fuchsia-500 to-purple-600', position: 'top-2 -left-10' }
      ]
    },
    { 
      id: 5, 
      name: 'Toxic Glow', 
      category: 'artistic', 
      price: 29.99, 
      color: 'from-green-400 via-emerald-500 to-teal-600',
      bubbles: [
        { color: 'from-emerald-400 to-teal-600', position: 'top-8 -right-6' },
        { color: 'from-green-400 to-emerald-500', position: 'bottom-4 -left-8' },
        { color: 'from-teal-400 to-cyan-500', position: 'top-0 -left-6' }
      ]
    },
    { 
      id: 6, 
      name: 'Fire Storm', 
      category: 'typography', 
      price: 26.99, 
      color: 'from-red-500 via-orange-500 to-yellow-400',
      bubbles: [
        { color: 'from-red-600 to-orange-500', position: 'top-4 -left-8' },
        { color: 'from-orange-500 to-yellow-400', position: 'bottom-0 -right-6' },
        { color: 'from-yellow-400 to-red-500', position: 'top-10 -right-8' }
      ]
    },
    { 
      id: 7, 
      name: 'Ocean Deep', 
      category: 'minimalist', 
      price: 28.99, 
      color: 'from-blue-600 via-indigo-600 to-purple-700',
      bubbles: [
        { color: 'from-blue-500 to-indigo-600', position: 'top-2 -right-8' },
        { color: 'from-indigo-500 to-purple-600', position: 'bottom-6 -left-6' },
        { color: 'from-cyan-500 to-blue-600', position: 'top-6 -left-10' }
      ]
    },
    { 
      id: 8, 
      name: 'Midnight Vibe', 
      category: 'trending', 
      price: 31.99, 
      color: 'from-violet-600 via-purple-600 to-fuchsia-600',
      bubbles: [
        { color: 'from-violet-500 to-purple-600', position: 'top-0 -right-6' },
        { color: 'from-purple-500 to-fuchsia-600', position: 'bottom-2 -left-8' },
        { color: 'from-fuchsia-500 to-pink-600', position: 'top-8 -right-10' }
      ]
    },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 neon-glow">
            Explore Our <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hover over designs to see variations • Create your own masterpiece
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold capitalize transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white neon-border animate-glow'
                  : 'glass-effect text-white hover:neon-border border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative perspective-1000"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Bubble T-shirts that appear on hover */}
              {hoveredProduct === product.id && product.bubbles.map((bubble, i) => (
                <div
                  key={i}
                  className={`absolute ${bubble.position} w-24 h-24 rounded-2xl bg-gradient-to-br ${bubble.color} shadow-2xl z-10 animate-bubble flex items-center justify-center transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer`}
                  style={{ 
                    animationDelay: `${i * 100}ms`,
                    animation: `bubble 0.6s ease-out ${i * 100}ms, bubbleFloat 4s ease-in-out ${i * 100}ms infinite`
                  }}
                >
                  <div className="text-white text-3xl font-black opacity-60">T</div>
                  <div className="absolute -top-1 -right-1 bg-neon-pink rounded-full p-1">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              ))}

              {/* Main T-shirt Card */}
              <div className="relative glass-dark rounded-2xl overflow-visible transition-all duration-500 hover:scale-105 hover:rotate-1 group-hover:neon-border">
                <div className={`relative h-80 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden rounded-t-2xl`}>
                  {/* Animated background effects */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer-bg animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Main T-shirt */}
                  <div className="relative text-white text-8xl font-black opacity-40 group-hover:opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    T
                  </div>
                  
                  {/* Floating icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="glass-effect p-2.5 rounded-full hover:bg-neon-pink hover:neon-border transition-all transform hover:scale-110">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                    <button className="glass-effect p-2.5 rounded-full hover:bg-neon-purple hover:neon-border transition-all transform hover:scale-110">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-br-full"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
                  </div>
                </div>

                <div className="p-6 bg-black/60 backdrop-blur-xl border-t border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-neon-yellow animate-pulse" />
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gradient">${product.price}</span>
                    <button className="bg-gradient-to-r from-neon-pink to-neon-purple text-white p-3 rounded-full hover:shadow-lg hover:shadow-neon-pink/50 hover:scale-110 transition-all duration-300 neon-border">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-neon-pink via-primary-500 to-neon-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-neon-pink/50 hover:scale-110 transition-all duration-300 neon-border animate-glow">
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              View All Designs
              <Star className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductGallery
