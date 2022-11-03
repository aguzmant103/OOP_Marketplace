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
    getTotalSpent() {
        return this.totalSpent;
    }
    getMyBids() {
        return this.myBids;
    }
}
exports.Buyer = Buyer;
class Listing {
    constructor(title, startingPrice = 0n, description = "", state = "Draft") {
        this.title = title;
        this.startingPrice = startingPrice;
        this.state = state;
        this.allBids = [];
        this.startingPrice = startingPrice;
        this.uniqueID = Listing.amountOfLists;
        this.description = description;
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
    publishListing() {
        this.state = "Active";
    }
}
exports.Listing = Listing;
Listing.amountOfLists = 0n;
