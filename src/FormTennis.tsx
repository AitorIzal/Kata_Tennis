import React from "react";
import { TennisGame } from "./TennisGame";

export const FromTennis = () => {
  const [player1Name, setPlayer1Name] = React.useState("");
  const [player2Name, setPlayer2Name] = React.useState("");
  const [playGame, setPlayGame] = React.useState(true);
  const tennisGame = new TennisGame(player1Name, player2Name);
  const [win, setWin] = React.useState(false);

  function handleSumbit(event: any) {
      event.preventDefault();

      setPlayer1Name(event.target.elements.player1Name.value);
      setPlayer2Name(event.target.elements.player2Name.value);
      setPlayGame(false);
  }

  function newGame(){
      setPlayGame(true);
  }

  function getScore()
  {
    const rootElement = document.getElementById("score");
    const element = tennisGame.getScore();

    if(element.includes("Win"))
    {
        playerWin();
    }

    // @ts-ignore: Object is possibly 'null'.
    rootElement.innerHTML = element;
  }

  function playerWin()
  {
      setWin(true);
  }

  function player1WonPoint(event : any)
  {
    event.preventDefault();
      tennisGame.wonPoint(player1Name);
      getScore();
  }

  function player2WonPoint(event : any)
  {
    event.preventDefault();
      tennisGame.wonPoint(player2Name);
      getScore();
  }

  if (playGame) {
    return (
      <div>
        <h2>TENNIS GAME</h2>
        <form onSubmit={handleSumbit}>
          <div>
            <div>
              <label>Player 1</label>
              <input type="text" name="player1Name" required={true} />
            </div>
            <div>
              <label>Player 2</label>
              <input type="text" name="player2Name" required={true} />
            </div>
          </div>
          <br />
          <div>
            <button type="submit">Play!</button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>TENNIS GAME</h2>
        <form onSubmit={newGame}>
          <div>
            <div>
              <label>{player1Name}</label>
              <br />
              <button onClick={player1WonPoint} disabled={Boolean(win)}>Won point</button>
            </div>
            <div id="score">

            </div>
            <div>
            <label>{player2Name}</label>
            <br />
            <button onClick={player2WonPoint} disabled={Boolean(win)}>Won point</button>
            </div>
          </div>
          <br />
          <div>
            <button type="submit">New Game!</button>
          </div>
        </form>
      </div>
    );
  }
};
