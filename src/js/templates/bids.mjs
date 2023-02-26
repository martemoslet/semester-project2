export function seeBids(listingData) {
  for (let i = 0; i < listingData.bids.length; i++) {
    const bidContainer = document.querySelector("#bid-container");
    bidContainer.innerHTML += `
    <div class="col text-center mt-2">

      <p class="bid-amount">${listingData.bids[i].amount}</p>
      <p><strong>${listingData.bids[i].bidderName}</strong></p>

    </div>

    `;
  }
  if (listingData.bids.length === 0) {
    const bidContainer = document.querySelector("#bid-container");
    bidContainer.innerHTML += `<p class="text-center">No bids yet!</p>`;
  }
}
