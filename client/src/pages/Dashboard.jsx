import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      Dashboard
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Dashboard;
