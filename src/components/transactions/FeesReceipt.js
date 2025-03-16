import React, { useState } from 'react';

const FeesReceipt = () => {
  const [receiptData, setReceiptData] = useState({
    studentName: '',
    course: '',
    feeAmount: '',
    paymentMode: 'cash',
    receiptDate: new Date().toISOString().split('T')[0],
    remarks: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReceiptData({
      ...receiptData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Receipt data submitted:', receiptData);
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="p-4 bg-white border-b">
        <h1 className="text-xl font-semibold">Fees Receipt</h1>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <h2 className="text-lg font-medium mb-4">Generate Receipt</h2>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={receiptData.studentName}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Course
              </label>
              <input
                type="text"
                name="course"
                value={receiptData.course}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Fee Amount
              </label>
              <input
                type="number"
                name="feeAmount"
                value={receiptData.feeAmount}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Payment Mode
              </label>
              <select
                name="paymentMode"
                value={receiptData.paymentMode}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
                <option value="netbanking">Net Banking</option>
                <option value="cheque">Cheque</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Receipt Date
              </label>
              <input
                type="date"
                name="receiptDate"
                value={receiptData.receiptDate}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Remarks
              </label>
              <textarea
                name="remarks"
                value={receiptData.remarks}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
              />
            </div>
            
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Generate Receipt
              </button>
            </div>
          </div>
        </form>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Recent Receipts</h3>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Receipt No</th>
                  <th className="py-2 px-4 text-left">Student</th>
                  <th className="py-2 px-4 text-left">Amount</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">R-001</td>
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">₹5000</td>
                  <td className="py-2 px-4">2025-03-15</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">View</button>
                    <button className="text-green-500 hover:text-green-700">Print</button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">R-002</td>
                  <td className="py-2 px-4">Jane Smith</td>
                  <td className="py-2 px-4">₹3500</td>
                  <td className="py-2 px-4">2025-03-14</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">View</button>
                    <button className="text-green-500 hover:text-green-700">Print</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesReceipt;