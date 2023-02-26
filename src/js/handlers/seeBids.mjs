import { getListing } from "../api/listings/read.mjs";
import * as template from "../templates/bids.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

/**
 * This function will add a specific listing, using its id,
 * and post it to the page
 */

export async function seeBids() {
  const bids = await getListing(id);
  const container = document.querySelector("#bid-container");
  template.seeBids(bids, container);
  console.log(bids);
}
