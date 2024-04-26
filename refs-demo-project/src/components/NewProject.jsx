import { useRef } from 'react';

import { randomString } from '../helpers/randomString.jsx';

import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({onSubmitNewProject}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  function handleSubmit() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      dialog.current.open();
    }

    // onSubmitNewProject({
    //   id: randomString(),
    //   title: title.current.value,
    //   description: description.current.value,
    //   dueDate: dueDate.current.value
    // });
  }

  return (
    <>
      <Modal ref={dialog}>
        error
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
          <button onClick={handleSubmit} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </menu>
        <form>
          <Input
            label="Title"
            type="text"
            ref={title}
          />
          <Input
            label="Description"
            isTextarea
            ref={description}
          />
          <Input
            label="Due date"
            type="date"
            ref={dueDate}
          />
        </form>
      </div>
    </>
  );
}