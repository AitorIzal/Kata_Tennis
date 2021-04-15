import { TennisGame } from "./Clases/TennisGame";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export const FromTennis = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [playGame, setPlayGame] = useState(true);
  const tennisGame = new TennisGame(player1Name, player2Name);
  const [win, setWin] = useState(false);

  function handleSumbit(event: any) {
    event.preventDefault();

    setPlayer1Name(event.target.elements.player1Name.value);
    setPlayer2Name(event.target.elements.player2Name.value);
    setPlayGame(false);
  }

  function newGame() {
    setPlayGame(true);
  }

  function getScore() {
    const rootElement = document.getElementById("score");
    const element = tennisGame.getScore();

    if (element.toString().includes("Win")) {
      playerWin();
    }

    // @ts-ignore: Object is possibly 'null'.
    rootElement.innerHTML += element + "<br />";
  }

  function playerWin() {
    setWin(true);
  }

  function player1WonPoint(event: any) {
    event.preventDefault();
    tennisGame.wonPoint(player1Name);
    getScore();
  }

  function player2WonPoint(event: any) {
    event.preventDefault();
    tennisGame.wonPoint(player2Name);
    getScore();
  }

  if (playGame) {
    return (
      <div className="container-fluid col-8">
        <h2>TENNIS GAME</h2>
        <form onSubmit={handleSumbit}>
          <div className="row">
            <div className="col-6">
              <label>Player 1</label>
              <br />
              <input type="text" name="player1Name" required={true} />
            </div>
            <div className="col-6">
              <label>Player 2</label>
              <br />
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
      <div className="container-fluid col-8">
        <h2>TENNIS GAME</h2>
        <form onSubmit={newGame}>
          <div className="row">
            <div className="col-4">
              <label>{player1Name}</label>
              <br />
              <button onClick={player1WonPoint} disabled={win}>
                Won point
              </button>
            </div>
            <div className="col-4">
              <div>
                Love all
                <br />
              </div>
              <div id="score"></div>
            </div>

            <div className="col-4">
              <label>{player2Name}</label>
              <br />
              <button onClick={player2WonPoint} disabled={win}>
                Won point
              </button>
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
