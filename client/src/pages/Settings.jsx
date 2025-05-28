import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { IoIosArrowForward } from "react-icons/io";

function Settings() {
  return (
    <>
      <div className="w-[100%] h-[100%] flex  [font-family:'Poppins',sans-serif] bg-[#242529] gap-10">
        <Sidebar />
        <section className="flex flex-col gap-27 pt-14 ">
          <Navbar />
          <div className="w-[1100px] h-[780px] bg-[#35373b] rounded-[22px] text-[#f5f5f5]">
            <h6 className="text-2xl m-[50px]">Settings</h6>
            <div className="flex flex-col gap-10 p-[50px]">
              <div className="text-xl mx-3 flex justify-between">
                <p>User Name</p>{" "}
                <div class="">
                  <IoIosArrowForward className="text-3xl text-[#FF7200]" />
                </div>
              </div>

              <div className="w-full h-full  outline outline-white -outline-offset-[0.5px]"></div>

              <div className="text-xl mx-3 flex justify-between">
                <p>Password</p>
                <div className="">
                  <IoIosArrowForward className="text-3xl text-[#FF7200]" />
                </div>
              </div>

              <div className="w-full h-full  outline outline-white -outline-offset-[0.5px]"></div>

              <div className="text-xl mx-3 flex justify-between">
                <p>Privacy</p>
                <div className="">
                  <IoIosArrowForward className="text-3xl text-[#FF7200]" />
                </div>
              </div>

              <div className="w-full h-full  outline outline-white -outline-offset-[0.5px]"></div>

              <div className="text-xl mx-3 flex justify-between">
                <p>Help</p>
                <div className="">
                  <IoIosArrowForward className="text-3xl text-[#FF7200]" />
                </div>
              </div>

              <div className="w-full h-full  outline outline-white -outline-offset-[0.5px]"></div>

              <div className="text-xl mx-3 flex justify-between">
                <p>Language</p>
                <div className="">
                  <IoIosArrowForward className="text-3xl text-[#FF7200]" />
                </div>
              </div>
              <div className="w-full h-full  outline outline-white -outline-offset-[0.5px]"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Settings;
