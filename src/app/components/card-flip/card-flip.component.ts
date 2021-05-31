import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-flip',
  templateUrl: './card-flip.component.html',
  styleUrls: ['./card-flip.component.scss'],
})
export class CardFlipComponent implements OnInit {
  constructor() {}

  flipped = false;

  ngOnInit() {}

  public flip() {
    this.flipped = !this.flipped;
  }
}
