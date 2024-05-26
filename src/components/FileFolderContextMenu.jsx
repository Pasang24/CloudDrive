import React, { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const FileFolderMenu = forwardRef(function (
  { positionX, positionY, parentRef, closeContextMenu },
  ref
) {
  useEffect(() => {
    const handleContextMenuClose = (event) => {
      if (!parentRef?.current?.contains(event.target)) {
        closeContextMenu();
      } else {
        console.log("Inside");
      }
    };
    window.addEventListener("click", handleContextMenuClose);
    window.addEventListener("contextmenu", handleContextMenuClose);

    return () => {
      window.removeEventListener("click", handleContextMenuClose);
      window.removeEventListener("contextmenu", handleContextMenuClose);
    };
  }, []);

  return (
    <motion.div
      key={positionX + positionY + "/"}
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute z-10 flex flex-col w-48 font-medium text-sm bg-white rounded-md shadow-[1px_1px_12px_#94a3b8] overflow-hidden"
      ref={ref}
      style={{ top: positionY + 2 + "px", left: positionX + 2 + "px" }}
    >
      <motion.button
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -10 }}
        transition={{ duration: 0.1 }}
        className={"flex gap-2 p-3 border-b-2 hover:bg-slate-200"}
      >
        <LuDownload size={20} />
        <span>Download</span>
      </motion.button>
      <motion.button
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -10 }}
        transition={{ duration: 0.1 }}
        className={"flex gap-2 p-3 border-b-2 hover:bg-slate-200"}
      >
        <MdDriveFileRenameOutline size={20} />
        <span>Rename</span>
      </motion.button>
      <motion.button
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -10 }}
        transition={{ duration: 0.1 }}
        className={"flex gap-2 p-3 border-b-2 hover:bg-slate-200"}
      >
        <RiDeleteBin6Line size={20} />
        <span>Move to bin</span>
      </motion.button>
    </motion.div>
  );
});

export default FileFolderMenu;
