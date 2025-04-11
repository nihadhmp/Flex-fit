import React from "react";
import { MdPerson } from "react-icons/md";
import { GoBellFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center gap-7">
      <div className="flex w-[890px] bg-[#35373B] rounded-[24px] items-center px-1">
        {" "}
        <CiSearch className="text-[#ff7200] text-2xl bg-[#f5f5f5] size-10 rounded-full mr-0.5 " />
        <input className="w-full bg-[#35373B] rounded-full py-3 " />
      </div>
      <Link to="/notification">
        {" "}
        <GoBellFill className="bg-[#35373B] size-12 text-[#FF7200] rounded-full p-2" />
      </Link>
      <Link to="/settings">
        <IoMdSettings className="bg-[#35373B] size-12 text-[#FF7200] rounded-full p-2" />
      </Link>
      <Link to="/profile">
        <MdPerson className="bg-[#35373B] size-12 text-[#FF7200] rounded-full p-1" />
      </Link>
    </div>
  );
}

export default Navbar;
