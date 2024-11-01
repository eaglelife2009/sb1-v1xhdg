import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CreditCard } from 'lucide-react';
import type { PaymentData } from '../types';

interface PaymentProps {
  data: PaymentData;
}

export const Payment: React.FC<PaymentProps> = ({ data }) => {
  const generatePayload = () => {
    // Thailand PromptPay QR Code format
    return `00020101021229370016A000000677010111${data.promptpayId}5802TH53037645${String(
      data.amount
    ).padStart(13, '0')}6304${data.reference}`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <CreditCard className="w-8 h-8 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">PromptPay Payment</h2>
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <QRCodeSVG value={generatePayload()} size={200} />
        </div>
        
        <div className="text-center">
          <p className="text-gray-600">Amount:</p>
          <p className="text-2xl font-bold text-indigo-600">
            ฿{data.amount.toFixed(2)}
          </p>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>Reference: {data.reference}</p>
          <p>PromptPay ID: {data.promptpayId}</p>
        </div>
      </div>
    </div>
  );
};