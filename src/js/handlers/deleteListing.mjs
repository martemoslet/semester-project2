import { removeListing } from "../api/listings/index.mjs";

/**
 * This is the function for deleting a specific listing.
 * It needs the id of the listing, and lets the user delete
 * the listing with the button
 */

export function setRemoveListingListener() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const button = document.querySelector("#delete-button");

  if (button) {
    button.addEventListener("click", async (event) => {
      alert("Listing deleted");
      await removeListing(id);
      location.href = "/profile/";
    });
  }
}
