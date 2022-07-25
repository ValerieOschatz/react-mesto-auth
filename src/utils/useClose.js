import { useEffect } from 'react';

export default function useClose(isOpen, handleClose) {
  useEffect(() => {
    if (!isOpen) return;

    function handleOverlayClick(evt) {
      if (evt.target.classList.contains('popup')) {
        handleClose();
      }
    }

    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleOverlayClick);
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener('mousedown', handleOverlayClick);
    }
  }, [isOpen]);
}