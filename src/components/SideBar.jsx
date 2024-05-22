import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { FiHardDrive } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
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

  useEffect(() => {}, []);
  return (
    <>
      <div
        ref={sideBarRef}
        id="sidebar"
        className="fixed flex flex-col gap-4 items-start pl-3 pr-6 py-6 h-[calc(100vh-4rem)] bg-white drop-shadow-2xl font-medium text-sm select-none -translate-x-full transition-all"
      >
        <div
          onClick={() => setShowMenu(true)}
          ref={menuContainerRef}
          className="relative flex items-center gap-2 bg-white border rounded-2xl p-4 shadow-[1px_1px_4px_#94a3b8] hover:bg-slate-100"
        >
          <FiPlus size={24} />
          <span>New</span>
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
              />
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col w-60">
          {sideBarOptions.map((option, index) => (
            <NavLink
              to={option.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-6 px-6 py-3 rounded-3xl ${
                  isActive ? "bg-[#c2e7ff]" : "hover:bg-slate-200"
                }`
              }
            >
              {option.icon}
              <span>{option.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
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
