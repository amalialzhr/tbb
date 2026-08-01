/**
 * TBB — Jasa Temani Bandung Landing Page
 * Core JavaScript (script.js)
 */

// 1. WhatsApp Configuration & Package Data
const WA_NUMBER = "6285793340006";

const SERVICES_DATA = [
  // TBB Care
  {
    category: "TBB Care",
    id: "care-support",
    name: "Care Support",
    duration: "2 Jam",
    price: "Rp 90.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  {
    category: "TBB Care",
    id: "care-plus",
    name: "Care Plus",
    duration: "4 Jam",
    price: "Rp 169.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  {
    category: "TBB Care",
    id: "care-full",
    name: "Care Full",
    duration: "8 Jam",
    price: "Rp 299.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  // TBB Moments
  {
    category: "TBB Moments",
    id: "moments-mini",
    name: "Moments Mini",
    duration: "3 Jam",
    price: "Rp 199.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  {
    category: "TBB Moments",
    id: "moments-classic",
    name: "Moments Classic",
    duration: "5 Jam",
    price: "Rp 299.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  {
    category: "TBB Moments",
    id: "moments-signature",
    name: "Moments Signature",
    duration: "8 Jam",
    price: "Rp 449.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  // TBB Explore
  {
    category: "TBB Explore",
    id: "explore-start",
    name: "Explore Start",
    duration: "5 Jam",
    price: "Rp 250.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  {
    category: "TBB Explore",
    id: "explore-day",
    name: "Explore Day",
    duration: "8 Jam",
    price: "Rp 399.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  {
    category: "TBB Explore",
    id: "explore-max",
    name: "Explore Max",
    duration: "10–12 Jam",
    price: "Rp 549.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  // TBB Companion
  {
    category: "TBB Companion",
    id: "companion-short",
    name: "Companion Short",
    duration: "2 Jam",
    price: "Rp 120.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  {
    category: "TBB Companion",
    id: "companion-flex",
    name: "Companion Flex",
    duration: "4 Jam",
    price: "Rp 200.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  },
  {
    category: "TBB Companion",
    id: "companion-day",
    name: "Companion Day",
    duration: "8 Jam",
    price: "Rp 379.000",
    waTemplate: "Halo kak, aku tertarik untuk service {category} - {name} ({duration}), jam [___]. Apakah tersedia?"
  }
];

function buildWaLink(service) {
  const text = service.waTemplate
    .replace("{category}", service.category)
    .replace("{name}", service.name)
    .replace("{duration}", service.duration);
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

// 2. Local Fallback Testimonials Data
const FALLBACK_TESTIMONIALS = [
  {
    name: "Siska Amanda",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Baru pertama kali ke Bandung sendirian dan agak cemas. Tapi ditemani Kak Khusnul rasanya seperti jalan bareng temen sendiri! Dia ramah banget, sopan, dan pinter cari spot foto. Rekomendasi kulinernya juara!",
    date: "Juni 2026"
  },
  {
    name: "Ratih P.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Gunakan jasa TBB Care pas harus ke rumah sakit di Bandung sendirian untuk urusan medis. Kak Hilma sabar banget mendampingi antrean obat dan registrasi. Bener-bener jadi support system di saat genting.",
    date: "Mei 2026"
  },
  {
    name: "Devi Shanti",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Paket Explore Day seru parah! Perjalanan dari Lembang sampai Dago lancar karena rutenya efisien. Yang terpenting, privasi sangat dihargai dan mereka fleksibel banget kalau kita lelah di tengah jalan.",
    date: "April 2026"
  }
];

// Google Sheet configuration (Replace this ID with your actual sheet ID)
// Format sheet: Kolom A: Nama, Kolom B: Foto URL, Kolom C: Rating (1-5), Kolom D: Testimoni, Kolom E: Tanggal
const GOOGLE_SHEET_ID = "YOUR_SPREADSHEET_ID_HERE";

// 3. Document Loaded Handler
document.addEventListener("DOMContentLoaded", () => {
  const initSafe = (name, fn) => {
    try {
      fn();
    } catch (e) {
      console.error(`Error initializing ${name}:`, e);
    }
  };

  initSafe("initTheme", initTheme);
  initSafe("setupServicesTabs", setupServicesTabs);
  initSafe("setupGalleryTabs", setupGalleryTabs);
  initSafe("bindWaButtons", bindWaButtons);
  initSafe("initGSAPAnimations", initGSAPAnimations);
  initSafe("initMobileMenu", initMobileMenu);
  initSafe("initLenis", initLenis);
  initSafe("initNavbarScroll", initNavbarScroll);
  initSafe("initHeroParallax", initHeroParallax);
  initSafe("initTiltEffect", initTiltEffect);
  initSafe("initMagneticButtons", initMagneticButtons);
  initSafe("initCompanionCarousel", initCompanionCarousel);
  initSafe("initTripConfigurator", initTripConfigurator);
  initSafe("initGallerySlider", initGallerySlider);
  initSafe("initTestimonialMarquees", initTestimonialMarquees);
  initSafe("initFallingPillsAnimation", initFallingPillsAnimation);
  initSafe("setupWorryCardHoverFeedback", setupWorryCardHoverFeedback);
  
  // Resize event handler to keep route paths perfectly aligned with grid positions
  window.addEventListener("resize", () => {
    if (typeof drawWorryRouteLine === "function") {
      drawWorryRouteLine();
    }
  });
});

// 4. Light/Dark Mode Theme Initialization
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem("theme") || 
                       (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  applyTheme(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    applyTheme(activeTheme);
  });

  function applyTheme(theme) {
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      if (sunIcon) sunIcon.classList.remove("hidden");
      if (moonIcon) moonIcon.classList.add("hidden");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      if (sunIcon) sunIcon.classList.add("hidden");
      if (moonIcon) moonIcon.classList.remove("hidden");
      localStorage.setItem("theme", "light");
    }
  }
}

// 5. Mobile Navigation Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
    mobileNav.classList.toggle("flex");
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
      mobileNav.classList.remove("flex");
    });
  });
}

