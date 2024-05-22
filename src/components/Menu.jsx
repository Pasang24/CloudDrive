import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineCreateNewFolder, MdOutlineDevices } from "react-icons/md";

function Menu({ closeMenu, closeMenuOnClick, setShowAddFolder, menuOptions }) {
  const classNames = "flex items-center gap-4 px-4 py-3 hover:bg-slate-200";

  const openAddFolder = (event) => {
    event.stopPropagation();
    closeMenu();
    setShowAddFolder(true);
  };

  useEffect(() => {
    window.addEventListener("click", closeMenuOnClick);
    window.addEventListener("scroll", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenuOnClick);
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute -top-1 -left-1 flex flex-col w-48 font-medium text-sm bg-white rounded-sm shadow-[1px_1px_12px_#94a3b8]"
    >
      <motion.button
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -10 }}
        transition={{ duration: 0.1 }}
        onClick={openAddFolder}
        className={`${classNames} border-b-2`}
      >
        <MdOutlineCreateNewFolder size={20} />
        <span>New folder</span>
      </motion.button>
      <motion.div
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -10 }}
        transition={{ duration: 0.1 }}
        className="flex gap-2 items-center px-4 py-1 text-[13px]"
      >
        <MdOutlineDevices />
        <span>Upload from device</span>
      </motion.div>
      {menuOptions.map((option, index) => (
        <motion.label
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -10 }}
          transition={{ duration: 0.1, delay: (index + 1) * 0.05 }}
          className={`${classNames} cursor-pointer`}
          htmlFor={option.id}
          key={index}
        >
          {option.icon}
          <span>{option.name}</span>
        </motion.label>
      ))}
    </motion.div>
  );
}

export default Menu;
