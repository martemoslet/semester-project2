import router from "./router.mjs";
import * as storage from "./storage/index.mjs";
import { getProfile } from "./api/profile/read.mjs";
import { logout } from "./handlers/logout.mjs";
import * as templates from "./templates/index.mjs";

const profile = storage.load("profile");

async function userProfile() {
  const userName = await getProfile(`${profile.name}`);
  templates.userProfileTemplate(userName);
}
userProfile();

logout();

router();
