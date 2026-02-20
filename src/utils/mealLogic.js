export const calculateMealStats = (customers) => {
  const activeCustomers = customers.filter(c => c.status !== 'Paused');
  return {
    totalMeals: activeCustomers.length,
    vegCount: activeCustomers.filter(c => c.type === 'Veg').length,
    nonVegCount: activeCustomers.filter(c => c.type === 'Non-Veg').length,
    pausedCount: customers.filter(c => c.status === 'Paused').length,
    pendingPayments: customers.reduce((acc, c) => acc + (c.balance || 0), 0)
  };
};
