import { useRef, forwardRef, useImperativeHandle } from 'react';

const Modal = forwardRef(function Modal({children}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return (
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
    </dialog>
  );
})

export default Modal;