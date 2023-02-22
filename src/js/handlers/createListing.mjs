import { createListing } from "../api/listings/index.mjs";

/**
 * This is the function for creating a listing
 * It sets an addEventListener at the create listing form
 */

export function setCreateListingFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      await createListing(listing);
      location.href = "/home/";
    });
  }
}
