/* =====================================================================
   PORTFOLIO — script.js
   ---------------------------------------------------------------------
   1) EDIT THE `CONFIG` OBJECT BELOW to change your name, photos, text,
      projects, videos, services and contact details.
      You never need to touch index.html for content.
   2) Put your files in the /assets folder:
        assets/images/profile.jpg
        assets/images/design-1.jpg ... thumbnail-1.jpg ...
        assets/videos/video-1.mp4 ...
      Until a file exists, a colourful placeholder is shown automatically
      (so nothing ever looks broken while you set things up).
   ===================================================================== */

const CONFIG = {
  /* ---------- Identity ---------- */
  name: "Navdeep Yadav",                       // <- YOUR FULL NAME
  title: "Graphic Designer & Video Editor",  // <- YOUR PROFESSIONAL TITLE
  availability: "Available for new projects",
  headline: "Turning Ideas Into",            // big hero headline (first part)
  headlineAccent: "Visual Experiences.",     // gradient part of the headline
  intro:
    "I design scroll-stopping thumbnails, brands and campaigns, then bring them to life with sharp edits, motion and sound. Let's make your content impossible to ignore.",
  profilePhoto: "navdeep.PNG", // <- hero portrait (portrait 4:5 works best)
  aboutPhoto: "navdeep.PNG",   // <- about photo (can be a different image)

  /* ---------- Contact ---------- */
  email: "navdeep26yadav@gmail.com",
  phone: "7017543035",
  whatsapp: "917017543035",                 // digits only, with country code (91 = India), no + or spaces
  whatsappMessage: "Hi! I saw your portfolio and I'd like to talk about a project.",
  social: {
  },

  /* ---------- Contact form ----------
     Paste your Formspree endpoint here, e.g. "https://formspree.io/f/abcdwxyz"
     (create a free form at https://formspree.io). Leave "" to use the
     fallback: the form opens the visitor's email app with the message filled in. */
  formEndpoint: "",

  /* ---------- Footer ---------- */
  footerText: "© " + new Date().getFullYear() + " Navdeep Yadav. Crafted with care.",

  /* ---------- About ---------- */
  stickerText: "CREATE • DESIGN • EDIT • ",
  bio: [
    "I'm a graphic designer and video editor obsessed with the details that make audiences stop scrolling and start watching.",
    "Over the years I've worked with YouTubers, startups, local businesses and agencies, shaping everything from channel branding to full promo campaigns. I combine bold visual design with tight, story-driven editing.",
    "Whether it's a thumbnail that doubles your click-through rate or a cinematic edit with custom motion graphics, I treat every project like it's my own brand.",
  ],
  // Animated counters (value counts up from 0 when scrolled into view)
 
  badges: ["DaVinci Resolve", "Color Grading", "Sound Design", "Typography", "Storyboarding", "Brand Identity", "Motion Design", "Thumbnails that convert"],
  philosophy: [
    { title: "Story first", text: "Every frame and every pixel serves the message. I start with the idea, then pick the tools." },
    { title: "Bold & clear", text: "Strong contrast, confident type and a single focal point so your work reads in half a second." },
    { title: "Rhythm matters", text: "Great edits have a pulse. I cut to the beat of the story, music and audience attention." },
    { title: "Made to perform", text: "Designs are tested against real metrics: clicks, watch-time and recall, not just good looks." },
  ],

  /* ---------- Hero marquee ---------- */
  marquee: ["Graphic Design", "YouTube Thumbnails", "Motion Graphics", "Social Media", "Reels & Shorts"],

 
/* ---------- Graphic design portfolio ---------- */

categories: [
    { id: "all", label: "All" },
    { id: "thumbnails", label: "Thumbnails" },
],

designs: [
    {
        title: "Elon Musk Exposed",
        category: "thumbnails",
        size: "big",
        image: "1.PNG",
        description: "A dramatic split-face composition with bold distressed typography, red lighting and powerful storytelling."
    },
    {
        title: "Aarya Masoom Sharma",
        category: "thumbnails",
        size: "normal",
        image: "2.PNG",
        description: "A creator thumbnail featuring expressive portraits, layered photo frames and bold yellow-white typography."
    },
    {
        title: "Healthy or Poison?",
        category: "thumbnails",
        size: "normal",
        image: "3.PNG",
        description: "A health-focused thumbnail combining dramatic expressions, supplement visuals and striking red-white typography."
    },
      {
        title: "Political Accountability",
        category: "thumbnails",
        size: "wide",
        image: "11.PNG",
        description: "A political commentary design with crowd imagery, a prominent speaker and distressed headline typography."
    },
    {
        title: "Rahul Gandhi at Jantar Mantar",
        category: "thumbnails",
        size: "wide",
        image: "9.PNG",
        description: "A political news thumbnail featuring a reporter, protest visuals and layered photo compositions."
    },
    {
        title: "Neta Ke Paaltu?",
        category: "thumbnails",
        size: "normal",
        image: "4.PNG",
        description: "A political commentary thumbnail with contrasting portraits, emotional storytelling and bold yellow-white text."
    },
    {
        title: "300 FT Tsunami",
        category: "thumbnails",
        size: "wide",
        image: "5.PNG",
        description: "A cinematic disaster thumbnail featuring a massive ocean vortex, dramatic atmosphere and vibrant orange typography."
    },
    {
        title: "Invisible Danger",
        category: "thumbnails",
        size: "normal",
        image: "6.PNG",
        description: "An environmental concept thumbnail with a giant ocean vortex, deep contrast and bold red-white lettering."
    },
    {
        title: "Delhi Pollution",
        category: "thumbnails",
        size: "normal",
        image: "7.PNG",
        description: "A news-style thumbnail highlighting air pollution through a gas mask, political imagery and intense red-black tones."
    },
    {
        title: "Bangladesh Political Crisis",
        category: "thumbnails",
        size: "wide",
        image: "8.PNG",
        description: "A dramatic political news thumbnail using protest imagery, expressive portraits and bold Hindi typography."
    },
    {
        title: "Gyanesh Kumar Controversy",
        category: "thumbnails",
        size: "wide",
        image: "10.PNG",
        description: "A political commentary thumbnail combining a prominent speaker, protest background and striking red-yellow typography."
    }
  
],


  /* ---------- Video portfolio ----------
     type: "mp4"     -> src is a local file path (e.g. "assets/videos/video-1.mp4") or any direct .mp4 URL
     type: "youtube" -> src is any YouTube link (watch, youtu.be, shorts or embed)
     thumb: cover image. For YouTube you can leave thumb "" and the YouTube thumbnail is used. */
  videos: [
    { title: "Cinematic Brand Film", category: "Cinematic", type: "mp4", src: "assets/videos/video-1.mp4", thumb: "assets/images/video-thumb-1.jpg", duration: "01:24", description: "Colour-graded brand story with sound design and custom transitions." },
    { title: "YouTube Documentary Edit", category: "YouTube", type: "youtube", src: "https://www.youtube.com/watch?v=aqz-KE-bpKQ", thumb: "", duration: "10:02", description: "Long-form edit with pacing, B-roll, captions and retention hooks. (Replace this sample YouTube link with yours.)" },
    { title: "Fashion Reel", category: "Reels", type: "mp4", src: "assets/videos/video-2.mp4", thumb: "assets/images/video-thumb-2.jpg", duration: "00:30", description: "Beat-synced vertical edit made for Instagram and TikTok." },
    { title: "Product Promo", category: "Promo", type: "mp4", src: "assets/videos/video-3.mp4", thumb: "assets/images/video-thumb-3.jpg", duration: "00:45", description: "Fast, punchy launch video with kinetic typography." },
    { title: "Logo Reveal & Motion Pack", category: "Motion Graphics", type: "mp4", src: "assets/videos/video-4.mp4", thumb: "assets/images/video-thumb-4.jpg", duration: "00:12", description: "After Effects animated identity, lower-thirds and transitions." },
  ],

  /* ---------- Services ----------
     icon must be one of: design, thumbnail, video, social, logo, motion */
  services: [
    { icon: "design", title: "Graphic Design", text: "Posters, banners, print and digital layouts with a strong visual voice." },
    { icon: "thumbnail", title: "YouTube Thumbnails", text: "Click-worthy thumbnails designed to boost CTR and match your channel brand." },
    { icon: "social", title: "Social Media Creatives", text: "Consistent posts, carousels, stories and reels that grow your audience." },
    { icon: "logo", title: "Logo & Brand Identity", text: "Memorable logos, colour systems and guidelines you can scale." },
    { icon: "motion", title: "Motion Graphics", text: "Animated logos, titles, explainers and transitions that add polish." },
  ],
};

