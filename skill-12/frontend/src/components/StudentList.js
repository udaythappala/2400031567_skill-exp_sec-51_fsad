import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList({ onEdit, refresh }) {
  const [students, setStudents] = useState([]);

  // Fetch students from backend
  const fetchStudents = () => {
    axios
      .get("http://localhost:8080/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
      });
  };

  // Load data when component loads or refresh changes
  useEffect(() => {
    fetchStudents();
  }, [refresh]);

  // Delete student
  const deleteStudent = (id) => {
    axios
      .delete(`http://localhost:8080/students/${id}`)
      .then(() => {
        fetchStudents(); // reload data after delete
      })
      .catch((err) => {
        console.error("Error deleting student:", err);
      });
  };

  return (
    <div>
      <h3>Student List</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4">No students found</td>
            </tr>
          ) : (
            students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td className="actions">
  <button onClick={() => onEdit(s)}>Edit</button>
  <button onClick={() => deleteStudent(s.id)}>Delete</button>
</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;