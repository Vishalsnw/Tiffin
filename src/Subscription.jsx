import React, { useState } from 'react';
import { CreditCard, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Subscription = ({ user, onSubscriptionComplete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    setLoading(true);
    setError('');

    try {
      // Log for debugging
      console.log('Initializing Razorpay with Key:', import.meta.env.VITE_RAZORPAY_KEY_ID);
      
      if (!window.Razorpay) {
        console.error('Razorpay SDK not found on window object');
        setError('Razorpay SDK not loaded. Please check your internet connection or if an ad-blocker is blocking the script.');
        return;
      }

      const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
      if (!keyId || keyId === 'undefined' || keyId.includes('YOUR_')) {
        console.error('Razorpay Key ID is missing or invalid:', keyId);
        setError('Payment configuration error: Invalid Razorpay Key ID.');
        return;
      }

      const options = {
        key: keyId,
        amount: 19900, // Amount in paise (199 INR)
        currency: 'INR',
        name: 'TiffinFlow Pro',
        description: 'Monthly Subscription (15-day free trial)',
        image: 'https://cdn-icons-png.flaticon.com/512/706/706164.png',
        handler: function (response) {
          // Payment successful
          console.log('Payment Success:', response);
          onSubscriptionComplete();
        },
        prefill: {
          name: user?.displayName || '',
          email: user?.email || '',
          contact: user?.phoneNumber || '',
        },
        notes: {
          address: 'TiffinFlow Pro Office',
        },
        theme: {
          color: '#2563eb',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        setError(response.error.description);
      });
      rzp.open();
    } catch (err) {
      console.error('Razorpay Initialization Error:', err);
      setError(err.message || 'Could not initialize payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[40px] p-8 shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-3xl mx-auto mb-6 flex items-center justify-center text-blue-600">
            <CreditCard size={40} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">Upgrade to Pro</h2>
          <p className="text-gray-500 font-medium">Start your 15-day free trial today</p>
        </div>

        <div className="bg-blue-50 rounded-3xl p-6 mb-8 border border-blue-100">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-blue-900">Pro Plan</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Active Trial</span>
          </div>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-black text-blue-900">₹199</span>
            <span className="text-blue-600 font-bold">/month</span>
          </div>
          <ul className="space-y-3">
            {[
              '15 Days Free Trial',
              'Unlimited Customers',
              'Daily Meal Planner',
              'Payment Tracking',
              'Delivery Management'
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-bold text-blue-800">
                <CheckCircle2 size={18} className="text-blue-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm font-bold border border-red-100 flex items-center gap-3">
            <AlertCircle size={20} />
            {error}
          </div>
        )}

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" /> : null}
          {loading ? 'Processing...' : 'Start 15-Day Free Trial'}
        </button>
        
        <p className="text-center text-xs text-gray-400 mt-6 font-medium">
          You won't be charged until your trial ends. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default Subscription;