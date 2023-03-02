import { getListing, updateListing } from "../api/listings/index.mjs";

/**
 * This function will update a specific listing using its id.
 * The id is found through the URL, and displays the title,
 * description, tags and media of the listing. The button is disabled
 * until the listing is loaded
 */

export async function setUpdateListingListener() {
  const form = document.querySelector("#editListing");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const listing = await getListing(id);

    form.title.value = listing.title;
    form.description.value = listing.description;
    form.tags.value = listing.tags;
    form.media.value = listing.media;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      listing.id = id;
      await updateListing(listing);
    });
  }
}
