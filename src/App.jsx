import React, { useState } from 'react';
import { LayoutDashboard, Users, CalendarDays, Wallet, Truck, BarChart3, LogOut, Menu, Moon, Sun, Plus, Search, Filter, Edit2, Trash2, X, Check, Bell, Settings, ChevronRight, Phone } from 'lucide-react';
import Subscription from './Subscription';
import PrivacyPolicy from './PrivacyPolicy';

// --- Dashboard Component ---
const Dashboard = ({ user }) => (
  <div className="p-4 pb-24">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Daily Stats</h2>
        <p className="text-gray-500 text-sm">Welcome back, {user?.displayName || 'Chef'}!</p>
      </div>
      <div className="flex gap-2">
        <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100"><Bell size={20} /></button>
        <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-red-500"><LogOut size={20} /></button>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-6">
      {[
        { label: 'Customers', value: '142', color: 'bg-blue-500' },
        { label: 'Meals Today', value: '156', color: 'bg-orange-500' },
        { label: 'Pending', value: '₹12.4k', color: 'bg-purple-500' },
        { label: 'Monthly', value: '₹84.2k', color: 'bg-green-500' },
      ].map((stat, i) => (
        <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex flex-col justify-between aspect-square">
          <div className={`w-10 h-10 ${stat.color} rounded-2xl mb-2 flex items-center justify-center text-white`}>
            {i === 0 && <Users size={20} />}
            {i === 1 && <Truck size={20} />}
            {i === 2 && <Wallet size={20} />}
            {i === 3 && <BarChart3 size={20} />}
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs font-medium text-gray-500">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="space-y-4">
      <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900">Meal Distribution</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="space-y-4">
          {[{ type: 'Veg', count: 98, percent: 63, color: 'bg-green-500' }, { type: 'Non-Veg', count: 42, percent: 27, color: 'bg-red-500' }, { type: 'Jain', count: 16, percent: 10, color: 'bg-yellow-500' }].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1.5 font-medium"><span>{item.type}</span><span>{item.count}</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2.5"><div className={`h-2.5 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }}></div></div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50">
        <h3 className="font-bold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { msg: 'New customer "Rahul Sharma"', time: '10m ago', icon: Plus, color: 'bg-blue-100 text-blue-600' },
            { msg: 'Payment from "Anjali Gupta"', time: '45m ago', icon: Check, color: 'bg-green-100 text-green-600' },
            { msg: 'Subscription paused: Vikram', time: '2h ago', icon: X, color: 'bg-red-100 text-red-600' }
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${a.color}`}><a.icon size={16} /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{a.msg}</p>
                <p className="text-xs text-gray-400">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const user = { displayName: 'Chef' }; // Mock user

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
        <div className="p-4 bg-orange-600 text-white text-center text-sm font-bold">
          LOGIN & PAYMENTS DISABLED
        </div>
        
        {activeTab === 'Dashboard' && <Dashboard user={user} />}
        {activeTab === 'Privacy' && <PrivacyPolicy onBack={() => setActiveTab('Dashboard')} />}

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-4 flex justify-between items-center z-40">
          {[
            { icon: LayoutDashboard, label: 'Dashboard' },
            { icon: Settings, label: 'Privacy' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`flex flex-col items-center gap-1 transition-all ${activeTab === item.label ? 'text-blue-600 scale-110' : 'text-gray-400'}`}
            >
              <item.icon size={activeTab === item.label ? 24 : 20} strokeWidth={activeTab === item.label ? 2.5 : 2} />
              <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}