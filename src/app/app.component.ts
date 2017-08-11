import { Component , OnInit} from '@angular/core';
import {Card,BasketItem}from './model/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  
  card : Card[]=[];
  basket: BasketItem[]=[];

   msgFromHeader: number = 2;
   msgTochild : number = 0;


  ngOnInit(){


  }

  receive(msgFromHeader:number){

    this.msgFromHeader=msgFromHeader;
    this.msgTochild = msgFromHeader;

  }


}
