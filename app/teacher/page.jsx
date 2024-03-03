"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch the students' understanding status from the API route
      const response = await axios.get('/api/students');
      setStudents(response.data.students);
    };

    fetchData();
  }, []);

  const totalStudents = students.length;
  const totalStudentsUnderstand = students.filter((student) => student.understand).length;
  const totalStudentsDontUnderstand = students.filter((student) => !student.understand).length;


  const handleResetClick = async () => {
    // Reset all students' understanding status
    await axios.delete('/api/students');
    // Fetch the updated students' understanding status
    const response = await axios.get('/api/students');
    setStudents(response.data.students);
  };

  return (
    <div>
      <p>Total students: {totalStudents}</p>
      <p>Total students who understand: {totalStudentsUnderstand}</p>
      <p>Total students who don't understand: {totalStudentsDontUnderstand}</p>
      <button onClick={handleResetClick}>Reset Understanding Status</button>
    </div>
  );
};

export default TeacherPage;
