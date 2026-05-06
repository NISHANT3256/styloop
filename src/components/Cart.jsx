import React, { useState } from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import Checkout from './Checkout'

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  return (
    <>
      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      
      {isCartOpen && (
      <>
        <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={() => setIsCartOpen(false)}
      ></div>
      
      <div className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Your Cart</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-20 h-20 text-gray-600 mb-4" />
                <p className="text-gray-400 text-lg">Your cart is empty</p>
                <p className="text-gray-500 text-sm mt-2">Add some awesome t-shirts!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div 
                    key={item.cartId} 
                    className="glass-dark p-4 rounded-xl border border-white/10 hover:border-red-500/30 transition-all"
                  >
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-lg flex items-center justify-center overflow-hidden">
                        {item.customDesign ? (
                          <img 
                            src={item.customDesign} 
                            alt="Custom design" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-3xl">{item.icon}</span>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                        {item.customDesign && (
                          <p className="text-xs text-green-400 mb-1">✓ Custom Design</p>
                        )}
                        <p className="text-red-500 font-bold">₹{item.price}</p>
                        
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                            >
                              <Minus className="w-4 h-4 text-white" />
                            </button>
                            <span className="w-8 text-center text-white font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                            >
                              <Plus className="w-4 h-4 text-white" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-white/10 p-6 bg-black/50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 text-lg">Subtotal</span>
                <span className="text-white text-2xl font-bold">₹{getCartTotal()}</span>
              </div>
              <button 
                onClick={() => {
                  setIsCheckoutOpen(true)
                  setIsCartOpen(false)
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 neon-border"
              >
                Proceed to Checkout
              </button>
              <p className="text-gray-500 text-xs text-center mt-3">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
      </>
      )}
    </>
  )
}

export default Cart
