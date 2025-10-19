// landing.js — complete with curved Sun icons (no HUD/popup for Sun)
// UPDATED: Fixed image duplication and scrolling issues

window.addEventListener("DOMContentLoaded", () => {
  const space = document.querySelector(".space-environment");
  const astronaut = document.querySelector(".astronaut");

  // ---------- Stars ----------
  function createStars(count = 200) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.classList.add("stars");
      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      const size = Math.random() * 2 + 1;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.animationDuration = (Math.random() * 3 + 2) + "s";
      space.appendChild(star);
    }
  }
  createStars(200);

  // ---------- Nebula ----------
  const nebula1 = document.createElement("div");
  nebula1.className = "nebula nebula-1";
  const nebula2 = document.createElement("div");
  nebula2.className = "nebula nebula-2";
  space.appendChild(nebula1);
  space.appendChild(nebula2);

  // ---------- Planets ----------
  const planet1 = document.createElement("div");
  planet1.className = "planet planet-blue";

  const planet2 = document.createElement("div");
  planet2.className = "planet planet-red";

  const planet3 = document.createElement("div");
  planet3.className = "planet planet-green";

  const planet4 = document.createElement("div");
  planet4.className = "planet planet-earth";

  const planet5 = document.createElement("div");
  planet5.className = "planet planet-sun"; // ☀️ Sun (special behavior)

  // ---------- Popup content (planets 1–4) ----------
  const popupContent = {
    planet1: `
      <div class="aboutme-card">
        <h2>ABOUT ME</h2>
        <div class="hero-badge">
          <span class="badge-icon">🚀</span>
          <span class="badge-text">STUDENT → PROFESSIONAL WEB DEVELOPER</span>
        </div>
        <img src="./assets/fonts/images/cris.jpg" alt="Avatar" class="avatar-img" />
        <div class="tagline">
          <p class="catchphrase">"Coding Today, Building Tomorrow's Digital Universe"</p>
        </div>
        <div class="info">
          <p><strong>NAME:</strong> Cris C. Morcozo</p>
          <p><strong>STATUS:</strong> Aspiring Web Developer | Student</p>
          <p><strong>MISSION:</strong> Transforming ideas into immersive digital experiences through code and creativity.</p>
          <p><strong>VISION:</strong> To become a professional web developer who crafts innovative, user-centered solutions that make an impact.</p>
        </div>
      </div>
    `,
    planet2: `
      <div class="projects-card">
        <h2>PROJECTS</h2>
        <div class="carousel">
          <div class="carousel-track">
            <div class="carousel-item">
              <img class="carousel-img" src="assets/fonts/images/microdave.jpg" alt="Project 1">
              <h3>🎶🎵🎸 MicroDave Studio</h3>
              <p>A modern music studio website that showcases services, events, and bookings.</p>
            </div>
            <div class="carousel-item">
              <img class="carousel-img" src="assets/fonts/images/classnotify.jpg" alt="Project 2">
              <h3>📚📖📝 ClassNotify</h3>
              <p>A student calendar app designed to help manage schedules and class reminders easily.</p>
            </div>
            <div class="carousel-item">
              <img class="carousel-img" src="assets/fonts/images/allinone.jpg" alt="Project 3">
              <h3>📸🕺👠 All-in-One Hub</h3>
              <p>A studio rental platform offering spaces for practice sessions, events, and photoshoots.</p>
            </div>
          </div>
        </div>
      </div>

        <div class="carousel-controls">
          <button class="holo-btn prev">⟵ Prev</button>
          <button class="holo-btn next">Next ⟶</button>
        </div>
      </div>
    `,
planet3: `
      <div class="Project-green">
        <h2>SERVICES</h2>
      </div>
      <div class="service-card">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M9 3v18M3 9h18M3 15h18"/>
          </svg>
        </div>
        <h3>UI/UX Design</h3>
        <p>Intuitive and beautiful interfaces.</p>
      </div>
      <div class="service-card">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3>Graphic Design</h3>
        <p>Branding and marketing visuals.</p>
      </div>
      <div class="service-card">
        <div class="service-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <h3>Web Development</h3>
        <p>High-performance sites & apps.</p>
      </div>
      <div class="contact-quote-box">
        <p class="contact-quote">☀️ Want to Work Together?</p>
        <p class="contact-subtext">
          Looking to connect? Head over to the <strong style="color:#00ff00;">glowing Sun planet</strong> 
          to find all my contact information and social links!
        </p>
        <button class="sun-pointer" onclick="closePopup(); setTimeout(() => document.querySelector('.planet-sun').scrollIntoView({behavior: 'smooth', block: 'center'}), 300);">
          Find Me at the Sun
        </button>
      </div>
    `,
    planet4: `
      <h2>🌍 Earth 616: Digital Explorer's Journey</h2>
      <p>Explore the skills and expertise that I bring to the world of digital design and development. Here's a peek into my work and the technologies I use:</p>

      <!-- Skill Bars Section -->
      <div class="skills-container">
        <h3>My Skills</h3>
        <div class="skill">
          <p>HTML & CSS</p>
          <div class="skill-bar">
            <div class="skill-fill html-skill"></div>
          </div>
        </div>
        <div class="skill">
          <p>JavaScript</p>
          <div class="skill-bar">
            <div class="skill-fill js-skill"></div>
          </div>
        </div>
        <div class="skill">
          <p>UI/UX Design</p>
          <div class="skill-bar">
            <div class="skill-fill ux-skill"></div>
          </div>
        </div>
        <div class="skill">
          <p>React.js</p>
          <div class="skill-bar">
            <div class="skill-fill react-skill"></div>
          </div>
        </div>
        <div class="skill">
          <p>Node.js</p>
          <div class="skill-bar">
            <div class="skill-fill node-skill"></div>
          </div>
        </div>
      </div>
    `,
    // No planet5 popup content — Sun won't open a modal
  };

  // ---------- Popup logic (planets 1–4) ----------
  function showPopup(planetKey) {
    const modal = document.getElementById("planetModal");
    const modalBody = document.getElementById("modalBody");
    
    // ✅ FIX: Clear previous content completely to prevent duplication
    modalBody.innerHTML = '';
    
    // Reset modal base class but keep it a modal element
    modal.className = "modal";
    modal.classList.add(planetKey + "-popup");
    // Mark as open so CSS controls visibility
    modal.classList.add('open');
    // Lock body scroll while modal is open
    document.body.classList.add('overlay-open');
    // Planet4 uses a different naming convention in its stylesheet
    if (planetKey === "planet4") modal.classList.add("planet-earth-popup");
    
    const contentHTML = popupContent[planetKey] || "<h2>Content not found</h2>";

    // On narrow screens render a card layout
    if (window.innerWidth <= 420) {
      modal.classList.add('modal-card');
      // Try to extract first image from contentHTML and REMOVE it from content
      const temp = document.createElement('div');
      temp.innerHTML = contentHTML;
      const firstImg = temp.querySelector('img');
      const heroImgHtml = firstImg ? `<img src="${firstImg.src}" alt="hero">` : '';
      
      // Remove the first image from the content to avoid duplication
      if (firstImg) {
        firstImg.remove();
      }

      modalBody.innerHTML = `
        <div class="modal-content-card">
          <div class="hero-image">${heroImgHtml}</div>
          <div class="modal-body">${temp.innerHTML}</div>
          <div class="dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="actions-row">
            <button class="btn ghost" onclick="closePopup()">Skip tour</button>
            <button class="btn primary" onclick="closePopup()">Continue</button>
          </div>
        </div>
      `;
    } else {
      // Desktop view - no wrapper divs that block scrolling
      modalBody.innerHTML = contentHTML;
    }
    
    // Add modal-card class for small screens so the centered card CSS takes effect
    if (window.innerWidth <= 768) {
      modal.classList.add('modal-card');
    } else {
      modal.classList.remove('modal-card');
    }

    // ✅ FIX: Remove any existing astro-peek to prevent duplicates
    const existingPeek = modal.querySelector(".astro-peek");
    if (existingPeek) {
      existingPeek.remove();
    }

    // Only add astro-peek on larger screens
    const originalAstronaut = document.querySelector(".astronaut");
    if (originalAstronaut && window.innerWidth > 768) {
      const clone = originalAstronaut.cloneNode(true);
      clone.classList.add("astro-peek");
      modal.appendChild(clone);
    }

    if (planetKey === "planet3") initContactForm();
    if (planetKey === "planet2") setTimeout(initProjectsCarousel, 100);
  }

  function closePopup() {
    const modal = document.getElementById("planetModal");
    const modalBody = document.getElementById("modalBody");
    
    // Hide modal and remove open state
    modal.classList.remove('open');
    modal.classList.remove('modal-card');
    // Remove all planet popup classes so next open starts clean
    ['planet1-popup','planet2-popup','planet3-popup','planet4-popup','planet5-popup','planet-earth-popup'].forEach(c=>modal.classList.remove(c));
    // Unlock body scroll
    document.body.classList.remove('overlay-open');
    
    // ✅ FIX: Remove astro peek
    const peekAstronaut = modal.querySelector(".astro-peek");
    if (peekAstronaut) peekAstronaut.remove();
    
    // ✅ FIX: Clear modal content to prevent duplication on next open
    modalBody.innerHTML = '';
  }

  // Make closePopup available globally for onclick handlers
  window.closePopup = closePopup;

  document.querySelector(".close-btn").addEventListener("click", closePopup);
  window.addEventListener("click", (e) => { if (e.target.id === "planetModal") closePopup(); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closePopup(); });

  // ---------- Contact form ----------
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector('input[name="email"]').value;
      const successMsg = document.createElement("div");
      successMsg.style.cssText = `
        color:#00ff00;padding:15px;margin-top:20px;background:rgba(0,255,0,0.1);
        border:1px solid #00ff00;border-radius:10px;text-align:center;
      `;
      successMsg.textContent = `Message sent! We'll contact you at ${email}`;
      form.appendChild(successMsg);
      form.querySelector('input[name="email"]').value = "";
      setTimeout(() => successMsg.remove(), 3000);
    });
  }

  // ---------- Projects carousel ----------
  function initProjectsCarousel() {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    if (!track || !items.length || !prevBtn || !nextBtn) return;

    let index = 0;
    let itemWidth = 0;

    function setSizes() {
      // Use the visible carousel container width (the frame), not the full track width
      const carousel = track.closest('.carousel');
      if (!carousel) return;
      itemWidth = carousel.clientWidth;
      items.forEach(it => {
        // Ensure padding/borders are accounted for so the slide fits exactly
        it.style.boxSizing = 'border-box';
        it.style.flex = `0 0 ${itemWidth}px`;
        it.style.minWidth = itemWidth + 'px';
      });
      // Clamp index so we don't translate past the last slide after a resize
      index = Math.min(index, items.length - 1);
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    const update = () => { track.style.transform = `translateX(-${index * itemWidth}px)`; };

    prevBtn.addEventListener("click", () => { 
      index = (index > 0) ? index - 1 : items.length - 1; 
      update(); 
    });
    
    nextBtn.addEventListener("click", () => { 
      index = (index < items.length - 1) ? index + 1 : 0; 
      update(); 
    });

    // Recalc sizes on open/resize
    setTimeout(setSizes, 50);
    window.addEventListener('resize', setSizes);

    // Touch support
    let startX = 0, currentX = 0, isDown = false;
    track.addEventListener('touchstart', (e) => { 
      startX = e.touches[0].clientX; 
      isDown = true; 
    });
    
    track.addEventListener('touchmove', (e) => { 
      if (!isDown) return; 
      currentX = e.touches[0].clientX; 
    });
    
    track.addEventListener('touchend', () => {
      if (!isDown) return; 
      isDown = false;
      const dx = currentX - startX;
      if (Math.abs(dx) > 50) {
        if (dx < 0) index = Math.min(items.length - 1, index + 1);
        else index = Math.max(0, index - 1);
        update();
      }
    });

    // Attach lightbox handlers to carousel images
    const imgs = document.querySelectorAll('.carousel-img');
    imgs.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openLightbox(img.src, img.alt || ''));
    });
  }

  // ------- Lightbox (singleton) -------
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox-overlay';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="" alt="" class="lightbox-img">
      <button class="lightbox-close">Close</button>
    </div>
  `;
  document.body.appendChild(lightbox);
  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('active');
    document.body.classList.add('overlay-open');
    // Ensure overlay is scrolled to top when opened
    lightbox.scrollTop = 0;
    setTimeout(() => lightboxImg.focus && lightboxImg.focus(), 50);
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('overlay-open');
  }

  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  lightboxClose.addEventListener('click', closeLightbox);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox(); });

  // ---------- HUD (planets 1–4 only) ----------
  const hud = document.querySelector(".hud-info");
  const hudText = hud.querySelector(".hud-text");

  // Hide HUD initially
  hud.style.display = "none";

  function typeText(text) {
    hudText.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      hudText.textContent += text[i] || "";
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 80);
  }

  const hudConfig = {
    planet1: { label: "ABOUT ME",  offsetX: -250, offsetY: -100, scale: 0.7 },
    planet2: { label: "PROJECTS",  offsetX: -280, offsetY: -150, scale: 0.9 },
    planet3: { label: "CONTACT",   offsetX: -200, offsetY: -100, scale: 0.8 },
    planet4: { label: "EARTH 616", offsetX: -280, offsetY: -100, scale: 1.2 },
    // planet5 (Sun) intentionally omitted from HUD
  };

  function showHUD(planet, planetName) {
    const config = hudConfig[planetName];
    if (!config) return;
    const rect = planet.getBoundingClientRect();
    hud.style.display = "block";
    hud.style.left = rect.left + config.offsetX + "px";
    hud.style.top  = rect.top  + config.offsetY + "px";
    hud.style.transform = `scale(${config.scale})`;
    typeText(config.label);

    const onLeave = () => {
      hud.style.display = "none";
      hudText.textContent = "";
      planet.removeEventListener("mouseleave", onLeave);
    };
    planet.addEventListener("mouseleave", onLeave);
  }

  function hideHUD() {
    hud.style.display = "none";
    hudText.textContent = "";
  }

  // ---------- Sun: Curved clickable icon tray (no HUD, no popup) ----------
  const sunIcons = document.createElement("div");
  sunIcons.className = "sun-icons hidden";
  sunIcons.style.zIndex = "10000";
  sunIcons.style.position = "absolute";
  sunIcons.style.transform = "translate(-50%, -50%)";
  sunIcons.innerHTML = `
    <a href="tel:+639079178023" class="sun-icon" title="Phone" aria-label="Phone">
      <img src="assets/fonts/images/wired-gradient-1676-telephone-call-hand-in-reveal.gif" alt="Phone">
    </a>
    <a href="mailto:cris.morcozocris6@gmail.com" class="sun-icon" title="Email" aria-label="Email">
      <img src="assets/fonts/images/wired-gradient-1141-email-in-reveal.gif" alt="Email">
    </a>
    <a href="https://github.com/chacrss" target="_blank" rel="noreferrer" class="sun-icon" title="GitHub" aria-label="GitHub">
      <img src="assets/fonts/images/wired-gradient-2572-logo-github-in-reveal (1).gif" alt="GitHub">
    </a>
    <a href="https://www.linkedin.com/in/cris-morcozo-18734938b/" target="_blank" rel="noreferrer" class="sun-icon" title="LinkedIn" aria-label="LinkedIn">
      <img src="assets/fonts/images/wired-gradient-2632-logo-circle-linkedin-in-reveal (1).gif" alt="LinkedIn">
    </a>
  `;
  document.body.appendChild(sunIcons);

  // Center the invisible tray on Sun center and size it based on Sun radius
  function positionSunIcons(planet) {
    const rect = planet.getBoundingClientRect();
    const sunCenterX = rect.left + rect.width / 2;
    const sunCenterY = rect.top  + rect.height / 2;

    const sunRadius = rect.width / 2;
    const gap = 28;
    const iconRadius = 25;
    const R = Math.max(110, sunRadius + gap + iconRadius);

    sunIcons.style.width  = `${2 * R}px`;
    sunIcons.style.height = `${2 * R}px`;
    sunIcons.style.left   = `${sunCenterX}px`;
    sunIcons.style.top    = `${sunCenterY}px`;
  }

  // Place icons on a curved arc at the lower-left of the Sun
  function arrangeSunIconsArc() {
    const icons = sunIcons.querySelectorAll(".sun-icon");
    if (!icons.length) return;

    const trayW = sunIcons.clientWidth;
    const trayH = sunIcons.clientHeight;
    const cx = trayW / 2;
    const cy = trayH / 2;

    const ARC_START_DEG = 110;
    const ARC_END_DEG   = 190;

    const steps = icons.length === 1 ? 1 : (icons.length - 1);

    icons.forEach((icon, i) => {
      const t = steps === 1 ? 0.5 : (i / steps);
      const angleDeg = ARC_START_DEG + t * (ARC_END_DEG - ARC_START_DEG);
      const angleRad = (angleDeg * Math.PI) / 180;

      const R = trayW / 2;
      const x = cx + R * Math.cos(angleRad);
      const y = cy + R * Math.sin(angleRad);

      icon.style.position = "absolute";
      icon.style.width = "50px";
      icon.style.height = "50px";
      icon.style.left = `${x - 25}px`;
      icon.style.top  = `${y - 25}px`;
    });
  }

  function showSunIcons(planet) {
    sunIcons.classList.remove("hidden");
    if (getComputedStyle(sunIcons).display === "none") sunIcons.style.display = "block";
    positionSunIcons(planet);
    arrangeSunIconsArc();
  }

  function hideSunIcons() {
    sunIcons.classList.add("hidden");
    sunIcons.style.display = "";
  }

  // Keep tray visible when hovered
  sunIcons.addEventListener("mouseenter", () => sunIcons.classList.remove("hidden"));
  sunIcons.addEventListener("mouseleave", hideSunIcons);

  // Re-align on viewport changes
  ["resize", "scroll"].forEach(ev => {
    window.addEventListener(ev, () => {
      if (!sunIcons.classList.contains("hidden")) {
        positionSunIcons(planet5);
        arrangeSunIconsArc();
      }
    });
  });

  // ---------- Events ----------
  // Click opens popup for planets 1–4
  planet1.addEventListener("click", () => showPopup("planet1"));
  planet2.addEventListener("click", () => showPopup("planet2"));
  planet3.addEventListener("click", () => showPopup("planet3"));
  planet4.addEventListener("click", () => showPopup("planet4"));

  // DO NOT open popup for the Sun
  planet5.addEventListener("click", (e) => e.preventDefault());

  // Hover shows HUD for planets 1–4
  planet1.addEventListener("mouseenter", () => { hideSunIcons(); showHUD(planet1, "planet1"); });
  planet2.addEventListener("mouseenter", () => { hideSunIcons(); showHUD(planet2, "planet2"); });
  planet3.addEventListener("mouseenter", () => { hideSunIcons(); showHUD(planet3, "planet3"); });
  planet4.addEventListener("mouseenter", () => { hideSunIcons(); showHUD(planet4, "planet4"); });

  // Hover behavior for the Sun: NO HUD, NO POPUP — only curved icons
  planet5.addEventListener("mouseenter", () => {
    hideHUD();
    showSunIcons(planet5);
  });
  planet5.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!sunIcons.matches(":hover")) hideSunIcons();
    }, 80);
  });

  // Add planets to scene
  space.appendChild(planet1);
  space.appendChild(planet2);
  space.appendChild(planet3);
  space.appendChild(planet4);
  space.appendChild(planet5);

  // ---------- Meteors ----------
  for (let i = 0; i < 15; i++) {
    const meteor = document.createElement("div");
    meteor.className = "meteor";
    meteor.style.setProperty("--start-x", `${Math.random() * 100}%`);
    meteor.style.setProperty("--start-y", `${Math.random() * -20}%`);
    meteor.style.setProperty("--delay", `${Math.random() * 5}s`);
    meteor.style.setProperty("--duration", `${3 + Math.random() * 5}s`);
    const size = Math.random() * 3 + 1;
    meteor.style.width = size + "px";
    meteor.style.height = size + "px";
    space.appendChild(meteor);
  }

  // ---------- Astronaut physics ----------
  let posX = window.innerWidth / 2 - 40;
  let posY = -150;
  let velX = 0, velY = 0;
  let rotation = 0, rotationSpeed = 0.5;
  let isDragging = false, offsetX, offsetY, lastMouseX, lastMouseY, isBoarding = true;

  astronaut.style.position = "absolute";
  astronaut.style.left = posX + "px";
  astronaut.style.top = posY + "px";
  astronaut.style.opacity = "1";
  astronaut.style.transform = "translate(0, 0) scale(0.5)";

  function landSequence() {
    setTimeout(() => astronaut.classList.add("transformed"), 500);
    setTimeout(() => { astronaut.classList.add("landing"); }, 1500);

    astronaut.addEventListener("animationend", (event) => {
      if (event.animationName === "astro-land") {
        astronaut.classList.remove("landing");
        astronaut.classList.add("landed");
        posX = window.innerWidth / 2 - astronaut.offsetWidth / 2;
        posY = window.innerHeight / 2 - astronaut.offsetHeight / 2;
        astronaut.style.left = posX + "px";
        astronaut.style.top = posY + "px";
        astronaut.style.transform = "rotate(0deg) scale(1)";
        isBoarding = false;
        startFloating();
      }
    }, { once: true });
  }

  function startFloating() {
    function moveAstronaut() {
      if (!isDragging && !isBoarding) {
        posX += velX; 
        posY += velY;
        if (posX <= 0 || posX + astronaut.offsetWidth >= window.innerWidth) velX *= -0.8;
        if (posY <= 0 || posY + astronaut.offsetHeight >= window.innerHeight) velY *= -0.8;
        rotation += rotationSpeed;
        astronaut.style.left = posX + "px";
        astronaut.style.top = posY + "px";
        astronaut.style.transform = `rotate(${rotation}deg) scale(1)`;
      }
      velX *= 0.9999; 
      velY *= 0.9999; 
      rotationSpeed *= 0.999;
      requestAnimationFrame(moveAstronaut);
    }
    moveAstronaut();

    astronaut.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - astronaut.offsetLeft;
      offsetY = e.clientY - astronaut.offsetTop;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      astronaut.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      posX = e.clientX - offsetX;
      posY = e.clientY - offsetY;
      velX = e.clientX - lastMouseX;
      velY = e.clientY - lastMouseY;
      astronaut.style.left = posX + "px";
      astronaut.style.top = posY + "px";
      astronaut.style.transform = `rotate(${rotation}deg) scale(1)`;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    });

    document.addEventListener("mouseup", () => {
      if (!isDragging) return;
      isDragging = false;
      astronaut.style.cursor = "grab";
      rotationSpeed = Math.min(Math.max((Math.abs(velX) + Math.abs(velY)) / 20, 0.2), 5);
    });

    function astronautGlow() {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dx = posX - centerX;
      const dy = posY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const glow = Math.max(0, 1 - distance / (window.innerWidth / 2));
      astronaut.style.filter = `drop-shadow(0 0 ${30 * glow}px rgba(0,200,255,${glow}))`;
      requestAnimationFrame(astronautGlow);
    }
    astronautGlow();
  }

  landSequence();

  // Keep the mobile card layout in sync with resizes while modal is open
  const modalResizeCheck = () => {
    const m = document.getElementById("planetModal");
    if (!m) return;
    if (m.classList.contains('open')) {
      if (window.innerWidth <= 768) m.classList.add("modal-card");
      else m.classList.remove("modal-card");
    }
  };
  window.addEventListener('resize', modalResizeCheck);
});