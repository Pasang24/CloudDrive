import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#EA4335"];

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

  useEffect(() => {
    const handleSearchBar = () => {
      if (window.screen.width < 1024 && searchTerm) {
        setShowSearchBar(true);
      } else if (window.screen.width >= 1024 && showSearchBar) {
        setShowSearchBar(false);
      }
    };

    window.addEventListener("resize", handleSearchBar);

    return () => {
      window.removeEventListener("resize", handleSearchBar);
    };
  });

  return (
    <nav className="fixed top-0 w-full flex justify-between gap-6 items-center bg-white px-4 py-5 h-16 border border-b-slate-400">
      <button onClick={handleSideBarToggle} className="lg:hidden">
        <GiHamburgerMenu size={20} />
      </button>

      <div className="flex flex-1 justify-between items-center gap-4 lg:justify-start lg:gap-24">
        {!showSearchBar && (
          <>
            <Link className="flex gap-1">
              <div>
                {"Cloud".split("").map((char, index) => (
                  <span
                    key={index}
                    style={{ color: colors[index] }}
                    className={`font-semibold text-xl`}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <span className="text-[#444746] font-medium text-lg">Drive</span>
            </Link>
            <div className="flex items-start gap-6">
              <button
                onClick={() => setShowSearchBar(true)}
                className="lg:hidden"
              >
                <IoSearch size={22} />
              </button>
              <div className="hidden lg:flex items-center gap-4 bg-slate-100 rounded-3xl h-11 px-4 w-[600px]">
                <span>
                  <IoSearch size={20} />
                </span>
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="bg-transparent border-none outline-none placeholder:text-black w-full"
                  type="text"
                  placeholder="Search in Drive"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm("")}>
                    <RxCross2 size={20} />
                  </button>
                )}
              </div>
              <label className="cursor-pointer sm:hidden" htmlFor="upload">
                <LuUpload size={20} />
              </label>
              <input type="file" id="upload" hidden />
            </div>
          </>
        )}
        {showSearchBar && (
          <div className="absolute -left-[46%] translate-x-1/2 flex items-center gap-3 bg-slate-100 rounded-3xl h-11 px-3 w-[96%] sm:w-full sm:max-w-md sm:left-[44%] sm:-translate-x-1/2">
            <button onClick={() => setShowSearchBar(false)}>
              <IoArrowBackSharp size={20} />
            </button>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="bg-transparent border-none outline-none placeholder:text-black w-full"
              type="text"
              placeholder="Search in Drive"
              autoFocus
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")}>
                <RxCross2 size={20} />
              </button>
            )}
          </div>
        )}
      </div>
      <div className="hidden sm:flex items-center gap-6">
        <label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="upload"
        >
          <LuUpload size={20} />
          <span className="hidden font-medium lg:block">Upload</span>
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
