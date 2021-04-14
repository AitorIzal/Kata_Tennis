import { Player } from "./Interfaces/Interfaces";

export class TennisGame {
  /*  player1 : Player;
    player2 : Player; */
  points: string[] = [
    "Love",
    "Fifteen",
    "Thirty",
    "Forty",
    "Deuce",
    "Advantage",
  ];
  player1Name: string;
  player1Puntacion: string;
  player2Name: string;
  player2Puntacion: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player1Puntacion = this.points[0];
    this.player2Name = player2Name;
    this.player2Puntacion = this.points[0];
  }

  wonPoint(playerName: string): void {
    if (this.player1Name === playerName) {
      this.player1Puntacion = this.setPoint(this.player1Puntacion);
    } else {
      this.player2Puntacion = this.setPoint(this.player2Puntacion);
    }
    this.comprobarPoint();
  }

  private comprobarPoint() {
    if (this.player2Puntacion === this.player1Puntacion) {
      if (this.player1Puntacion === "Forty") {
        this.player1Puntacion = this.setPoint(this.player1Puntacion);
        this.player2Puntacion = this.setPoint(this.player2Puntacion);
      } else if (this.player2Puntacion === "Advantage") {
        this.player1Puntacion = this.setPointAdvantage(this.player1Puntacion);
        this.player2Puntacion = this.setPointAdvantage(this.player2Puntacion);
      }
    } else if (
      this.player1Puntacion === "Deuce" ||
      this.player2Puntacion === "Deuce"
    ) {
      for (let i: number = 0; i <= 2; i++) {
        if (this.player1Puntacion === this.points[i]) {
          this.player2Puntacion = "Win";
        } else if (this.player2Puntacion === this.points[i]) {
          this.player1Puntacion = "Win";
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
      this.player1Puntacion === this.player2Puntacion &&
      this.player2Puntacion !== "Deuce"
    ) {
      score = this.player2Puntacion + " all";
    } else if (
      this.player1Puntacion === this.player2Puntacion &&
      this.player2Puntacion === "Deuce"
    ) {
      score = this.player2Puntacion;
    } else if (
      this.player2Puntacion === "Advantage" ||
      this.player1Puntacion === "Advantage"
    ) {
      if (this.player2Puntacion === "Advantage") {
        score = this.player2Puntacion + " " + this.player2Name;
      } else {
        score = this.player1Puntacion + " " + this.player1Name;
      }
    } else if (
      this.player2Puntacion === "Win" ||
      this.player1Puntacion === "Win"
    ) {
      if (this.player2Puntacion === "Win") {
        score = this.player2Puntacion + " " + this.player2Name;
      } else {
        score = this.player1Puntacion + " " + this.player1Name;
      }
    } else {
      score = this.player1Puntacion + " - " + this.player2Puntacion;
    }
    console.log(score);
    return score;
  }
}
