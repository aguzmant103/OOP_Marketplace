import { Buyer, Listing, Marketplace, Seller } from "./types & classes/types&classes";



const myMarketplace = new Marketplace();
// console.log("Hello World!");
// console.log(Marketplace);

const Sally = new Seller("Sally");
const Bob = new Buyer("Bob");
const Barbara = new Buyer("Barbara");
// console.log(Sally);
// console.log(Bob);

const List1 = new Listing("House 1");
const List2 = new Listing("House 2");
// console.log(List1);
// console.log(List2);
// List2.publishListing();
// console.log(List2);

List2.addBid({bidAmount : 100n, bidder :  Bob.username});
List2.addBid({bidAmount : 12n, bidder :  Bob.username});
List2.addBid({bidAmount : 120n, bidder :  Barbara.username})

console.log(List2);