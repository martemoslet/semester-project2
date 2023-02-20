import { API_AUCTION_URL, SELLER } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "DELETE";

/**
 * This will delete a listing using the DELETE method and authFetch function
 * @param {object} id is the id of the listing the user wants to delete
 */

export async function removeListing(id) {
  if (!id) {
    throw new Error("Deleting requires a listingID");
  }

  const removeListingURL = `${API_AUCTION_URL}${action}/${id}${SELLER}`;

  const response = await authFetch(removeListingURL, {
    method,
  });
  console.log(removeListingURL);
  return await response.json();
}
