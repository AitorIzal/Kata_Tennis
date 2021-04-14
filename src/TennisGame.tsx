import { Player } from "./Player";

export class TennisGame {
  player1: Player;
  player2: Player;
  points: string[] = [
    "Love",
    "Fifteen",
    "Thirty",
    "Forty",
    "Deuce",
    "Advantage",
  ];

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name, this.points[0]);
    this.player2 = new Player(player2Name, this.points[0]);
  }

  wonPoint(playerName: string): void {
    if (this.player1.getName() === playerName) {
      this.player1.setPoints(this.setPoint(this.player1.getPoints()));
    } else {
      this.player2.setPoints(this.setPoint(this.player2.getPoints()));
    }
    this.comprobarPoint();
  }

  private comprobarPoint() {
    if (this.player2.getPoints() === this.player1.getPoints()) {
      if (this.player1.getPoints() === "Forty") {
        this.player1.setPoints(this.setPoint(this.player1.getPoints()));
        this.player2.setPoints(this.setPoint(this.player2.getPoints()));
      } else if (this.player1.getPoints() === "Advantage") {
        this.player1.setPoints(
          this.setPointAdvantage(this.player1.getPoints())
        );
        this.player2.setPoints(
          this.setPointAdvantage(this.player2.getPoints())
        );
      }
    } else if (
      this.player1.getPoints() === "Deuce" ||
      this.player2.getPoints() === "Deuce"
    ) {
      for (let i: number = 0; i <= 2; i++) {
        if (this.player1.getPoints() === this.points[i]) {
          this.player2.setPoints("Win");
        } else if (this.player2.getPoints() === this.points[i]) {
          this.player1.setPoints("Win");
        }
      }
    }
  }

  private setPoint(puntos: string): string {
    for (let i: number = this.points.length - 2; i >= 0; i--) {
      if (puntos === this.points[i]) {
        return this.points[i + 1];
      }
    }
    return "Win";
  }

  private setPointAdvantage(puntos: string): string {
    for (let i: number = 0; i < this.points.length; i++) {
      if (puntos === this.points[i]) {
        puntos = this.points[i - 1];
      }
    }
    return puntos;
  }

  getScore(): string {
    let score: string;
    if (
      this.player1.getPoints() === this.player2.getPoints() &&
      this.player1.getPoints() !== "Deuce"
    ) {
      score = this.player1.getPoints() + " all";
    } else if (
      this.player1.getPoints() === this.player2.getPoints() &&
      this.player1.getPoints() === "Deuce"
    ) {
      score = this.player2.getPoints();
    } else if (
      this.player1.getPoints() === "Advantage" ||
      this.player2.getPoints() === "Advantage"
    ) {
      if (this.player1.getPoints() === "Advantage") {
        score = this.player1.getPoints() + " " + this.player1.getName();
      } else {
        score = this.player2.getPoints() + " " + this.player2.getName();
      }
    } else if (
      this.player1.getPoints() === "Win" ||
      this.player2.getPoints() === "Win"
    ) {
      if (this.player1.getPoints() === "Win") {
        score = this.player1.getPoints() + " " + this.player1.getName();
      } else {
        score = this.player2.getPoints() + " " + this.player2.getName();
      }
    } else {
      score = this.player1.getPoints() + " - " + this.player2.getPoints();
    }
    console.log(score);
    return score;
  }
}
