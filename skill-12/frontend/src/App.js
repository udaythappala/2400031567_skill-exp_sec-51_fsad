import React, { useState } from "react";
import "./App.css";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
    setSelectedStudent(null);
  };

  return (
    <div>
      <h1>Student Management System</h1>

      <div className="container">
        <AddStudent selectedStudent={selectedStudent} refresh={reload} />
        <StudentList onEdit={setSelectedStudent} refresh={refresh} />
      </div>
    </div>
  );
}

export default App;