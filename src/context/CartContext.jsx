import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('styloops-cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('styloops-cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, customDesign = null) => {
    const existingItemIndex = cartItems.findIndex(
      item => item.id === product.id && item.customDesign === customDesign
    )

    if (existingItemIndex > -1) {
      const updatedCart = [...cartItems]
      updatedCart[existingItemIndex].quantity += 1
      setCartItems(updatedCart)
    } else {
      setCartItems([...cartItems, { 
        ...product, 
        quantity: 1, 
        customDesign,
        cartId: Date.now() + Math.random()
      }])
    }
    setIsCartOpen(true)
  }

  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter(item => item.cartId !== cartId))
  }

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cartId)
      return
    }
    setCartItems(cartItems.map(item => 
      item.cartId === cartId ? { ...item, quantity: newQuantity } : item
    ))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  )
}
