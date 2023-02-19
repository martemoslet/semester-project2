import { remove } from "../storage/index.mjs";

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
