import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";

function NavBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchBarShow = () => {
    setShowSearchBar(true);
  };
  return (
    <nav className="relative flex justify-between gap-6 items-center px-4 py-5 h-16">
      <button>
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
          <div className="absolute -left-[46%] translate-x-1/2 flex items-center gap-2 bg-[#444746] rounded-3xl h-11 pl-3 w-[96%] sm:w-full sm:max-w-md sm:left-[44%] sm:-translate-x-1/2">
            <button onClick={() => setShowSearchBar(false)}>
              <IoArrowBackSharp size={20} />
            </button>
            <input
              className="bg-transparent border-none outline-none text-white placeholder:text-white w-full"
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
