import React, { useState } from 'react';
import Layout from '../layout/Layout';

const Admissions = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionId: "ADM2025001",
      name: "Rahul Sharma",
      contactNo: "9876543210",
      course: "MS-CIT",
      batch: "Morning",
      joiningDate: "2025-02-15",
      fee: 5000,
      paid: 3000,
      due: 2000
    },
    {
      id: 2,
      admissionId: "ADM2025002",
      name: "Priya Patel",
      contactNo: "8765432109",
      course: "Klic Diploma",
      batch: "Evening",
      joiningDate: "2025-02-20",
      fee: 12000,
      paid: 6000,
      due: 6000
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    course: "",
    batch: "",
    fee: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAdmission = {
      id: students.length + 1,
      admissionId: `ADM2025${String(students.length + 1).padStart(3, '0')}`,
      name: formData.name,
      contactNo: formData.contactNo,
      course: formData.course,
      batch: formData.batch,
      joiningDate: new Date().toISOString().split('T')[0],
      fee: parseFloat(formData.fee),
      paid: 0,
      due: parseFloat(formData.fee)
    };
    
    setStudents([...students, newAdmission]);
    setShowForm(false);
    setFormData({
      name: "",
      contactNo: "",
      course: "",
      batch: "",
      fee: 0
    });
  };

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Student Admissions</h1>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "New Admission"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-4 mb-6 rounded shadow">
          <h2 className="text-lg font-medium mb-4">New Admission Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Student Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Number</label>
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="MS-CIT">MS-CIT</option>
                  <option value="Klic Diploma">Klic Diploma</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Batch</label>
                <select
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select Batch</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Total Fee</label>
                <input
                  type="number"
                  name="fee"
                  value={formData.fee}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="mr-2 px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Admission
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admission ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.admissionId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.contactNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.course}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.batch}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{student.fee}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-600">₹{student.paid}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-600">₹{student.due}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                    <button className="text-green-600 hover:text-green-900 mr-2">Pay Fee</button>
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

export default Admissions;