import React from "react";
import graph from "../assets/graph.png";
import Calendar from "react-calendar";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <div className="w-[100%] h-[100%] flex  [font-family:'Poppins',sans-serif] bg-[#242529] gap-10">
        <Sidebar />
        <section className="flex flex-col gap-30 pt-14 ">
          <Navbar />
          <div className=" flex gap-10 ">
            {" "}
            <div className="flex flex-col gap-10">
              <section className="flex flex-col gap-10 ">
                <div className="flex  gap-10 ">
                  {" "}
                  <div className="w-[284px] h-[195px] bg-[#35373B] rounded-[24px] p-3">
                    <div className="text-[#f5f5f5] break-words">
                      Total
                      <br />
                      Members
                    </div>
                  </div>
                  <div className=" w-[284px] h-[195px] bg-[#35373B] rounded-[24px] p-3">
                    <div className="text-[#f5f5f5] break-words">
                      Active
                      <br />
                      Members
                    </div>
                  </div>
                </div>
                <img src={graph} alt="" />
              </section>

              <div className="w-[600px] bg-[#35373B] rounded-[24px] p-3 ">
                <div className="text-[#f5f5f5] break-words">Workout Plan</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" text-[#f5f5f5] bg-[#35373B] rounded-[22px] p-3">
                <p>Calendar</p>
                <Calendar className={``} />
              </div>
              <div className="w-[470px] bg-[#35373B] rounded-[24px] p-3">
                {" "}
                <div className="">
                  <div className="text-[#f5f5f5] break-words">Members List</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
