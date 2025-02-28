import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, isOpen, className = '' }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (isOpen) {
      modal.showModal();
    }

    return () => modal.close();
  }, [isOpen]);

  return createPortal(
    <dialog className={`modal ${className}`} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
