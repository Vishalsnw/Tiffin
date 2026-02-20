import React from 'react';
import { LayoutDashboard, Users, CalendarDays, Wallet, Settings as SettingsIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Home', path: '/dashboard' },
    { icon: Users, label: 'Clients', path: '/customers' },
    { icon: CalendarDays, label: 'Today', path: '/today' },
    { icon: Wallet, label: 'Pay', path: '/payments' },
    { icon: SettingsIcon, label: 'Set', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50 pb-safe">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-600 scale-110' : 'text-gray-400'}`
          }
        >
          <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
          <span className="text-[10px] font-black uppercase tracking-tighter">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
