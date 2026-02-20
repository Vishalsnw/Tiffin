import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useCustomers } from './hooks/useCustomers';
import Login from './Login';
import Dashboard from './components/Dashboard';
import CustomersScreen from './components/Customers';
import TodayScreen from './components/Today';
import PaymentsScreen from './components/Payments';
import SettingsScreen from './components/Settings';
import BottomNav from './components/BottomNav';

function App() {
  const { user, loading } = useAuth();
  const { customers } = useCustomers(user?.uid);

  if (loading) return null;

  if (!user) return <Login />;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <Routes>
        <Route path="/dashboard" element={<Dashboard user={user} customers={customers} />} />
        <Route path="/customers" element={<CustomersScreen user={user} customers={customers} />} />
        <Route path="/today" element={<TodayScreen customers={customers} />} />
        <Route path="/payments" element={<PaymentsScreen user={user} customers={customers} />} />
        <Route path="/settings" element={<SettingsScreen user={user} />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
