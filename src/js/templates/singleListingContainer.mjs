import { missingImg } from "../api/constants.mjs";

/**
 * This function is a template for how a single listing
 * will look like on the page
 * @param {object} listingData is the data retrieved from the listing
 * @returns
 */

export function singleListingContainer(listingData) {
  return `
     <div class="container col-12 col-md-7 col-lg-6 mt-3 mb-3">
     <div class="thumbnail">
         <div class="card">
             <img class="" src="${listingData.media}" alt="${listingData.title}" onerror="this.onerror=null; this.src='${missingImg}'" />
             <div class="card-body">
                 <h2 class="card-title">${listingData.title}</h2>
                 <p class="card-text">${listingData.description}</p>
         </div>
     </div>
 </div>`;
}
