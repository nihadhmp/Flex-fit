import React from "react";
import flexfit from "../assets/flexfit.png";
import { MdDashboard } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="w-[280px] h-[1025px] bg-[#35373B] flex flex-col justify-between text-xl items-center py-10">
        <div className="w-[280px] flex flex-col gap-15 items-center">
          <div className="">
            <img src={flexfit} alt="" />
          </div>
          <Link to="/" className="flex">
            <MdDashboard className="text-[#f5f5f5]" />
            <p className="text-[#f5f5f5] break-words">Dashboard</p>
          </Link>
          <Link className="flex" to="/members">
            <p className="text-[#f5f5f5] break-words">Member list</p>
          </Link>
          <Link to="/workoutPlans" className="flex">
            <FaDumbbell className="bg-[#FF7200] text-[#35373B] " />

            <p className="text-[#f5f5f5] break-words">Workout plans</p>
          </Link>
          <Link to="attendance">
            <p className="text-[#f5f5f5] break-words">Attendance</p>
          </Link>
        </div>
        <div className="w-[280px] flex justify-center items-center gap-3">
          <BiLogOutCircle className="text-[#FF7200] text-2xl" />
          <p className="text-[#f5f5f5] break-words">Log out</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
