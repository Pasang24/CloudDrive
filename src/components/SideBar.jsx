import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";
import { FiHardDrive } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdUploadFile, MdOutlineDriveFolderUpload } from "react-icons/md";
import Menu from "./Menu";
import Modal from "./Modal";
import AddFolder from "./AddFolder";

function SideBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);

  const sideBarRef = useRef(null);
  const menuContainerRef = useRef(null);

  const sideBarOptions = [
    { name: "My Drive", icon: <FiHardDrive size={20} />, path: "/" },
    { name: "Starred", icon: <FaRegStar size={20} />, path: "/starred" },
    { name: "Bin", icon: <RiDeleteBin6Line size={20} />, path: "/bin" },
  ];

  const menuOptions = [
    {
      name: "File upload",
      id: "file-upload",
      icon: <MdUploadFile size={20} />,
      info: { type: "file" },
    },
    {
      name: "Folder upload",
      id: "folder-upload",
      icon: <MdOutlineDriveFolderUpload size={20} />,
      info: { type: "file", webkitdirectory: "" },
    },
  ];

  const handleUpload = (event) => {
    console.log(event.target.value);
    toast.success("File created successfully");
  };

  useEffect(() => {
    const hideSideBarClick = (event) => {
      if (!sideBarRef.current.contains(event.target)) {
        sideBarRef.current.classList.remove("translate-x-0");
      }
    };
    const hideSideBarScroll = () => {
      if (sideBarRef.current.classList.contains("translate-x-0"))
        sideBarRef.current.classList.remove("translate-x-0");
    };
    window.addEventListener("click", hideSideBarClick);
    window.addEventListener("scroll", hideSideBarScroll);

    return () => {
      window.removeEventListener("click", hideSideBarClick);
      window.removeEventListener("scroll", hideSideBarScroll);
    };
  }, []);
  return (
    <>
      <div
        ref={sideBarRef}
        id="sidebar"
        className="fixed flex flex-col gap-4 items-start pl-3 pr-6 py-6 h-[calc(100vh-4rem)] bg-white drop-shadow-2xl font-medium text-sm select-none -translate-x-full transition-all sm:translate-x-0 sm:w-20 sm:drop-shadow-none lg:w-fit lg:drop-shadow-none"
      >
        <div
          onClick={() => setShowMenu(true)}
          ref={menuContainerRef}
          data-newbtn
          className="relative flex items-center gap-2 bg-white border rounded-2xl p-4 shadow-[1px_1px_4px_#94a3b8] hover:bg-slate-100 transition-all sm:p-2 lg:p-4"
        >
          <FiPlus size={24} />
          <span className="sm:hidden lg:block">New</span>
          <AnimatePresence>
            {showMenu && (
              <Menu
                closeMenu={() => {
                  if (showMenu) setShowMenu(false);
                }}
                closeMenuOnClick={(event) => {
                  if (
                    !menuContainerRef.current.contains(event.target) &&
                    showMenu
                  )
                    setShowMenu(false);
                }}
                setShowAddFolder={setShowAddFolderModal}
                menuOptions={menuOptions}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col w-60">
          {sideBarOptions.map((option, index) => (
            <NavLink
              to={option.path}
              key={index}
              data-sidelink
              className={({ isActive }) =>
                `flex items-center gap-6 px-6 py-3 rounded-3xl ${
                  isActive ? "bg-[#c2e7ff]" : "hover:bg-slate-200"
                } transition-all sm:px-3 sm:w-11 lg:px-6 lg:w-full`
              }
            >
              {option.icon}
              <span className="sm:hidden lg:block">{option.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      {menuOptions.map((option, index) => (
        <input
          {...option.info}
          id={option.id}
          key={index}
          hidden
          onChange={handleUpload}
        />
      ))}

      {showAddFolderModal &&
        createPortal(
          <Modal>
            <AddFolder closeModal={() => setShowAddFolderModal(false)} />
          </Modal>,
          document.getElementById("modal")
        )}
    </>
  );
}

export default SideBar;
