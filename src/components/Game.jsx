import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "200px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const clickHandler = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => {
    return (
      <button
        onClick={() => {
          setBoard(Array(9).fill(null));
        }}
      >
        Restart Game
      </button>
    );
  };
  return (
    <>
      <Board squares={board} onClick={clickHandler} />
      <div style={styles}>
        <p>
          {winner ? `winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
