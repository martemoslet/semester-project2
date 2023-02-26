export function seeBids(listingData) {
  for (let i = 0; i < listingData.bids.length; i++) {
    const bidContainer = document.querySelector("#bid-container");
    bidContainer.innerHTML += `
    <div class="col d-flex justify-content-center">

    <p>${listingData.bids[i].bidderName} | ${listingData.bids[i].amount}</p>

    `;
  }
}
