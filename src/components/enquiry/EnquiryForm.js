import React, { useState } from 'react';

// Reusable Input Component
const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
    />
  </div>
);

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    course: '',
    reference: '',
    setReminder: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Auto-generate Full Name
  const fullName = `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, fullName });
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
    });
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-4">New Enquiry</h2>
      <p className="text-sm text-blue-600 mb-4">Enquiry मध्ये लागणारा डेटा - भरा</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
          <InputField label="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange} />
          <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
          <InputField label="Full Name" name="fullName" value={fullName} onChange={handleChange} disabled />
          <InputField label="Contact Number" name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleChange} />
          <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
          <InputField label="Course" name="course" value={formData.course} onChange={handleChange} />
          <InputField label="Reference" name="reference" value={formData.reference} onChange={handleChange} />
          
          <div className="flex items-center mb-4">
            <input type="checkbox" name="setReminder" checked={formData.setReminder} onChange={handleChange} className="mr-2" />
            <label className="text-sm font-medium text-gray-700">Set Reminder</label>
          </div>
        </div>

        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          <button type="button" onClick={handleReset} className="bg-gray-300 px-4 py-2 rounded">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