// 6. Services Tab Toggling System
function setupServicesTabs() {
  const tabs = document.querySelectorAll(".tab-trigger");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Don't re-trigger if already active
      if (tab.classList.contains("tab-active")) return;

      const targetCategory = tab.getAttribute("data-category");

      // Set active tab styling
      tabs.forEach(t => t.classList.remove("tab-active", "bg-mauve", "text-white", "dark:bg-mulberry"));
      tab.classList.add("tab-active");

      // Animate out the currently active panel (fade, slide up, blur)
      const currentActivePanel = document.querySelector(".tab-panel:not(.hidden)");
      
      if (currentActivePanel) {
        gsap.to(currentActivePanel, {
          opacity: 0,
          y: -15,
          filter: "blur(8px)",
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            currentActivePanel.classList.add("hidden");
            
            // Show new panel
            const newPanel = document.getElementById(`panel-${targetCategory}`);
            if (newPanel) {
              newPanel.classList.remove("hidden");
              
              // Set starting state for slide, blur, and opacity
              gsap.set(newPanel, {
                opacity: 0,
                y: 15,
                filter: "blur(8px)"
              });
              
              // Animate in the new panel (fade, slide center, blur-free)
              gsap.to(newPanel, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.55,
                ease: "power4.out", // Cubic Bezier [0.16, 1, 0.3, 1] approximation
                onComplete: () => {
                  if (typeof ScrollTrigger !== 'undefined') {
                    ScrollTrigger.refresh();
                  }
                }
              });
            }
          }
        });
      } else {
        // Fallback if no panel was currently active
        panels.forEach(panel => {
          if (panel.id === `panel-${targetCategory}`) {
            panel.classList.remove("hidden");
            gsap.fromTo(panel, 
              { opacity: 0, y: 15, filter: "blur(8px)" },
              { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55, ease: "power4.out" }
            );
          } else {
            panel.classList.add("hidden");
          }
        });
      }
    });
  });
}

// 6.5. Gallery Tab Filtering System (Continuous Draggable Scroll-Spy Indicator)
function setupGalleryTabs() {
  const tabs = document.querySelectorAll(".gallery-tab-btn");
  const mainSlider = document.getElementById("gallery-main-slider");

  if (!tabs.length || !mainSlider) return;

  // Helper to set active styling
  function setActiveTab(targetCategory) {
    tabs.forEach(tab => {
      const cat = tab.getAttribute("data-gallery-tab");
      if (cat === targetCategory) {
        tab.classList.add("bg-mauve", "text-white", "border-mauve");
        tab.classList.remove("border-purple-100", "dark:border-purple-950/40", "text-ink/75", "dark:text-textdark/75");
      } else {
        tab.classList.remove("bg-mauve", "text-white", "border-mauve");
        tab.classList.add("border-purple-100", "dark:border-purple-950/40", "text-ink/75", "dark:text-textdark/75");
      }
    });
  }

  // Click handler: scroll to the category's first card
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetCategory = tab.getAttribute("data-gallery-tab");
      const targetCard = mainSlider.querySelector(`.gallery-polaroid-item[data-category="${targetCategory}"]`);
      
      if (targetCard) {
        // Prevent scroll listener from fighting the click-scroll by pausing spy temporarily
        mainSlider.setAttribute("data-scrolling-tab", "true");
        
        setActiveTab(targetCategory);
        
        const offsetLeft = targetCard.offsetLeft - 32; // Offset for padding alignment
        mainSlider.scrollTo({
          left: offsetLeft,
          behavior: "smooth"
        });

        // Clear temporary lock after smooth scroll completes
        setTimeout(() => {
          mainSlider.removeAttribute("data-scrolling-tab");
        }, 800);
      }
    });
  });

  // Scroll Spy: Update active tab indicator dynamically during user slide/drag
  mainSlider.addEventListener("scroll", () => {
    if (mainSlider.getAttribute("data-scrolling-tab") === "true") return;

    const cards = mainSlider.querySelectorAll(".gallery-polaroid-item");
    if (!cards.length) return;

    // Check which card category is currently at the center focus of the slider viewport
    const focusX = mainSlider.scrollLeft + (mainSlider.clientWidth / 3);
    let closestCategory = "care";
    let minDiff = Infinity;

    cards.forEach(card => {
      const diff = Math.abs(card.offsetLeft - focusX);
      if (diff < minDiff) {
        minDiff = diff;
        closestCategory = card.getAttribute("data-category");
      }
    });

    setActiveTab(closestCategory);
  });
}

