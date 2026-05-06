import React, { useState } from 'react'
import { X, User, Mail, Phone, MapPin, CreditCard, CheckCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Checkout = ({ isOpen, onClose }) => {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Prepare order data
    const orderData = {
      customer: formData,
      items: cartItems,
      total: getCartTotal(),
      orderDate: new Date().toISOString(),
      orderId: 'STY-' + Date.now()
    }

    // Send order to your email via EmailJS or similar service
    // For now, we'll log it and show in console
    console.log('Order Details:', orderData)
    
    // You can integrate with EmailJS here
    // Example: emailjs.send('service_id', 'template_id', orderData)
    
    // For demonstration, we'll save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('styloops-orders') || '[]')
    existingOrders.push(orderData)
    localStorage.setItem('styloops-orders', JSON.stringify(existingOrders))
    
    // Show success message
    setOrderPlaced(true)
    
    // Clear cart after 3 seconds and close
    setTimeout(() => {
      clearCart()
      setOrderPlaced(false)
      onClose()
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        paymentMethod: 'cod'
      })
    }, 3000)
  }

  if (!isOpen) return null

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-black/95 border border-green-500/30 rounded-2xl p-12 max-w-md w-full text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold text-white mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-300 mb-2">Thank you for your order!</p>
          <p className="text-gray-400 text-sm">We'll contact you shortly to confirm your order.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-black/95 border border-white/10 rounded-2xl max-w-4xl w-full my-8">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">Checkout</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Customer Details Form */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Customer Details</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all resize-none"
                    placeholder="House no, Street, Locality"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all"
                      placeholder="State"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{6}"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all"
                    placeholder="6-digit pincode"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Payment Method
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all"
                  >
                    <option value="cod">Cash on Delivery</option>
                    <option value="online">Online Payment (Coming Soon)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 neon-border"
                >
                  Place Order - ₹{getCartTotal()}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
              <div className="glass-dark p-6 rounded-xl border border-white/10">
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.cartId} className="flex gap-4 pb-4 border-b border-white/10">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        {item.customDesign ? (
                          <img src={item.customDesign} alt="Custom" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                          <span className="text-2xl">{item.icon}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{item.name}</h4>
                        <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                        {item.size && <p className="text-gray-400 text-sm">Size: {item.size}</p>}
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>₹{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span className="text-green-400">FREE</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span>₹{getCartTotal()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300 text-sm">
                  <strong>Note:</strong> We'll contact you on your phone number to confirm the order details and delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
