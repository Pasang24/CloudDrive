import React from "react";
import { Link } from "react-router-dom";
import { FaFolder, FaFile } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";

function FileFolder({ type, item }) {
  return (
    <Link className="flex flex-col gap-3 bg-slate-100 p-3 rounded-xl text-sm font-medium hover:bg-gray-200">
      {type === "folder" && <FaFolder size={40} className="mr-2" />}
      {type === "file" && <FaFile size={40} className="mr-2" />}
      <div className="flex w-full">
        <span className="text-ellipsis overflow-hidden text-nowrap">
          {item?.name}
        </span>
        <button className="justify-self-end rounded-full ml-auto">
          <IoMdMore size={20} />
        </button>
      </div>
    </Link>
  );
}

export default FileFolder;
