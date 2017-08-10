export interface Card{

    value:string;
    color:string;
    image:string;

};

export interface BasketItem{

    items: Card[];

    player:string;
}
