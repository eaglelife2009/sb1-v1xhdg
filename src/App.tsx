import React, { useEffect, useState } from 'react';
import WebApp from '@telegram-mini-apps/sdk';
import { LineChart, Wallet } from 'lucide-react';
import { Chart } from './components/Chart';
import { Payment } from './components/Payment';
import type { ChartData, PaymentData } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<'chart' | 'payment'>('chart');
  
  const sampleChartData: ChartData[] = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
  ];

  const paymentData: PaymentData = {
    amount: 1000,
    promptpayId: "0123456789",
    reference: "REF" + Date.now().toString().slice(-6)
  };

  useEffect(() => {
    // Initialize Telegram Mini App
    WebApp.ready();
    // Set the header color
    WebApp.setHeaderColor('#818cf8');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-4">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setActiveTab('chart')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'chart'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600'
            } shadow-sm transition-colors`}
          >
            <LineChart className="w-5 h-5 mr-2" />
            Charts
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'payment'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600'
            } shadow-sm transition-colors`}
          >
            <Wallet className="w-5 h-5 mr-2" />
            Payment
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'chart' ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
              <Chart data={sampleChartData} />
            </div>
          ) : (
            <Payment data={paymentData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;