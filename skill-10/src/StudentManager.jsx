import React,{useState} from "react";
import "./StudentManager.css";
function StudentManager(){
const initialStudents=[
{id:2400030025,name:"Hari",course:"CSE"},
{id:2400030158,name:"Harshith",course:"CSE"},
{id:2400030160,name:"Jayadeep",course:"CSE"},
{id:2400030150,name:"Surya",course:"CSE"}
];
const [students,setStudents]=useState(initialStudents);
const [newStudent,setNewStudent]=useState({
id:"",
name:"",
course:""
});
const handleChange=(e)=>{
const {name,value}=e.target;
setNewStudent({...newStudent,[name]:value});
};
const addStudent=()=>{
if(!newStudent.id||!newStudent.name||!newStudent.course){
return;
}
setStudents([...students,newStudent]);
setNewStudent({id:"",name:"",course:""});
};
const deleteStudent=(id)=>{
const updated=students.filter((student)=>student.id!==id);
setStudents(updated);
};
return(
<div className="container">
<h2>Student Manager</h2>
<div className="form">
<input
type="text"
name="id"
value={newStudent.id}
onChange={handleChange}
placeholder="Student ID"
/>
<input
type="text"
name="name"
value={newStudent.name}
onChange={handleChange}
placeholder="Student Name"
/>
<input
type="text"
name="course"
value={newStudent.course}
onChange={handleChange}
placeholder="Course"
/>
<button type="button" onClick={addStudent}>Add Student</button>
</div>

{students.length===0?(
<p className="empty">No students available.</p>
):(
<table>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Course</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{students.map((student)=> (
<tr key={student.id}>
<td>{student.id}</td>
<td>{student.name}</td>
<td>{student.course}</td>
<td>
<button
type="button"
className="delete"
onClick={()=>deleteStudent(student.id)}
>
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>
)}
  </div>
  );
}export default StudentManager;