import React, { useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { LayoutDashboard, Users, CalendarDays, Wallet, Truck, BarChart3, LogOut, Menu, Moon, Sun, Plus, Search, Filter, Edit2, Trash2, X, Check, Bell, Settings, ChevronRight, Phone } from 'lucide-react';

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible'
      });
    }
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePhoneSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
      setVerificationId(confirmationResult);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError('');
    try {
      await verificationId.confirm(otp);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-[40px] p-8 shadow-xl shadow-blue-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white">
            <Truck size={32} />
          </div>
          <h2 className="text-2xl font-bold">TiffinFlow Pro</h2>
          <p className="text-gray-500">Sign in to manage your tiffin service</p>
        </div>

        {error && <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm">{error}</div>}

        <div className="space-y-4">
          {!verificationId ? (
            <>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 ml-1 uppercase">Phone Number (India)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">+91</span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="9876543210"
                  />
                </div>
              </div>
              <button
                onClick={handlePhoneSignIn}
                disabled={loading || phoneNumber.length < 10}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 ml-1 uppercase">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="123456"
                />
              </div>
              <button
                onClick={handleVerifyOtp}
                disabled={loading || otp.length < 6}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
              <button onClick={() => setVerificationId(null)} className="w-full text-blue-600 font-bold text-sm mt-2">Change Number</button>
            </>
          )}

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-gray-400 font-bold">Or continue with</span></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-gray-100 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
            Sign in with Google
          </button>
        </div>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

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
        <button onClick={() => signOut(auth)} className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-red-500"><LogOut size={20} /></button>
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

// --- Customers Component ---
const Customers = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const mockCustomers = [
    { id: 1, name: 'Rahul Sharma', phone: '9876543210', plan: 'Monthly', type: 'Veg', status: 'Active' },
    { id: 2, name: 'Anjali Gupta', phone: '9822334455', plan: 'Weekly', type: 'Non-Veg', status: 'Active' },
    { id: 3, name: 'Vikram Singh', phone: '9988776655', plan: 'Monthly', type: 'Jain', status: 'Paused' },
  ];

  return (
    <div className="p-4 pb-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Customers</h2>
        <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200">
          <Plus size={24} />
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input type="text" placeholder="Search by name or number..." className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-3xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none" />
      </div>

      <div className="space-y-4">
        {mockCustomers.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-lg">
              {c.name[0]}
            </div>
            <div className="flex-1">
              <h4 className="font-bold">{c.name}</h4>
              <p className="text-xs text-gray-500">{c.phone}</p>
            </div>
            <div className="text-right">
              <div className="flex gap-1 mb-1">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase">{c.plan}</span>
                <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase ${
                  c.type === 'Veg' ? 'bg-green-50 text-green-600' : 
                  c.type === 'Non-Veg' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'
                }`}>{c.type}</span>
              </div>
              <span className={`text-[10px] font-bold ${c.status === 'Active' ? 'text-green-500' : 'text-orange-500'}`}>{c.status}</span>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50">
          <div className="bg-white rounded-t-[40px] w-full max-w-md p-8 animate-in slide-in-from-bottom duration-300">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">New Customer</h3>
              <button onClick={() => setShowAddModal(false)} className="bg-gray-100 p-2 rounded-full"><X size={20} /></button>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 ml-1">FULL NAME</label>
                <input type="text" className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-1">PHONE</label>
                  <input type="tel" className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="987654..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-1">DIET</label>
                  <select className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                    <option>Veg</option>
                    <option>Non-Veg</option>
                    <option>Jain</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-95 transition-transform">
                Save Customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Planner Component ---
const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dailyPlans, setDailyPlans] = useState(() => {
    const saved = localStorage.getItem('dailyPlans');
    return saved ? JSON.parse(saved) : {};
  });
  const [defaultPlan, setDefaultPlan] = useState(() => {
    const saved = localStorage.getItem('defaultPlan');
    return saved ? JSON.parse(saved) : {
      breakfast: 'Poha & Jalebi',
      lunch: 'Dal Tadka, Mix Veg, 4 Roti, Rice, Salad',
      dinner: 'Paneer Butter Masala, 3 Paratha, Rice'
    };
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [newMeal, setNewMeal] = useState({ type: 'breakfast', items: '' });

  useEffect(() => {
    localStorage.setItem('dailyPlans', JSON.stringify(dailyPlans));
  }, [dailyPlans]);

  useEffect(() => {
    localStorage.setItem('defaultPlan', JSON.stringify(defaultPlan));
  }, [defaultPlan]);

  const dateKey = selectedDate.toDateString();
  const currentPlan = dailyPlans[dateKey] || defaultPlan;

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const handleUpdateMeal = () => {
    if (newMeal.items.trim()) {
      setDailyPlans(prev => ({
        ...prev,
        [dateKey]: {
          ...currentPlan,
          [newMeal.type]: newMeal.items
        }
      }));
      setShowAddModal(false);
    }
  };

  const handleUpdateDefault = (type, items) => {
    setDefaultPlan(prev => ({
      ...prev,
      [type]: items
    }));
  };

  return (
    <div className="p-4 pb-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Meal Planner</h2>
        <button 
          onClick={() => setShowSettingsModal(true)}
          className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200 active:scale-95 transition-transform"
        >
          <Settings size={24} />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        {next7Days.map((date, i) => (
          <button
            key={i}
            onClick={() => setSelectedDate(date)}
            className={`flex flex-col items-center min-w-[64px] p-4 rounded-3xl transition-all ${
              selectedDate.toDateString() === date.toDateString()
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
              : 'bg-white text-gray-400 border border-gray-50'
            }`}
          >
            <span className="text-[10px] font-bold uppercase mb-1">{days[date.getDay()]}</span>
            <span className="text-lg font-black">{date.getDate()}</span>
          </button>
        ))}
      </div>

      <div className="space-y-4 mt-4">
        {Object.entries(currentPlan).map(([meal, items], i) => (
          <div key={meal} className="bg-white p-5 rounded-[32px] shadow-sm border border-gray-50 relative overflow-hidden">
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${i === 0 ? 'bg-orange-400' : i === 1 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">{meal}</h4>
                <p className="font-bold text-gray-900 mt-1">{items}</p>
              </div>
              <button 
                onClick={() => {
                  setNewMeal({ type: meal, items: items });
                  setShowAddModal(true);
                }}
                className="p-2 bg-gray-50 rounded-xl text-gray-400"
              >
                <Edit2 size={16} />
              </button>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded-lg text-[10px] font-bold">142 Orders</span>
              <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded-lg text-[10px] font-bold">Preparation: 2h</span>
            </div>
          </div>
        ))}

        <button 
          onClick={() => {
            setNewMeal({ type: 'special', items: '' });
            setShowAddModal(true);
          }}
          className="w-full py-5 border-2 border-dashed border-gray-200 rounded-[32px] text-gray-400 font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <Plus size={20} /> Add Special Item
        </button>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50">
          <div className="bg-white rounded-t-[40px] w-full max-w-md p-8 animate-in slide-in-from-bottom duration-300">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Update {newMeal.type}</h3>
              <button onClick={() => setShowAddModal(false)} className="bg-gray-100 p-2 rounded-full"><X size={20} /></button>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 ml-1">MEAL ITEMS</label>
                <textarea 
                  value={newMeal.items}
                  onChange={(e) => setNewMeal({...newMeal, items: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]"
                  placeholder="e.g. Dal Tadka, Rice, 4 Roti"
                />
              </div>
              <button 
                onClick={handleUpdateMeal}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-95 transition-transform"
              >
                Update for {selectedDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50">
          <div className="bg-white rounded-t-[40px] w-full max-w-md p-8 animate-in slide-in-from-bottom duration-300 max-h-[80vh] overflow-y-auto">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Planner Settings</h3>
              <button onClick={() => setShowSettingsModal(false)} className="bg-gray-100 p-2 rounded-full"><X size={20} /></button>
            </div>
            <div className="space-y-6">
              <p className="text-sm text-gray-500 font-medium">Set default meals for all days unless modified specifically.</p>
              {Object.entries(defaultPlan).map(([type, items]) => (
                <div key={type} className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-1 uppercase">{type}</label>
                  <textarea 
                    value={items}
                    onChange={(e) => handleUpdateDefault(type, e.target.value)}
                    className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none min-h-[80px]"
                  />
                </div>
              ))}
              <button 
                onClick={() => setShowSettingsModal(false)}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-95 transition-transform"
              >
                Save Default Menu
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return <Auth />;
  }

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'Customers' },
    { icon: CalendarDays, label: 'Planner' },
    { icon: Wallet, label: 'Payments' },
    { icon: Truck, label: 'Delivery' },
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Dynamic Content Area */}
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'Dashboard' && <Dashboard user={user} />}
        {activeTab === 'Customers' && <Customers />}
        {activeTab === 'Planner' && <Planner />}
        {!['Dashboard', 'Customers', 'Planner'].includes(activeTab) && (
          <div className="h-full flex flex-col items-center justify-center p-8 text-center mt-20">
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center mb-6">
              <CalendarDays size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{activeTab}</h3>
            <p className="text-gray-500">Feature currently under development. Stay tuned!</p>
          </div>
        )}
      </main>

      {/* Android Style Bottom Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 h-20 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border-t px-4 flex items-center justify-around z-40 pb-2 shadow-lg`}>
        {menuItems.map((item) => (
          <button 
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className={`flex flex-col items-center justify-center gap-1 min-w-[64px] transition-all duration-300 ${
              activeTab === item.label 
              ? 'text-blue-600 scale-110' 
              : 'text-gray-400'
            }`}
          >
            <div className={`p-1.5 rounded-xl transition-colors ${activeTab === item.label ? 'bg-blue-50' : ''}`}>
              <item.icon size={24} strokeWidth={activeTab === item.label ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${activeTab === item.label ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}