import { useState } from 'react';

export default function Closures() {
  const [counter, setCounter] = useState(0);

  function addCounter(step) {
    return function () {
      setCounter((prevCounter) => {
        return prevCounter + step;
      });
    };
  }

  const increment1 = addCounter(1);
  const increment5 = addCounter(5);

  return (
    <section>
      <h2>Closures</h2>
      <p>Counter = {counter}</p>
      <button onClick={increment1}>Add 1 to the counter</button>
      <button onClick={increment5}>Add 5 to the counter</button>
    </section>
  );
}