// 7. Bind WhatsApp Action to buttons
function bindWaButtons() {
  // Dynamically set URLs on order buttons based on data-service-id
  const orderButtons = document.querySelectorAll("[data-service-id]");
  orderButtons.forEach(btn => {
    const serviceId = btn.getAttribute("data-service-id");
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    if (service) {
      const url = buildWaLink(service);
      btn.setAttribute("href", url);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    }
  });

  // Base WA Contact links
  const baseWaLinks = document.querySelectorAll(".wa-main-link");
  const baseWaUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo TBB, aku ingin bertanya mengenai layanan Travel Buddy Bandung.")}`;
  baseWaLinks.forEach(link => {
    link.setAttribute("href", baseWaUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

// 8. Testimonials Fetch Logic (Circle Avatar Slider Track)
let testimonialIndex = 0;
let testimonialsList = [];
let buttonsBound = false;

function fetchTestimonials() {
  testimonialsList = FALLBACK_TESTIMONIALS;
  testimonialIndex = Math.min(2, testimonialsList.length - 1); // Start with third one centered
  renderTestimonials(testimonialsList);

  if (GOOGLE_SHEET_ID && GOOGLE_SHEET_ID !== "YOUR_SPREADSHEET_ID_HERE") {
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/pub?output=csv`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not OK");
        return response.text();
      })
      .then(csvText => {
        const data = parseCSV(csvText);
        if (data && data.length > 0) {
          testimonialsList = data;
          testimonialIndex = Math.floor(testimonialsList.length / 2); // Center of custom list
          renderTestimonials(testimonialsList);
        }
      })
      .catch(error => {
        console.warn("Failed to fetch testimonials from Google Sheet, using fallbacks.", error);
      });
  }
}

// Basic CSV parser
function parseCSV(text) {
  const lines = text.split("\n");
  const result = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const cols = line.split(",");
    if (cols.length >= 4) {
      result.push({
        name: cols[0].replace(/"/g, "").trim(),
        photo: cols[1].replace(/"/g, "").trim() || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
        rating: parseInt(cols[2]) || 5,
        text: cols[3].replace(/"/g, "").trim(),
        date: cols[4] ? cols[4].replace(/"/g, "").trim() : "Terbaru"
      });
    }
  }
  return result;
}

// Render dynamic circle avatar slider testimonials
function renderTestimonials(list) {
  const avatarsTrack = document.getElementById("testimonial-avatars-track");
  const starsContainer = document.getElementById("testimonial-stars");
  const quoteText = document.getElementById("testimonial-text");
  const authorName = document.getElementById("testimonial-author");
  const authorMeta = document.getElementById("testimonial-meta");
  
  if (!avatarsTrack || !starsContainer || !quoteText || !authorName || !authorMeta || list.length === 0) return;

  // Clear track
  avatarsTrack.innerHTML = "";
  
  // Render avatars in a row
  list.forEach((item, index) => {
    const isActive = index === testimonialIndex;
    const avatarWrapper = document.createElement("div");
    
    if (isActive) {
      avatarWrapper.className = "relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-mauve scale-110 shadow-lg transition-all duration-300 z-20 cursor-default";
    } else {
      avatarWrapper.className = "relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-purple-100/10 scale-90 opacity-40 hover:opacity-85 transition-all duration-300 z-10 cursor-pointer";
    }
    
    avatarWrapper.innerHTML = `
      <img src="${item.photo}" alt="${item.name}" class="w-full h-full rounded-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'">
    `;
    
    if (!isActive) {
      avatarWrapper.addEventListener("click", () => {
        testimonialIndex = index;
        renderTestimonials(list);
      });
    }
    
    avatarsTrack.appendChild(avatarWrapper);
  });

  // Update current testimonial content details
  const activeItem = list[testimonialIndex];
  
  // Render stars
  starsContainer.innerHTML = "★".repeat(activeItem.rating) + "☆".repeat(5 - activeItem.rating);
  
  // Render text quote
  quoteText.innerText = `"${activeItem.text}"`;
  
  // Render author & date info
  authorName.innerText = activeItem.name;
  authorMeta.innerText = `${activeItem.date} — Solo Traveler`;

  // Setup buttons navigation listeners
  setupTestimonialButtons();

  // Refresh ScrollTrigger to recalculate offsets after layout shifts
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
}

function setupTestimonialButtons() {
  if (buttonsBound) return;
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      testimonialIndex = (testimonialIndex - 1 + testimonialsList.length) % testimonialsList.length;
      renderTestimonials(testimonialsList);
    });
    
    nextBtn.addEventListener("click", () => {
      testimonialIndex = (testimonialIndex + 1) % testimonialsList.length;
      renderTestimonials(testimonialsList);
    });
    buttonsBound = true;
  }
}

// 9. GSAP Smooth Animations & Ribbon Morphing on Scroll
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn("GSAP or ScrollTrigger CDNs are not loaded.");
    return;
  }

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initialize MatchMedia for Desktop vs Mobile differences
  let mm = gsap.matchMedia();

  // Unified animations that run on both mobile and desktop (opacity reveals)
  gsap.from(".hero-content > *", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Staggered reveal for worry cards and overlapping badges
  const worryCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const badges = document.querySelectorAll(".worry-badge");
        const cards = document.querySelectorAll(".worry-card");

        // Animate each checkpoint badge first, then its corresponding text card
        badges.forEach((badge, i) => {
          gsap.fromTo(badge, 
            { scale: 0, opacity: 0 },
            { 
              scale: 1, 
              opacity: 1, 
              duration: 0.4, 
              delay: i * 0.12, 
              ease: "back.out(1.6)" 
            }
          );

          gsap.fromTo(cards[i], 
            { opacity: 0, y: 40 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.6, 
              delay: (i * 0.12) + 0.15, 
              ease: "power3.out",
              onComplete: () => {
                // Remove inline style so CSS classes (like translate-y translations) can take effect
                cards[i].style.transform = "";
              }
            }
          );
        });

        // Calculate and draw the SVG route lines after animation has completed
        setTimeout(() => {
          if (typeof drawWorryRouteLine === "function") {
            drawWorryRouteLine();
          }
        }, 1200);

        worryCardsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    worryCardsObserver.observe(aboutSection);
  }

  // Setup ScrollTrigger animations
  mm.add("(min-width: 1024px)", () => {
    // 2. How to Book Ribbon Connector Animation (Desktop only)
    gsap.from(".book-connector", {
      scaleX: 0,
      transformOrigin: "left center",
      scrollTrigger: {
        trigger: ".how-to-book-grid",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
      }
    });

  });

  // Re-calculate all trigger markers once the entire window (images, stylesheets) finishes loading
  window.addEventListener("load", () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });
}

// 10. Lenis Smooth Scroll Initialization (Snappier Scroll Kinetics)
let lenis;
function initLenis() {
  if (typeof Lenis === 'undefined') {
    console.warn("Lenis smooth scroll library is not loaded.");
    return;
  }

  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  lenis = new Lenis({
    duration: 0.8, // Snappy scroll duration
    easing: (t) => 1 - Math.pow(1 - t, 3), // Snappy cubic-out curves
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.05
  });

  // Sync scroll animations with Lenis smooth scroll updates
  lenis.on('scroll', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.update();
    }
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Bind smooth scroll anchors via Lenis APIs
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        lenis.scrollTo(target, { 
          offset: -80, 
          duration: 1.1, 
          easing: (t) => 1 - Math.pow(1 - t, 3) 
        });
      }
    });
  });
}

// 11. Navbar Scroll Transition (Transparent to Blurs)
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  function checkScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
      navbar.classList.remove("border-transparent", "bg-transparent");
    } else {
      navbar.classList.remove("navbar-scrolled");
      navbar.classList.add("border-transparent", "bg-transparent");
    }
  }

  window.addEventListener("scroll", checkScroll);
  // Initial check
  checkScroll();
}

// 12. Hero Layered Mouse Parallax (Editorial Cinematic Depth)
function initHeroParallax() {
  // Mobile guardrail: Fine pointer only
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hero = document.getElementById("hero");
  const content = hero ? hero.querySelector(".hero-content") : null;
  const stack = hero ? hero.querySelector(".polaroid-stack") : null;

  if (!hero || !content || !stack) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener("mousemove", (e) => {
    // Relative coordinates: center of screen (-1 to 1)
    const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    
    targetX = x;
    targetY = y;
  });

  function parallaxLoop() {
    // Lerp smoothing loop
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    // Background stays stationary, text shifts slowly, polaroids shift fast
    content.style.transform = `translate3d(${currentX * -10}px, ${currentY * -10}px, 0)`;
    stack.style.transform = `translate3d(${currentX * 18}px, ${currentY * 18}px, 0)`;

    requestAnimationFrame(parallaxLoop);
  }
  parallaxLoop();
}

// 13. 3D Card Hover Tilt Effect with Parent Spotlight Fade
function initTiltEffect() {
  // Mobile guardrail: Fine pointer only
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Query all card variants
  const cards = document.querySelectorAll(".service-card-item, .companion-card, .testimonial-card, .tilt-card");
  
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      // Rotates up to 6 degrees on mouse coordinates
      const rotateX = -(y - yc) / (yc / 6);
      const rotateY = (x - xc) / (xc / 6);
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03) translateY(-4px)`;
      
      // Spotlight Sibling Fade states
      card.classList.add("spotlight-active");
      const parent = card.parentElement;
      if (parent) {
        parent.classList.add("spotlight-group-active");
      }
    });
    
    card.addEventListener("mouseleave", () => {
      // Smoothly returns flat
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)`;
      
      card.classList.remove("spotlight-active");
      const parent = card.parentElement;
      if (parent) {
        parent.classList.remove("spotlight-group-active");
      }
    });
  });
}

// 14. Magnetic Button (Main CTAs pull to mouse)
function initMagneticButtons() {
  // Mobile guardrail: Fine pointer only
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const buttons = document.querySelectorAll(".wa-main-link, #hero a[href='#services'], #kolaborasi a");

  buttons.forEach(btn => {
    btn.addEventListener("mousemove", e => {
      const rect = btn.getBoundingClientRect();
      
      // Center coordinates
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;
      
      // Offset values
      const dx = e.clientX - btnX;
      const dy = e.clientY - btnY;
      
      // Limits magnetic shift to 8px max
      const pullX = dx * 0.22;
      const pullY = dy * 0.22;
      const limitX = Math.max(-8, Math.min(8, pullX));
      const limitY = Math.max(-8, Math.min(8, pullY));
      
      btn.style.transform = `translate3d(${limitX}px, ${limitY}px, 0) scale(1.02)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = `translate3d(0px, 0px, 0px) scale(1)`;
    });
  });
}

