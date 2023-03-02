import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * This will log in the user and save the access token
 * @param {object} profile is the profile information
 */

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);
  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", user);
  if (response.status === 200) {
    alert("You are now logged in");
    location.href = "/home/";
  } else {
    alert("Wrong email or password");
    storage.remove("token");
    storage.remove("profile");
  }
}
