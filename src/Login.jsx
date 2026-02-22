import React, { useState, useEffect } from 'react';
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
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          'recaptcha-container',
          {
            size: 'invisible',
          }
        );
        setRecaptchaReady(true);
      } catch (error) {
        console.error("Recaptcha initialization failed:", error);
      }
    } else {
      setRecaptchaReady(true);
    }

    return () => {
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = null;
        } catch (e) {}
      }
    };
  }, []);

  const onSignInSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaReady) {
      alert("Please wait...");
      return;
    }

    setLoading(true);

    const phoneNumber = phone.startsWith('+')
      ? phone
      : `+91${phone.replace(/\D/g, '')}`;

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        window.recaptchaVerifier
      );

      setConfirmationResult(confirmation);
      setShowOtp(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onOtpSubmit = async (e) => {
    e.preventDefault();
    if (!confirmationResult) return;

    setLoading(true);

    try {
      await confirmationResult.confirm(otp);
    } catch (error) {
      console.error("OTP verification failed:", error);
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

      <h1 className="text-4xl font-black text-gray-900 mb-2">
        TiffinFlow
      </h1>

      <p className="text-gray-500 mb-12 text-center max-w-xs font-medium">
        Manage your home kitchen business with ease.
      </p>

      {!showOtp ? (
        <form onSubmit={onSignInSubmit} className="w-full max-w-xs space-y-4">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full bg-gray-100 rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <RippleButton
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white font-bold py-5 px-6 rounded-2xl"
          >
            {loading ? 'Sending OTP...' : 'Get Started'}
          </RippleButton>
        </form>
      ) : (
        <form onSubmit={onOtpSubmit} className="w-full max-w-xs space-y-4">
          <input
            type="number"
            placeholder="Enter OTP"
            className="w-full bg-gray-100 rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 text-center"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <RippleButton
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white font-bold py-5 px-6 rounded-2xl"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </RippleButton>

          <button
            type="button"
            onClick={() => setShowOtp(false)}
            className="w-full text-gray-400 text-sm font-bold mt-4"
          >
            Change Number
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
