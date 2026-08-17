// Informe apenas números, com DDI e DDD. Exemplo: "5588999999999".
const WHATSAPP_NUMBER = "";

const whatsappMessage = encodeURIComponent(
  "Olá, Francinilton! Vi seu portfólio e gostaria de conversar sobre um projeto."
);

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  if (WHATSAPP_NUMBER) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
    link.target = "_blank";
    link.rel = "noreferrer";
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    const note = document.querySelector("[data-whatsapp-note]");
    if (note) note.hidden = false;
  });
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

function closeMenu() {
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menu.classList.toggle("open", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
});

menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.querySelectorAll(".project").forEach((project) => {
  project.style.setProperty("--project-accent", project.dataset.accent);
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}
