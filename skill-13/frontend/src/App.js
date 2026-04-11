import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = "http://localhost:8080/api/students";

function App() {
    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', course: '' });

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get(API_URL);
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students", error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_URL, formData);
            setFormData({ name: '', email: '', course: '' });
            fetchStudents();
        } catch (error) {
            console.error("Error adding student", error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            fetchStudents();
        } catch (error) {
            console.error("Error deleting student", error);
        }
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Student Management System</h1>
                <p>Manage your student database with ease</p>
            </header>

            <section className="form-section">
                <form onSubmit={handleSubmit} className="student-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter full name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter email address"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Course</label>
                        <input
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            placeholder="Enter course name"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-add">Add Student</button>
                </form>
            </section>

            <section className="list-section">
                <h2>Student List</h2>
                <div className="student-grid">
                    {students.length === 0 ? (
                        <p className="no-data">No students found.</p>
                    ) : (
                        students.map(student => (
                            <div key={student.id} className="student-card">
                                <div className="student-info">
                                    <h3>{student.name}</h3>
                                    <p className="email">{student.email}</p>
                                    <p className="course">{student.course}</p>
                                </div>
                                <button
                                    onClick={() => deleteStudent(student.id)}
                                    className="btn-delete"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}

export default App;
