import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const id = localStorage.getItem("userId");

    axios.get(`http://localhost:8080/api/user/${id}`)
      .then(res => setUser(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <h2>Profile</h2>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;