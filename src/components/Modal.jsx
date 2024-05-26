import React, { useEffect } from "react";

function Modal({ closeModal, children }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);
  return (
    <div className="fixed z-30 inset-0 bg-black bg-opacity-20 grid place-items-center">
      {children}
    </div>
  );
}

export default Modal;
