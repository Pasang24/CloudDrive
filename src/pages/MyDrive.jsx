import React from "react";
import PageLayout from "../components/PageLayout";
import EmptyDrive from "../assets/Illustrations/EmptyDrive";

function MyDrive() {
  return (
    <PageLayout header="My Drive">
      {/* {<div className="flex flex-1 flex-col justify-center items-center gap-2 text-center">
        <div className="w-full max-w-xl">
          <EmptyDrive />
        </div>
        <h3 className="font-medium text-2xl">No files in Drive</h3>
        <span>Add files by uploading from your device</span>
      </div>} */}
    </PageLayout>
  );
}

export default MyDrive;
