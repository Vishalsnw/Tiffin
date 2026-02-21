import React, { useState } from 'react';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { Truck } from 'lucide-react';
import { RippleButton } from './components/Common';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible'
      });
    }
  };

  const onSignInSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setupRecaptcha();
    const phoneNumber = phone.startsWith('+') ? phone : `+91${phone.replace(/\D/g, '')}`;
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmation);
      setShowOtp(true);
    } catch (error) {
      console.error("Error during signInWithPhoneNumber", error);
      alert("Invalid phone number or reCAPTCHA failed.");
    } finally {
      setLoading(false);
    }
  };

  const onOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await confirmationResult.confirm(otp);
    } catch (error) {
      console.error("Error during OTP confirmation", error);
      alert("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <div id="recaptcha-container"></div>
      <div className="w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl">
        <Truck size={48} />
      </div>
      <h1 className="text-4xl font-black text-gray-900 mb-2">TiffinFlow Pro</h1>
      <p className="text-gray-500 mb-12 text-center max-w-xs font-medium">Manage your home kitchen business with ease.</p>

      {!showOtp ? (
        <form onSubmit={onSignInSubmit} className="w-full max-w-xs space-y-4">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full bg-gray-100 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <RippleButton
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white font-bold py-5 px-6 rounded-2xl shadow-xl active:scale-95 transition-transform"
          >
            {loading ? 'Sending OTP...' : 'Get Started'}
          </RippleButton>
        </form>
      ) : (
        <form onSubmit={onOtpSubmit} className="w-full max-w-xs space-y-4">
          <input
            type="number"
            placeholder="Enter OTP"
            className="w-full bg-gray-100 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all tracking-[1em] text-center"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <RippleButton
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white font-bold py-5 px-6 rounded-2xl shadow-xl active:scale-95 transition-transform"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </RippleButton>
          <button 
            type="button" 
            onClick={() => setShowOtp(false)}
            className="w-full text-gray-400 text-sm font-bold uppercase tracking-widest mt-4"
          >
            Change Number
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
