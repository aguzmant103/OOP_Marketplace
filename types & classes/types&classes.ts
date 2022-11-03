export class Marketplace {} // Pending to Implement
abstract class User {
    constructor (public username : string){}
}
export class Seller extends User{

    // Properties
    myListings : []; // PENDING NEED TO IMPLEMENT LISTING TYPE
    totalSold : number;

    // Constructor
    constructor (public userName : string) {
        super(userName);
        this.myListings = [];
        this.totalSold = 0;
    }

    // Methods
    getTotalSold(){
        return this.totalSold;
    }

    getMyListings(){
        return this.myListings;
    }
}
export class Buyer extends User{

    // Properties
    myBids : []; // PENDING NEED TO IMPLEMENT BIDS TYPE
    totalSpent : number;

    // Constructor
    constructor (public userName : string) {
        super(userName);
        this.myBids = [];
        this.totalSpent = 0;
    }

    // Methods
    getTotalSpent(){
        return this.totalSpent;
    }

    getMyBids(){
        return this.myBids;
    }
}