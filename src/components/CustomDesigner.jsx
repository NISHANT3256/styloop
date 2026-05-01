import React, { useState } from 'react'
import { Upload, Type, Image as ImageIcon, Sparkles, Download } from 'lucide-react'

const CustomDesigner = () => {
  const [selectedColor, setSelectedColor] = useState('#ffffff')
  const [selectedSize, setSelectedSize] = useState('M')

  const colors = [
    { name: 'White', value: '#ffffff' },
    { name: 'Black', value: '#000000' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Yellow', value: '#fbbf24' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Pink', value: '#ec4899' },
  ]

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  return (
    <section id="designer" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 neon-glow">
            Design Your <span className="text-gradient">Perfect Tee</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Use our intuitive designer to create a t-shirt that's uniquely yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="sticky top-24">
              <div className="glass-dark rounded-3xl p-12 shadow-xl border border-white/10 hover:neon-border transition-all duration-500">
                <div 
                  className="relative mx-auto w-full max-w-md aspect-square rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 neon-border"
                  style={{ backgroundColor: selectedColor }}
                >
                  <div className="text-center space-y-4">
                    <Sparkles className="w-16 h-16 mx-auto text-gray-400" />
                    <p className="text-gray-500 font-medium">Your design will appear here</p>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 glass-dark px-6 py-3 rounded-full shadow-lg border border-white/20">
                    <span className="font-bold text-white">Size: {selectedSize}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Upload className="w-6 h-6 mr-3 text-neon-pink animate-pulse" />
                Upload Your Design
              </h3>
              
              <div className="border-2 border-dashed border-white/30 rounded-xl p-12 text-center hover:border-neon-pink hover:neon-border transition-all duration-300 cursor-pointer group">
                <ImageIcon className="w-16 h-16 mx-auto text-gray-400 group-hover:text-neon-pink group-hover:scale-110 transition-all duration-300 mb-4" />
                <p className="text-gray-300 font-medium mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG, SVG up to 10MB</p>
              </div>
            </div>

            <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Type className="w-6 h-6 mr-3 text-neon-pink animate-pulse" />
                Add Text
              </h3>
              
              <input
                type="text"
                placeholder="Enter your text here..."
                className="w-full px-6 py-4 rounded-xl border-2 border-white/20 bg-black/40 text-white focus:border-neon-pink focus:outline-none text-lg transition-all duration-300 focus:scale-105 placeholder-gray-500"
              />
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <select className="px-4 py-3 rounded-lg border-2 border-white/20 bg-black/40 text-white focus:border-neon-pink focus:outline-none transition-all duration-300">
                  <option>Arial</option>
                  <option>Helvetica</option>
                  <option>Times New Roman</option>
                  <option>Courier</option>
                </select>
                <select className="px-4 py-3 rounded-lg border-2 border-white/20 bg-black/40 text-white focus:border-neon-pink focus:outline-none transition-all duration-300">
                  <option>Regular</option>
                  <option>Bold</option>
                  <option>Italic</option>
                </select>
                <input
                  type="number"
                  placeholder="Size"
                  defaultValue="24"
                  className="px-4 py-3 rounded-lg border-2 border-white/20 bg-black/40 text-white focus:border-neon-pink focus:outline-none transition-all duration-300 placeholder-gray-500"
                />
              </div>
            </div>

            <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Choose T-Shirt Color</h3>
              
              <div className="grid grid-cols-4 gap-4">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`relative h-16 rounded-xl transition-all duration-200 ${
                      selectedColor === color.value
                        ? 'ring-4 ring-primary-500 scale-110'
                        : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {color.value === '#ffffff' && (
                      <div className="absolute inset-0 border-2 border-gray-200 rounded-xl"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Select Size</h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl font-bold transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-gradient-to-r from-red-600 to-neon-pink text-white shadow-lg scale-105 neon-border'
                        : 'glass-effect text-white border-2 border-white/20 hover:border-neon-pink'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-red-600 to-neon-pink text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 neon-border animate-glow">
                Add to Cart - $29.99
              </button>
              <button className="glass-effect text-white px-6 py-4 rounded-xl font-bold border-2 border-white/20 hover:border-neon-pink hover:scale-110 transition-all duration-300">
                <Download className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomDesigner
