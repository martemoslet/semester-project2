export function dateFormat() {
  for (let i = 0; i < listingData.length; i++) {
    const convertDate = new Date(listingData[i].endsAt).toLocaleDateString(
      "en-us",
      { month: "short", day: "numeric" }
    );
  }
  console.log();
}
