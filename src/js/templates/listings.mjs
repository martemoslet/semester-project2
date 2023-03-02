import { listingsContainer } from "./listingsContainer.mjs";

export function renderListingTemplate(listingData, parent) {
  parent.innerHTML += listingsContainer(listingData);
}

export function renderListingTemplates(listingDataList, parent) {
  listingDataList.map((listing) => renderListingTemplate(listing, parent));
}
