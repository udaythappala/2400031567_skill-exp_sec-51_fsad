import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div style={{
      background: "#333",
      padding: "10px",
      color: "white",
      textAlign: "center"
    }}>
      <Link to="/home" style={{color:"white", margin:"10px"}}>Home</Link>
      <Link to="/profile" style={{color:"white", margin:"10px"}}>Profile</Link>
      <button onClick={logout} style={{marginLeft:"20px"}}>Logout</button>
    </div>
  );
}

export default Navbar;