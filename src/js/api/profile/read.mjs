import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

/**
 * This will retrieve profile information
 */

export async function getProfiles() {
  const updateProfileURL = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(updateProfileURL);

  return await response.json();
}

/**
 * This will retrieve profile information from a specific user
 * @param {string} name this is the specific user
 */

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get profile requires a name");
  }
  const getProfileURL = `${API_AUCTION_URL}${action}/${name}`;

  const response = await authFetch(getProfileURL);

  const userProfile = await response.json();

  return userProfile;
}