// 15. Slideable Companion Carousel Navigation
function initCompanionCarousel() {
  const track = document.getElementById("companion-track");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  
  if (!track || !prevBtn || !nextBtn) return;
  
  // Snap shift distance: width of 1 card item + gap spacing
  const scrollOffset = 340;
  
  prevBtn.addEventListener("click", () => {
    track.scrollBy({
      left: -scrollOffset,
      behavior: "smooth"
    });
  });
  
  nextBtn.addEventListener("click", () => {
    track.scrollBy({
      left: scrollOffset,
      behavior: "smooth"
    });
  });
  
  // Track swipe drag support for desktop mouse
  let isDown = false;
  let startX;
  let scrollLeft;
  
  track.addEventListener("mousedown", e => {
    isDown = true;
    track.style.cursor = "grabbing";
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  
  track.addEventListener("mouseleave", () => {
    isDown = false;
    track.style.cursor = "grab";
  });
  
  track.addEventListener("mouseup", () => {
    isDown = false;
    track.style.cursor = "grab";
  });
  
  track.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed factor
    track.scrollLeft = scrollLeft - walk;
  });
  
  // Set initial drag cursor
  track.style.cursor = "grab";
}

// 12. Trip Configurator Tool Logic (Interactive pricing simulator & WhatsApp draft generator)
function initTripConfigurator() {
  const categorySelect = document.getElementById("config-category");
  const tierSelect = document.getElementById("config-tier");
  const companionSelect = document.getElementById("config-companion");
  const nameInput = document.getElementById("config-name");
  const dateInput = document.getElementById("config-date");
  const timeInput = document.getElementById("config-time");

  const btn1Person = document.getElementById("btn-1-person");
  const btn2People = document.getElementById("btn-2-people");

  const invoicePackage = document.getElementById("invoice-package");
  const invoiceDuration = document.getElementById("invoice-duration");
  const invoiceCompanion = document.getElementById("invoice-companion");
  const invoiceTravelers = document.getElementById("invoice-travelers");
  const invoiceTotal = document.getElementById("invoice-total");

  const btnWhatsApp = document.getElementById("btn-config-whatsapp");
  const btnCopy = document.getElementById("btn-config-copy");

  if (!categorySelect || !tierSelect) return;

  // Data structure for package rates
  const packages = {
    care: [
      { id: "care-support", name: "Care Support (Tier 1)", duration: "2 Jam", price: 90000 },
      { id: "care-plus", name: "Care Plus (Tier 2)", duration: "4 Jam", price: 169000 },
      { id: "care-full", name: "Care Full (Tier 3)", duration: "8 Jam", price: 299000 }
    ],
    moments: [
      { id: "moments-mini", name: "Moments Mini (Tier 1)", duration: "2 Jam", price: 119000 },
      { id: "moments-signature", name: "Moments Signature (Tier 2)", duration: "4 Jam", price: 229000 },
      { id: "moments-signature-plus", name: "Moments Signature Plus (Tier 3)", duration: "6 Jam", price: 349000 }
    ],
    explore: [
      { id: "explore-start", name: "Explore Start (Tier 1)", duration: "3 Jam", price: 129000 },
      { id: "explore-day", name: "Explore Day (Tier 2)", duration: "5 Jam", price: 259000 },
      { id: "explore-max", name: "Explore Max (Tier 3)", duration: "8 Jam", price: 379000 }
    ],
    companion: [
      { id: "companion-short", name: "Companion Short (Tier 1)", duration: "2 Jam", price: 110000 },
      { id: "companion-flex", name: "Companion Flex (Tier 2)", duration: "4 Jam", price: 210000 },
      { id: "companion-day", name: "Companion Day (Tier 3)", duration: "8 Jam", price: 379000 }
    ]
  };

  let numPeople = 1; // Default is 1 person

  // Populate tier select dropdown based on selected category
  function updateTiers() {
    const selectedCategory = categorySelect.value;
    const tierOptions = packages[selectedCategory] || [];
    
    tierSelect.innerHTML = "";
    tierOptions.forEach((pkg, index) => {
      const option = document.createElement("option");
      option.value = pkg.id;
      option.text = pkg.name;
      // Pre-select second package (signature/plus/day/flex) if it exists
      if (index === 1) {
        option.selected = true;
      }
      tierSelect.appendChild(option);
    });

    updateInvoice();
  }

  // Update invoice print elements
  function updateInvoice() {
    const selectedCategory = categorySelect.value;
    const selectedTierId = tierSelect.value;
    const selectedPkg = (packages[selectedCategory] || []).find(p => p.id === selectedTierId);

    if (!selectedPkg) return;

    // Calculation logic:
    // If traveler is 2, add Rp50.000 surcharge.
    const basePrice = selectedPkg.price;
    const surcharge = numPeople === 2 ? 50000 : 0;
    const totalPrice = basePrice + surcharge;

    // Update text
    invoicePackage.textContent = `${selectedCategory.toUpperCase()} - ${selectedPkg.name}`;
    invoiceDuration.textContent = selectedPkg.duration;
    invoiceCompanion.textContent = companionSelect.value;
    invoiceTravelers.textContent = `${numPeople} Orang`;
    
    // Format money
    invoiceTotal.textContent = "Rp" + totalPrice.toLocaleString("id-ID");
  }

  // Set up click listeners for number of people buttons
  btn1Person.addEventListener("click", () => {
    numPeople = 1;
    btn1Person.className = "py-3 rounded-2xl bg-[#6B3654] text-white font-bold text-xs md:text-sm shadow-sm transition-all flex items-center justify-center gap-1.5";
    btn2People.className = "py-3 rounded-2xl bg-cream/30 dark:bg-bgdark/30 text-mulberry dark:text-textdark border border-purple-100/50 dark:border-purple-950/40 font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-1.5";
    updateInvoice();
  });

  btn2People.addEventListener("click", () => {
    numPeople = 2;
    btn2People.className = "py-3 rounded-2xl bg-[#6B3654] text-white font-bold text-xs md:text-sm shadow-sm transition-all flex items-center justify-center gap-1.5";
    btn1Person.className = "py-3 rounded-2xl bg-cream/30 dark:bg-bgdark/30 text-mulberry dark:text-textdark border border-purple-100/50 dark:border-purple-950/40 font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-1.5";
    updateInvoice();
  });

  // Attach change listeners to update invoice on input
  categorySelect.addEventListener("change", updateTiers);
  tierSelect.addEventListener("change", updateInvoice);
  companionSelect.addEventListener("change", updateInvoice);

  // Generate WhatsApp prefilled message
  function getMessageBody() {
    const name = nameInput.value.trim() || "[Nama Belum Diisi]";
    const category = categorySelect.options[categorySelect.selectedIndex].text;
    const tier = tierSelect.options[tierSelect.selectedIndex] ? tierSelect.options[tierSelect.selectedIndex].text : "";
    const companion = companionSelect.value;
    const date = dateInput.value || "[Tanggal Belum Diisi]";
    const time = timeInput.value || "[Jam Belum Diisi]";
    const priceText = invoiceTotal.textContent;

    return `Halo TBB Buddy! Saya ingin booking layanan pendampingan dengan rincian berikut:

Nama: ${name}
Kategori: ${category}
Paket: ${tier}
Travel Companion: ${companion}
Jumlah Traveler: ${numPeople} Orang
Tanggal: ${date}
Jam Penjemputan: ${time}

Estimasi Tarif: ${priceText}

Terima kasih!`;
  }

  // Action buttons implementation
  btnWhatsApp.addEventListener("click", () => {
    const text = encodeURIComponent(getMessageBody());
    const waLink = `https://wa.me/${WA_NUMBER}?text=${text}`;
    window.open(waLink, "_blank");
  });

  btnCopy.addEventListener("click", () => {
    const text = getMessageBody();
    navigator.clipboard.writeText(text).then(() => {
      // Show simple beautiful toast
      const origText = btnCopy.innerHTML;
      btnCopy.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-sage"></i> <span>Disalin!</span>`;
      if (typeof lucide !== 'undefined') lucide.createIcons();
      setTimeout(() => {
        btnCopy.innerHTML = origText;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

  // Initialize
  updateTiers();
}

// 13. Interactive Draggable Gallery with Pendulum Swing & Inertial Decay
function initGallerySlider() {
  const panels = document.querySelectorAll(".gallery-panel");

  panels.forEach(panel => {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Physics & Inertia variables
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let animationFrameId = null;

    const cards = panel.querySelectorAll(".gallery-polaroid-item");

    // Initialize default rotations
    cards.forEach(card => {
      const baseRotation = parseFloat(card.getAttribute("data-base-rotation")) || 0;
      card.style.transform = `rotate(${baseRotation}deg) scale(1)`;
    });

    // Start Drag
    panel.addEventListener("mousedown", (e) => {
      isDown = true;
      panel.classList.add("active");
      startX = e.pageX - panel.offsetLeft;
      scrollLeft = panel.scrollLeft;
      lastX = e.pageX;
      lastTime = Date.now();
      velocity = 0;
      
      // Stop any running inertia loops
      cancelAnimationFrame(animationFrameId);

      // Disable card transition during drag for real-time response
      cards.forEach(card => {
        card.style.transition = "none";
      });
    });

    panel.addEventListener("touchstart", (e) => {
      isDown = true;
      startX = e.touches[0].pageX - panel.offsetLeft;
      scrollLeft = panel.scrollLeft;
      lastX = e.touches[0].pageX;
      lastTime = Date.now();
      velocity = 0;
      
      cancelAnimationFrame(animationFrameId);

      cards.forEach(card => {
        card.style.transition = "none";
      });
    }, { passive: true });

    // Dragging
    const handleDragMove = (clientX) => {
      const x = clientX - panel.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag speed coefficient
      panel.scrollLeft = scrollLeft - walk;

      // Calculate instantaneous velocity
      const now = Date.now();
      const dt = now - lastTime;
      const dx = clientX - lastX;
      
      if (dt > 0) {
        velocity = dx / dt; // pixels per millisecond
      }

      lastX = clientX;
      lastTime = now;

      // Apply dynamic pendulum swing rotation to cards based on drag velocity
      cards.forEach(card => {
        const baseRotation = parseFloat(card.getAttribute("data-base-rotation")) || 0;
        // Map velocity to rotation angle (swing max +/- 12 degrees)
        const swing = Math.min(Math.max(velocity * 18, -12), 12);
        card.style.transform = `rotate(${baseRotation + swing}deg) scale(0.98)`;
      });
    };

    panel.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      handleDragMove(e.pageX);
    });

    panel.addEventListener("touchmove", (e) => {
      if (!isDown) return;
      handleDragMove(e.touches[0].pageX);
    }, { passive: true });

    // End Drag
    const handleDragEnd = () => {
      if (!isDown) return;
      isDown = false;
      panel.classList.remove("active");

      // Smooth bounce-back to base rotation with spring transition
      cards.forEach(card => {
        const baseRotation = parseFloat(card.getAttribute("data-base-rotation")) || 0;
        card.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"; // Springy feel!
        card.style.transform = `rotate(${baseRotation}deg) scale(1)`;
      });

      // Start momentum inertia scrolling decay
      if (Math.abs(velocity) > 0.1) {
        inertiaScroll();
      }
    };

    panel.addEventListener("mouseup", handleDragEnd);
    panel.addEventListener("mouseleave", handleDragEnd);
    panel.addEventListener("touchend", handleDragEnd);

    // Momentum Deceleration Loop
    function inertiaScroll() {
      if (Math.abs(velocity) < 0.05) return;
      
      panel.scrollLeft -= velocity * 16;
      velocity *= 0.92; // Friction decay factor

      animationFrameId = requestAnimationFrame(inertiaScroll);
    }

  });
}

// 8. Testimonials Draggable Auto-scroll Marquee system
function initTestimonialMarquees() {
  const row1 = document.getElementById("marquee-row-1");
  const row2 = document.getElementById("marquee-row-2");

  if (!row1 || !row2) return;

  setupMarqueeRow(row1, -0.6); // Row 1 moves left (negative speed)
  setupMarqueeRow(row2, 0.6);  // Row 2 moves right (positive speed)
}

function setupMarqueeRow(container, speed) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let isHovered = false;
  let resumeTimeout;
  let animationFrameId;

  // Dragging event listeners
  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active:cursor-grabbing");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    // Clear any resume timeouts
    clearTimeout(resumeTimeout);
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    isHovered = false;
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    // Resume auto-scroll after 1.5 seconds of no user interaction
    resumeTimeout = setTimeout(() => {
      isHovered = false;
    }, 1500);
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
    isHovered = true; // Pause auto-scroll during drag
  });

  // Touch support for mobile
  container.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    clearTimeout(resumeTimeout);
  });

  container.addEventListener("touchend", () => {
    isDown = false;
    resumeTimeout = setTimeout(() => {
      isHovered = false;
    }, 1500);
  });

  container.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
    isHovered = true;
  });

  // Hover detection
  container.addEventListener("mouseenter", () => {
    isHovered = true;
  });
  container.addEventListener("mouseleave", () => {
    if (!isDown) {
      isHovered = false;
    }
  });

  // Auto Scroll Loop using RequestAnimationFrame
  function updateScroll() {
    // If not hovered and not dragging, apply auto scroll speed
    if (!isHovered && !isDown) {
      container.scrollLeft += speed;
    }

    // Seamless loop: check if we scrolled past the midpoint
    const halfScroll = container.scrollWidth / 2;

    if (container.scrollLeft >= halfScroll) {
      container.scrollLeft -= halfScroll;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfScroll;
    }

    animationFrameId = requestAnimationFrame(updateScroll);
  }

  // Pre-scroll to start in the middle so moving right/left starts with valid boundaries
  container.scrollLeft = container.scrollWidth / 4;

  // Start loop
  updateScroll();
}

