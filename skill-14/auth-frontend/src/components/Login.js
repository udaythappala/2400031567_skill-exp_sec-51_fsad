import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = async () => {
    const res = await axios.post("http://localhost:8080/api/login", user);

    if (res.data) {
      localStorage.setItem("userId", res.data.id);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />

        <button onClick={login}>Login</button>

        <p>Don't have account?</p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;