import { badges, categories, industries, listings, reviews, sellerProfiles, users } from "@/lib/data/seed";

async function run() {
  const snapshot = {
    users: users.length,
    sellers: sellerProfiles.length,
    listings: listings.length,
    reviews: reviews.length,
    categories: categories.length,
    industries: industries.length,
    badges: badges.length
  };

  console.log("SkillArcade MVP seed snapshot");
  console.table(snapshot);
  console.log("Use this payload to import into Firestore collections.");
}

run();
