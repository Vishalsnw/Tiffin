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
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-4 py-3 flex justify-between items-center z-50">
      {navItems.map((item) => {
        const IconComponent = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-all ${
                isActive ? 'text-orange-600 scale-110' : 'text-gray-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <IconComponent size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-bold uppercase tracking-tight">
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomNav;
