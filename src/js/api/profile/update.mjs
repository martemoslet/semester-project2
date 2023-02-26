import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "put";

/**
 * This will update the profile data for a specific user
 * @param {object} profileData is the data that can be updated
 * @returns
 */

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }
  const updateProfileURL = `${API_AUCTION_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });
  if (response.status === 200 || 204) {
    alert("Avatar updated");
    location.href = "/profile/";
    return await response.json();
  } else {
    alert("Something went wrong");
  }
}
