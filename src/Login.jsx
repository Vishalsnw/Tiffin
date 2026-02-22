import React, { useState } from 'react';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { Truck } from 'lucide-react';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        'recaptcha-container',
        {
          size: 'invisible',
        }
      );
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setupRecaptcha();

      const phoneNumber = phone.startsWith('+')
        ? phone
        : `+91${phone.replace(/\D/g, '')}`;

      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        window.recaptchaVerifier
      );

      setConfirmationResult(confirmation);
      setShowOtp(true);
    } catch (error) {
      console.error("OTP error:", error);
      alert("Error sending OTP");
    }

    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!confirmationResult) return;

    setLoading(true);

    try {
      await confirmationResult.confirm(otp);
    } catch (error) {
      alert("Invalid OTP");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      {/* Invisible recaptcha container */}
      <div id="recaptcha-container"></div>

      <div className="w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl">
        <Truck size={48} />
      </div>

      <h1 className="text-4xl font-black text-gray-900 mb-2">
        TiffinFlow
      </h1>

      {!showOtp ? (
        <form onSubmit={handleSendOtp} className="w-full max-w-xs space-y-4">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full bg-gray-100 rounded-2xl py-5 px-6 font-bold text-gray-900"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white font-bold py-5 px-6 rounded-2xl"
          >
            {loading ? 'Sending OTP...' : 'Get OTP'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="w-full max-w-xs space-y-4">
          <input
            type="number"
            placeholder="Enter OTP"
            className="w-full bg-gray-100 rounded-2xl py-5 px-6 font-bold text-gray-900 text-center"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white font-bold py-5 px-6 rounded-2xl"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
