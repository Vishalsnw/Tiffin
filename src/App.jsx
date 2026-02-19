import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, CalendarDays, Wallet, Truck, BarChart3, LogOut, Menu, Moon, Sun, Plus, Search, Filter, Edit2, Trash2, X, Check, Bell, Settings, ChevronRight, Phone, LogIn, IndianRupee } from 'lucide-react';
import Subscription from './Subscription';
import PrivacyPolicy from './PrivacyPolicy';
import { auth, loginWithGoogle, logout } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// --- Ripple Effect Component ---
const RippleButton = ({ children, onClick, className = "" }) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, id: Date.now() };
    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      onClick={(e) => {
        createRipple(e);
        onClick && onClick(e);
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
};

// --- Login Component ---
const LoginPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
    <div className="w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl">
      <Truck size={48} />
    </div>
    <h1 className="text-4xl font-black text-gray-900 mb-2">TiffinFlow Pro</h1>
    <p className="text-gray-500 mb-12 text-center max-w-xs">Manage your home kitchen business with ease.</p>
    
    <RippleButton 
      onClick={loginWithGoogle}
      className="w-full max-w-xs bg-gray-900 text-white font-bold py-5 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform"
    >
      <img src="https://www.google.com/favicon.ico" className="w-6 h-6" alt="Google" />
      Sign in with Google
    </RippleButton>
  </div>
);

