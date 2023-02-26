import { API_AUCTION_URL } from "../constants.mjs";
import { login } from "./login.mjs";

/**
 * This will register the user
 * @param {object} profile is the profile information
 */

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });
  const result = await response.json();
  if (response.status === 201 || 204) {
    alert("Registration successful");
    login(profile);
    return result;
  } else {
    alert("Something went wrong");
  }
}
