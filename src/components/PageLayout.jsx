import React, { useState } from "react";
import Panel from "./Panel";
import PageHeader from "./PageHeader";
import FileFolderContainer from "./FileFolderContainer";
import FileFolderGrid from "./FileFolderGrid";
import FileFolderList from "./FileFolderList";

function PageLayout({ header, children }) {
  const [view, setView] = useState(localStorage.getItem("view") || "grid");

  const folders = [
    { name: "Photos", type: "folder" },
    { name: "Labs", type: "folder" },
    { name: "Videos", type: "folder" },
    { name: "Projects", type: "folder" },
    { name: "Music", type: "folder" },
    { name: "Documents", type: "folder" },
    { name: "Albums", type: "folder" },
    { name: "Don't know what to call this one", type: "folder" },
    { name: "Bla Bla Bla", type: "folder" },
    { name: "Whatever this is", type: "folder" },
  ];

  const files = [
    { name: "Untitled File", type: "file" },
    { name: "Untitled File", type: "file" },
    { name: "Untitled File", type: "file" },
    { name: "Untitled File", type: "file" },
    { name: "Untitled File", type: "file" },
    { name: "Untitled File", type: "file" },
    { name: "Untitled File", type: "file" },
    { name: "Untitled File", type: "file" },
    { name: "Untitled File", type: "file" },
  ];

  return (
    <Panel>
      <PageHeader header={header} view={view} setView={setView} />
      <FileFolderContainer className="mt-3 text-[#3c4043] h-full overflow-y-auto scrollbar-none">
        {view === "grid" && (
          <>
            <FileFolderGrid header="Folders" data={folders} />
            <FileFolderGrid header="Files" data={files} />
          </>
        )}
        {view === "list" && <FileFolderList data={[...folders, ...files]} />}
      </FileFolderContainer>
    </Panel>
  );
}

export default PageLayout;
