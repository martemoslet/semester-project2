import * as listings from "../../api/listings/read.mjs";
import * as templates from "./listings.mjs";

/**
 * This function will post the listings to the chosen id on a HTML page
 */

export async function listingsFeedFrontPage() {
  const seeListings = await listings.getListings();

  const container = document.querySelector("#listingsContainer");
  templates.renderListingTemplates(seeListings, container);
}
