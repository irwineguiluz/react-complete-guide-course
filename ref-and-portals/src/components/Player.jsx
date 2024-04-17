import { useState } from 'react';

export default function Player() {
  const [ inputtedPlayerName, setInputtedPlayerName ] = useState('');
  const [ isSubmittedPlayerName, setIsSubmittedPlayerName ] = useState(false);

  function handleChange(e) {
    setIsSubmittedPlayerName(false);
    setInputtedPlayerName(e.target.value);
  }

  function handleClick() {
    setIsSubmittedPlayerName(true);
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmittedPlayerName ? inputtedPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={inputtedPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
