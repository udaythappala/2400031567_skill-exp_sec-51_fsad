import React, { useState } from "react";
import LocalUserList from "./LocalUserList";
import UserList from "./UserList";
import FakePostList from "./FakePostList";
import "../App.css";

function Dashboard() {
  const [page, setPage] = useState("");

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="button-group">
        <button className="local-btn" onClick={() => setPage("local")}>
          Local Users
        </button>

        <button className="api-btn" onClick={() => setPage("api")}>
          Users API
        </button>

        <button className="post-btn" onClick={() => setPage("posts")}>
          Posts
        </button>
      </div>

      <div className="content">
        {page === "local" && <LocalUserList />}
        {page === "api" && <UserList />}
        {page === "posts" && <FakePostList />}
      </div>
    </div>
  );
}

export default Dashboard;