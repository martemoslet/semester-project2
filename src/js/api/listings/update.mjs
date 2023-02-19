import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "put";

/**
 * This function will update a listing with a specific listing id using the PUT method and
 * authFetch function
 * @param {object} listingData is the data for the listing that can be updated
 */

export async function updateListing(listingData) {
  if (!listingData.id) {
    throw new Error("Update requires a listingID");
  }
  const updateListingURL = `${API_AUCTION_URL}${action}/${listingData.id}`;

  listingData.tags = listingData.tags.split(",");
  listingData.media = listingData.media.split(",");

  const response = await authFetch(updateListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
