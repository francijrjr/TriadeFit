const WHATSAPP_NUMBER = "88 9 21745890";

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

const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();

if (window.lucide) window.lucide.createIcons();

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

function closeMenu() {
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menu.classList.toggle("open", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
});

menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.querySelectorAll(".project").forEach((project) => {
  project.style.setProperty("--project-accent", project.dataset.accent);
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function typeText(el) {
  const text = el.dataset.typed || "";
  if (!text) return;
  if (prefersReducedMotion) {
    el.textContent = text;
    return;
  }
  let i = 0;
  el.textContent = "";
  const interval = setInterval(() => {
    el.textContent = text.slice(0, i + 1);
    i += 1;
    if (i >= text.length) clearInterval(interval);
  }, 90);
}

async function initMotion() {
  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    const typed = document.querySelector(".typed");
    if (typed) typed.textContent = typed.dataset.typed || "";
    return;
  }

  try {
    const { inView, stagger, animate } = await import("https://cdn.jsdelivr.net/npm/motion@11/+esm");

    const typed = document.querySelector(".typed");
    if (typed) typeText(typed);

    inView(
      ".reveal",
      ({ target }) => {
        target.classList.add("visible");
      },
      { amount: 0.15 }
    );

    inView(".skills", () => {
      animate(
        ".skill-card",
        { opacity: [0, 1], y: [24, 0] },
        { delay: stagger(0.1), duration: 0.5, easing: "ease-out" }
      );
    });

    inView(".steps", () => {
      animate(
        ".steps li",
        { opacity: [0, 1], x: [-16, 0] },
        { delay: stagger(0.12), duration: 0.5, easing: "ease-out" }
      );
    });

    document.querySelectorAll(".run-link, .whatsapp-button, .project-symbol").forEach((el) => {
      el.addEventListener("mouseenter", () => animate(el, { scale: 1.05 }, { duration: 0.2 }));
      el.addEventListener("mouseleave", () => animate(el, { scale: 1 }, { duration: 0.2 }));
    });
  } catch (err) {
    // Offline or CDN blocked — fall back to a plain reveal, no hard dependency on Motion.
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    const typed = document.querySelector(".typed");
    if (typed) typeText(typed);
  }
}

initMotion();