import React from "react";

function Panel({ children }) {
  return (
    <div className="flex flex-col bg-white p-3 h-[calc(100vh-4rem)] rounded-xl sm:ml-20 lg:ml-[276px]">
      {children}
    </div>
  );
}

export default Panel;
