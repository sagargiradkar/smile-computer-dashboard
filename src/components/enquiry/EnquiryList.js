import React, { useState } from 'react';

const EnquiryList = () => {
  // Mock data for the enquiry list
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      contact: "9876543210",
      course: "MS-CIT",
      enquiryDate: "2025-03-10",
      status: "Pending"
    },
    {
      id: 2,
      name: "Priya Patel",
      contact: "8765432109",
      course: "Klic Diploma",
      enquiryDate: "2025-03-12",
      status: "Converted"  
    },
    {
      id: 3,
      name: "Amit Kumar",
      contact: "7654321098",
      course: "MS-CIT",
      enquiryDate: "2025-03-14",
      status: "Pending"
    }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setEnquiries(enquiries.map(enquiry => 
      enquiry.id === id ? {...enquiry, status: newStatus} : enquiry
    ));
  };

  const handleDelete = (id) => {
    setEnquiries(enquiries.filter(enquiry => enquiry.id !== id));
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <h2 className="text-lg font-semibold p-4 border-b">Enquiry List</h2>
      
      <div className="p-4">
        <div className="mb-4 flex">
          <input 
            type="text" 
            placeholder="Search by name or contact..." 
            className="p-2 border rounded flex-grow mr-2"
          />
          <select className="p-2 border rounded w-40">
            <option value="">All Courses</option>
            <option value="MS-CIT">MS-CIT</option>
            <option value="Klic Diploma">Klic Diploma</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enquiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{enquiry.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{enquiry.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{enquiry.course}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{enquiry.enquiryDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select 
                      value={enquiry.status}
                      onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                      className={`p-1 rounded text-sm ${
                        enquiry.status === 'Converted' 
                          ? 'bg-green-100 text-green-800' 
                          : enquiry.status === 'Pending' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Converted">Converted</option>
                      <option value="Lost">Lost</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(enquiry.id)}
                    >
                      Delete
                    </button>
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

export default EnquiryList;