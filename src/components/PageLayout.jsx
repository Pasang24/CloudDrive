import React, { useState } from "react";
import Panel from "./Panel";
import PageHeader from "./PageHeader";
import EmptyDrive from "../assets/Illustrations/EmptyDrive";

function PageLayout({ header }) {
  const [view, setView] = useState(localStorage.getItem("view") || "grid");
  return (
    <Panel>
      <PageHeader header={header} view={view} setView={setView} />
      <div className="flex flex-1 flex-col justify-center items-center gap-2 text-center">
        <div className="w-full max-w-xl">
          <EmptyDrive />
        </div>
        <h3 className="font-medium text-2xl">No files in {header}</h3>
        <span>Add files by uploading from your device</span>
      </div>
    </Panel>
  );
}

export default PageLayout;
