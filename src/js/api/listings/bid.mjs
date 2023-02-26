import { API_AUCTION_URL, BID } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

/**
 * This function will allow for the creation of a new bid on a listing with a specific listing id using the POST method and
 * authFetch function
 * @param {object} listingData is the data for the listing
 */

export async function bidOnListing(listingData) {
  if (!listingData.id) {
    throw new Error("Bid requires a listingID");
  }
  const bidOnListingURL = `${API_AUCTION_URL}${action}/${listingData.id}/${BID}`;

  const bidAmount = document.querySelector("#bidAmount");
  const response = await authFetch(bidOnListingURL, {
    method,
    body: JSON.stringify({
      amount: bidAmount.valueAsNumber,
    }),
  });
  if (response.status === 200) {
    alert("Bid placed");
    document.location.reload();
    return await response.json();
  }
  if (response.status === 403) {
    alert("You cannot bid on your own listing");
  } else {
    alert("Something went wrong");
  }
}
