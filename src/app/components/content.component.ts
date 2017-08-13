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
      COLOURS: string[] =  ["red","green", "blue", "yellow"];

  theWholeCards: Card[]; 

  cards:Card[];
  
  b:BasketItem;

  playerCards:Card[];

  baskets:BasketItem[]=[];

  shuffleCards:Card[]=[];
     
  alphas:string[]=[]; 
      

  numberOfplayer = 0;

  @Input() numberOfPlayer: number;

   //Array type captured in a variable
  num:number = this.numberOfPlayer;

  arr :number[] ;
  ngOnChanges(){

  /* value:number;
       color:string;
      imageUrl:string  */


    /* const len = this.theWholeCards.length; */
     

 
    this.alphas = [];
    this.theWholeCards =[]; 

   
    

    for(let i=1;i<=this.numberOfPlayer;i++){

      this.playerCards=[];
      for(let i =1; i<=7;i++){

        this.playerCards.push(this.take());

      }

     

      this.baskets.push({

        items:this.playerCards,
        player:i 
      });

       this.alphas.push(""+i);
      
      

      
       
    }
      console.log(this.baskets);

    /* for(let i =1; i<=7;i++)
      this.theWholeCards.push(this.take());
 */
    /* for(let i =1; i<=7;i++)
      this.theWholeCards.push({
        value: i,
        color: "red",
        imageUrl: "./assets/uno_deck/c0_00.png"
      }); */

      /* this.shuffle(); */

    /* for (let i=1; i<= this.numberOfPlayer;i++) {
      for(let i =1; i<=7;i++)
      this.theWholeCards.push({
        value: i,
        color: "red",
        imageUrl: "./assets/fruits/" +  "c0" + ".png"
      });
    }  */

              console.log(this.alphas);  



  /*  */
}
  //take the each card and put to each player          
  public take(): Card{
        



        return (this.shuffleCards.pop());
    }

    //shuffle the cards
  private shuffle(times:number):void{
        //google, polynomial time, or number times o to power of n & n = array(big o notation); search times ia o(ln2n)

        this.shuffleCards=[];
        for (var index = 0; index < this.cards.length; index++) {
          
          this.shuffleCards.push(this.cards[index]);
          
        } 

        for (var index = 0; index < times; index++) {
         
           for(let i = 0; i<this.cards.length;i++){

          
         let temp:Card = this.shuffleCards[Math.floor(Math.random() * 10)];
         this.shuffleCards[Math.floor(Math.random() * 10)]=this.shuffleCards[i];
         this.shuffleCards[i]=temp;

        }
          
        }
       
    


  }
  //contents: BasketItem[];
  ngOnInit() {
    for (var index = 0; index <10; index++) {
      
       console.log(  Math.floor(Math.random() * 10));
    }
   

     this.cards = []; 
    
    /* this.theWholeCards = this.unoDeck.cards; 
    console.log(this.theWholeCards);  */
                
        let prefix:string ="0";

        //creat 
        for(let i=0 ;i<2;i++){

          for(var c = 0;c<this.COLOURS.length;c++) {



            for(let j=1 ;j<13; j++){

                let prefix = "0";
                if (j<10) {

                            
                    prefix = prefix + j;

                }else{



                    prefix = j + "";

                }
                    this.cards.push({
                    value: j+1, 
                    color:this.COLOURS[c],
                    imageUrl:"./assets/uno_deck/c" +c + "_" + prefix +".png"
                })


            }




          }
                
        }

        //four color

        for(let i=0 ;i<4;i++){

                

                this.cards.push({
                            value: 0, 
                            color: "COLOD",
                            imageUrl:"../assets/uno_deck/c4_00.png"


                })
        }
        //four black
        for(let i=0 ;i<4;i++){

                

                this.cards.push({
                            value: 0, 
                            color: "COLOD",
                            imageUrl:"../assets/uno_deck/c4_01.png"


                })
        }
        //four zeros
        for(var c = 0;c<this.COLOURS.length;c++) {
        

                

                this.cards.push({
                            value: 0, 
                            color: this.COLOURS[c],
                            imageUrl:"../assets/uno_deck/c"+c+"_00.png"


                })
        }


        console.log(this.cards);
        ///////////
   
      this.shuffle(4);

   
    

  }

}
