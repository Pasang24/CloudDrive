import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";

function NavBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSideBarToggle = (event) => {
    event.stopPropagation();
    const sideBarEl = document.getElementById("sidebar");
    const newBtnEl = document.querySelector("[data-newbtn]");
    const sideLinksEl = document.querySelectorAll("[data-sidelink]");
    if (window.screen.width < 640) {
      sideBarEl.classList.toggle("translate-x-0");
    } else {
      sideBarEl.classList.toggle("sm:w-20");
      sideBarEl.classList.toggle("sm:drop-shadow-none");
      newBtnEl.classList.toggle("sm:p-2");
      newBtnEl.querySelector("span").classList.toggle("sm:hidden");
      sideLinksEl.forEach((sideLink) => {
        sideLink.classList.toggle("sm:px-3");
        sideLink.classList.toggle("sm:w-11");
        sideLink.querySelector("span").classList.toggle("sm:hidden");
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full flex justify-between gap-6 items-center bg-white px-4 py-5 h-16 border border-b-slate-400">
      <button onClick={handleSideBarToggle} className="lg:hidden">
        <GiHamburgerMenu size={20} />
      </button>

      <div className="flex flex-1 justify-between items-center gap-4">
        {!showSearchBar && (
          <>
            <Link className="text-xl ">Cloud Drive</Link>
            <div className="flex items-start gap-6">
              <button onClick={() => setShowSearchBar(true)}>
                <IoSearch size={22} />
              </button>
              <label className="cursor-pointer sm:hidden" htmlFor="upload">
                <LuUpload size={20} />
              </label>
              <input type="file" id="upload" hidden />
            </div>
          </>
        )}
        {showSearchBar && (
          <div className="absolute -left-[46%] translate-x-1/2 flex items-center gap-3 bg-slate-100 rounded-3xl h-11 pl-3 w-[96%] sm:w-full sm:max-w-md sm:left-[44%] sm:-translate-x-1/2">
            <button onClick={() => setShowSearchBar(false)}>
              <IoArrowBackSharp size={20} />
            </button>
            <input
              className="bg-transparent border-none outline-none placeholder:text-black w-full"
              type="text"
              placeholder="Search in Drive"
              autoFocus
            />
          </div>
        )}
      </div>
      <div className="hidden sm:flex items-center gap-6">
        <label className="cursor-pointer" htmlFor="upload">
          <LuUpload size={20} />
        </label>
        <button className=" w-8 aspect-square rounded-full overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/ogw/AF2bZyjDu2FpRgbEFC-FQEKliVwErt0j0UbEVlExMpAiWF8nYw=s32-c-mo"
            alt=""
          />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
