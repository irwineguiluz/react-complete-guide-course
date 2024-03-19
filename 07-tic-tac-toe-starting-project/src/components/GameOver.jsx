export default function GameOver({winner}) {
  let decision = <p>It's a draw!</p>;

  if (winner) {
    decision = <p>{winner} won!</p>;
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {decision}
      <p><button>Rematch!</button></p>
    </div>
  );
}