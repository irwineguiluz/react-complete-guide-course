import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing] = useState(false);
  let playerName = <span className="player-name">{name}</span>;

  function handleClick() {
    setIsEditing(isEditing => !isEditing);
  }

  if ( isEditing ) {
    playerName = <input type="text" required value={name} />
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
}