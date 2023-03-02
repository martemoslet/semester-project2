import { singleListingContainer } from "./singleListingContainer.mjs";

export function renderListingTemplate(listingData, parent) {
  parent.innerHTML += singleListingContainer(listingData);
}

export function renderListingTemplates(listingData, parent) {
  listingData((listing) => renderListingTemplate(listing, parent));
}
