import { remove } from "../storage/index.mjs";

/**
 * This will log the user out of the site
 * using addEventListener on the button
 */

export function logout() {
  const logoutbtn = document.querySelector("#logout");

  if (logoutbtn) {
    logoutbtn.addEventListener("click", (event) => {
      event.preventDefault();
      remove("token");
      remove("profile");
      location.href = "/index.html";
    });
  }
}
