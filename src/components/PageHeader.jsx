import React from "react";
import { FaList } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";

function PageHeader({ header, view, setView }) {
  const handleClick = (givenView) => {
    localStorage.setItem("view", givenView);
    setView(givenView);
  };

  const buttonOptions = ["grid", "list"];
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-medium text-2xl">{header}</h3>
      <div className="flex border border-slate-400 rounded-3xl overflow-hidden">
        {buttonOptions.map((option, index) => (
          <button
            onClick={() => handleClick(option)}
            key={index}
            className={`flex justify-center items-center gap-1 w-12 sm:w-16 py-2 ${
              index === 0 ? "border-r" : ""
            } border-slate-400 ${view === option ? "bg-[#c2e7ff]" : ""}`}
          >
            {view === option && (
              <IoCheckmarkOutline size={18} className="hidden sm:block" />
            )}
            {option === "grid" && <FiGrid />}
            {option === "list" && <FaList />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PageHeader;
