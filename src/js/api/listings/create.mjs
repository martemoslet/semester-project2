import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

/**
 * This will create a listing using the POST method and the authFetch function
 * @param {object} listingData Is the data the user inserts
 * @returns
 */

export async function createListing(listingData) {
  const createListingURL = API_AUCTION_URL + action;

  listingData.tags = listingData.tags.split(",");
  listingData.media = listingData.media.split(",");

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(listingData),
  });
  if (response.status === 201) {
    alert("Listing created");
    location.href = "/home/";
    return await response.json();
  }
  if (response.status === 400) {
    alert("Something went wrong");
  } else {
    alert("Something went wrong");
  }
}
