"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = exports.Buyer = exports.Seller = exports.Marketplace = void 0;
class Marketplace {
} // Pending to Implement
exports.Marketplace = Marketplace;
class User {
    constructor(username) {
        this.username = username;
    }
}
class Seller extends User {
    // Constructor
    constructor(userName) {
        super(userName);
        this.myListings = [];
        this.totalSold = 0;
    }
    // Methods
    getTotalSold() {
        return this.totalSold;
    }
    getMyListings() {
        return this.myListings;
    }
    createListing() { } // Pending to implement
}
exports.Seller = Seller;
class Buyer extends User {
    // Constructor
    constructor(userName) {
        super(userName);
        this.myBids = [];
        this.totalSpent = 0;
    }
    // Methods
    get showTotalSpent() {
        return this.totalSpent;
    }
    get showMyBids() {
        return this.myBids;
    }
    // Test
    bidOnListing(newBid, listingID) {
        // If successfull, add to the Listing and to the buyer
        // try
        // listingID.addBid({}) //////////////////////////////////////////////////////////////
        // The validation should be done in the listing
        return true; // Success
    }
}
exports.Buyer = Buyer;
class Listing {
    constructor(title, startingPrice = 0n, description = "", state = "Draft") {
        this.uniqueID = Listing.amountOfLists;
        this.state = state;
        this.title = title;
        this.description = description;
        this.startingPrice = startingPrice;
        this.maxBid = { bidAmount: 0n, bidder: "" };
        this.allBids = [];
        Listing.amountOfLists++;
    }
    get showUniqueID() {
        return this.uniqueID;
    }
    get showStartingPrice() {
        return this.startingPrice;
    }
    set changeStartingPrice(newStartingPrice) {
        this.startingPrice = newStartingPrice;
    }
    set changeDescription(description) {
        this.description = description;
    }
    get showDescription() {
        return this.description;
    }
    addBid(newBid) {
        if (this.isItHighestBid(newBid) && this.isTheirOnlyBid(newBid)) {
            this.allBids.push(newBid);
            this.maxBid = newBid;
            return true;
        }
        return false;
    }
    isItHighestBid(newBid) {
        if (newBid.bidAmount > this.maxBid.bidAmount) {
            return true;
        }
        else {
            return false;
        }
    }
    isTheirOnlyBid(newBid) {
        let isOnly = true;
        for (const el of this.allBids) {
            if (newBid.bidder == el.bidder) {
                isOnly = false;
                break;
            }
        }
        if (isOnly) {
            return true;
        }
        else {
            return false;
        }
    }
    removeBid() {
        return this.allBids;
    }
    get showAllBids() {
        return this.allBids;
    }
    publishListing() {
        this.state = "Active";
    }
}
exports.Listing = Listing;
Listing.amountOfLists = 0n;
