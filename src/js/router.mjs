import * as listeners from "./handlers/index.mjs";
import { oneListing, listingsFeed } from "./handlers/index.mjs";
import { listingsFeedFrontPage } from "./templates/frontpage/listingsHandler.mjs";
//import { setupSearch } from "./handlers/search.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
    case "/profile/login/index.html":
    case "/listing/login/":
      listeners.setLoginFormListener();
      break;
    case "/profile/register/":
      listeners.setRegisterFormListener();
      break;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      break;
    case "/index.html":
      listingsFeedFrontPage();
      break;
    case "/home/":
    case "/home/index.html":
      listingsFeed();
      //setupSearch();
      break;
    case "/listing/":
      oneListing();
      listeners.bidOnListingListener();
      listeners.seeBids();
      //listeners.gallery();
      break;
    case "/listing/update/":
      listeners.setUpdateListingListener();
      listeners.setRemoveListingListener();
      break;
    case "/profile/":
      listeners.setCreateListingFormListener();
      break;
  }
}
