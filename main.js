"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_classes_1 = require("./types & classes/types&classes");
const myMarketplace = new types_classes_1.Marketplace();
// console.log("Hello World!");
// console.log(Marketplace);
const Sally = new types_classes_1.Seller("Sally");
const Bob = new types_classes_1.Buyer("Bob");
const Barbara = new types_classes_1.Buyer("Barbara");
// console.log(Sally);
// console.log(Bob);
const List1 = new types_classes_1.Listing("House 1");
const List2 = new types_classes_1.Listing("House 2");
// console.log(List1);
// console.log(List2);
// List2.publishListing();
// console.log(List2);
List2.addBid({ bidAmount: 100n, bidder: Bob.username });
List2.addBid({ bidAmount: 12n, bidder: Bob.username });
List2.addBid({ bidAmount: 120n, bidder: Barbara.username });
console.log(List2);
