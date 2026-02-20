import { useState, useEffect } from 'react';
import { db, collection, onSnapshot, query, orderBy } from '../firebase';

export const useCustomers = (userId) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    const q = query(collection(db, `users/${userId}/customers`), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setCustomers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
    return unsubscribe;
  }, [userId]);

  return { customers, loading };
};
