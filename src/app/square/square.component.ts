import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [NgClass],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})

export class SquareComponent {

  @Input() value!: string;

}
