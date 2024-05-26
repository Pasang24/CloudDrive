import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FaFolder, FaFile } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import FileFolderContextMenu from "./FileFolderContextMenu";

function FileFolderGridItem({ item }) {
  const [contextMenu, setContextMenu] = useState({
    position: { x: 0, y: 0 },
    showMenu: false,
  });
  const fileFolderItemRef = useRef(null);
  const contextMenuRef = useRef(null);

  const handleClick = (event) => {
    // event.stopPropagation();

    const fileFolderItemAttr =
      fileFolderItemRef?.current?.getBoundingClientRect();

    let x = fileFolderItemAttr.width - 20;
    let y = fileFolderItemAttr.height;

    const isInsideX =
      event.clientX + fileFolderItemAttr.width < window?.innerWidth;
    const isInsideY =
      event.clientY + fileFolderItemAttr.height < window?.innerHeight;

    x = isInsideX ? x : x - 200;
    y = isInsideY ? y : y - 160;

    setContextMenu({
      position: { x, y },
      showMenu: true,
    });
  };

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      const fileFolderItemAttr =
        fileFolderItemRef?.current?.getBoundingClientRect();

      let x = event.clientX - fileFolderItemAttr.x;
      let y = event.clientY - fileFolderItemAttr.y;

      const isInsideX =
        event.clientX + fileFolderItemAttr.width < window?.innerWidth;
      const isInsideY =
        event.clientY + fileFolderItemAttr.height < window?.innerHeight;

      x = isInsideX ? x : x - 200;
      y = isInsideY ? y : y - 160;

      setContextMenu({
        position: { x, y },
        showMenu: true,
      });
    };

    fileFolderItemRef?.current?.addEventListener(
      "contextmenu",
      handleContextMenu
    );

    return () => {
      fileFolderItemRef?.current?.removeEventListener(
        "contextmenu",
        handleContextMenu
      );
    };
  }, []);

  return (
    <Link
      ref={fileFolderItemRef}
      className="relative flex flex-col gap-3 bg-slate-100 p-3 rounded-xl text-sm font-medium hover:bg-gray-200"
    >
      {item?.type === "folder" && <FaFolder size={40} className="mr-2" />}
      {item?.type === "file" && <FaFile size={40} className="mr-2" />}
      <div className="flex w-full">
        <span className="text-ellipsis overflow-hidden text-nowrap">
          {item?.name}
        </span>
        <button
          onClick={handleClick}
          className="justify-self-end rounded-full ml-auto"
        >
          <IoMdMore size={20} />
        </button>
      </div>
      <AnimatePresence>
        {contextMenu.showMenu && (
          <FileFolderContextMenu
            ref={contextMenuRef}
            parentRef={fileFolderItemRef}
            positionX={contextMenu.position.x}
            positionY={contextMenu.position.y}
            closeContextMenu={() =>
              setContextMenu((prev) => ({ ...prev, showMenu: false }))
            }
          />
        )}
      </AnimatePresence>
    </Link>
  );
}
export default FileFolderGridItem;
