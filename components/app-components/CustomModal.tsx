import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md"
      onClick={handleOverlayClick}
    >
      <div
        className="relative rounded-lg shadow-lg p-10 w-11/12 md:w-2/3 lg:w-2/3"
        onClick={handleModalClick}
      >
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
