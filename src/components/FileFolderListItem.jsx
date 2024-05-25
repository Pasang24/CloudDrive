import React from "react";
import { Link } from "react-router-dom";
import { FaFolder, FaFile } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";

function FileFolderListItem({ item }) {
  return (
    <Link className="flex gap-3 px-4 py-3 border-b border-b-slate-400 text-sm font-medium hover:bg-gray-200">
      {item?.type === "folder" && <FaFolder size={20} className="mr-2" />}
      {item?.type === "file" && <FaFile size={20} className="mr-2" />}
      <span className="w-4/5 text-ellipsis overflow-hidden text-nowrap">
        {item?.name}
      </span>
      <button className="justify-self-end rounded-full ml-auto">
        <IoMdMore size={20} />
      </button>
    </Link>
  );
}

export default FileFolderListItem;
