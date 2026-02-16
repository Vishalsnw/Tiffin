import React, { useState } from 'react';
import { LayoutDashboard, Users, CalendarDays, Wallet, Truck, BarChart3, LogOut, Menu, Moon, Sun, Plus, Search, Filter, Edit2, Trash2, X, Check } from 'lucide-react';

// --- Dashboard Component ---
const Dashboard = () => (
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[
        { label: 'Active Customers', value: '142' },
        { label: 'Today\'s Meals', value: '156' },
        { label: 'Pending Payments', value: '₹12,450' },
        { label: 'Revenue (MTD)', value: '₹84,200' },
      ].map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">{stat.label}</p>
          <p className="text-3xl font-bold mt-2 text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold mb-4">Meal Distribution</h3>
        <div className="space-y-4">
          {[{ type: 'Veg', count: 98, percent: 63, color: 'bg-green-500' }, { type: 'Non-Veg', count: 42, percent: 27, color: 'bg-red-500' }, { type: 'Jain', count: 16, percent: 10, color: 'bg-yellow-500' }].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1"><span>{item.type}</span><span className="font-medium">{item.count}</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }}></div></div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
        <div className="space-y-4 text-sm text-gray-600">
          {['New customer "Rahul Sharma" joined', 'Payment received from "Anjali Gupta"', 'Subscription paused for "Vikram Singh"'].map((a, i) => (
            <div key={i} className="flex items-center pb-3 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>{a}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Customers Component ---
const Customers = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const mockCustomers = [
    { id: 1, name: 'Rahul Sharma', phone: '9876543210', plan: 'Monthly', type: 'Veg', status: 'Active', expiry: '2024-03-20' },
    { id: 2, name: 'Anjali Gupta', phone: '9822334455', plan: 'Weekly', type: 'Non-Veg', status: 'Active', expiry: '2024-02-25' },
    { id: 3, name: 'Vikram Singh', phone: '9988776655', plan: 'Monthly', type: 'Jain', status: 'Paused', expiry: '2024-04-10' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Customers</h2>
        <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus size={20} /> Add Customer
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search customers..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-xl flex items-center gap-2 hover:bg-gray-50 text-gray-600">
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Plan Details</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Expiry</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {mockCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{c.name}</div>
                    <div className="text-gray-500 text-xs">{c.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md font-medium text-xs">{c.plan}</span>
                      <span className={`px-2 py-0.5 rounded-md font-medium text-xs ${
                        c.type === 'Veg' ? 'bg-green-50 text-green-600' : 
                        c.type === 'Non-Veg' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'
                      }`}>{c.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{c.expiry}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mr-2"><Edit2 size={16} /></button>
                    <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Basic Add Customer Modal Overlay */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Add New Customer</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. John Doe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="9876543210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Veg Type</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Veg</option>
                    <option>Non-Veg</option>
                    <option>Jain</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold mt-4 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Create Customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'Customers' },
    { icon: CalendarDays, label: 'Meal Planning' },
    { icon: Wallet, label: 'Payments' },
    { icon: Truck, label: 'Delivery' },
    { icon: BarChart3, label: 'Analytics' },
  ];

  return (
    <div className={`min-h-screen flex font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <aside className={`${isOpen ? 'w-64' : 'w-20'} ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r transition-all duration-300 flex flex-col z-40`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">T</div>
          {isOpen && <span className={`font-bold text-xl tracking-tight transition-opacity ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>TiffinFlow</span>}
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === item.label 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : `${isDarkMode ? 'text-gray-400 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`
              }`}
            >
              <item.icon size={20} className="shrink-0" />
              {isOpen && <span className="font-medium whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
            <LogOut size={20} className="shrink-0" />
            {isOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className={`h-16 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b flex items-center justify-between px-6 z-30 shadow-sm`}>
          <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Menu size={20} />
          </button>
          
          <div className="flex items-center gap-4">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              {isOpen && <span className="text-sm font-medium">Admin</span>}
              <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white shadow-sm flex items-center justify-center text-blue-600 font-bold">A</div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'Dashboard' && <Dashboard />}
          {activeTab === 'Customers' && <Customers />}
          {activeTab !== 'Dashboard' && activeTab !== 'Customers' && (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <CalendarDays size={48} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-medium mb-2">{activeTab} Section</h3>
              <p>This module is coming soon in the next update.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}