import { getListing, bidOnListing } from "../api/listings/index.mjs";

/**
 * This function will place a bid on a specific listing using its id.
 * The id is found through the URL
 */

export async function bidOnListingListener() {
  const form = document.querySelector("#bidOnListing");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      listing.id = id;
      alert("Bid placed");
      await bidOnListing(listing);
      //location.href = "/index.html";
    });
  }
}
