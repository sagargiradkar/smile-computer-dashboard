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

  const [searchTerm, setSearchTerm] = useState('');
  const [courseFilter, setCourseFilter] = useState('');

  const handleStatusChange = (id, newStatus) => {
    setEnquiries(enquiries.map(enquiry => 
      enquiry.id === id ? {...enquiry, status: newStatus} : enquiry
    ));
  };

  const handleDelete = (id) => {
    setEnquiries(enquiries.filter(enquiry => enquiry.id !== id));
  };

  // Filter enquiries based on search term and course filter
  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesSearch = !searchTerm || 
      enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.contact.includes(searchTerm);
    
    const matchesCourse = !courseFilter || enquiry.course === courseFilter;
    
    return matchesSearch && matchesCourse;
  });

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-600 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">Enquiry List</h2>
      </div>
      
      <div className="p-6">
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <input 
              type="text" 
              placeholder="Search by name or contact..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-48">
            <select 
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Courses</option>
              <option value="MS-CIT">MS-CIT</option>
              <option value="Klic Diploma">Klic Diploma</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enquiry Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEnquiries.length > 0 ? (
                filteredEnquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{enquiry.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enquiry.contact}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enquiry.course}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enquiry.enquiryDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select 
                        value={enquiry.status}
                        onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                        className={`p-1 rounded-full text-sm font-medium px-3 ${
                          enquiry.status === 'Converted' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : enquiry.status === 'Pending' 
                              ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                              : 'bg-red-100 text-red-800 border border-red-200'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Converted">Converted</option>
                        <option value="Lost">Lost</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4 font-medium">Edit</button>
                      <button 
                        className="text-red-600 hover:text-red-900 font-medium"
                        onClick={() => handleDelete(enquiry.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                    No enquiries found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnquiryList;