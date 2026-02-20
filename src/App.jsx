import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, CalendarDays, Wallet, Truck, BarChart3, LogOut, Menu, Moon, Sun, Plus, Search, Filter, Edit2, Trash2, X, Check, Bell, Settings, ChevronRight, Phone, LogIn, IndianRupee, MapPin, MessageCircle } from 'lucide-react';
import Subscription from './Subscription';
import PrivacyPolicy from './PrivacyPolicy';
import { auth, loginWithGoogle, logout, db, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, updateDoc, doc, deleteDoc } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// --- Ripple Effect Component ---
const RippleButton = ({ children, onClick, className = "", type = "button", disabled = false }) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    if (disabled) return;
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
      disabled={disabled}
      onClick={(e) => {
        createRipple(e);
        onClick && onClick(e);
      }}
      className={`relative overflow-hidden outline-none ${className} ${disabled ? 'opacity-50 grayscale' : ''}`}
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

// --- Bottom Sheet Component ---
const BottomSheet = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-t-[2.5rem] p-8 shadow-2xl animate-in slide-in-from-bottom-full duration-300 max-h-[90vh] overflow-y-auto">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" onClick={onClose} />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-gray-900">{title}</h2>
          <RippleButton onClick={onClose} className="p-2 bg-gray-100 rounded-full text-gray-500">
            <X size={20} />
          </RippleButton>
        </div>
        {children}
      </div>
    </div>
  );
};

