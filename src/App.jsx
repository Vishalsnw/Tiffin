import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useCustomers } from './hooks/useCustomers';

import Dashboard from './components/Dashboard';
import BottomNav from './components/BottomNav';

function App() {
  const { user, loading: authLoading } = useAuth();

  if (authLoading) {
    return (
      <div style={{ padding: 40 }}>
        AUTH LOADING...
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ padding: 40 }}>
        LOGIN SHOULD SHOW HERE
      </div>
    );
  }

  const { customers } = useCustomers(user.uid);
  const safeCustomers = Array.isArray(customers) ? customers : [];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard user={user} customers={safeCustomers} />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
