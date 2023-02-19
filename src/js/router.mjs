import * as listeners from "./handlers/index.mjs";
import { oneListing, listingsFeed } from "./handlers/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
    case "/profile/login/index.html":
      listeners.setLoginFormListener();
      break;
    case "/profile/register/":
      listeners.setRegisterFormListener();
      break;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      break;
    case "/index.html":
      listingsFeed();
      break;
    case "/listing/":
      oneListing();
      break;
    case "/listing/update/":
      listeners.setUpdateListingListener();
      break;
    case "/profile/":
      listeners.setCreateListingFormListener();
      break;
  }
}
