import { getProfile, updateProfile } from "../api/profile/index.mjs";

import { load } from "../storage/index.mjs";

/**
 * This function will update the profile avatar of the user
 * The button is disabled until the form has loaded
 */

export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = load("profile");
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.avatar.value = profile.avatar;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;
      await updateProfile(profile);
    });
  }
}