// --- Login Component ---
const LoginPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
    <div className="w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl">
      <Truck size={48} />
    </div>
    <h1 className="text-4xl font-black text-gray-900 mb-2">TiffinFlow Pro</h1>
    <p className="text-gray-500 mb-12 text-center max-w-xs font-medium">Manage your home kitchen business with ease.</p>
    
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
  const activeCustomers = customers.filter(c => c.status !== 'Paused');
  const totalMeals = activeCustomers.length;
  const vegCount = activeCustomers.filter(c => c.type === 'Veg').length;
  const nonVegCount = activeCustomers.filter(c => c.type === 'Non-Veg').length;
  const pausedCount = customers.filter(c => c.status === 'Paused').length;
  const pendingPayments = customers.reduce((acc, c) => acc + (c.balance || 0), 0);
  const expiringSoonCount = customers.filter(c => {
    if (!c.expiryDate) return false;
    const expiry = new Date(c.expiryDate);
    const today = new Date();
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 3;
  }).length;

  const stats = [
    { label: 'Total Meals Today', value: totalMeals, color: 'bg-orange-600', icon: Truck, full: true },
    { label: 'Veg Count', value: vegCount, color: 'bg-green-100 text-green-700' },
    { label: 'Non-Veg Count', value: nonVegCount, color: 'bg-rose-100 text-rose-700' },
    { label: 'Paused Today', value: pausedCount, color: 'bg-amber-100 text-amber-700' },
    { label: 'Expiring Soon (3 days)', value: expiringSoonCount, color: 'bg-orange-100 text-orange-700' },
    { label: 'Pending Payments', value: `₹${pendingPayments}`, color: 'bg-red-100 text-red-700' },
  ];

  return (
    <div className="p-4 pt-6 pb-24 max-w-full overflow-x-hidden min-h-screen">
      <div className="flex justify-between items-center mb-8 px-2">
        <div>
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-1">TiffinFlow Pro</h2>
          <h2 className="text-3xl font-black tracking-tight text-gray-900">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</h2>
          <p className="text-gray-500 text-sm font-medium">Namaste, {user?.displayName?.split(' ')[0] || 'Chef'}!</p>
        </div>
        <div className="flex gap-3">
          <RippleButton className="p-3 bg-gray-100 rounded-2xl text-gray-700 active:scale-95 transition-transform"><Bell size={24} /></RippleButton>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
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

// --- Customer List Screen ---
const CustomersScreen = ({ customers, user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);

  const areas = ['All', ...new Set(customers.map(c => c.area).filter(Boolean))];
  const statuses = ['All', 'Active', 'Paused', 'Expired'];
  
  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterArea === 'All' || c.area === filterArea) &&
    (filterStatus === 'All' || c.status === filterStatus || (filterStatus === 'Active' && !c.status))
  );

  const handleUpdateStatus = async (customerId, newStatus) => {
    try {
      await updateDoc(doc(db, `users/${user.uid}/customers`, customerId), { status: newStatus });
      setIsEditSheetOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCustomer = async (customerId) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        await deleteDoc(doc(db, `users/${user.uid}/customers`, customerId));
        setIsEditSheetOpen(false);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="p-4 pt-6 pb-24 min-h-screen">
      <div className="px-2 mb-6">
        <h2 className="text-3xl font-black mb-4 tracking-tight">Customers</h2>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {areas.map(area => (
                <button 
                  key={area}
                  onClick={() => setFilterArea(area)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap border ${filterArea === area ? 'bg-gray-900 text-white border-gray-900 shadow-md' : 'bg-white text-gray-500 border-gray-100'}`}
                >
                  {area}
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {statuses.map(status => (
                <button 
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap border ${filterStatus === status ? 'bg-orange-600 text-white border-orange-600 shadow-md' : 'bg-white text-gray-500 border-gray-100'}`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredCustomers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-40">
            <Users size={64} strokeWidth={1} />
            <p className="font-bold mt-4 uppercase tracking-widest text-[10px]">No customers found</p>
          </div>
        ) : (
          filteredCustomers.map((c) => (
            <RippleButton 
              key={c.id} 
              onClick={() => {
                setSelectedCustomer(c);
                setIsEditSheetOpen(true);
              }}
              className="w-full bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between text-left active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black ${c.type === 'Veg' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {c.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg leading-tight mb-1">{c.name}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${c.type === 'Veg' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                      {c.type}
                    </span>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${c.status === 'Paused' ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-500'}`}>
                      {c.status || 'Active'}
                    </span>
                    {c.remainingDays !== undefined && (
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{c.remainingDays} days left</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-lg font-black text-gray-900`}>₹{c.balance || 0}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Balance</p>
              </div>
            </RippleButton>
          ))
        )}
      </div>

      <BottomSheet 
        isOpen={isEditSheetOpen} 
        onClose={() => setIsEditSheetOpen(false)} 
        title={selectedCustomer?.name || 'Customer Details'}
      >
        <div className="space-y-6">
          <div className="flex justify-around py-4 bg-gray-50 rounded-[2rem]">
            <div className="text-center">
              <p className="text-xl font-black">{selectedCustomer?.type}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Type</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-black">₹{selectedCustomer?.price}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Daily</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-black">{selectedCustomer?.area || 'N/A'}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Area</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <RippleButton 
              onClick={() => handleUpdateStatus(selectedCustomer.id, selectedCustomer.status === 'Paused' ? 'Active' : 'Paused')}
              className={`py-5 rounded-2xl font-black shadow-sm ${selectedCustomer?.status === 'Paused' ? 'bg-green-600 text-white' : 'bg-amber-100 text-amber-600'}`}
            >
              {selectedCustomer?.status === 'Paused' ? 'Resume' : 'Pause'}
            </RippleButton>
            <RippleButton 
              onClick={() => window.open(`tel:${selectedCustomer?.phone}`)}
              className="bg-blue-600 text-white py-5 rounded-2xl font-black shadow-sm flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call
            </RippleButton>
          </div>

          <RippleButton 
            onClick={() => handleDeleteCustomer(selectedCustomer.id)}
            className="w-full bg-red-50 text-red-600 py-5 rounded-2xl font-black"
          >
            Delete Customer
          </RippleButton>
        </div>
      </BottomSheet>
    </div>
  );
};

// --- Today's Production Screen ---
const TodayScreen = ({ customers }) => {
  const [areaFilter, setAreaFilter] = useState('All');
  const activeToday = customers.filter(c => c.status !== 'Paused');
  const areas = ['All', ...new Set(activeToday.map(c => c.area).filter(Boolean))];

  const filtered = activeToday.filter(c => areaFilter === 'All' || c.area === areaFilter);

  return (
    <div className="p-4 pt-6 pb-24 min-h-screen">
      <div className="mb-8 px-2">
        <p className="text-orange-600 font-bold uppercase tracking-widest text-[10px] mb-2">Production View</p>
        <h2 className="text-4xl font-black text-gray-900 leading-tight">Aaj {activeToday.length} tiffin banana hai</h2>
        
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mt-8">
          {areas.map(area => (
            <button 
              key={area}
              onClick={() => setAreaFilter(area)}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap border ${areaFilter === area ? 'bg-orange-600 text-white border-orange-600 shadow-md' : 'bg-white text-gray-500 border-gray-100'}`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-[2rem] flex items-center justify-between border border-gray-100 shadow-sm active:bg-orange-50 transition-all">
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-lg leading-none mb-3">{item.name}</p>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${item.type === 'Veg' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {item.type}
                </span>
                {item.area && (
                  <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <MapPin size={12} className="text-gray-300" /> {item.area}
                  </span>
                )}
              </div>
              {item.note && (
                <div className="mt-4 p-3 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-xs text-orange-700 font-medium italic">"{item.note}"</p>
                </div>
              )}
            </div>
            <RippleButton 
              onClick={() => window.open(`https://wa.me/91${item.phone}`)}
              className="ml-4 w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-100 active:scale-90 transition-transform"
            >
              <MessageCircle size={24} />
            </RippleButton>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-20 opacity-30">
            <CalendarDays size={64} strokeWidth={1} className="mx-auto mb-4" />
            <p className="font-bold uppercase tracking-widest text-[10px]">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Payments Screen ---
const PaymentsScreen = ({ customers, user }) => {
  const pendingCustomers = customers.filter(c => (c.balance || 0) > 0);
  const totalPending = pendingCustomers.reduce((acc, c) => acc + (c.balance || 0), 0);

  const handleMarkAsPaid = async (customerId) => {
    try {
      await updateDoc(doc(db, `users/${user.uid}/customers`, customerId), { balance: 0 });
    } catch (err) {
      console.error(err);
    }
  };

  const sendReminder = (customer) => {
    const msg = `Namaste ${customer.name}, TiffinFlow ki taraf se reminder. Aapka ₹${customer.balance} pending hai. Kripya pay karein. Dhanyavad!`;
    window.open(`https://wa.me/91${customer.phone}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="p-4 pt-6 pb-24 min-h-screen">
      <h2 className="text-3xl font-black mb-8 px-2 text-gray-900 tracking-tight">Payments</h2>
      
      <div className="bg-red-600 p-10 rounded-[2.5rem] shadow-2xl text-white mb-10 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-2">Total Pending Amount</p>
          <p className="text-6xl font-black">₹{totalPending}</p>
        </div>
        <IndianRupee size={120} className="absolute -right-8 -bottom-8 opacity-10" />
      </div>

      <div className="space-y-4">
        {pendingCustomers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-30">
            <Wallet size={64} strokeWidth={1} />
            <p className="font-bold mt-4 uppercase tracking-widest text-[10px] text-center">Sabka hisab clear hai!</p>
          </div>
        ) : (
          pendingCustomers.map((c) => (
            <div key={c.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-gray-900 text-xl leading-tight mb-1">{c.name}</p>
                  <p className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md inline-block ${c.balance > 1000 ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
                    Pending: ₹{c.balance}
                  </p>
                </div>
                <RippleButton 
                  onClick={() => sendReminder(c)}
                  className="p-4 bg-green-500 text-white rounded-2xl shadow-lg shadow-green-100 active:scale-95 transition-transform"
                >
                  <MessageCircle size={22} />
                </RippleButton>
              </div>
              <RippleButton 
                onClick={() => handleMarkAsPaid(c.id)}
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-sm shadow-xl active:scale-95 transition-transform"
              >
                Mark as Paid
              </RippleButton>
            </div>
          ))
        )}
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

      <div className="space-y-4">
        <div className="bg-gray-50 p-6 rounded-[2rem] flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
            {user?.photoURL ? <img src={user.photoURL} alt="" /> : <Users className="text-gray-300" />}
          </div>
          <div>
            <p className="font-black text-lg">{user?.displayName}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Administrator</p>
          </div>
        </div>

        <RippleButton 
          onClick={onLogout}
          className="w-full bg-red-50 p-6 rounded-[2rem] flex items-center justify-between text-left mt-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl text-red-600 shadow-sm">
              <LogOut size={20} />
            </div>
            <span className="font-black text-red-600">Logout</span>
          </div>
          <ChevronRight size={20} className="text-red-200" />
        </RippleButton>
      </div>
      
      <div className="mt-12 px-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">TiffinFlow Pro v2.0.0 (Native Build)</p>
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
    price: '',
    area: '',
    note: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) return;
      
      const customerData = {
        ...formData,
        price: Number(formData.price),
        balance: 0,
        status: 'Active',
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, `users/${user.uid}/customers`), customerData);
      setFormData({ name: '', phone: '', type: 'Veg', price: '', area: '', note: '' });
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-t-[3rem] p-8 pb-12 shadow-2xl animate-in slide-in-from-bottom-full duration-500 overflow-y-auto max-h-[95vh] safe-area-bottom">
        <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mb-8" onClick={onClose} />
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black text-gray-900">Naya Customer</h2>
          <RippleButton onClick={onClose} className="p-3 bg-gray-50 rounded-full text-gray-400">
            <X size={24} />
          </RippleButton>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. Rahul Sharma" 
              className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 font-bold text-lg text-gray-900 placeholder:text-gray-300 focus:ring-4 focus:ring-orange-100 transition-all" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Phone</label>
              <input 
                type="tel" 
                placeholder="10 digit number" 
                className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-orange-100" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Area</label>
              <input 
                type="text" 
                placeholder="Area/Colony" 
                className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-orange-100" 
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Meal Type</label>
              <div className="relative">
                <select 
                  className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-orange-100 appearance-none"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option>Veg</option>
                  <option>Non-Veg</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Daily Price</label>
              <input 
                type="number" 
                placeholder="₹" 
                className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-orange-100" 
                required 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Special Note</label>
            <input 
              type="text" 
              placeholder="e.g. No spicy, Extra roti" 
              className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-orange-100" 
              value={formData.note}
              onChange={(e) => setFormData({...formData, note: e.target.value})}
            />
          </div>

          <RippleButton type="submit" className="w-full bg-orange-600 text-white font-black py-6 rounded-3xl mt-6 shadow-2xl shadow-orange-600/30 active:scale-95 transition-all text-xl">
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
      <div className="w-20 h-20 bg-orange-50 rounded-[2.5rem] flex items-center justify-center mb-6">
        <Truck className="text-orange-600 animate-bounce" size={40} />
      </div>
      <div className="w-48 h-4 bg-gray-50 rounded-full overflow-hidden">
        <div className="h-full bg-orange-600 animate-loading-bar" />
      </div>
    </div>
  );

  if (!user) return <LoginPage />;

  if (showSubscription) return <Subscription user={user} onSubscriptionComplete={handleSubscriptionComplete} />;

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard': return <Dashboard user={user} customers={customers} />;
      case 'Customers': return <CustomersScreen customers={customers} user={user} />;
      case 'Today': return <TodayScreen customers={customers} />;
      case 'Payments': return <PaymentsScreen customers={customers} user={user} />;
      case 'Settings': return <SettingsScreen user={user} onLogout={logout} />;
      default: return <Dashboard user={user} customers={customers} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 antialiased overflow-x-hidden text-gray-900 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar safe-area-top pb-32">
        {renderContent()}
      </div>

      {/* Floating Action Button */}
      {(activeTab === 'Dashboard' || activeTab === 'Customers') && (
        <div className="fixed bottom-28 right-6 z-[60]">
          <RippleButton 
            className="w-16 h-16 bg-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={32} strokeWidth={3} />
          </RippleButton>
        </div>
      )}

      <AddCustomerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={user} />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-gray-100 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom,0px)+12px)] flex justify-around items-center z-50 h-[84px] safe-area-bottom">
        {[
          { id: 'Dashboard', icon: LayoutDashboard, label: 'Home' },
          { id: 'Customers', icon: Users, label: 'Customers' },
          { id: 'Today', icon: CalendarDays, label: 'Today' },
          { id: 'Payments', icon: Wallet, label: 'Payments' },
          { id: 'Settings', icon: Settings, label: 'Settings' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === item.id ? 'text-orange-600' : 'text-gray-400'}`}
          >
            <div className={`p-3 rounded-2xl transition-all duration-300 ${activeTab === item.id ? 'bg-orange-50' : 'bg-transparent'}`}>
              <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] font-black uppercase tracking-tight ${activeTab === item.id ? 'opacity-100' : 'opacity-40'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}