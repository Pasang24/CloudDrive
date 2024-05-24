import React from "react";

function FileFolderContainer({ className, children }) {
  return <div className={`flex flex-col gap-4 ${className}`}>{children}</div>;
}

export default FileFolderContainer;
