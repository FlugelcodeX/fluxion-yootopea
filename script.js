document.addEventListener("DOMContentLoaded", () => {
  /* MOBILE NAVIGATION */

  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      body.classList.toggle("menu-open");
    });
  }

  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("menu-open");
    });
  });

  /* MENU FILTER */

  const menuTabs = document.querySelectorAll(".menu-tab");
  const menuItems = document.querySelectorAll(".menu-item");

  if (menuTabs.length && menuItems.length) {
    menuTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const category = tab.dataset.category;

        menuTabs.forEach((item) => {
          item.classList.remove("active");
        });

        tab.classList.add("active");

        menuItems.forEach((item) => {
          if (category === "all" || item.dataset.category === category) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  /* GALLERY FILTER */

  const galleryButtons = document.querySelectorAll(".gallery-filter-btn");

  const galleryItems = document.querySelectorAll(".gallery-item");

  if (galleryButtons.length && galleryItems.length) {
    galleryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        galleryButtons.forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");

        galleryItems.forEach((item) => {
          const type = item.dataset.type;

          if (filter === "all" || filter === type) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });
  }

  /* IMAGE REVEAL */

  const images = document.querySelectorAll("img");

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");

          imageObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
    },
  );

  images.forEach((image) => {
    imageObserver.observe(image);
  });

  /* HEADER SCROLL BEHAVIOR */

  const header = document.querySelector(".site-header");

  const updateHeaderOnScroll = () => {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  updateHeaderOnScroll();

  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });

  /* ESCAPE MOBILE MENU */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      body.classList.remove("menu-open");
    }
  });
});
