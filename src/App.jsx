import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import MyDrive from "./pages/MyDrive";
import Starred from "./pages/Starred";
import Bin from "./pages/Bin";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MyDrive />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/bin" element={<Bin />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
