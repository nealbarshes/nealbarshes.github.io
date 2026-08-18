(function () {
  "use strict";

  var page = document.querySelector("[data-system-care-page]");

  if (!page) {
    return;
  }

  var sections = Array.prototype.slice.call(
    page.querySelectorAll("[data-system-care-section]")
  );
  var railLinks = Array.prototype.slice.call(
    page.querySelectorAll(".system-care-rail a")
  );
  var mobileNav = document.querySelector("[data-system-care-mobile-nav]");
  var mobileLinks = mobileNav
    ? Array.prototype.slice.call(mobileNav.querySelectorAll("a"))
    : [];
  var currentLabel = document.querySelector("[data-system-care-current]");
  var currentCount = document.querySelector("[data-system-care-count]");
  var progress = document.querySelector("[data-system-care-progress]");
  var activeIndex = -1;
  var ticking = false;

  if (!sections.length) {
    return;
  }

  function updateNavigation(index) {
    if (index === activeIndex || index < 0 || index >= sections.length) {
      return;
    }

    activeIndex = index;

    railLinks.concat(mobileLinks).forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + sections[index].id;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (currentLabel) {
      currentLabel.textContent =
        sections[index].getAttribute("data-section-label") ||
        sections[index].textContent;
    }

    if (currentCount) {
      currentCount.textContent = index + 1 + " of " + sections.length;
    }

    if (progress) {
      progress.style.width = ((index + 1) / sections.length) * 100 + "%";
    }
  }

  function findCurrentSection() {
    var marker = Math.min(window.innerHeight * 0.3, 220);
    var index = 0;

    sections.forEach(function (section, sectionIndex) {
      if (section.getBoundingClientRect().top <= marker) {
        index = sectionIndex;
      }
    });

    updateNavigation(index);
    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(findCurrentSection);
      ticking = true;
    }
  }

  railLinks.concat(mobileLinks).forEach(function (link) {
    link.addEventListener("click", function () {
      var targetId = link.getAttribute("href").slice(1);
      var index = sections.findIndex(function (section) {
        return section.id === targetId;
      });

      updateNavigation(index);
    });
  });

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("hashchange", requestUpdate);

  findCurrentSection();
})();
