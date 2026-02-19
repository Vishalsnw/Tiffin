import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, CalendarDays, Wallet, Truck, BarChart3, LogOut, Menu, Moon, Sun, Plus, Search, Filter, Edit2, Trash2, X, Check, Bell, Settings, ChevronRight, Phone, LogIn, IndianRupee } from 'lucide-react';
import Subscription from './Subscription';
import PrivacyPolicy from './PrivacyPolicy';
import { auth, loginWithGoogle, logout, db, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// --- Ripple Effect Component ---
const RippleButton = ({ children, onClick, className = "", type = "button" }) => {
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
      type={type}
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
const Dashboard = ({ user, customers }) => {
  const totalMeals = customers.length;
  const vegCount = customers.filter(c => c.type === 'Veg').length;
  const nonVegCount = customers.filter(c => c.type === 'Non-Veg').length;

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
          { label: 'Total Meals Today', value: totalMeals, sub: 'All set for today', color: 'bg-orange-600', icon: Truck },
          { label: 'Pending Payments', value: '₹0', sub: 'No overdue payments', color: 'bg-red-600', icon: Wallet },
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
          { label: 'Veg Today', value: vegCount, color: 'bg-green-100 text-green-700' },
          { label: 'Non-Veg Today', value: nonVegCount, color: 'bg-rose-100 text-rose-700' },
          { label: 'Expiring Soon', value: '0', color: 'bg-amber-100 text-amber-700' },
          { label: 'Today\'s Deliveries', value: totalMeals, color: 'bg-blue-100 text-blue-700' },
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
const CustomersScreen = ({ customers }) => {
  return (
    <div className="p-4 pt-6 pb-24">
      <h2 className="text-3xl font-black mb-6 px-2">Customers</h2>
      <div className="space-y-4">
        {customers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-40">
            <Users size={64} strokeWidth={1} />
            <p className="font-bold mt-4 uppercase tracking-widest text-xs">No customers yet</p>
          </div>
        ) : (
          customers.map((c, i) => (
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
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-gray-100 text-gray-500`}>
                      Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-lg font-black text-gray-900`}>₹{c.price || 0}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Daily Price</p>
              </div>
            </RippleButton>
          ))
        )}
      </div>
    </div>
  );
};

// --- Today's Production Screen ---
const TodayScreen = ({ customers }) => {
  return (
    <div className="p-4 pt-6 pb-24">
      <div className="mb-8 px-2">
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Production View</p>
        <h2 className="text-4xl font-black text-gray-900 leading-tight">Aaj {customers.length} tiffin banana hai</h2>
      </div>
      
      <div className="space-y-3">
        {customers.map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-[2rem] flex items-center justify-between border border-gray-100 shadow-sm active:bg-orange-50 active:border-orange-100 transition-all">
            <div>
              <p className="font-bold text-gray-900 text-lg leading-none mb-1">{item.name}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">{item.phone} • <span className={item.type === 'Veg' ? 'text-green-600' : 'text-red-600'}>{item.type}</span></p>
            </div>
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
              <ChevronRight size={20} />
            </div>
          </div>
        ))}
        {customers.length === 0 && (
          <p className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest text-xs">No orders today</p>
        )}
      </div>
    </div>
  );
};

// --- Payments Screen ---
const PaymentsScreen = () => {
  return (
    <div className="p-4 pt-6 pb-24">
      <h2 className="text-3xl font-black mb-6 px-2">Payments</h2>
      
      <div className="bg-gray-900 p-8 rounded-[2.5rem] shadow-xl text-white mb-8">
        <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-2">Total Pending</p>
        <p className="text-5xl font-black">₹0</p>
      </div>

      <div className="flex flex-col items-center justify-center py-20 opacity-40">
        <Wallet size={64} strokeWidth={1} />
        <p className="font-bold mt-4 uppercase tracking-widest text-xs text-center">Sabka hisab clear hai!</p>
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

// --- Add Customer Modal ---
const AddCustomerModal = ({ isOpen, onClose, user }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Veg',
    price: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        alert("Please login first");
        return;
      }
      
      const customerData = {
        name: formData.name,
        phone: formData.phone,
        type: formData.type,
        price: Number(formData.price),
        createdAt: serverTimestamp(),
      };

      console.log("Attempting to add customer to path:", `users/${user.uid}/customers`);
      await addDoc(collection(db, `users/${user.uid}/customers`), customerData);
      
      setFormData({ name: '', phone: '', type: 'Veg', price: '' });
      onClose();
    } catch (error) {
      console.error("Error adding customer:", error);
      alert(`Failed to add customer: ${error.message}. Please check if you have permission.`);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-gray-900">Add Customer</h2>
          <RippleButton onClick={onClose} className="p-2 bg-gray-100 rounded-full text-gray-500">
            <X size={20} />
          </RippleButton>
        </div>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. Rahul Sharma" 
              className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 font-bold text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-orange-600 transition-all" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+91 00000 00000" 
              className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 font-bold text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-orange-600 transition-all" 
              required 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Meal Type</label>
              <select 
                className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 appearance-none"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option>Veg</option>
                <option>Non-Veg</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Daily Price</label>
              <input 
                type="number" 
                placeholder="₹" 
                className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 font-bold text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-orange-600 transition-all" 
                required 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>

          <RippleButton type="submit" className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl mt-6 shadow-lg shadow-orange-600/30 active:scale-95 transition-all">
            Save Customer
          </RippleButton>
        </form>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setCustomers([]);
      return;
    }

    const q = query(
      collection(db, `users/${user.uid}/customers`),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const customerData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCustomers(customerData);
    });

    return () => unsubscribe();
  }, [user]);

  const [showSubscription, setShowSubscription] = useState(false);
  
  useEffect(() => {
    if (user) {
      const creationTime = new Date(user.metadata.creationTime).getTime();
      const currentTime = new Date().getTime();
      const diffDays = Math.floor((currentTime - creationTime) / (1000 * 60 * 60 * 24));
      if (diffDays >= 15) {
        setShowSubscription(true);
      }
    }
  }, [user]);

  const handleSubscriptionComplete = () => {
    setShowSubscription(false);
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
      case 'Dashboard': return <Dashboard user={user} customers={customers} />;
      case 'Customers': return <CustomersScreen customers={customers} />;
      case 'Today': return <TodayScreen customers={customers} />;
      case 'Payments': return <PaymentsScreen />;
      case 'Settings': return <SettingsScreen user={user} onLogout={logout} />;
      default: return <Dashboard user={user} customers={customers} />;
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
          <div className="fixed bottom-28 right-6 z-[60] pointer-events-none">
            <RippleButton 
              className="w-14 h-14 bg-orange-600 text-white rounded-2xl shadow-[0_12px_40px_rgba(234,88,12,0.4)] flex items-center justify-center pointer-events-auto active:scale-90 transition-all hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus size={28} strokeWidth={3} />
            </RippleButton>
          </div>
        )}

        <AddCustomerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={user} />

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