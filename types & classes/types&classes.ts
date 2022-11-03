export class Marketplace {

}

abstract class User {
    constructor (public username : string){}
}

export class Seller extends User{

    myListings : [];
    totalSold : number;

    constructor (public userName : string) {
        super(userName);
        this.myListings = [];
        this.totalSold = 0;
    }

    getTotalSold(){
        return this.totalSold;
    }

    getMyListings(){
        return this.myListings;
    }
}