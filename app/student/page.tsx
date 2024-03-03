"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

const StudentPage = () => {
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    handleAccessStudentPage();
  }, []);

  const handleUnderstandClick = async () => {
    // Update the student's understanding status in the database
    await axios.post(`/api/students`, { studentId:studentId, understand: true });
  };

  const handleAccessStudentPage = async () => {
    const response = await axios.post('/api/students');
    setStudentId(response.data.id);
  };

  return (
    <div>
      {studentId && <p>Student ID: {studentId}</p>}
      <button onClick={handleUnderstandClick}>I understand</button>
    </div>
  );
};

export default StudentPage;