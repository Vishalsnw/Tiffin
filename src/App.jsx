import React from 'react';
import { LayoutDashboard, Users, CalendarDays, Wallet, Truck, BarChart3, LogOut, Menu, Moon, Sun } from 'lucide-react';

const Dashboard = () => (
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[
        { label: 'Active Customers', value: '142', color: 'bg-blue-500' },
        { label: 'Today\'s Meals', value: '156', color: 'bg-green-500' },
        { label: 'Pending Payments', value: '₹12,450', color: 'bg-orange-500' },
        { label: 'Revenue (MTD)', value: '₹84,200', color: 'bg-purple-500' },
      ].map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">{stat.label}</p>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
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

export default function App() {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center gap-3"><div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">T</div>{isOpen && <span className="font-bold text-xl">TiffinFlow</span>}</div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {[{ icon: LayoutDashboard, label: 'Dashboard' }, { icon: Users, label: 'Customers' }, { icon: CalendarDays, label: 'Meal Planning' }, { icon: Wallet, label: 'Payments' }, { icon: Truck, label: 'Delivery' }, { icon: BarChart3, label: 'Analytics' }].map((item, i) => (
            <button key={i} className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">
              <item.icon size={20} />{isOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"><LogOut size={20} />{isOpen && <span className="font-medium">Logout</span>}</button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-lg"><Menu size={20} /></button>
          <div className="flex items-center gap-4"><button className="p-2 hover:bg-gray-100 rounded-lg"><Moon size={20} /></button><div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm"></div></div>
        </header>
        <Dashboard />
      </main>
    </div>
  );
}