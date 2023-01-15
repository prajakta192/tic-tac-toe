export default class Game {
  //setting class Properties
  constructor() {
    console.log('Game Init');
    this.turn = 'X';
    this.board = new Array(9).fill(null);
  }
  //Change The turn of Player
  nextTurn() {
    if (this.turn == 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }

  //selecting board tile
  playerMove(i) {
    this.board[i] = this.turn;
  }
}
