export const calculateMealStats = (customers = []) => {
  const safeCustomers = Array.isArray(customers) ? customers : [];
  const activeCustomers = safeCustomers.filter(c => c && c.status !== 'Paused');
  return {
    totalMeals: activeCustomers.length,
    vegCount: activeCustomers.filter(c => c && c.type === 'Veg').length,
    nonVegCount: activeCustomers.filter(c => c && c.type === 'Non-Veg').length,
    pausedCount: safeCustomers.filter(c => c && c.status === 'Paused').length,
    pendingPayments: safeCustomers.reduce((acc, c) => acc + (c?.balance || 0), 0)
  };
};
