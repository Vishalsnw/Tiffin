import React from 'react';
import { IndianRupee, MessageCircle, Wallet } from 'lucide-react';
import { RippleButton } from './Common';
import { updateDoc, doc, db } from '../firebase';

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
    const msg = `Namaste ${customer.name}, TiffinFlow ki taraf se reminder. Aapka ₹${customer.balance} pending hai. Dhanyavad!`;
    window.open(`https://wa.me/91${customer.phone}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="p-4 pt-6 pb-24 min-h-screen">
      <h2 className="text-3xl font-black mb-8 px-2 text-gray-900 tracking-tight">Payments</h2>
      <div className="bg-red-600 p-10 rounded-[2.5rem] shadow-2xl text-white mb-10 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-2">Total Pending</p>
          <p className="text-6xl font-black">₹{totalPending}</p>
        </div>
        <IndianRupee size={120} className="absolute -right-8 -bottom-8 opacity-10" />
      </div>
      <div className="space-y-4">
        {pendingCustomers.map((c) => (
          <div key={c.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-gray-900 text-xl leading-tight mb-1">{c.name}</p>
                <p className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-100 text-red-600">Pending: ₹{c.balance}</p>
              </div>
              <RippleButton onClick={() => sendReminder(c)} className="p-4 bg-green-500 text-white rounded-2xl shadow-lg"><MessageCircle size={22} /></RippleButton>
            </div>
            <RippleButton onClick={() => handleMarkAsPaid(c.id)} className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black shadow-xl">Mark as Paid</RippleButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentsScreen;
