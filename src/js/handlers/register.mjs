import { register } from "../api/auth/register.mjs";

/**
 * This function will register the user profile
 */

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      await register(profile);
      location.href = "/index.html";
    });
  }
}
