import React, { useState } from "react";
import Panel from "./Panel";
import PageHeader from "./PageHeader";
import FileFolderContainer from "./FileFolderContainer";
import FileFolderList from "./FileFolderList";

function PageLayout({ header, children }) {
  const [view, setView] = useState(localStorage.getItem("view") || "grid");
  return (
    <Panel>
      <PageHeader header={header} view={view} setView={setView} />
      <FileFolderContainer className="mt-3">
        <FileFolderList
          header="Folders"
          data={{
            type: "folder",
            list: [
              { name: "Untitled Folder" },
              { name: "Untitled Folder" },
              { name: "Untitled Folder" },
              { name: "Untitled Folder" },
              { name: "Untitled Folder" },
            ],
          }}
        />
        <FileFolderList
          header="Files"
          data={{
            type: "file",
            list: [
              { name: "Untitled File" },
              { name: "Untitled File" },
              { name: "Untitled File" },
              { name: "Untitled File" },
            ],
          }}
        />
      </FileFolderContainer>
    </Panel>
  );
}

export default PageLayout;
