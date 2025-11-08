'use client';
import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('Ready to connect');

  const connect = () => {
    setStatus('Connecting...');
    // In real app, this would redirect to Whop OAuth
    setTimeout(() => setStatus('Connected! Buyers will auto-sync.'), 1500);
  };

  const test = async () => {
    setStatus('Sending test buyer...');
    const res = await fetch('/api/test', { method: 'POST' });
    const data = await res.json();
    setStatus(data.success ? 'Test buyer added to Mailchimp!' : 'Error');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Whop → Mailchimp Sync</h1>
        <p className="text-center text-gray-600">Auto-add every buyer to your email list. No copy-paste.</p>
        
        <div className="bg-gray-50 rounded-lg p-4 text-sm">
          <p className="font-medium">Status: <span className="text-blue-600">{status}</span></p>
        </div>

        <button
          onClick={connect}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Connect Whop
        </button>

        <button
          onClick={test}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Test Add Fake Buyer
        </button>

        <p className="text-xs text-center text-gray-500">
          Free to try • Delete anytime
        </p>
      </div>
    </div>
  );
}