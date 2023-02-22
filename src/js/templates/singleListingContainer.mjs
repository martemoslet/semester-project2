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
            <div class="card-header"><img class="seller-img me-2" src="${
              listingData.seller.avatar
            }" alt="${
    listingData.title
  }" onerror="this.onerror=null; this.src='${missingImg}'" />${
    listingData.seller.name
  }</div>
             <img class="" src="${listingData.media}" alt="${
    listingData.title
  }" onerror="this.onerror=null; this.src='${missingImg}'" />
             <div class="card-body">
                 <h2 class="card-title">${listingData.title}</h2>
                 <p class="card-text">${listingData.description}</p>
                 <p class="card-text">Auction ends at: ${listingData.endsAt}</p>
         </div>

         <div class="p-3">
         <p class="">Bids: ${listingData._count.bids}</p>
 
         <div class="col p-3">
         ${
           listingData.seller.name !== name
             ? `<a class="btn btn-success btn-color d-flex justify-content-center" id="bid-btn" href="/listing/bid/?id=${listingData.id}">Bit on item</a>`
             : ""
         }
        </div>

         <div class="col">
        ${
          listingData.seller.name === name
            ? `<a class="btn btn-sm btn-danger btn-color" id="edit-btn" href="/listing/update/?id=${listingData.id}">Edit listing</a>`
            : ""
        }
        </div>
        


     </div>
     

     
 </div>`;
}
