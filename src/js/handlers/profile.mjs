import * as storage from "../storage/index.mjs";
import { getProfile } from "../api/profile/read.mjs";
import * as templates from "../templates/index.mjs";

/**
 * This function will show the users profile with the profile template
 */

const profile = storage.load("profile");

export async function userProfile() {
  const userName = await getProfile(`${profile.name}`);
  templates.userProfileTemplate(userName);
}
