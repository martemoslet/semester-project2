const profileContainer = document.querySelector("#userprofile");
import { missingImg } from "../api/constants.mjs";

/**
 * This function is a template for how the users profile
 * will look like on the page
 * @param {object} profile contains the users data
 * @returns
 */

export function userProfileTemplate(profile) {
  if (profileContainer) {
    return (profileContainer.innerHTML += `
        <div class="container">
            <div class="row">
                <div class="col col-12 mb-3 pt-2">
                    <h1 class="text-center pt-2 pb-4">Profile</h1>
                    <div class="card-body d-flex justify-content-center">
                    <img class="profile-img col-1 me-3" src="${profile.avatar}" alt="Profile image" onerror="this.onerror=null; this.src='${missingImg}'" />
                    <div class="card-text">
                    <h2>${profile.name}</h2>
                    <p>${profile.email}</p>
                    <p>Credits: ${profile.credits}</p>
                    </div>
                 </div>
             </div>
        </div>
        `);
  }
}
