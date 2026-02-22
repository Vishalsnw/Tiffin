import React, { useState } from 'react';
import { Search, Phone, MessageCircle, MapPin, Trash2 } from 'lucide-react';
import { RippleButton, BottomSheet } from './Common';
import { updateDoc, doc, db, deleteDoc } from '../firebase';

const CustomersScreen = ({ customers = [], user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);

  const safeCustomers = customers || [];
  const areas = ['All', ...new Set(safeCustomers.map(c => c.area).filter(Boolean))];
  const statuses = ['All', 'Active', 'Paused', 'Expired'];
  
  const filteredCustomers = safeCustomers.filter(c => 
    (c.name || '').toLowerCase().includes(searchTerm.toLowerCase()) &&
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
    if (window.confirm("Are you sure?")) {
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
              placeholder="Search..." 
              className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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

      <div className="space-y-4">
        {filteredCustomers.map((c) => (
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
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${c.type === 'Veg' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                  {c.type}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-black text-gray-900">₹{c.balance || 0}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Balance</p>
            </div>
          </RippleButton>
        ))}
      </div>

      <BottomSheet isOpen={isEditSheetOpen} onClose={() => setIsEditSheetOpen(false)} title={selectedCustomer?.name}>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <RippleButton 
              onClick={() => handleUpdateStatus(selectedCustomer.id, selectedCustomer.status === 'Paused' ? 'Active' : 'Paused')}
              className={`py-5 rounded-2xl font-black ${selectedCustomer?.status === 'Paused' ? 'bg-green-600 text-white' : 'bg-amber-100 text-amber-600'}`}
            >
              {selectedCustomer?.status === 'Paused' ? 'Resume' : 'Pause'}
            </RippleButton>
            <RippleButton 
              onClick={() => window.open(`tel:${selectedCustomer?.phone}`)}
              className="bg-blue-600 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-2"
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

export default CustomersScreen;
