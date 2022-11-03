import { Buyer, Listing, Marketplace, Seller } from "./types & classes/types&classes";



const myMarketplace = new Marketplace();
console.log("Hello World!");
console.log(Marketplace);

const Sally = new Seller("Sally");
console.log(Sally);
const Bob = new Buyer("Bob");
console.log(Bob);

const List1 = new Listing("House 1");
console.log(List1);
const List2 = new Listing("House 2");
console.log(List2);
List2.publishListing();
console.log(List2);

List2.addBid({bidAmount : 100n, bidder :  Bob.username});
List2.addBid({bidAmount : 12n, bidder :  Bob.username});

console.log(List2);