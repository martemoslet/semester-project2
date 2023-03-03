import { missingImg } from "../api/constants.mjs";

/**
 * This function is a template for how the listings
 * will look like on the page
 * @param {object} listingData is the data retrieved from the listings
 * @returns
 */

export function listingsContainer(listingData) {
  const convertDate = new Date(listingData.endsAt).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });

  return `
    <div class="pt-3">
      <a href="/listing/login/">
        <div class="card bg-secondary">
          <img class="listing-img" src="${listingData.media}" alt="${listingData.title}" onerror="this.onerror=null; this.src='${missingImg}'" width="100%" />
           <div class="card-body">
            <h3 class="card-title">${listingData.title}</h3>
            <p class="card-text">Bids: ${listingData._count.bids}<br>Auction ends: ${convertDate}</p>
          </div>
        </div>
      </a>
    </div>`;
}
