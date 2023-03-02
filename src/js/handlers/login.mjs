import { login } from "../api/auth/login.mjs";

/**
 * This will log the user in to the site
 * using addEventListener on the form
 */

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      await login(profile);
    });
  }
}
