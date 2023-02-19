import { API_AUCTION_URL, SORT_LISTINGS, SELLER, BIDS } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";

/**
 * This function will get the latest 100 listings from the API
 */

export async function getListings() {
  const updateListingURL = `${API_AUCTION_URL}${action}${SORT_LISTINGS}`;

  const response = await authFetch(updateListingURL);

  return await response.json();
}

/**
 * This function will get a specific listing using its id
 * @param {object} id is the id of the listing chosen
 */

export async function getListing(id) {
  if (!id) {
    throw new Error("Get a listing requires a listingID");
  }
  const getListingURL = `${API_AUCTION_URL}${action}/${id}${SELLER}&${BIDS}`;

  const response = await authFetch(getListingURL);

  return await response.json();
}
