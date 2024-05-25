import React from "react";
import FileFolderListItem from "./FileFolderListItem";

function FileFolderList({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <FileFolderListItem item={item} key={index} />
      ))}
    </div>
  );
}

export default FileFolderList;
