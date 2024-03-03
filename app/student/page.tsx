"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

const StudentPage = () => {
  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    handleAccessStudentPage();
  }, []);

  const handleUnderstandClick = async () => {
    // Update the student's understanding status in the database
    await axios.put(`/api/students`, { studentId:studentId, understand: true });
  };

  const handleAccessStudentPage = async () => {
    const response = await axios.post('/api/students');
    setStudentId(response.data.id);
  };

  return (
    <div>
      {studentId && <p style={{fontSize: '20px'}}>Student ID: {studentId}</p>}
      <button style={buttonStyle} onClick={handleUnderstandClick}>I understand! 😲</button>
    </div>
  );
};

export default StudentPage;