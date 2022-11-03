# OOP_Marketplace
 OOP Marketplace implemented in TypeScript

## Goal

In this mini-project, your are asked to write a small library implementing a basic backend for an
online marketplace. Users of the marketplace—identified by a unique username—can be buyers
or sellers: sellers list items for sale and buyers bid for them. Below is the typical lifecycle of a
listing:
1. The seller creates the listing (in draft state). At creation, the listing is assigned a unique ID by
the library. The following data needs to be specified for a listing: title (limited length), starting
price, description (unlimited length), minimum bidding time. Some or all of this data can be
specified and modified after creation.
2. The seller can change the listing state from draft to active at any time, as long as all data from
point 1 has been specified. Alternatively, the seller can change the lifting state from draft to
cancelled.
3. When the listing is active, buyers can submit bids. Only the current highest bid is listed. Each
buyer can have at most one bid on the listing at any time and can withdraw their bid at any
time. A new bid can be submitted only if it is higher than the highest current bid.
4. After the minimum bidding time has elapsed from the moment the listing has become active,
the seller can change the listing state from active to sold, as long as at least one bid is
present: when this happens, the buyer with the highest bid has bought the item. At any time
when no bids are present, the seller can change the listing state from active to cancelled.
The library should offer the following minimum functionality:
Creation of listings, changes to listing state, submission and management of bids on the
listing. Quick access to listing by ID.
Search for active listings. It should be optionally possible to filter listings by some criteria of
your choice (e.g. title containing given string, highest bid in given range, remaining bidding
time above a given minimum, etc). It should be optionally possible to sort listings by some
criteria of your choice (e.g. title, highest bid, remaining bidding time), both in ascending order
and in descending order.
For a given seller: access their draft, active, sold and cancelled listings. Also, track the total
amount of money they made from sold listings so far.
For a given buyer: access their current bids on active listings and the listings they have
bought. Also, track the total amount of money they spent on bought items so far.