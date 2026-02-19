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
          <RippleButton className="p-3 bg-gray-100 rounded-2xl text-gray-700"><Bell size={24} /></RippleButton>
          <RippleButton onClick={logout} className="p-3 bg-red-50 rounded-2xl text-red-600"><LogOut size={24} /></RippleButton>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {[
          { label: 'Total Meals Today', value: '156', sub: '67 Pending Delivery', color: 'bg-orange-600', icon: Truck },
          { label: 'Pending Payments', value: '₹12,450', sub: '14 Customers Overdue', color: 'bg-red-600', icon: Wallet },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} p-6 rounded-[2.5rem] shadow-lg text-white flex justify-between items-center relative overflow-hidden`}>
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
          { label: 'New Customers', value: '12', color: 'bg-blue-100 text-blue-700' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color.split(' ')[0]} p-5 rounded-[2rem] flex flex-col justify-between aspect-[1.1/1]`}>
            <p className="text-sm font-bold opacity-70 uppercase tracking-tight">{stat.label}</p>
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
  ];

  return (
    <div className="p-4 pt-6 pb-24">
      <h2 className="text-3xl font-black mb-6 px-2">Customers</h2>
      <div className="space-y-4">
        {customers.map((c, i) => (
          <RippleButton key={i} className="w-full bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between text-left">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold ${c.type === 'Veg' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {c.name[0]}
              </div>
              <div>
                <p className="font-bold text-gray-900">{c.name}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${c.type === 'Veg' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {c.type}
                  </span>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${c.status === 'Overdue' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {c.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-black text-gray-900">{c.balance}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Balance</p>
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
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Today's Goal</p>
        <h2 className="text-4xl font-black text-gray-900 leading-tight">Aaj 67 tiffin banana hai</h2>
      </div>
      
      <div className="space-y-3">
        {[
          { name: 'Suresh Raina', area: 'Andheri West', type: 'Veg', note: 'No onions' },
          { name: 'Mithali Raj', area: 'Bandra', type: 'Non-Veg', note: 'Extra spicy' },
          { name: 'Virat Kohli', area: 'Juhu', type: 'Veg', note: 'Jain food' },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 p-5 rounded-[1.8rem] flex items-center justify-between border border-transparent active:border-orange-200 active:bg-orange-50 transition-colors">
            <div>
              <p className="font-bold text-gray-900">{item.name}</p>
              <p className="text-xs font-medium text-gray-500">{item.area} • {item.type}</p>
              {item.note && <p className="text-[10px] font-bold text-orange-600 mt-1 uppercase italic">Note: {item.note}</p>}
            </div>
            <ChevronRight size={20} className="text-gray-300" />
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
              <RippleButton className="bg-gray-100 text-gray-900 py-3 rounded-xl font-bold text-sm">Reminder</RippleButton>
            </div>
          </div>
        ))}
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
      case 'Settings': return <PrivacyPolicy onBack={() => setActiveTab('Dashboard')} />;
      default: return <Dashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100">
      <div className="max-w-md mx-auto min-h-screen relative overflow-x-hidden">
        
        {/* Main Content with Transition Placeholder */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {renderContent()}
        </div>

        {/* Floating Action Button */}
        <RippleButton 
          className="fixed bottom-24 right-6 w-16 h-16 bg-orange-600 text-white rounded-full shadow-[0_8px_30px_rgb(234,88,12,0.4)] flex items-center justify-center z-[60] active:scale-90 transition-transform"
          onClick={() => alert("Add Customer modal coming soon!")}
        >
          <Plus size={32} strokeWidth={3} />
        </RippleButton>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-2xl border-t border-gray-100 px-2 py-3 flex justify-around items-center z-50 safe-area-bottom">
          {[
            { id: 'Dashboard', icon: LayoutDashboard, label: 'Home' },
            { id: 'Customers', icon: Users, label: 'Clients' },
            { id: 'Today', icon: CalendarDays, label: 'Today' },
            { id: 'Payments', icon: Wallet, label: 'Pay' },
            { id: 'Settings', icon: Settings, label: 'More' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-2xl transition-all duration-300 ${activeTab === item.id ? 'text-orange-600' : 'text-gray-400'}`}
            >
              <div className={`p-1.5 rounded-xl transition-colors ${activeTab === item.id ? 'bg-orange-50' : 'bg-transparent'}`}>
                <item.icon size={22} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${activeTab === item.id ? 'opacity-100' : 'opacity-60'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}