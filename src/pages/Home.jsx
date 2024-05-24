import React, { useState } from "react";
import { FaList } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";
import EmptyDrive from "../assets/Illustrations/EmptyDrive";

function Home() {
  const [view, setView] = useState("grid");
  return (
    <div className="flex flex-col bg-white p-3 min-h-[calc(100vh-4rem)] rounded-xl sm:ml-20 lg:ml-[276px]">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-2xl">My Drive</h3>
        <div className="flex border border-slate-400 rounded-3xl overflow-hidden">
          <button
            onClick={() => setView("grid")}
            className={`flex justify-center items-center gap-1 w-12 sm:w-16 py-2 border-r border-slate-400 ${
              view === "grid" ? "bg-[#c2e7ff]" : ""
            }`}
          >
            {view === "grid" && (
              <IoCheckmarkOutline size={18} className="hidden sm:block" />
            )}
            <FaList />
          </button>
          <button
            onClick={() => setView("list")}
            className={`flex justify-center items-center gap-1 w-12 sm:w-16 py-2 ${
              view === "list" ? "bg-[#c2e7ff]" : ""
            }`}
          >
            {view === "list" && (
              <IoCheckmarkOutline size={18} className="hidden sm:block" />
            )}
            <FiGrid />
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center gap-3 text-center">
        <div className="w-full max-w-2xl">
          <EmptyDrive />
        </div>
        <h3 className="font-medium text-2xl">No files in Drive</h3>
        <span>Add files by uploading from your device</span>
      </div>
    </div>
  );
}

export default Home;
