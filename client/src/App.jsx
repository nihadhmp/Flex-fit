import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Attendance from "./pages/Attendance";
import MembersList from "./pages/MembersList";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import WorkoutPlans from "./pages/WorkoutPlans";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/members" element={<MembersList />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/workoutplans" element={<WorkoutPlans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
