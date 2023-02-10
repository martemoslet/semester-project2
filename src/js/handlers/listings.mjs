import * as listings from "../api/listings/read.mjs";
import * as templates from "../templates/listings.mjs";

/**
 * This function will post the listings to the chosen id on a HTML page
 */

export async function listingsFeed() {
  const seeListings = await listings.getListings();

  const container = document.querySelector("#listingsContainer");
  templates.renderListingTemplates(seeListings, container);
}