/* =====================================================================
   Everything below renders the CONFIG into the page. You normally don't
   need to edit anything below this line.
   ===================================================================== */
(() => {
  "use strict";

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const root = document.documentElement;

  /** Create an element: h("div", {class:"x", text:"Hi"}, [children]) — uses textContent so config text is always safe. */
  function h(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === undefined || v === null || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k === "html") node.innerHTML = v; // only used with trusted, hard-coded strings
      else node.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach((c) => c && node.append(c));
    return node;
  }

  const xmlEsc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const hashHue = (s) => Array.from(String(s)).reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 40);

  /** Colourful SVG placeholder (data URI) used whenever an image file is missing. */
  function placeholder(label, w = 800, h = 600) {
    const hue = hashHue(label);
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
      `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${hue} 80% 48%)"/><stop offset="1" stop-color="hsl(${(hue + 70) % 360} 85% 22%)"/></linearGradient></defs>` +
      `<rect width="100%" height="100%" fill="url(#g)"/>` +
      `<circle cx="${w * 0.82}" cy="${h * 0.2}" r="${h * 0.26}" fill="hsl(${(hue + 140) % 360} 90% 60%)" opacity=".35"/>` +
      `<circle cx="${w * 0.15}" cy="${h * 0.85}" r="${h * 0.18}" fill="#fff" opacity=".12"/>` +
      `<text x="50%" y="50%" fill="#fff" fill-opacity=".9" font-family="Arial,sans-serif" font-size="${Math.round(w / 18)}" font-weight="700" text-anchor="middle" dominant-baseline="middle">${xmlEsc(label)}</text>` +
      `<text x="50%" y="${h * 0.6}" fill="#fff" fill-opacity=".55" font-family="Arial,sans-serif" font-size="${Math.round(w / 34)}" text-anchor="middle">Replace with your image</text></svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  /** <img> that swaps to a placeholder if the file is missing. */
  function makeImg(src, alt, label, w = 800, hgt = 600) {
    const img = h("img", { alt, width: w, height: hgt, loading: "lazy", decoding: "async" });
    img.addEventListener(
      "error",
      () => {
        img.src = placeholder(label || alt, w, hgt);
      },
      { once: true }
    );
    img.src = src || placeholder(label || alt, w, hgt);
    return img;
  }

  function portraitPlaceholder(name) {
    const initials = name.split(/\s+/).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
    return placeholder(initials || "ME", 800, 1000);
  }
  function makePortrait(src, name) {
    const img = h("img", { alt: `Portrait of ${name}`, width: 800, height: 1000, decoding: "async" });
    img.addEventListener("error", () => (img.src = portraitPlaceholder(name)), { once: true });
    img.src = src || portraitPlaceholder(name);
    return img;
  }

  /* ---------- Icons (inline SVG) ---------- */
  const svg = (inner) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
  const ICONS = {
    design: svg('<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>'),
    thumbnail: svg('<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M10 9.5v4l3.5-2-3.5-2z"/><path d="M7 21h10"/>'),
    video: svg('<rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/>'),
    social: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>'),
    logo: svg('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 8l4 2.3v4.4L12 17l-4-2.3v-4.4z"/>'),
    motion: svg('<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>'),
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
    phone: svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>'),
    instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>'),
    behance: svg('<path d="M3 6h6a3 3 0 010 6H3zM3 12h7a3 3 0 010 6H3zM14 8h7M14.5 15a3 3 0 006 0 3 3 0 00-6 0h6"/>'),
    linkedin: svg('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>'),
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z"/></svg>',
  };

  /* =====================================================================
     RENDER CONTENT FROM CONFIG
     ===================================================================== */
  function renderMeta() {
    document.title = `${CONFIG.name} — ${CONFIG.title}`;
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", `${CONFIG.name}: ${CONFIG.title}. ${CONFIG.intro}`);
    $("#navLogoText").textContent = CONFIG.name;
    $("#footerText").textContent = CONFIG.footerText;
  }

  function renderHero() {
    $("#heroName").textContent = CONFIG.name;
    $("#heroAvail").textContent = CONFIG.availability;
    $("#heroRole").textContent = CONFIG.title;
    $("#heroIntro").textContent = CONFIG.intro;

    // Headline: split into words so each can slide up on page load
    const title = $("#heroTitle");
    title.setAttribute("aria-label", `${CONFIG.headline} ${CONFIG.headlineAccent}`);
    let i = 0;
    const addWords = (text, accent) => {
      text.split(/\s+/).filter(Boolean).forEach((w) => {
        const word = h("span", { class: "word" + (accent ? " word--accent" : ""), "aria-hidden": "true", style: `--i:${i++}` }, h("span", { text: w }));
        title.append(word, document.createTextNode(" "));
      });
    };
    addWords(CONFIG.headline, false);
    addWords(CONFIG.headlineAccent, true);

    $("#heroPhoto").append(makePortrait(CONFIG.profilePhoto, CONFIG.name));

    // Marquee: duplicate the list so the loop is seamless (-50% translate)
    const track = $("#marqueeTrack");
    const buildSet = () => {
      const set = h("div", { class: "marquee__item-set", style: "display:flex" });
      CONFIG.marquee.forEach((t) => set.append(h("span", { class: "marquee__item" }, [document.createTextNode(t), h("i", { text: "✦" })])));
      return set;
    };
    track.append(buildSet(), buildSet());
  }

 
function renderAbout() {
  $("#aboutPhoto").append(
    makePortrait(CONFIG.aboutPhoto, CONFIG.name)
  );

  $("#stickerText").textContent = CONFIG.stickerText;

  const bio = $("#aboutBio");

  CONFIG.bio.forEach((p) => {
    bio.append(h("p", { text: p }));
  });
}


  /* ---------- Graphic design gallery + lightbox ---------- */
  const gallery = { cards: [], visible: [], current: 0, lastFocus: null };

  function renderGallery() {
    const filters = $("#filters");
    const grid = $("#gallery");
    const catLabel = (id) => (CONFIG.categories.find((c) => c.id === id) || { label: id }).label;

    CONFIG.categories.forEach((c, i) => {
      const btn = h("button", { class: "filter", type: "button", "data-filter": c.id, "aria-pressed": i === 0 ? "true" : "false", text: c.label });
      filters.append(btn);
    });

    CONFIG.designs.forEach((d, idx) => {
      const card = h("button", { class: `card card--${d.size || "normal"}`, type: "button", "data-cat": d.category, "data-cursor": "View", "aria-label": `View project: ${d.title}` }, [
        makeImg(d.image, d.title, d.title, 800, 800),
        h("span", { class: "card__zoom", "aria-hidden": "true", text: "+" }),
        h("div", { class: "card__overlay" }, [h("span", { class: "card__tag", text: catLabel(d.category) }), h("h3", { class: "card__title", text: d.title }), h("p", { class: "card__desc", text: d.description })]),
      ]);
      card.dataset.index = idx;
      card.addEventListener("click", () => openLightbox(card));
      grid.append(card);
      gallery.cards.push(card);
    });
    gallery.visible = gallery.cards.slice();

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      $$(".filter", filters).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      applyFilter(btn.dataset.filter);
    });
  }

  function applyFilter(cat) {
    let n = 0;
    gallery.cards.forEach((card) => {
      const show = cat === "all" || card.dataset.cat === cat;
      card.hidden = !show;
      card.classList.remove("pop");
      if (show) {
        card.style.setProperty("--d", n++ * 0.05 + "s");
        void card.offsetWidth; // restart the pop animation
        if (!reduced) card.classList.add("pop");
      }
    });
    gallery.visible = gallery.cards.filter((c) => !c.hidden);
    $("#galleryEmpty").hidden = gallery.visible.length > 0;
  }

  const lb = { el: null };
  function openLightbox(card) {
    gallery.current = gallery.visible.indexOf(card);
    gallery.lastFocus = card;
    fillLightbox();
    openModal($("#lightbox"));
  }
  function fillLightbox() {
    const card = gallery.visible[gallery.current];
    if (!card) return;
    const d = CONFIG.designs[Number(card.dataset.index)];
    const cat = (CONFIG.categories.find((c) => c.id === d.category) || { label: d.category }).label;
    const holder = $("#lbImg");
    holder.replaceChildren(makeImg(d.image, d.title, d.title, 1400, 1000));
    holder.firstChild.loading = "eager";
    $("#lbCat").textContent = cat;
    $("#lbTitle").textContent = d.title;
    $("#lbDesc").textContent = d.description;
    $("#lbCount").textContent = `${gallery.current + 1} / ${gallery.visible.length}`;
    const single = gallery.visible.length < 2;
    $("#lbPrev").hidden = single;
    $("#lbNext").hidden = single;
  }
  function stepLightbox(dir) {
    const n = gallery.visible.length;
    if (n < 2) return;
    gallery.current = (gallery.current + dir + n) % n;
    fillLightbox();
  }

  /* ---------- Video gallery + modal ---------- */
  function youtubeId(url) {
    const m = String(url).match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|v\/))([\w-]{11})/);
    return m ? m[1] : null;
  }

  function renderVideos() {
    const grid = $("#vgrid");
    CONFIG.videos.forEach((v, idx) => {
      const ytId = v.type === "youtube" ? youtubeId(v.src) : null;
      const thumb = v.thumb || (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : "");
      const card = h("button", { class: "vcard", type: "button", "data-cursor": "Play", "aria-label": `Play video: ${v.title}` }, [
        h("div", { class: "vcard__frame" }, [
          makeImg(thumb, v.title, v.title, 1280, 720),
          h("div", { class: "vcard__shade", "aria-hidden": "true" }),
          h("div", { class: "vcard__meta", "aria-hidden": "true" }, [h("span", { text: v.category }), h("span", { text: v.duration || "" })]),
          h("span", { class: "play", "aria-hidden": "true", html: ICONS.play }),
        ]),
        h("div", { class: "vcard__info" }, [
          h("span", { class: "vcard__num", "aria-hidden": "true", text: String(idx + 1).padStart(2, "0") }),
          h("div", {}, [h("h3", { class: "vcard__title", text: v.title }), h("p", { class: "vcard__desc", text: v.description })]),
        ]),
      ]);
      card.classList.add("reveal");
      card.style.setProperty("--d", (idx % 2) * 0.1 + "s");
      card.addEventListener("click", () => openVideo(v, card));
      grid.append(card);
    });
  }

  function openVideo(v, trigger) {
    const player = $("#vPlayer");
    player.replaceChildren();
    const ytId = v.type === "youtube" ? youtubeId(v.src) : null;

    if (v.type === "youtube") {
      if (ytId) {
        player.append(h("iframe", {
          src: `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`,
          title: v.title,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
          allowfullscreen: "",
          referrerpolicy: "strict-origin-when-cross-origin",
        }));
      } else {
        player.append(h("div", { class: "player-msg" }, [h("b", { text: "That YouTube link isn't valid" }), document.createTextNode("Check the video's src in CONFIG.videos (watch, youtu.be, shorts or embed links work).")]));
      }
    } else {
      const video = h("video", { controls: "", playsinline: "", autoplay: "", preload: "metadata" });
      if (v.thumb) video.setAttribute("poster", v.thumb);
      video.src = v.src;
      video.addEventListener("error", () => {
        player.replaceChildren(h("div", { class: "player-msg" }, [h("b", { text: "Video file not found" }), document.createTextNode(`Add your MP4 at "${v.src}" (see CONFIG.videos in script.js).`)]));
      }, { once: true });
      player.append(video);
    }

    $("#vCat").textContent = v.category;
    $("#vTitle").textContent = v.title;
    $("#vDesc").textContent = v.description;
    openModal($("#vmodal"), trigger, () => player.replaceChildren()); // clearing stops playback
  }

  /* ---------- Generic modal handling (focus trap, Esc, backdrop) ---------- */
  let activeModal = null;
  function openModal(el, returnFocusTo, onClose) {
    activeModal = { el, returnFocusTo: returnFocusTo || gallery.lastFocus || document.activeElement, onClose };
    el.hidden = false;
    document.body.classList.add("modal-open");
    const first = $("[data-close].icon-btn", el) || el;
    setTimeout(() => first.focus(), 30);
  }
  function closeModal() {
    if (!activeModal) return;
    const { el, returnFocusTo, onClose } = activeModal;
    el.hidden = true;
    document.body.classList.remove("modal-open");
    if (onClose) onClose();
    activeModal = null;
    if (returnFocusTo && returnFocusTo.focus) returnFocusTo.focus({ preventScroll: true });
  }
  function initModals() {
    $$("[data-close]").forEach((b) => b.addEventListener("click", closeModal));
    $("#lbPrev").addEventListener("click", () => stepLightbox(-1));
    $("#lbNext").addEventListener("click", () => stepLightbox(1));

    document.addEventListener("keydown", (e) => {
      if (!activeModal) return;
      if (e.key === "Escape") return closeModal();
      if (activeModal.el.id === "lightbox") {
        if (e.key === "ArrowLeft") stepLightbox(-1);
        if (e.key === "ArrowRight") stepLightbox(1);
      }
      if (e.key === "Tab") {
        const f = $$('button:not([hidden]), a[href], iframe, video[controls], [tabindex]:not([tabindex="-1"])', activeModal.el).filter((n) => n.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Touch swipe on the lightbox
    let sx = null;
    const lbEl = $("#lightbox");
    lbEl.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    lbEl.addEventListener("touchend", (e) => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 60) stepLightbox(dx < 0 ? 1 : -1);
      sx = null;
    });
  }

  /* ---------- Services ---------- */
  function renderServices() {
    const grid = $("#servicesGrid");
    CONFIG.services.forEach((s, i) => {
      const card = h("article", { class: "service reveal", style: `--d:${(i % 3) * 0.1}s` }, [
        h("span", { class: "service__n", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        h("div", { class: "service__icon", html: ICONS[s.icon] || ICONS.design }),
        h("h3", { text: s.title }),
        h("p", { text: s.text }),
      ]);
      // Spotlight follows the pointer
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      });
      grid.append(card);
    });
  }

  /* ---------- Contact details ---------- */
  function renderContact() {
    const list = $("#contactList");
    const item = (icon, label, value, href) =>
      h("li", {}, h("a", { class: "contact__item", href }, [h("span", { html: ICONS[icon], style: "display:contents" }), h("div", {}, [h("small", { text: label }), h("span", { text: value })])]));
    list.append(item("mail", "Email", CONFIG.email, `mailto:${CONFIG.email}`));
    list.append(item("phone", "Phone", CONFIG.phone, `tel:${CONFIG.phone.replace(/[^\d+]/g, "")}`));

    $("#whatsappBtn").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage || "")}`;

    const socials = $("#socials");
    const labels = { instagram: "Instagram", behance: "Behance", linkedin: "LinkedIn" };
    Object.entries(CONFIG.social).forEach(([key, url]) => {
      if (!url) return;
      socials.append(h("li", {}, h("a", { href: url, target: "_blank", rel: "noopener noreferrer", "aria-label": `${labels[key] || key} (opens in a new tab)`, html: `${ICONS[key] || ""}<span>${labels[key] || key}</span>` })));
    });
  }

  /* ---------- Contact form: validation + sending ---------- */
  function initForm() {
    const form = $("#contactForm");
    const status = $("#formStatus");
    const btn = $("#formBtn");
    const btnText = $("#formBtnText");
    const rules = {
      name: (v) => (v.trim().length < 2 ? "Please enter your name (at least 2 characters)." : ""),
      email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "Please enter a valid email address." : ""),
      subject: (v) => (v.trim().length < 3 ? "Please add a short subject." : ""),
      message: (v) => (v.trim().length < 10 ? "Your message should be at least 10 characters." : ""),
    };
    const ids = { name: "fName", email: "fEmail", subject: "fSubject", message: "fMessage" };

    function validateField(key) {
      const input = $("#" + ids[key]);
      const field = input.closest(".field");
      const msg = rules[key](input.value);
      field.classList.toggle("is-invalid", !!msg);
      field.classList.toggle("is-valid", !msg);
      input.setAttribute("aria-invalid", String(!!msg));
      $("#" + ids[key] + "Err").textContent = msg;
      return !msg;
    }
    const setStatus = (type, text) => {
      status.className = "form__status" + (type ? " is-" + type : "");
      status.textContent = text;
    };

    Object.keys(ids).forEach((k) => {
      const input = $("#" + ids[k]);
      input.addEventListener("blur", () => validateField(k));
      input.addEventListener("input", () => { if (input.closest(".field").classList.contains("is-invalid")) validateField(k); });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      setStatus("", "");
      const results = Object.keys(ids).map(validateField);
      if (results.includes(false)) {
        setStatus("error", "Please fix the highlighted fields and try again.");
        const bad = $(".is-invalid input, .is-invalid textarea", form);
        if (bad) bad.focus();
        return;
      }
      const data = new FormData(form);
      if (data.get("_gotcha")) return; // bot caught by honeypot

      if (CONFIG.formEndpoint) {
        btn.classList.add("is-loading");
        btnText.textContent = "Sending…";
        try {
          const res = await fetch(CONFIG.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
          if (!res.ok) throw new Error("Request failed with status " + res.status);
          form.reset();
          $$(".field", form).forEach((f) => f.classList.remove("is-valid", "is-invalid"));
          setStatus("success", "Thanks! Your message has been sent. I'll reply within 24 hours.");
        } catch (err) {
          setStatus("error", `Sorry, something went wrong. Please try again or email me directly at ${CONFIG.email}.`);
        } finally {
          btn.classList.remove("is-loading");
          btnText.textContent = "Send Message";
        }
      } else {
        // No backend connected: open the visitor's email app with everything filled in.
        const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
        const url = `mailto:${CONFIG.email}?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;
        setStatus("info", "Opening your email app to send this message. (Site owner: connect Formspree in CONFIG.formEndpoint to receive messages directly.)");
        window.location.href = url;
      }
    });
  }

  /* =====================================================================
     INTERACTIONS
     ===================================================================== */

  /* ---------- Page intro ---------- */
  function runLoader() {
    const loader = $("#loader");
    const num = $("#loaderNum");
    const bar = $("#loaderBar");
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      loader.classList.add("is-done");
      document.body.classList.remove("is-loading");
      root.classList.add("is-ready");
      setTimeout(() => loader.remove(), 1100);
    };
    const dur = reduced ? 250 : 1500;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      num.textContent = Math.round(eased * 100);
      bar.style.transform = `scaleX(${eased})`;
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(finish, 250);
    };
    requestAnimationFrame(tick);
    setTimeout(finish, 4000); // safety net so the loader can never get stuck
  }

  /* ---------- Scroll reveal, skill bars, counters ---------- */
  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("is-visible")); runCounters(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-visible");
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach((i) => io.observe(i));

    // Counters start when the stats block is visible (only if the page has one)
    const stats = $("#stats");
    if (stats) {
      const cio = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { runCounters(); cio.disconnect(); }
      }, { threshold: 0.4 });
      cio.observe(stats);
    }
  }

  function runCounters() {
    $$("[data-count]").forEach((el) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      if (reduced) { el.textContent = target + suffix; return; }
      const dur = 1800;
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 4)) * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  /* ---------- Navigation: mobile menu, active link, scrolled state ---------- */
  function initNav() {
    const toggle = $("#navToggle");
    const setMenu = (open) => {
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
    $$(".nav__link, .nav__logo").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
    window.matchMedia("(min-width: 861px)").addEventListener("change", (m) => { if (m.matches) setMenu(false); });

    // Active link follows the section currently in the middle of the viewport
    const links = $$(".nav__link");
    const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const so = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => {
          const active = l.getAttribute("href") === "#" + en.target.id;
          l.classList.toggle("is-active", active);
          if (active) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => so.observe(s));
  }

  /* ---------- Scroll progress, nav background, back-to-top ---------- */
  function initScroll() {
    const bar = $("#progressBar");
    const nav = $("#nav");
    const top = $("#toTop");
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      nav.classList.toggle("is-scrolled", y > 30);
      top.classList.toggle("is-visible", y > 700);
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update);
    update();
    top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }));
  }

  /* ---------- Custom cursor (desktop with a mouse only) ---------- */
  function initCursor() {
    if (!finePointer || reduced) return;
    const dot = $("#cursorDot");
    const ring = $("#cursorRing");
    const label = $("#cursorLabel");
    root.classList.add("has-cursor");
    let mx = 0, my = 0, rx = 0, ry = 0, started = false;

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      if (!started) { started = true; rx = mx; ry = my; root.classList.add("cursor-on"); }
    }, { passive: true });
    document.addEventListener("mouseleave", () => root.classList.remove("cursor-on"));
    document.addEventListener("mouseenter", () => started && root.classList.add("cursor-on"));

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    document.addEventListener("mouseover", (e) => {
      const labelled = e.target.closest("[data-cursor]");
      const interactive = e.target.closest("a, button, input, textarea, .badge-pill");
      root.classList.toggle("cursor-label", !!labelled);
      root.classList.toggle("cursor-hover", !!interactive && !labelled);
      label.textContent = labelled ? labelled.dataset.cursor : "";
    });
  }

  /* ---------- Magnetic buttons ---------- */
  function initMagnetic() {
    if (!finePointer || reduced) return;
    $$("[data-magnetic]").forEach((el) => {
      const strength = el.classList.contains("to-top") ? 0.4 : 0.3;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--bx", (e.clientX - (r.left + r.width / 2)) * strength + "px");
        el.style.setProperty("--by", (e.clientY - (r.top + r.height / 2)) * strength + "px");
      });
      el.addEventListener("mouseleave", () => { el.style.setProperty("--bx", "0px"); el.style.setProperty("--by", "0px"); });
    });
  }

  /* ---------- Hero parallax on floating shapes ---------- */
  function initParallax() {
    if (!finePointer || reduced) return;
    const hero = $("#home");
    const shapes = $$(".shape", hero);
    let raf = null;
    hero.addEventListener("mousemove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const cx = e.clientX / window.innerWidth - 0.5;
        const cy = e.clientY / window.innerHeight - 0.5;
        shapes.forEach((s) => {
          const d = Number(s.dataset.depth || 20);
          s.style.setProperty("--px", cx * d + "px");
          s.style.setProperty("--py", cy * d + "px");
        });
        raf = null;
      });
    });
  }

  /* =====================================================================
     INIT
     ===================================================================== */
  function init() {
    renderMeta();
    renderHero();
    renderAbout();
    renderGallery();

    renderServices();
    renderContact();
    initModals();

    runLoader();
    initNav();
    initScroll();
    initReveal(); // after all dynamic content exists
    initCursor();
    initMagnetic();
    initParallax();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();