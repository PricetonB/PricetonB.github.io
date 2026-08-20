const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const form = document.getElementById("serviceForm");
const formStatus = document.getElementById("formStatus");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const data = new FormData(form);
  const firstName = data.get("firstName") || "there";

  formStatus.textContent =
    `Thanks, ${firstName}. This demo form is working on the front end. Connect it to your email, CRM, Formspree, Netlify Forms, or your own backend to receive submissions.`;

  form.reset();
});
