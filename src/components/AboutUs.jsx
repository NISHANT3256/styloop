import React from 'react'
import { Users, Heart, Zap, MapPin, Target, Sparkles, Award, TrendingUp } from 'lucide-react'

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-glow">
            About <span className="text-gradient">Styloops</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Born in Kanpur, driven by creativity. We're turning dreams into wearable art, one t-shirt at a time.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Story</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Styloops was born from a simple idea shared between two friends in <span className="text-red-500 font-semibold">Kanpur, Uttar Pradesh</span>. We saw people wearing the same designs everywhere and thought - why not give everyone the power to wear their own unique style?
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              What started as a small venture in our hometown has grown into a mission to revolutionize custom t-shirt printing in India. We believe that everyone deserves to express themselves through what they wear.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From <span className="text-red-500 font-semibold">Ratanpur, Panki</span> to your doorstep, we're committed to delivering premium quality custom t-shirts that tell your story.
            </p>
          </div>

          <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              To make custom t-shirt printing accessible, affordable, and amazing for everyone in India. We're not just printing t-shirts - we're helping people express their creativity, celebrate their moments, and stand out from the crowd.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">Premium quality printing</span>
              </div>
              <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">Fast delivery across India</span>
              </div>
              <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">Affordable pricing for everyone</span>
              </div>
              <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">100% customer satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet The <span className="text-gradient">Founders</span>
            </h3>
            <p className="text-gray-300 text-lg">Two friends with a shared vision from Kanpur</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500 group">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Founders Photo */}
                <div className="relative group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src="/images/founders.jpeg" 
                    alt="Styloops Founders" 
                    className="relative w-80 h-80 object-cover rounded-2xl border-4 border-white/10 shadow-2xl"
                  />
                </div>

                {/* Founders Info */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-3xl font-bold text-white mb-2">
                    <span className="text-gradient">Prateek</span> & <span className="text-gradient">Nishant</span>
                  </h4>
                  <p className="text-red-500 font-semibold mb-6">Co-Founders, Styloops</p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <span className="text-red-500 font-semibold">Prateek</span> started this journey with a vision to revolutionize custom t-shirt printing in India. Joined by his friend <span className="text-red-500 font-semibold">Nishant</span>, together we're two friends from <span className="text-red-500 font-semibold">Kanpur, Uttar Pradesh</span> who share a passion for creativity and entrepreneurship.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    What started as Prateek's simple idea has grown into Styloops - a platform where anyone can turn their imagination into wearable art. From our base in <span className="text-red-500 font-semibold">Ratanpur, Panki</span>, we're committed to bringing premium custom t-shirt printing to every corner of India.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <div className="glass-effect px-4 py-2 rounded-full border border-red-500/30">
                      <span className="text-red-500 font-semibold">Creative Vision</span>
                    </div>
                    <div className="glass-effect px-4 py-2 rounded-full border border-purple-500/30">
                      <span className="text-purple-500 font-semibold">Quality Focused</span>
                    </div>
                    <div className="glass-effect px-4 py-2 rounded-full border border-red-500/30">
                      <span className="text-red-500 font-semibold">Customer First</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500 group text-center">
            <div className="bg-gradient-to-r from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Local Roots</h4>
            <p className="text-gray-300">
              Proudly based in Kanpur, serving customers across India with local care and global quality.
            </p>
          </div>

          <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500 group text-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Premium Quality</h4>
            <p className="text-gray-300">
              We use only the best materials and printing technology to ensure your designs look amazing.
            </p>
          </div>

          <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:neon-border transition-all duration-500 group text-center">
            <div className="bg-gradient-to-r from-red-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Growing Together</h4>
            <p className="text-gray-300">
              We're growing with our community, constantly improving and adding new features based on your feedback.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-12 text-center neon-border animate-glow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join us on this journey. Let's create custom t-shirts that express your unique style.
            </p>
            <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/50 hover:scale-110 transition-all duration-300 border-2 border-white">
              Start Designing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
