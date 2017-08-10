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

    private cards :Card[]=[];
    

    private static COLOURS: string[] =  ["red","green", "blue", "yellow"]
    //private static CARD_NAME =

    constructor(){

            let prefix:string ="0";

        //creat 
        for(let i ;  i<2;i++){

            for(let j ;j<12; j++){

                let prefix = "0";
                if (j<10) {
                    prefix = '0';
                }else{


                    prefix = j;

                }
                //this.cards.push({value:j+1,color:})


            }

        }


        //

    }

    //

}