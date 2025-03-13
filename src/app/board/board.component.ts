import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  imports: [SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})

export class BoardComponent implements OnInit{
 
  winner!: string | null;
  squares!: any[];
  isXnext!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.isXnext = true;
    this.winner = null;
  }

  get player() {
    return this.isXnext? 'X' : 'O';
  }

  makeMove(ind: number) {
    if(this.squares[ind] == null) {
      this.squares.splice(ind, 1, this.player);
      this.isXnext = !this.isXnext;
    }

    this.winner = this.cal_winner();
  }

  cal_winner(): any{
    const lines = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6],
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i=0; i<lines.length; i++) {

      const [a, b, c] = lines[i];

      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[b] === this.squares[c]) {

        return this.squares[a];
      }
    }

    return null;
  }
}
