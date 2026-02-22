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
  const { user, loading: authLoading } = useAuth();

  // Only call useCustomers when user exists
  const { customers, loading: customersLoading } =
    user ? useCustomers(user.uid) : { customers: [], loading: false };

  // Auth Loading
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return <Login />;
  }

  // Customers loading
  if (customersLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  const safeCustomers = Array.isArray(customers) ? customers : [];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <Routes>
        <Route path="/dashboard" element={<Dashboard user={user} customers={safeCustomers} />} />
        <Route path="/customers" element={<CustomersScreen user={user} customers={safeCustomers} />} />
        <Route path="/today" element={<TodayScreen customers={safeCustomers} />} />
        <Route path="/payments" element={<PaymentsScreen user={user} customers={safeCustomers} />} />
        <Route path="/settings" element={<SettingsScreen user={user} />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>

      <BottomNav />
    </div>
  );
}

export default App;
