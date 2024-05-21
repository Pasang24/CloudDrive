import React, { useEffect, useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { FiHardDrive } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

function SideBar() {
  const sideBarRef = useRef(null);

  useEffect(() => {}, []);
  return (
    <div
      ref={sideBarRef}
      id="sidebar"
      className="fixed flex flex-col gap-4 items-start pl-3 pr-6 py-6 h-[calc(100vh-4rem)] bg-white drop-shadow-2xl font-medium text-sm -translate-x-full transition-all"
    >
      <button className="flex items-center gap-2 bg-white border rounded-2xl p-4 shadow-[1px_1px_4px_#94a3b8] hover:bg-slate-100">
        <FiPlus size={24} />
        <span>New</span>
      </button>
      <ul className="flex flex-col w-60">
        <li className="flex items-center gap-6 px-6 py-3 rounded-3xl bg-[#c2e7ff] hover:bg-slate-200">
          <FiHardDrive size={20} />
          <span>My Drive</span>
        </li>
        <li className="flex items-center gap-6 px-6 py-2 rounded-3xl hover:bg-slate-200">
          <FaRegStar size={20} />
          <span>Starred</span>
        </li>
        <li className="flex items-center gap-6 px-6 py-2 rounded-3xl hover:bg-slate-200">
          <RiDeleteBin6Line size={20} />
          <span>Bin</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
