const btn = document.querySelector(".btn-submit");
const email = document.querySelector(".input-email");
const error = document.querySelector(".error");

btn.addEventListener("click", () => {
  if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email.value)) {
    if (error.classList.contains("show")) return;
    email.classList.toggle("no-margin");
    error.classList.toggle("show");
  }
});
