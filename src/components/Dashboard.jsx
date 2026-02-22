import React from 'react';
import { Truck, Bell } from 'lucide-react';
import { RippleButton } from './Common';
import { formatDate } from '../utils/dateUtils';
import { calculateMealStats } from '../utils/mealLogic';

const Dashboard = ({ user, customers = [] }) => {
  const stats = calculateMealStats(customers || []);
  const expiringSoonCount = (customers || []).filter(c => {
    if (!c.expiryDate) return false;
    const expiry = new Date(c.expiryDate);
    const today = new Date();
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 3;
  }).length;

  const statCards = [
    { label: 'Total Meals Today', value: stats.totalMeals, color: 'bg-orange-600', icon: Truck, full: true },
    { label: 'Veg Count', value: stats.vegCount, color: 'bg-green-100 text-green-700' },
    { label: 'Non-Veg Count', value: stats.nonVegCount, color: 'bg-rose-100 text-rose-700' },
    { label: 'Paused Today', value: stats.pausedCount, color: 'bg-amber-100 text-amber-700' },
    { label: 'Expiring Soon (3 days)', value: expiringSoonCount, color: 'bg-orange-100 text-orange-700' },
    { label: 'Pending Payments', value: `₹${stats.pendingPayments}`, color: 'bg-red-100 text-red-700' },
  ];

  if (!customers) return null;

  return (
    <div className="p-4 pt-6 pb-24 max-w-full overflow-x-hidden min-h-screen">
      <div className="flex justify-between items-center mb-8 px-2">
        <div>
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-1">TiffinFlow Pro</h2>
          <h2 className="text-3xl font-black tracking-tight text-gray-900">{formatDate(new Date())}</h2>
          <p className="text-gray-500 text-sm font-medium">Namaste!</p>
        </div>
        <div className="flex gap-3">
          <RippleButton className="p-3 bg-gray-100 rounded-2xl text-gray-700 active:scale-95 transition-transform"><Bell size={24} /></RippleButton>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {statCards.map((stat, i) => (
          <div 
            key={i} 
            className={`${stat.color} ${stat.full ? 'col-span-2 p-8' : 'p-6 aspect-square'} rounded-[2.5rem] shadow-sm flex flex-col justify-between relative overflow-hidden active:scale-[0.98] transition-all cursor-pointer border border-black/5`}
          >
            <div className="relative z-10">
              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${stat.full ? 'opacity-80 text-white' : 'opacity-60'}`}>{stat.label}</p>
              <p className={`font-black ${stat.full ? 'text-5xl text-white' : 'text-3xl'}`}>{stat.value}</p>
            </div>
            {stat.icon && <stat.icon size={80} className="opacity-10 absolute -right-4 -bottom-4 text-white" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
