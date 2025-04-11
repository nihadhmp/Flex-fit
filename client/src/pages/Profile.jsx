import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <div className="w-[100%] h-[100%] flex  [font-family:'Poppins',sans-serif] bg-[#242529] gap-10">
        <Sidebar />
        <section className="flex flex-col gap-30 pt-14 ">
          <Navbar />
          <div className=" flex gap-10 ">
            {" "}
            <div className="flex flex-col gap-10"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
