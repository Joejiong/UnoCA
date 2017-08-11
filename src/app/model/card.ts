export interface Card{

    value:number;
    color:string;
    imageUrl:string;

};

export interface BasketItem{

    items: Card[];

    player:string;
}

export class UnoDeck{

    public cards :Card[]=[];
    

    private static COLOURS: string[] =  ["red","green", "blue", "yellow"]
    //private static CARD_NAME =

    private shuffle(times: number = 5):void{
        //google, polynomial time, or number times o to power of n & n = array(big o notation); search times ia o(ln2n)



    }
    
    
    public take(): Card{
        
        return (this.cards.pop());
    }
  

    constructor(){

            
        let prefix:string ="0";

        //creat 
        for(let i=0 ;i<2;i++){

            for(var c = 0;UnoDeck.COLOURS.length;c++)
                for(let j=1 ;j<13; j++){

                let prefix = "0";
                if (j<10) {

                            
                    prefix = prefix + j;

                }else{



                    prefix = j + "";

                }
                    this.cards.push({
                    value: j+1, 
                    color:UnoDeck.COLOURS[c],
                    imageUrl:"./assets/uno_deck/c" +c + "_" + prefix +".png"
                })


            }

        }
        //four zero


        for(var c = 0;UnoDeck.COLOURS.length;c++){


            for(let i=0 ;i<4;i++){

                let prefix = "0"+i;

                this.cards.push({
                            value: 0, 
                            color:UnoDeck.COLOURS[c],
                            imageUrl:"./assets/uno_deck/c" +c + "_" + prefix +".png"


                })
            }
        }
        
        //four color

        for(let i=0 ;i<4;i++){

                

                this.cards.push({
                            value: 0, 
                            color: "COLOD",
                            imageUrl:"./assets/uno_deck/c4_00.png"


                })
            }
        //four black
        for(let i=0 ;i<4;i++){

                

                this.cards.push({
                            value: 0, 
                            color: "COLOD",
                            imageUrl:"./assets/uno_deck/c4_01.png"


                })
            }

    }

    //

}