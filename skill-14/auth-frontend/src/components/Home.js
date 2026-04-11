import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (!user) navigate("/");
  }, [navigate]); // ✅ FIXED HERE

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", color: "white", marginTop: "100px" }}>
        Welcome to Home 🚀
      </h1>
    </div>
  );
}

export default Home;