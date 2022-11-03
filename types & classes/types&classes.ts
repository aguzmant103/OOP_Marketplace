export class Marketplace {} // Pending to Implement
abstract class User {
    constructor (public username : string){}
}
export class Seller extends User{

    // Properties
    myListings : []; // PENDING NEED TO IMPLEMENT LISTING TYPE
    totalSold : number;

    // Constructor
    constructor (userName : string) {
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
    createListing(){} // Pending to implement
}
export class Buyer extends User{

    // Properties
    myBids : []; // PENDING NEED TO IMPLEMENT BIDS TYPE
    totalSpent : number;

    // Constructor
    constructor (userName : string) {
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
    // Test
}


type Bid = {
    bidAmount: bigint
    bidder : Buyer
};

type State = "Draft" | "Active" | "Canceled";

export class Listing {
    allBids : Bid[] = [];
    static amountOfLists : bigint = 0n; 
    private uniqueID : bigint;
    description : string;

    constructor(public title : string, 
                public startingPrice : bigint = 0n,
                description = "", 
                public state : State = "Draft"){
        this.startingPrice = startingPrice;
        this.uniqueID = Listing.amountOfLists;
        this.description = description;
        Listing.amountOfLists++;
        
    }
    get showUniqueID(){
        return this.uniqueID;
    }
    get showStartingPrice (){
        return this.startingPrice;
    }
    set changeStartingPrice (newStartingPrice : bigint){
        this.startingPrice = newStartingPrice;
    }

    set changeDescription (description : string){
        this.description = description;
    }
    get showDescription (){
        return this.description;
    }

    publishListing (){
        this.state = "Active";
    }
}