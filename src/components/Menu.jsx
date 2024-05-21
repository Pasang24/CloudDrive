import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdUploadFile, MdOutlineDriveFolderUpload } from "react-icons/md";

function Menu({ closeMenu }) {
  const menuRef = useRef(null);

  const menuOptions = [
    {
      name: "File upload",
      id: "file-upload",
      icon: <MdUploadFile size={20} />,
    },
    {
      name: "Folder upload",
      id: "folder-upload",
      icon: <MdOutlineDriveFolderUpload size={20} />,
    },
  ];

  const classNames = "flex items-center gap-4 px-4 py-2 hover:bg-slate-200";

  useEffect(() => {
    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, []);

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.1 }}
      ref={menuRef}
      className="absolute -top-1 -left-1 flex flex-col w-48 font-medium text-sm bg-white rounded-sm shadow-[1px_1px_12px_#94a3b8]"
    >
      <motion.button
        initial={{ top: -10, opacity: 0.5 }}
        animate={{ top: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={classNames}
      >
        <MdOutlineCreateNewFolder size={20} />
        <span>New folder</span>
      </motion.button>
      {menuOptions.map((option, index) => (
        <React.Fragment key={index}>
          <input type="file" hidden id={option.id} />
          <motion.label
            initial={{ top: -10, opacity: 0.5 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ duration: 0.1 * (index + 1) }}
            className={`${classNames} cursor-pointer`}
            htmlFor={option.id}
          >
            {option.icon}
            <span>{option.name}</span>
          </motion.label>
        </React.Fragment>
      ))}
    </motion.div>
  );
}

export default Menu;
