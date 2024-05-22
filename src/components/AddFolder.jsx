import React, { useEffect, useRef, useState } from "react";

function AddFolder({ closeModal }) {
  const [folderName, setFolderName] = useState("Untitled Folder");

  const inputRef = useRef(null);

  const handleCreateFolder = (event) => {
    event.preventDefault();
    console.log("Folder Created.");
    closeModal();
  };

  useEffect(() => {
    inputRef.current.select();
  }, []);

  return (
    <form
      className="flex flex-col gap-8 bg-white rounded-lg p-5 w-11/12 max-w-80 shadow-[1px_1px_4px_#94a3b8]"
      onSubmit={handleCreateFolder}
    >
      <h3 className="text-2xl">New folder</h3>
      <input
        type="text"
        ref={inputRef}
        value={folderName}
        onChange={(event) => setFolderName(event.target.value)}
        className="border border-slate-500 rounded-md px-4 py-2 outline-none focus:border-[#0b57d0] selection:bg-[#0b57d0] selection:text-white"
        autoFocus
      />
      <div className="flex justify-end gap-6 font-medium text-[#0b57d0]">
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default AddFolder;
