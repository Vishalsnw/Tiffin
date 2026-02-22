import React, { useState } from 'react';
import { CalendarDays, MapPin, MessageCircle } from 'lucide-react';
import { RippleButton } from './Common';

const TodayScreen = ({ customers = [] }) => {
  const [areaFilter, setAreaFilter] = useState('All');
  const safeCustomers = customers || [];
  const activeToday = safeCustomers.filter(c => c.status !== 'Paused');
  const areas = ['All', ...new Set(activeToday.map(c => c.area).filter(Boolean))];
  const filtered = activeToday.filter(c => areaFilter === 'All' || c.area === areaFilter);

  return (
    <div className="p-4 pt-6 pb-24 min-h-screen">
      <div className="mb-8 px-2">
        <p className="text-orange-600 font-bold uppercase tracking-widest text-[10px] mb-2">Production</p>
        <h2 className="text-4xl font-black text-gray-900 leading-tight">Aaj {activeToday.length} tiffin banana hai</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mt-8">
          {areas.map(area => (
            <button key={area} onClick={() => setAreaFilter(area)} className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border ${areaFilter === area ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-500 border-gray-100'}`}>
              {area}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-[2rem] flex items-center justify-between border border-gray-100 shadow-sm">
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-lg leading-none mb-3">{item.name}</p>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${item.type === 'Veg' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {item.type}
                </span>
                {item.area && <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-wider"><MapPin size={12} /> {item.area}</span>}
              </div>
            </div>
            <RippleButton onClick={() => window.open(`https://wa.me/91${item.phone}`)} className="ml-4 w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg"><MessageCircle size={24} /></RippleButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayScreen;
