import { Component, OnInit,Input } from '@angular/core';
import {Card}from '../model/card';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public value:string= "0";

    color:string = "red";
    
    image:string = '../assets/uno_deck';
  constructor() { }


  @Input()card:Card[];

  ngOnInit() {
  }

}
