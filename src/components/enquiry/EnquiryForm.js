import React, { useState } from 'react';

// Reusable Input Component
const InputField = ({ label, name, type = "text", value, onChange, disabled = false }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
        disabled ? 'bg-gray-100 text-gray-500' : 'bg-white'
      }`}
    />
  </div>
);

// Main Application Component
const EnquiryManagementSystem = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('form');
  
  // Enquiry Form State
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    course: '',
    reference: '',
    setReminder: false,
    enquiryDate: new Date().toISOString().split('T')[0]
  });

  // Enquiry List State
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

  // Form handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const fullName = `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new enquiry object
    const newEnquiry = {
      id: enquiries.length > 0 ? Math.max(...enquiries.map(e => e.id)) + 1 : 1,
      name: fullName,
      contact: formData.contactNumber,
      course: formData.course,
      enquiryDate: formData.enquiryDate,
      status: "Pending"
    };
    
    // Add to enquiries list
    setEnquiries([...enquiries, newEnquiry]);
    
    // Reset form
    handleReset();
    
    // Switch to list view
    setActiveTab('list');
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      contactNumber: '',
      address: '',
      course: '',
      reference: '',
      setReminder: false,
      enquiryDate: new Date().toISOString().split('T')[0]
    });
  };

  // List handlers
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Enquiry Management System</h1>
          <p className="text-blue-100 mt-1">Track and manage course enquiries efficiently</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="bg-gray-100 px-6 py-2 border-b border-gray-200">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('form')}
              className={`py-2 px-4 font-medium rounded-t-md transition-colors duration-200 ${
                activeTab === 'form' 
                  ? 'bg-white text-blue-600 shadow-sm border-t border-l border-r border-gray-200' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              New Enquiry
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`py-2 px-4 font-medium rounded-t-md transition-colors duration-200 ${
                activeTab === 'list' 
                  ? 'bg-white text-blue-600 shadow-sm border-t border-l border-r border-gray-200' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Enquiry List
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                {enquiries.length}
              </span>
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-6">
          {activeTab === 'form' ? (
            /* Enquiry Form */
            <div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">New Enquiry Form</h2>
                <p className="text-sm text-gray-600">Enquiry मध्ये लागणारा डेटा - भरा</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                  <InputField label="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange} />
                  <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                  <InputField label="Full Name" name="fullName" value={fullName} onChange={handleChange} disabled={true} />
                  <InputField label="Contact Number" name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleChange} />
                  <InputField label="Enquiry Date" name="enquiryDate" type="date" value={formData.enquiryDate} onChange={handleChange} />
                  
                  <div className="mb-4 col-span-1 md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Course</option>
                      <option value="MS-CIT">MS-CIT</option>
                      <option value="Klic Diploma">Klic Diploma</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <InputField label="Reference" name="reference" value={formData.reference} onChange={handleChange} />
                  
                  <div className="flex items-center mb-4 col-span-1 md:col-span-2">
                    <input 
                      type="checkbox" 
                      id="setReminder"
                      name="setReminder" 
                      checked={formData.setReminder} 
                      onChange={handleChange} 
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="setReminder" className="ml-2 text-sm font-medium text-gray-700">Set Reminder for Follow-up</label>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Submit
                  </button>
                  <button 
                    type="button" 
                    onClick={handleReset} 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md font-medium transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Reset
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Enquiry List */
            <div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Enquiry List</h2>
                <p className="text-sm text-gray-600">{filteredEnquiries.length} enquiries found</p>
              </div>
              
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
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setCourseFilter('');
                    }}
                    className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
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
                        <tr key={enquiry.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{enquiry.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.contact}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.course}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.enquiryDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              value={enquiry.status}
                              onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                              className="text-sm p-1 border rounded-md bg-white"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Converted">Converted</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => handleDelete(enquiry.id)}
                              className="text-red-600 hover:text-red-800 text-sm font-medium"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))) : (
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
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      };
                      
                      export default EnquiryManagementSystem;
                      