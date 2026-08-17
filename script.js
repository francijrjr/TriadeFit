
const WHATSAPP_NUMBER = "5588921745890";

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

// Lucide icons
if (window.lucide) window.lucide.createIcons();

// Mobile tab-bar menu
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

// Typewriter loop for the skills line under the brand prompt
function initSkillsTyper() {
  const el = document.querySelector(".skills-typed");
  if (!el) return;

  const skills = (el.dataset.skills || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (!skills.length) return;

  if (prefersReducedMotion) {
    el.textContent = skills[0];
    return;
  }

  const TYPE_SPEED = 85;
  const DELETE_SPEED = 40;
  const HOLD_TIME = 1400;
  const NEXT_DELAY = 300;

  let skillIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = skills[skillIndex];

    if (!deleting) {
      charIndex += 1;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex -= 1;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        setTimeout(tick, NEXT_DELAY);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
}

initSkillsTyper();

// Terminal "typed" prompt in the hero
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

// Motion (motion.dev) powers scroll reveals + micro-interactions
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
