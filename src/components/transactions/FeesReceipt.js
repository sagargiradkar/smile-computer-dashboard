import React from "react";

const FeesReceipt = ({ receipt }) => {
  if (!receipt) {
    return <p className="text-red-500">No receipt data available.</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-center">Fees Receipt</h2>
      <div className="border-b pb-2">
        <p><strong>Student Name:</strong> {receipt.studentName}</p>
        <p><strong>Receipt No:</strong> {receipt.id}</p>
        <p><strong>Date:</strong> {receipt.date}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Fee Details</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Description</th>
              <th className="border p-2">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {receipt.items.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{item.description}</td>
                <td className="border p-2 text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-right font-bold">
          Total: ₹{receipt.totalAmount}
        </div>
      </div>
    </div>
  );
};

// Example usage
const sampleReceipt = {
  studentName: "Rahul Sharma",
  id: "REC-20250314",
  date: "2025-03-14",
  items: [
    { description: "Tuition Fee", amount: 5000 },
    { description: "Library Fee", amount: 1200 },
    { description: "Exam Fee", amount: 2500 },
  ],
  totalAmount: 8700,
};

export default function FeesReceiptPage() {
  return <FeesReceipt receipt={sampleReceipt} />;
}
