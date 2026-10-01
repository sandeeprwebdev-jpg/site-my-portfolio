/* =====================================================
   SANDEEP RAJPUT — PORTFOLIO
   main.js
   ===================================================== */

"use strict";

// ── HAMBURGER MENU ────────────────────────────────
(function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open")
      ? "hidden"
      : "";
  });

  // Close on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
})();

// ── CURSOR GLOW ──────────────────────────────────────
(function initCursorGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow) return;

  let mouseX = 0,
    mouseY = 0;
  let currentX = 0,
    currentY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";
    requestAnimationFrame(animateGlow);
  }

  animateGlow();
})();

// ── NAV SCROLL EFFECT ──────────────────────────────
(function initNav() {
  const nav = document.querySelector("nav");
  if (!nav) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 30) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    },
    { passive: true },
  );
})();

// ── SMOOTH SCROLL ─────────────────────────────────
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

// ── SCROLL REVEAL ANIMATIONS ───────────────────────
(function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
})();

// ── HERO TYPING EFFECT ─────────────────────────────
(function initTyping() {
  const el = document.querySelector(".hero-role-text");
  if (!el) return;

  const roles = [
    "Full-Stack Web Developer",
    "PHP & Laravel Developer",
    "React.js Developer",
    "MySQL & Backend Developer",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let pauseTimer = null;

  function type() {
    const current = roles[roleIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        pauseTimer = setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    const speed = deleting ? 40 : 70;
    setTimeout(type, speed);
  }

  // Start after a short delay
  setTimeout(type, 1000);
})();

// ── COUNTER ANIMATION ─────────────────────────────
(function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        let start = 0;
        const duration = 1800;
        const startTime = performance.now();

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          start = Math.round(eased * target);
          el.textContent = start + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => observer.observe(c));
})();

// ── ACTIVE NAV LINK ON SCROLL ─────────────────────
(function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const active = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`,
          );
          if (active) active.classList.add("active");
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((s) => observer.observe(s));
})();

// ── PROJECT CARD TILT ────────────────────────────
(function initTilt() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateX = ((y - midY) / midY) * -5;
      const rotateY = ((x - midX) / midX) * 5;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
})();

// ── EMAILJS CONTACT FORM ─────────────────────────
(function initContactForm() {
  // ── REPLACE THESE 3 VALUES AFTER EMAILJS SETUP ──
  const EMAILJS_PUBLIC_KEY = "KORR7OGiKV9aFyu6Z";
  const EMAILJS_SERVICE_ID = "service_2w0cxdk";
  const EMAILJS_TEMPLATE_ID = "template_s79v7gh";
  // ─────────────────────────────────────────────────

  if (typeof emailjs === "undefined") return;
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const btn = document.getElementById("cf-submit");
  const btnText = document.getElementById("cf-btn-text");
  const spinner = document.getElementById("cf-spinner");
  const status = document.getElementById("cf-status");
  const nameEl = document.getElementById("cf-name");
  const emailEl = document.getElementById("cf-email");
  const msgEl = document.getElementById("cf-message");

  if (!btn) return;

  btn.addEventListener("click", function () {
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = msgEl.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      status.textContent = "Please fill in all fields.";
      status.className = "form-status error";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.textContent = "Please enter a valid email address.";
      status.className = "form-status error";
      return;
    }

    // Loading state
    btnText.textContent = "Sending...";
    spinner.style.display = "inline-block";
    btn.disabled = true;
    status.textContent = "";
    status.className = "form-status";

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Sandeep Rajput",
      })
      .then(() => {
        btnText.textContent = "Message Sent!";
        spinner.style.display = "none";
        status.textContent = "Thank you! I will get back to you soon.";
        status.className = "form-status success";
        nameEl.value = "";
        emailEl.value = "";
        msgEl.value = "";
        setTimeout(() => {
          btnText.textContent = "Send Message";
          btn.disabled = false;
          status.textContent = "";
          status.className = "form-status";
        }, 4000);
      })
      .catch(() => {
        btnText.textContent = "Send Message";
        spinner.style.display = "none";
        btn.disabled = false;
        status.textContent = "Something went wrong. Please try again.";
        status.className = "form-status error";
      });
  });
})();

(function initSkillStagger() {
  const cards = document.querySelectorAll(".skill-card");
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });
})();
