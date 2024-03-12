import { useState } from "react";

export default function Player({initialName, symbol}) {
  const [ playerName, setPlayerName ] = useState(initialName);
  const [ isEditing, setIsEditing] = useState(false);
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  function handleEditClick() {
    setIsEditing(editing => !editing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  if ( isEditing ) {
    editablePlayerName = (
      <input type="text" required onChange={handleChange} value={playerName} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
}