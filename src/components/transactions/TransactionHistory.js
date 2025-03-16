import React, { useState } from 'react';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2025-03-15', studentName: 'John Doe', amount: 5000, type: 'Fee Payment' },
    { id: 2, date: '2025-03-14', studentName: 'Jane Smith', amount: 3500, type: 'Fee Payment' },
    { id: 3, date: '2025-03-12', studentName: 'Mike Johnson', amount: 2000, type: 'Fee Payment' }
  ]);

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="p-4 bg-white border-b">
        <h1 className="text-xl font-semibold">Transaction History</h1>
      </div>
      
      <div className="p-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Student Name</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{transaction.id}</td>
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.studentName}</td>
                  <td className="py-2 px-4">₹{transaction.amount}</td>
                  <td className="py-2 px-4">{transaction.type}</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">View</button>
                    <button className="text-green-500 hover:text-green-700">Print</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;