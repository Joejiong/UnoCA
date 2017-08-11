import { Component, OnInit,Input ,Output, EventEmitter } from '@angular/core';
import {Card}from '../model/card';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public value:string= "0";
  public counter: number = 2;

    color:string = "red";
    
    image:string = '../assets/uno_deck';
  constructor() { }


  @Input()card:Card[];

  ngOnInit() {
  }
  public add():void{
     if (this.counter<7) {
        this.counter ++;
     } 
   

      console.log(this.counter);
  }
  public remove():void{
    if (this.counter>2) {
      this.counter --;
    }  
    

      console.log(this.counter);
  }
}
