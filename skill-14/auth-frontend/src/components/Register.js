import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = async () => {
    await axios.post("http://localhost:8080/api/register", user);
    alert("Registered Successfully");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>

        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />

        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default Register;