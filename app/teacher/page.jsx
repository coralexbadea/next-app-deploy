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
    await axios.put('/api/students', {studentId: 'all', understand: false});
    // Fetch the updated students' understanding status
    const response = await axios.get('/api/students');
    setStudents(response.data.students);
  };

  
  const handleDeleteStudents = async () => {
    await axios.delete('/api/students');
    // Fetch the updated students' understanding status
    const response = await axios.get('/api/students');
    setStudents(response.data.students);
  };

  return (
    <div>
      <p>Total students: {totalStudents}</p>
      <p>Total students who understand: {totalStudentsUnderstand}</p>
      <p>Total students who do not understand: {totalStudentsDontUnderstand}</p>
      <button onClick={handleResetClick}>Reset Understanding Status</button><br /> <br /><br />
      <button style={{backgroundColor: 'red'}} onClick={handleDeleteStudents}>Delete Students</button><br />
    </div>
  );
};

export default TeacherPage;
