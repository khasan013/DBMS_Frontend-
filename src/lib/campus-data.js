export const getListing = (id) => listings.find((item) => item.id === id);

export const listingOwner = (listing) => ({
  name: listing.owner ?? "Listing owner",
  role: listing.module === "market" ? "Student seller · Verified" : "Student · Verified",
  phone: listing.contact ?? "+880 1712 345678",
  email: "campuscrate@university.edu",
});

export const listingDescription = (listing) =>
  listing.description ??
  (listing.module === "lost"
    ? `${listing.title} was reported at ${listing.detail} on ${listing.meta}. Please describe an identifying detail when you get in touch so the item goes back to the right person. Meetups happen on campus during daytime hours.`
    : listing.module === "market"
      ? `${listing.title} in ${listing.meta.toLowerCase()} condition, offered at ${listing.detail}. Handover on campus is preferred, and you're welcome to inspect it before deciding. Message the seller to arrange a time that suits you.`
      : `${listing.title} was shared by a verified Campus Crate student.`);

// Listing data comes from the backend APIs. Keep this empty only for legacy
// detail-page helpers; no sample posts are rendered in the application.
export const listings = [];

export const moduleLabel = {
  lost: "Lost & Found",
  market: "Marketplace",
  "to-let": "To-let",
};
