import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png'; // Import logo at the top
import html2canvas from 'html2canvas'; // We'll need this library
import jsPDF from 'jspdf'; // And this one

const Certificates = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const certificateRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStudents([
        { id: 1, name: 'John Doe', course: 'Web Development', completionDate: '2025-02-10', certificateIssued: true, certificateId: 'WD2025001' },
        { id: 2, name: 'Jane Smith', course: 'Graphic Design', completionDate: '2025-03-01', certificateIssued: true, certificateId: 'GD2025002' },
        { id: 3, name: 'Mike Johnson', course: 'Python Programming', completionDate: '2025-03-05', certificateIssued: false, certificateId: null },
        { id: 4, name: 'Sarah Williams', course: 'Digital Marketing', completionDate: '2025-02-20', certificateIssued: true, certificateId: 'DM2025003' },
        { id: 5, name: 'Robert Brown', course: 'Data Science', completionDate: '2025-03-12', certificateIssued: false, certificateId: null },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (student.certificateId && student.certificateId.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleIssueCertificate = (studentId) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, certificateIssued: true, certificateId: `${student.course.substring(0, 2).toUpperCase()}${new Date().getFullYear()}00${studentId}` } 
        : student
    ));
  };

  const handleViewCertificate = (student) => {
    setSelectedCertificate(student);
  };

  const handlePrintCertificate = () => {
    // Open print dialog
    window.print();
  };

  const handleSaveAsPDF = () => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF('landscape', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 0;
        
        pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save(`${selectedCertificate.name}-Certificate.pdf`);
      });
    }
    setDropdownOpen(false);
  };

  const handleSaveAsImage = (type) => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${selectedCertificate.name}-Certificate.${type}`;
        
        if (type === 'png') {
          link.href = canvas.toDataURL('image/png');
        } else if (type === 'jpeg') {
          link.href = canvas.toDataURL('image/jpeg', 1.0);
        }
        
        link.click();
      });
    }
    setDropdownOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Student Certificates Management</h1>
      
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by student name, course or certificate ID..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {loading ? (
        <div className="text-center p-8">Loading certificates data...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border text-left">Student Name</th>
                <th className="py-3 px-4 border text-left">Course</th>
                <th className="py-3 px-4 border text-left">Completion Date</th>
                <th className="py-3 px-4 border text-left">Certificate Status</th>
                <th className="py-3 px-4 border text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-4 px-4 border text-center">No students found</td>
                </tr>
              ) : (
                filteredStudents.map(student => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border">{student.name}</td>
                    <td className="py-3 px-4 border">{student.course}</td>
                    <td className="py-3 px-4 border">{student.completionDate}</td>
                    <td className="py-3 px-4 border">
                      {student.certificateIssued ? (
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Issued ({student.certificateId})
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                          Not Issued
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 border">
                      {student.certificateIssued ? (
                        <button 
                          onClick={() => handleViewCertificate(student)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          View Certificate
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleIssueCertificate(student.id)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                          Issue Certificate
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-full overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Certificate Preview</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 certificate-content">
              <div ref={certificateRef} className="border-8 border-double border-gray-300 p-8 text-center bg-gray-50">
                {/* Enhanced Logo Presentation */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-full shadow-lg">
                    <img 
                      src={logo} 
                      alt="Smile Computer Center Logo" 
                      className="h-24 w-24 object-contain rounded-full" 
                    />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold mb-2 text-blue-800">Smile Computer Center</h1>
                <h2 className="text-xl mb-8 text-gray-600">Certificate of Completion</h2>
                
                <div className="my-8 py-4 border-t border-b border-gray-200">
                  <p className="text-lg mb-4">This is to certify that</p>
                  <p className="text-3xl font-semibold mb-4 text-blue-700">{selectedCertificate.name}</p>
                  <p className="text-lg mb-4">has successfully completed the course</p>
                  <p className="text-2xl font-semibold mb-4">{selectedCertificate.course}</p>
                </div>
                
                <p className="text-md mb-2">Completed on: {selectedCertificate.completionDate}</p>
                <p className="text-md mb-6">Certificate ID: <span className="font-semibold">{selectedCertificate.certificateId}</span></p>
                
                <div className="flex justify-between mt-16">
                  <div className="text-center">
                    <div className="border-t border-gray-400 pt-2 w-40 mx-auto">
                      <p className="font-semibold">Director</p>
                      <p className="text-sm text-gray-600">Smile Computer Center</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="border-t border-gray-400 pt-2 w-40 mx-auto">
                      <p className="font-semibold">Instructor</p>
                      <p className="text-sm text-gray-600">Course Faculty</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-xs text-gray-500">
                  <p>This certificate is issued by Smile Computer Center, a recognized institution for computer education.</p>
                  <p>Verify this certificate at www.smilecomputer.edu/verify using the certificate ID.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t flex flex-wrap justify-end gap-2">
              {/* Fixed Dropdown Menu */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={toggleDropdown}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-flex items-center"
                >
                  <span className="mr-1">Save As</span>
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10 border">
                    <button 
                      onClick={handleSaveAsPDF}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      PDF
                    </button>
                    <button 
                      onClick={() => handleSaveAsImage('png')}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      PNG
                    </button>
                    <button 
                      onClick={() => handleSaveAsImage('jpeg')}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      JPEG
                    </button>
                  </div>
                )}
              </div>
              
              <button 
                onClick={handlePrintCertificate} 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Print Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;