// 9. Checkpoint Map Route drawing system
function drawWorryRouteLine() {
  const container = document.getElementById("worry-timeline-container");
  const svg = document.getElementById("worry-route-svg");
  if (!container || !svg) return;

  const badges = container.querySelectorAll(".worry-badge");
  if (badges.length < 2) return;

  // Clear previous SVG content
  svg.innerHTML = "";

  const containerRect = container.getBoundingClientRect();
  const points = [];

  badges.forEach((badge) => {
    const badgeRect = badge.getBoundingClientRect();
    const x = (badgeRect.left + badgeRect.width / 2) - containerRect.left;
    const y = (badgeRect.top + badgeRect.height / 2) - containerRect.top;
    points.push({ x, y });
  });

  if (points.length < 2) return;

  // Build the contiguous Bezier path data
  let pathData = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    
    // Check if points are vertically aligned (e.g. mobile/tablet single-column mode)
    const isStraight = Math.abs(p2.x - p1.x) < 20;

    if (isStraight) {
      pathData += ` L ${p2.x} ${p2.y}`;
    } else {
      const cp1x = p1.x;
      const cp1y = p1.y + (p2.y - p1.y) / 2;
      const cp2x = p2.x;
      const cp2y = p1.y + (p2.y - p1.y) / 2;
      pathData += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
  }

  // 1. Base path: Dim/muted color, always visible
  const bgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  bgPath.setAttribute("d", pathData);
  bgPath.setAttribute("fill", "none");
  bgPath.setAttribute("stroke", "#A85D82");
  bgPath.setAttribute("stroke-width", "2.5");
  bgPath.setAttribute("stroke-dasharray", "6,6");
  bgPath.setAttribute("opacity", "0.2");
  svg.appendChild(bgPath);

  // 2. Progress path: Bright active color, dynamically revealed
  const fgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  fgPath.setAttribute("d", pathData);
  fgPath.setAttribute("fill", "none");
  fgPath.setAttribute("stroke", "#6B3654");
  fgPath.setAttribute("stroke-width", "3.5");
  fgPath.setAttribute("stroke-linecap", "round");
  fgPath.setAttribute("id", "worry-route-path-fg");
  svg.appendChild(fgPath);

  // 3. Moving pin/dot
  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("r", "6");
  dot.setAttribute("fill", "#6B3654");
  dot.setAttribute("stroke", "#FFFFFF");
  dot.setAttribute("stroke-width", "2");
  dot.setAttribute("id", "worry-route-dot");
  svg.appendChild(dot);

  // Measure path length and prepare dasharray for reveal
  const pathLength = fgPath.getTotalLength();
  fgPath.style.strokeDasharray = pathLength;
  fgPath.style.strokeDashoffset = pathLength;

  // Set initial dot position at the start of the path
  const startPoint = fgPath.getPointAtLength(0);
  if (startPoint) {
    dot.setAttribute("cx", startPoint.x);
    dot.setAttribute("cy", startPoint.y);
  }

  // Kill existing ScrollTrigger if we are resizing
  if (window.worryScrollTrigger) {
    window.worryScrollTrigger.kill();
  }

  // Create ScrollTrigger to animate the foreground path and dot dynamically with scroll
  window.worryScrollTrigger = ScrollTrigger.create({
    trigger: "#worry-timeline-container",
    start: "top 45%",
    end: "bottom 55%",
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress; // 0 to 1
      fgPath.style.strokeDashoffset = pathLength * (1 - progress);
      const point = fgPath.getPointAtLength(progress * pathLength);
      if (point) {
        dot.setAttribute("cx", point.x);
        dot.setAttribute("cy", point.y);
      }
    }
  });
}

function setupWorryCardHoverFeedback() {
  // Empty - progress path and moving dot are handled dynamically by scroll trigger!
}

// 10. GSAP ScrollTrigger Physics Falling Pills Animation for Kenapa Butuh TBB
function initFallingPillsAnimation() {
  const container = document.getElementById("falling-pills-container");
  const pills = document.querySelectorAll(".falling-pill");

  if (!container || !pills.length || typeof gsap === "undefined") return;

  // Set initial hidden physics state above viewport
  gsap.set(pills, {
    y: -160,
    opacity: 0,
    scale: 0.7,
    rotation: () => gsap.utils.random(-25, 25)
  });

  // Animate pills falling down with elastic bounce easing on scroll into view
  gsap.to(pills, {
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: (i) => {
      if (i === 0) return -6;
      if (i === 1) return 3;
      if (i === 2) return -2;
      if (i === 3) return 4;
      return -4;
    },
    duration: 1.1,
    stagger: 0.12,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: "#about-why-choose",
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  });
}




