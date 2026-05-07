import React, { useState, useEffect } from 'react'
import { Package, User, Mail, Phone, MapPin, Calendar, Download, Trash2, CheckCircle, Clock, Home, LogOut, MessageSquare } from 'lucide-react'

const AdminDashboard = () => {
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState(null)
  const [activeTab, setActiveTab] = useState('orders') // 'orders' or 'contacts'
  const [previewImage, setPreviewImage] = useState(null)

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      sessionStorage.removeItem('styloops-admin-auth')
      window.location.hash = ''
    }
  }

  useEffect(() => {
    loadOrders()
    loadContacts()
  }, [])

  const loadOrders = () => {
    const savedOrders = JSON.parse(localStorage.getItem('styloops-orders') || '[]')
    setOrders(savedOrders.reverse()) // Show newest first
  }

  const loadContacts = () => {
    const savedContacts = JSON.parse(localStorage.getItem('styloops-contacts') || '[]')
    setContacts(savedContacts.reverse()) // Show newest first
  }

  const deleteOrder = (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      const updatedOrders = orders.filter(order => order.orderId !== orderId)
      localStorage.setItem('styloops-orders', JSON.stringify(updatedOrders.reverse()))
      setOrders(updatedOrders)
      setSelectedOrder(null)
    }
  }

  const deleteContact = (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const updatedContacts = contacts.filter(contact => contact.messageId !== messageId)
      localStorage.setItem('styloops-contacts', JSON.stringify(updatedContacts.reverse()))
      setContacts(updatedContacts)
      setSelectedContact(null)
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
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
              <button
                onClick={() => window.location.hash = ''}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </button>
              <button
                onClick={() => {
                  loadOrders()
                  loadContacts()
                }}
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
            <div className="grid grid-cols-4 gap-6">
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
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-500">{contacts.length}</p>
                <p className="text-gray-400 text-sm mt-1">Contact Messages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/50'
                : 'glass-dark text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            <Package className="w-5 h-5" />
            Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'contacts'
                ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/50'
                : 'glass-dark text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Messages ({contacts.length})
          </button>
        </div>

        {/* Orders Section */}
        {activeTab === 'orders' && (
          orders.length === 0 ? (
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
                          <div 
                            className={`w-16 h-16 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 ${item.customDesign ? 'cursor-pointer hover:ring-2 hover:ring-red-500 transition-all' : ''}`}
                            onClick={() => item.customDesign && setPreviewImage(item.customDesign)}
                          >
                            {item.customDesign ? (
                              <img 
                                src={item.customDesign} 
                                alt="Custom design" 
                                className="w-full h-full object-cover"
                                title="Click to view full size"
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
          )
        )}

        {/* Contacts Section */}
        {activeTab === 'contacts' && (
          contacts.length === 0 ? (
            <div className="glass-dark p-12 rounded-xl border border-white/10 text-center">
              <MessageSquare className="w-20 h-20 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-xl">No messages yet</p>
              <p className="text-gray-500 text-sm mt-2">Contact form submissions will appear here</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Messages List */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Messages</h2>
                {contacts.map((contact) => (
                  <div
                    key={contact.messageId}
                    onClick={() => setSelectedContact(contact)}
                    className={`glass-dark p-6 rounded-xl border cursor-pointer transition-all hover:scale-105 ${
                      selectedContact?.messageId === contact.messageId
                        ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                        : 'border-white/10 hover:border-purple-500/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-white font-bold text-lg">{contact.messageId}</p>
                        <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(contact.submittedAt)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300">
                      <User className="w-4 h-4" />
                      <span className="font-semibold">{contact.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Phone className="w-4 h-4" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Mail className="w-4 h-4" />
                      <span>{contact.email}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Details */}
              <div className="lg:sticky lg:top-24 h-fit">
                {selectedContact ? (
                  <div className="glass-dark p-6 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-white">Message Details</h2>
                      <button
                        onClick={() => deleteContact(selectedContact.messageId)}
                        className="text-red-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6 p-4 bg-white/5 rounded-lg">
                      <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <User className="w-5 h-5 text-purple-500" />
                        Contact Information
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <User className="w-4 h-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-400">Name</p>
                            <p className="text-white font-semibold">{selectedContact.name}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-400">Email</p>
                            <p className="text-white">{selectedContact.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-400">Phone</p>
                            <p className="text-white font-semibold">{selectedContact.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-400">Submitted</p>
                            <p className="text-white">{formatDate(selectedContact.submittedAt)}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-purple-500" />
                        Message
                      </h3>
                      <div className="p-4 bg-white/5 rounded-lg">
                        <p className="text-gray-300 whitespace-pre-wrap">{selectedContact.message}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="glass-dark p-12 rounded-xl border border-white/10 text-center">
                    <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Select a message to view details</p>
                  </div>
                )}
              </div>
            </div>
          )
        )}

        {/* Image Preview Modal */}
        {previewImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors text-lg font-bold"
              >
                ✕ Close
              </button>
              <img 
                src={previewImage} 
                alt="Custom design preview" 
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl border-2 border-white/20"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-center text-gray-400 mt-4">Click outside to close</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
