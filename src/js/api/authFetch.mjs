import { load } from "../storage/index.mjs";

/**
 * This contains the headers of the authorized API call
 * and retrieves the access token
 */

export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * This will send an authorized API call
 * @param {string} url this is the URL for the request
 * @param options this is the options for the request
 */

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
