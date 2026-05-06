import React, { useState, useEffect } from 'react'
import { Package, User, Mail, Phone, MapPin, Calendar, Download, Trash2, CheckCircle, Clock, Home } from 'lucide-react'

const AdminDashboard = () => {
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)

  useEffect(() => {
    loadOrders()
  }, [])

  const loadOrders = () => {
    const savedOrders = JSON.parse(localStorage.getItem('styloops-orders') || '[]')
    setOrders(savedOrders.reverse()) // Show newest first
  }

  const deleteOrder = (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      const updatedOrders = orders.filter(order => order.orderId !== orderId)
      localStorage.setItem('styloops-orders', JSON.stringify(updatedOrders.reverse()))
      setOrders(updatedOrders)
      setSelectedOrder(null)
    }
  }

  const exportOrders = () => {
    const dataStr = JSON.stringify(orders, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `styloops-orders-${new Date().toISOString().split('T')[0]}.json`
    link.click()
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    })
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Admin <span className="text-gradient">Dashboard</span>
              </h1>
              <p className="text-gray-400">Manage your Styloops orders</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => window.location.hash = ''}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </button>
              <button
                onClick={loadOrders}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
              >
                <Clock className="w-5 h-5" />
                Refresh
              </button>
              <button
                onClick={exportOrders}
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Export All
              </button>
            </div>
          </div>
          
          <div className="glass-dark p-6 rounded-xl border border-white/10">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">{orders.length}</p>
                <p className="text-gray-400 text-sm mt-1">Total Orders</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">
                  ₹{orders.reduce((sum, order) => sum + order.total, 0)}
                </p>
                <p className="text-gray-400 text-sm mt-1">Total Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-500">
                  {orders.reduce((sum, order) => sum + order.items.length, 0)}
                </p>
                <p className="text-gray-400 text-sm mt-1">Total Items</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <div className="glass-dark p-12 rounded-xl border border-white/10 text-center">
            <Package className="w-20 h-20 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-xl">No orders yet</p>
            <p className="text-gray-500 text-sm mt-2">Orders will appear here when customers place them</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Orders List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">Recent Orders</h2>
              {orders.map((order) => (
                <div
                  key={order.orderId}
                  onClick={() => setSelectedOrder(order)}
                  className={`glass-dark p-6 rounded-xl border cursor-pointer transition-all hover:scale-105 ${
                    selectedOrder?.orderId === order.orderId
                      ? 'border-red-500 shadow-lg shadow-red-500/20'
                      : 'border-white/10 hover:border-red-500/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-white font-bold text-lg">{order.orderId}</p>
                      <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(order.orderDate)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gradient">₹{order.total}</p>
                      <p className="text-gray-400 text-sm">{order.items.length} items</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-300">
                    <User className="w-4 h-4" />
                    <span className="font-semibold">{order.customer.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                    <Phone className="w-4 h-4" />
                    <span>{order.customer.phone}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Details */}
            <div className="lg:sticky lg:top-24 h-fit">
              {selectedOrder ? (
                <div className="glass-dark p-6 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Order Details</h2>
                    <button
                      onClick={() => deleteOrder(selectedOrder.orderId)}
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Customer Info */}
                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                      <User className="w-5 h-5 text-red-500" />
                      Customer Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <User className="w-4 h-4 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-gray-400">Name</p>
                          <p className="text-white font-semibold">{selectedOrder.customer.name}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-gray-400">Email</p>
                          <p className="text-white">{selectedOrder.customer.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-gray-400">Phone</p>
                          <p className="text-white font-semibold">{selectedOrder.customer.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-gray-400">Address</p>
                          <p className="text-white">
                            {selectedOrder.customer.address}<br />
                            {selectedOrder.customer.city}, {selectedOrder.customer.state}<br />
                            {selectedOrder.customer.pincode}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-gray-400">Payment Method</p>
                          <p className="text-white capitalize">{selectedOrder.customer.paymentMethod}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="mb-6">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Package className="w-5 h-5 text-red-500" />
                      Order Items
                    </h3>
                    <div className="space-y-3">
                      {selectedOrder.items.map((item, index) => (
                        <div key={index} className="flex gap-3 p-3 bg-white/5 rounded-lg">
                          <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                            {item.customDesign ? (
                              <img 
                                src={item.customDesign} 
                                alt="Custom design" 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-2xl">{item.icon}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold">{item.name}</p>
                            {item.customDesign && (
                              <p className="text-green-400 text-xs">✓ Custom Design</p>
                            )}
                            {item.size && (
                              <p className="text-gray-400 text-sm">Size: {item.size}</p>
                            )}
                            <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-bold">₹{item.price * item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-lg">Total Amount</span>
                      <span className="text-3xl font-bold text-gradient">₹{selectedOrder.total}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass-dark p-12 rounded-xl border border-white/10 text-center">
                  <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Select an order to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
