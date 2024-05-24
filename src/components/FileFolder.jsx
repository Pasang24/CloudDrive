import React from "react";
import { Link } from "react-router-dom";
import { FaFolder, FaFile } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";

function FileFolder({ type, item }) {
  return (
    <Link className="flex flex-1 items-center bg-slate-100 p-3 h-12 rounded-xl text-sm font-medium">
      {type === "folder" && <FaFolder size={20} className="mr-2" />}
      {type === "file" && <FaFile size={20} className="mr-2" />}
      <span className="text-ellipsis overflow-hidden text-nowrap w-3/4">
        {item?.name}
      </span>
      <button className="justify-self-end border rounded-full ml-auto">
        <IoMdMore size={20} />
      </button>
    </Link>
  );
}

export default FileFolder;
