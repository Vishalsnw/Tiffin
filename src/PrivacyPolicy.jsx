import React from 'react';
import { ChevronLeft } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24 font-sans">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 mb-6 font-medium active:scale-95 transition-transform"
        >
          <ChevronLeft size={20} />
          Back
        </button>

        <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-8">Last Updated: February 18, 2026</p>

          <div className="space-y-8 text-gray-600">
            <div className="bg-orange-50 p-6 rounded-[32px] border border-orange-100 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-sm font-bold text-orange-900 uppercase tracking-wider mb-1">Account Status</h2>
                  <p className="text-2xl font-black text-orange-600">Free Trial</p>
                </div>
                <div className="bg-orange-600 text-white px-4 py-2 rounded-2xl text-xs font-bold uppercase shadow-lg shadow-orange-200">
                  Active
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>Welcome to TiffinFlow Pro (https://tiffin-seven.vercel.app/). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at vishalsnw007@gmail.com.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p>We collect personal information that you voluntarily provide to us when registering at the App, expressing an interest in obtaining information about us or our products and services, when participating in activities on the App or otherwise contacting us.</p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li><strong>Personal Data:</strong> Name, phone number, and email address.</li>
                <li><strong>Service Data:</strong> Customer lists, meal plans, and delivery tracking information.</li>
                <li><strong>Credentials:</strong> We use Firebase for authentication, which may collect information according to their own privacy policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p>We use personal information collected via our App for a variety of business purposes described below:</p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>To facilitate account creation and logon process.</li>
                <li>To manage user accounts and provide the tiffin management service.</li>
                <li>To send administrative information to you.</li>
                <li>To fulfill and manage your orders and subscriptions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Sharing Your Information</h2>
              <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We use third-party services like Firebase (Auth/Database) and Razorpay (Payments) who process data according to their respective privacy policies.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
              <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
              <p>If you have questions or comments about this policy, you may email us at vishalsnw007@gmail.com.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
