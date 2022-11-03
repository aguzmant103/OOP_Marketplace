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
    myBids : Bid[];
    totalSpent : number;

    // Constructor
    constructor (userName : string) { // Pending restricting duplicated usernames
        super(userName);
        this.myBids = [];
        this.totalSpent = 0;
    }

    // Methods
    get showTotalSpent(){
        return this.totalSpent;
    }

    get showMyBids(){
        return this.myBids;
    }
    // Test
    bidOnListing (newBid : bigint, listingID : Listing) : boolean{
        // If successfull, add to the Listing and to the buyer
        // try

        // listingID.addBid({}) //////////////////////////////////////////////////////////////

        // The validation should be done in the listing
        return true; // Success
    }


}


type Bid = {
    bidAmount: bigint
    bidder : string
};

type State = "Draft" | "Active" | "Canceled";

export class Listing {
    allBids : Bid[] = [];
    maxBid : Bid;
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
        this.maxBid = {bidAmount : 0n, bidder :  ""};
        
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

    addBid (newBid : Bid) : boolean { // Validate and add a new bid. // Pending to implement rejection message // Pending to add bid to bidder
        if (this.isItHighestBid(newBid) && this.isTheirOnlyBid(newBid)){
            this.allBids.push(newBid);
            this.maxBid = newBid;
            return true;
        }
        return false; 
    }

    isItHighestBid (newBid : Bid) : boolean { // Check if this is the highest bid
        if (newBid.bidAmount > this.maxBid.bidAmount){    
            return true;
        }
        else{ return false; }
    }

    isTheirOnlyBid (newBid : Bid) : boolean { // Go through the array and find if the new bidder has already bid.
        let isOnly = true;
        for (const el of this.allBids){
            if (newBid.bidder == el.bidder){ isOnly = false; break;}
        }
        if (isOnly){
            return true;
        }
        else{
            return false;
        }
    }

    removeBid () : Bid[] { // Need to add Input Parameters // Pending to Add Validation // Pending to remove bid from bidder
        
        return this.allBids;
    }

    get showAllBids () {
        return this.allBids;
    }

    publishListing (){ // Need to add validation and complete all the states. 
        this.state = "Active";
    }
}