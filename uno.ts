export interface Card {
  value: number;
  color: string;
  imageUrl:string;
}

export class UnoDeck{
  
  private static COLOURS: string[] = ["red","green", "blue", "yellow"]
  private cards: Card[] =[];
  
  //create the deck
  //create the main deck
  constructor(){
    let prefix:string ="0";
    
    for (let i=0; i<2; i++) {
      for (var c=0; c<UnoDeck.COLOURS.length; c++)
      for (var j= 0; i<12; j++){
        
        prefix = "0";
      if (j<10)
        prefix = prefix + j;
      else 
        prefix = j + "";
      
      this.cards.push({
        value: j+1, 
        color:UnoDeck.COLOURS[c],
        imageUrl:"/assets/uno_deck/c" +c + "_" + prefix +".png"
      })
        
      }
        
    }

    //Create zero
    
    for (let i=0; i<1; i++) {
      for (var c=0; c<UnoDeck.COLOURS.length; c++)
      for (var j= 0; i<4; j++){

        prefix = "00";
      
      
      this.cards.push({
        value: j, 
        color:UnoDeck.COLOURS[c],
        imageUrl:"/assets/uno_deck/c" +c + "_" + prefix +".png"
      })
        
      }
        
    }
     //Create 4 colours, take 4

    for (let i=0; i<4; i++){
      for (var c=0; c<UnoDeck.COLOURS.length; c++)
      this.cards.push({
        value: 20, 
        color:UnoDeck.COLOURS[c],
        imageUrl:"/assets/uno_deck/c4_00.png"
      })

    }

    //Create take 4
    for (let i=0; i<4; i++){
      for (var c=0; c<UnoDeck.COLOURS.length; c++)
      this.cards.push({
        value: 20, 
        color:UnoDeck.COLOURS[c],
        imageUrl:"/assets/uno_deck/c4_01.png"
      })

    }

  }
  
  //private shuffle(times: number = 5):void{
    //google, polynomial time, or number times o to power of n & n = array(big o notation); search times ia o(ln2n)
  //}

  private shuffle ():void{
      this.cards.sort(()=> Math.floor(Math.random()*5-1));
  }
  
  public take(): Card{
    
    return (this.cards.pop());
  }
  
}