// --- Dashboard Component ---
const Dashboard = ({ user }) => {
  return (
    <div className="p-4 pt-6 pb-24">
      <div className="flex justify-between items-center mb-8 px-2">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900">Dashboard</h2>
          <p className="text-gray-500 text-sm font-medium">Namaste, {user?.displayName?.split(' ')[0] || 'Chef'}!</p>
        </div>
        <div className="flex gap-3">
          <RippleButton className="p-3 bg-gray-100 rounded-2xl text-gray-700 active:scale-95 transition-transform"><Bell size={24} /></RippleButton>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {[
          { label: 'Total Meals Today', value: '156', sub: '67 Pending Delivery', color: 'bg-orange-600', icon: Truck },
          { label: 'Pending Payments', value: '₹12,450', sub: '14 Customers Overdue', color: 'bg-red-600', icon: Wallet },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} p-6 rounded-[2.5rem] shadow-lg text-white flex justify-between items-center relative overflow-hidden active:scale-[0.98] transition-transform cursor-pointer`}>
            <div className="relative z-10">
              <p className="text-sm font-bold opacity-80 mb-1 uppercase tracking-wider">{stat.label}</p>
              <p className="text-4xl font-black mb-1">{stat.value}</p>
              <p className="text-xs font-medium opacity-90">{stat.sub}</p>
            </div>
            <stat.icon size={64} className="opacity-20 absolute -right-4 -bottom-4" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { label: 'Veg Today', value: '98', color: 'bg-green-100 text-green-700' },
          { label: 'Non-Veg Today', value: '58', color: 'bg-rose-100 text-rose-700' },
          { label: 'Expiring Soon', value: '8', color: 'bg-amber-100 text-amber-700' },
          { label: 'Today\'s Deliveries', value: '156', color: 'bg-blue-100 text-blue-700' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color.split(' ')[0]} p-5 rounded-[2rem] flex flex-col justify-between aspect-[1.1/1] active:scale-95 transition-transform cursor-pointer`}>
            <p className="text-sm font-bold opacity-70 uppercase tracking-tight leading-none mb-2">{stat.label}</p>
            <p className={`text-3xl font-black ${stat.color.split(' ')[1]}`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Customer List Screen ---
const CustomersScreen = () => {
  const customers = [
    { name: 'Rahul Sharma', type: 'Veg', status: 'Active', balance: '₹450' },
    { name: 'Priya Patel', type: 'Non-Veg', status: 'Overdue', balance: '₹1,200' },
    { name: 'Amit Verma', type: 'Veg', status: 'Active', balance: '₹0' },
    { name: 'Suresh Raina', type: 'Veg', status: 'Active', balance: '₹0' },
    { name: 'Mithali Raj', type: 'Non-Veg', status: 'Active', balance: '₹300' },
  ];

  return (
    <div className="p-4 pt-6 pb-24">
      <h2 className="text-3xl font-black mb-6 px-2">Customers</h2>
      <div className="space-y-4">
        {customers.map((c, i) => (
          <RippleButton key={i} className="w-full bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between text-left active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black ${c.type === 'Veg' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {c.name[0]}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg leading-tight mb-1">{c.name}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${c.type === 'Veg' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                    {c.type}
                  </span>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${c.status === 'Overdue' ? 'bg-red-600 text-white shadow-sm' : 'bg-gray-100 text-gray-500'}`}>
                    {c.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-lg font-black ${c.status === 'Overdue' ? 'text-red-600' : 'text-gray-900'}`}>{c.balance}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Balance</p>
            </div>
          </RippleButton>
        ))}
      </div>
    </div>
  );
};

// --- Today's Production Screen ---
const TodayScreen = () => {
  return (
    <div className="p-4 pt-6 pb-24">
      <div className="mb-8 px-2">
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Production View</p>
        <h2 className="text-4xl font-black text-gray-900 leading-tight">Aaj 67 tiffin banana hai</h2>
      </div>
      
      <div className="space-y-3">
        {[
          { name: 'Suresh Raina', area: 'Andheri West', type: 'Veg', note: 'No onions' },
          { name: 'Mithali Raj', area: 'Bandra', type: 'Non-Veg', note: 'Extra spicy' },
          { name: 'Virat Kohli', area: 'Juhu', type: 'Veg', note: 'Jain food' },
          { name: 'Hardik Pandya', area: 'Worli', type: 'Non-Veg', note: '' },
          { name: 'KL Rahul', area: 'Parel', type: 'Veg', note: 'Less oil' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-[2rem] flex items-center justify-between border border-gray-100 shadow-sm active:bg-orange-50 active:border-orange-100 transition-all">
            <div>
              <p className="font-bold text-gray-900 text-lg leading-none mb-1">{item.name}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">{item.area} • <span className={item.type === 'Veg' ? 'text-green-600' : 'text-red-600'}>{item.type}</span></p>
              {item.note && (
                <div className="flex items-center gap-1.5 mt-2 bg-orange-50 px-3 py-1.5 rounded-full w-fit border border-orange-100">
                  <span className="text-[10px] font-black text-orange-600 uppercase italic">Note: {item.note}</span>
                </div>
              )}
            </div>
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
              <ChevronRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Payments Screen ---
const PaymentsScreen = () => {
  return (
    <div className="p-4 pt-6 pb-24">
      <h2 className="text-3xl font-black mb-6 px-2">Payments</h2>
      
      <div className="bg-red-600 p-8 rounded-[2.5rem] shadow-xl text-white mb-8">
        <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-2">Total Pending</p>
        <p className="text-5xl font-black">₹12,450</p>
      </div>

      <div className="space-y-4">
        {[
          { name: 'Hardik Pandya', amount: '₹2,100', days: '12 days late' },
          { name: 'KL Rahul', amount: '₹1,500', days: '8 days late' },
        ].map((p, i) => (
          <div key={i} className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-bold text-gray-900 text-lg">{p.name}</p>
                <p className="text-xs font-bold text-red-600 uppercase tracking-tighter">{p.days}</p>
              </div>
              <p className="text-xl font-black text-gray-900">{p.amount}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <RippleButton className="bg-green-600 text-white py-3 rounded-xl font-bold text-sm">Mark Paid</RippleButton>
              <RippleButton className="bg-gray-100 text-gray-900 py-3 rounded-xl font-bold text-sm">Send Reminder</RippleButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Settings Screen ---
const SettingsScreen = ({ user, onLogout }) => {
  return (
    <div className="p-4 pt-6 pb-24">
      <div className="flex justify-between items-center mb-8 px-2">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900">Settings</h2>
          <p className="text-gray-500 text-sm font-medium">{user?.email}</p>
        </div>
      </div>

      <div className="space-y-2">
        <RippleButton className="w-full bg-gray-50 p-5 rounded-2xl flex items-center justify-between text-left group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl text-gray-600 group-active:text-orange-600 transition-colors">
              <Users size={20} />
            </div>
            <span className="font-bold text-gray-900">Manage Subscription</span>
          </div>
          <ChevronRight size={20} className="text-gray-300" />
        </RippleButton>

        <RippleButton className="w-full bg-gray-50 p-5 rounded-2xl flex items-center justify-between text-left group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl text-gray-600 group-active:text-orange-600 transition-colors">
              <Bell size={20} />
            </div>
            <span className="font-bold text-gray-900">Notifications</span>
          </div>
          <ChevronRight size={20} className="text-gray-300" />
        </RippleButton>

        <RippleButton 
          onClick={onLogout}
          className="w-full bg-red-50 p-5 rounded-2xl flex items-center justify-between text-left group mt-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl text-red-600">
              <LogOut size={20} />
            </div>
            <span className="font-bold text-red-600">Logout</span>
          </div>
          <ChevronRight size={20} className="text-red-200" />
        </RippleButton>
      </div>
      
      <div className="mt-12 px-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">TiffinFlow Pro v1.0.0</p>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const [showSubscription, setShowSubscription] = useState(false);
  const [trialExpired, setTrialExpired] = useState(false);

  useEffect(() => {
    if (user) {
      const creationTime = new Date(user.metadata.creationTime).getTime();
      const currentTime = new Date().getTime();
      const diffDays = Math.floor((currentTime - creationTime) / (1000 * 60 * 60 * 24));
      if (diffDays >= 15) {
        setTrialExpired(true);
        setShowSubscription(true);
      }
    }
  }, [user]);

  const handleSubscriptionComplete = () => {
    setShowSubscription(false);
    alert("Subscription activated!");
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-12">
      <div className="w-20 h-20 bg-gray-100 rounded-[2rem] animate-pulse mb-6"></div>
      <div className="w-48 h-4 bg-gray-100 rounded-full animate-pulse mb-2"></div>
      <div className="w-32 h-3 bg-gray-50 rounded-full animate-pulse"></div>
    </div>
  );

  if (!user) return <LoginPage />;

  if (showSubscription) return <Subscription user={user} onSubscriptionComplete={handleSubscriptionComplete} />;

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard': return <Dashboard user={user} />;
      case 'Customers': return <CustomersScreen />;
      case 'Today': return <TodayScreen />;
      case 'Payments': return <PaymentsScreen />;
      case 'Settings': return <SettingsScreen user={user} onLogout={logout} />;
      default: return <Dashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 antialiased overflow-x-hidden">
      <div className="max-w-md mx-auto min-h-screen relative flex flex-col pt-[env(safe-area-inset-top,0px)]">
        
        {/* Main Content */}
        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto">
          {renderContent()}
        </div>

        {/* Floating Action Button - Only on relevant screens */}
        {(activeTab === 'Dashboard' || activeTab === 'Customers') && (
          <RippleButton 
            className="fixed bottom-24 right-6 w-16 h-16 bg-orange-600 text-white rounded-full shadow-[0_8px_30px_rgb(234,88,12,0.4)] flex items-center justify-center z-[60] active:scale-90 transition-transform"
            onClick={() => alert("Add Customer modal coming soon!")}
          >
            <Plus size={32} strokeWidth={3} />
          </RippleButton>
        )}

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-3xl border-t border-gray-100 px-2 pt-2 pb-[calc(env(safe-area-inset-bottom,16px)+8px)] flex justify-around items-center z-50">
          {[
            { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { id: 'Customers', icon: Users, label: 'Customers' },
            { id: 'Today', icon: CalendarDays, label: 'Today' },
            { id: 'Payments', icon: Wallet, label: 'Payments' },
            { id: 'Settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 px-2 py-1.5 min-w-[64px] transition-all duration-300 ${activeTab === item.id ? 'text-orange-600' : 'text-gray-400'}`}
            >
              <div className={`p-2 rounded-2xl transition-all duration-300 ${activeTab === item.id ? 'bg-orange-50 scale-110' : 'bg-transparent scale-100'}`}>
                <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-tight transition-all duration-300 ${activeTab === item.id ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-0.5'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}