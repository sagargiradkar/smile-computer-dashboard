import React from "react";

const Transactions = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white p-4 shadow-md rounded">
          <h2 className="text-xl font-bold">Transactions</h2>
          <div className="mt-4 p-2 bg-blue-100 rounded flex items-center">
            <input 
              type="text" 
              placeholder="Search..." 
              className="p-2 border border-gray-300 rounded flex-1"
            />
            <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded">🔍 Search</button>
          </div>
          <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Admission ID</th>
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Contact No.</th>
                <th className="border p-2">Course</th>
                <th className="border p-2">Batch</th>
                <th className="border p-2">Fee</th>
                <th className="border p-2">Due Amount</th>
                <th className="border p-2">Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">A001</td>
                <td className="border p-2">S123</td>
                <td className="border p-2">Rahul Sharma</td>
                <td className="border p-2">9876543210</td>
                <td className="border p-2">Web Development</td>
                <td className="border p-2">Batch A</td>
                <td className="border p-2">₹10,000</td>
                <td className="border p-2">₹2,000</td>
                <td className="border p-2">₹8,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Transactions;
