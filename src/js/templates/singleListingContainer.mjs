import { missingImg } from "../api/constants.mjs";

/**
 * This function is a template for how a single listing
 * will look like on the page
 * @param {object} listingData is the data retrieved from the listing
 * @returns
 */

import { load } from "../storage/index.mjs";

export function singleListingContainer(listingData) {
  const { name } = load("profile");
  return `
     <div class="container col-12 col-md-7 col-lg-6 mt-3 mb-3">
     <div class="thumbnail">
         <div class="card">
            <div class="card-header">${listingData.seller.name}</div>
             <img class="" src="${listingData.media}" alt="${
    listingData.title
  }" onerror="this.onerror=null; this.src='${missingImg}'" />
             <div class="card-body">
                 <h2 class="card-title">${listingData.title}</h2>
                 <p class="card-text">${listingData.description}</p>
                 
                 
         </div>
     </div>
     <div>
     <p class="">Bids: ${listingData._count.bids}</p>
     ${
       listingData._count.bids > 0
         ? `<p class="">Bidding price: ${listingData.bids[0].amount}</p>`
         : ""
     }</div>
     <div>
     ${
       listingData.seller.name === name
         ? `<a class="btn btn-sm btn-primary" id="edit-btn" href="/listing/update/?id=${listingData.id}">Edit</a>`
         : ""
     }
     </div>
 </div>`;
}
