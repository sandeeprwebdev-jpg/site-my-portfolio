# Sandeep Rajput — Personal Portfolio

> Live portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools — just clean, hand-written code.

🌐 **Live Site:** [sandeeprajputfatuhi-commits.github.io](https://sandeeprajputfatuhi-commits.github.io)

---

## Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — No jQuery, no frameworks
- **EmailJS** — Contact form email integration

---

## Features

- Smooth scroll reveal animations on all sections
- Typing effect in hero section
- Cursor glow effect (desktop)
- 3D tilt effect on project cards
- Hamburger menu for mobile
- Working contact form via EmailJS
- Animated counters
- Active nav link highlight on scroll
- Fully responsive — mobile, tablet, desktop
- Resume download button

---

## Sections

- **Hero** — Name, role, photo, stats, CTA buttons
- **Skills** — Frontend, Backend, Database, DevOps
- **Experience** — Leeoweb Group + L2CL CDC Coaching
- **Projects** — 7 real projects with tech stack and live links
- **Education** — BCA, 12th, 10th, Certification
- **Contact** — Working email form + social links

---

## Project Structure

```
sandeeprajputfatuhi-commits.github.io/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── photo.jpg
    └── Sandeep_Rajput_Resume.pdf
```

---

## Setup

No installation needed. Just clone and open `index.html` in browser.

```bash
git clone https://github.com/sandeeprajputfatuhi-commits/sandeeprajputfatuhi-commits.github.io
cd sandeeprajputfatuhi-commits.github.io
# Open index.html in browser
```

### EmailJS Setup

To enable the contact form:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Connect your Gmail under **Email Services**
3. Create an email template with these variables:
   - `{{from_name}}` — sender name
   - `{{from_email}}` — sender email
   - `{{message}}` — message body
4. Replace these values in `js/main.js`:

```js
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
const EMAILJS_SERVICE_ID  = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
```

---

## Connect

- **LinkedIn:** [linkedin.com/in/sandeep-rajput-880151339](https://www.linkedin.com/in/sandeep-rajput-880151339)
- **GitHub:** [github.com/sandeeprajputfatuhi-commits](https://github.com/sandeeprajputfatuhi-commits)
- **Email:** sandeeprwebdev@gmail.com