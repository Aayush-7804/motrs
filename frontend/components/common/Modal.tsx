"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal: React.FC<{
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}> = ({ children, open, onClose, className }) => {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      modal?.close();
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure overflow is reset when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className={`backdrop:bg-[var(--Primary-Midnight-Blue)]/50 outline-0 
        max-w-full max-h-full m-0 w-full h-full bg-[var(--Primary-Midnight-Blue)] 
        sm:max-w-fit sm:max-h-4/5 min-[1441px]:h-fit sm:bg-white 
        sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 ${className}`}
    >
      {children}
    </dialog>,
    document.body
  );
};

export default Modal;
