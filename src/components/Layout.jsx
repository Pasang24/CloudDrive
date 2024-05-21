import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="mt-16">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
