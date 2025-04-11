import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <>
      <div className="w-[100%] h-[100%] flex  [font-family:'Poppins',sans-serif] bg-[#242529] gap-10">
        <Sidebar />
        <section className="flex flex-col  pt-14 ">
          <Navbar />
          <div className="w-[1100px] h-[780px] bg-[#35373b]"></div>
        </section>
      </div>
    </>
  );
}

export default Settings;
