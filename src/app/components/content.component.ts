import { Component, OnInit ,Input} from '@angular/core';


import { Card, BasketItem,UnoDeck } from '../model/card';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  unoDeck:UnoDeck;

  theWholeCards: Card[]; 

  numberOfplayer = 0;

  @Input() numberOfPlayer: number;
  //contents: BasketItem[];
  ngOnInit() {
    /* console.log(this.theWholeCards); 
    
    this.theWholeCards = this.unoDeck.cards; */
    
  }

}
