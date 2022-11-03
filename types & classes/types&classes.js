"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buyer = exports.Seller = exports.Marketplace = void 0;
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
        this.userName = userName;
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
}
exports.Seller = Seller;
class Buyer extends User {
    // Constructor
    constructor(userName) {
        super(userName);
        this.userName = userName;
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
