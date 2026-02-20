import React from 'react';
import { LogOut, ChevronRight, Users } from 'lucide-react';
import { RippleButton } from './Common';
import { logout } from '../firebase';

const SettingsScreen = ({ user }) => {
  return (
    <div className="p-4 pt-6 pb-24">
      <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-8 px-2">Settings</h2>
      <div className="space-y-4">
        <div className="bg-gray-50 p-6 rounded-[2rem] flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
            <Users className="text-gray-300" />
          </div>
          <div>
            <p className="font-black text-lg">{user?.phoneNumber || 'User'}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Admin</p>
          </div>
        </div>
        <RippleButton onClick={logout} className="w-full bg-red-50 p-6 rounded-[2rem] flex items-center justify-between text-left mt-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl text-red-600 shadow-sm"><LogOut size={20} /></div>
            <span className="font-black text-red-600">Logout</span>
          </div>
          <ChevronRight size={20} className="text-red-200" />
        </RippleButton>
      </div>
    </div>
  );
};

export default SettingsScreen;
