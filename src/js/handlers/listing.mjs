import { getListing } from "../api/listings/read.mjs";
import * as template from "../templates/listing.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

/**
 * This function will add a specific listing, using its id,
 * and post it to the page
 */

export async function oneListing() {
  const listing = await getListing(id);
  const container = document.querySelector("#listing");
  template.renderListingTemplate(listing, container);
}
