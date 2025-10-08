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
    }
    
    document.body.style.overflow = "hidden";

    return () => {
      modal?.close();
      document.body.style.overflow = "";
    };
  }, [open]);
  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className={`backdrop:bg-[var(--Primary-Midnight-Blue)]/50 outline-0 left-1/2 top-1/2 -translate-1/2 ${className}`}
    >
      {children}
    </dialog>,
    document.body
  );
};

export default Modal;
