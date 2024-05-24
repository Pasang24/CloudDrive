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
      <FileFolderContainer className="mt-3 text-[#3c4043]">
        <FileFolderList
          header="Folders"
          data={{
            type: "folder",
            list: [
              { name: "Photos" },
              { name: "Labs" },
              { name: "Videos" },
              { name: "Projects" },
              { name: "Music" },
              { name: "Documents" },
              { name: "Albums" },
              { name: "Don't know what to call this one" },
              { name: "Bla Bla Bla" },
              { name: "Whatever this is" },
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
