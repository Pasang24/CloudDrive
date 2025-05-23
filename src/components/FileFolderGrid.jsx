import React from "react";
import FileFolderContainer from "./FileFolderContainer";
import FileFolderGridItem from "./FileFolderGridItem";

function FileFolderGrid({ header, data }) {
  return (
    <FileFolderContainer>
      <h4 className="text-sm font-medium">{header}</h4>
      <div className="grid gap-4 grid-cols-120 sm:grid-cols-160 xl:grid-cols-200 2xl:grid-cols-220">
        {data.map((item, index) => (
          <FileFolderGridItem item={item} key={index} />
        ))}
      </div>
    </FileFolderContainer>
  );
}

export default FileFolderGrid;
