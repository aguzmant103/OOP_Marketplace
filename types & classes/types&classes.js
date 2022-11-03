"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = exports.Marketplace = void 0;
class Marketplace {
}
exports.Marketplace = Marketplace;
class User {
    constructor(username) {
        this.username = username;
    }
}
class Seller extends User {
    constructor(userName) {
        super(userName);
        this.userName = userName;
        this.myListings = [];
        this.totalSold = 0;
    }
    getTotalSold() {
        return this.totalSold;
    }
    getMyListings() {
        return this.myListings;
    }
}
exports.Seller = Seller;
