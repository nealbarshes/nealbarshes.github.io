(function () {
  "use strict";

  var body = document.body;

  if (
    !body.classList.contains("tutorial-tech") ||
    body.classList.contains("tutorial-index")
  ) {
    return;
  }

  var content = document.querySelector(".page__content");

  if (!content || content.querySelector("[data-system-care-page]")) {
    return;
  }

  var article = document.createElement("article");
  article.className = "system-care-article";

  while (content.firstChild) {
    article.appendChild(content.firstChild);
  }

  var headings = Array.prototype.slice
    .call(article.querySelectorAll("h2"))
    .filter(function (heading) {
      return heading.parentElement === article && heading.textContent.trim();
    });
  var sections;

  if (headings.length) {
    sections = headings.map(function (heading, index) {
      if (!heading.id) {
        heading.id = "tutorial-section-" + (index + 1);
      }

      heading.setAttribute("data-system-care-section", "");
      heading.setAttribute("data-section-label", heading.textContent.trim());
      return heading;
    });
  } else {
    article.id = "tutorial-overview";
    article.setAttribute("data-system-care-section", "");
    article.setAttribute("data-section-label", "Overview");
    sections = [article];
  }

  var mobileNav = document.createElement("div");
  mobileNav.className = "system-care-mobile-nav";
  mobileNav.setAttribute("data-system-care-mobile-nav", "");

  var status = document.createElement("div");
  status.className = "system-care-mobile-nav__status";

  var currentLabel = document.createElement("span");
  currentLabel.className = "system-care-mobile-nav__label";
  currentLabel.setAttribute("data-system-care-current", "");

  var currentCount = document.createElement("span");
  currentCount.className = "system-care-mobile-nav__count";
  currentCount.setAttribute("data-system-care-count", "");

  status.appendChild(currentLabel);
  status.appendChild(currentCount);

  var track = document.createElement("div");
  track.className = "system-care-mobile-nav__track";
  track.setAttribute("aria-hidden", "true");

  var progress = document.createElement("span");
  progress.className = "system-care-mobile-nav__fill";
  progress.setAttribute("data-system-care-progress", "");
  track.appendChild(progress);

  var mobileSteps = document.createElement("div");
  mobileSteps.className = "system-care-mobile-nav__steps";
  mobileSteps.setAttribute("aria-label", "Page sections");
  mobileSteps.style.gridTemplateColumns =
    "repeat(" + sections.length + ", minmax(0, 1fr))";

  mobileNav.appendChild(status);
  mobileNav.appendChild(track);
  mobileNav.appendChild(mobileSteps);

  var shell = document.createElement("div");
  shell.className = "system-care-shell";
  shell.setAttribute("data-system-care-page", "");

  var rail = document.createElement("aside");
  rail.className = "system-care-rail";
  rail.setAttribute("aria-label", "Page sections");

  var eyebrow = document.createElement("p");
  eyebrow.className = "system-care-rail__eyebrow";
  eyebrow.textContent = "On this page";

  var railList = document.createElement("ol");
  railList.className = "system-care-rail__list";

  function createLink(section, index, mobile) {
    var link = document.createElement("a");
    var label = section.getAttribute("data-section-label");

    link.href = "#" + section.id;
    link.setAttribute("aria-label", label);

    if (!mobile) {
      var number = document.createElement("span");
      number.textContent = String(index + 1).padStart(2, "0");
      link.appendChild(number);
      link.appendChild(document.createTextNode(label));
    }

    return link;
  }

  sections.forEach(function (section, index) {
    var item = document.createElement("li");
    item.appendChild(createLink(section, index, false));
    railList.appendChild(item);
    mobileSteps.appendChild(createLink(section, index, true));
  });

  rail.appendChild(eyebrow);
  rail.appendChild(railList);
  shell.appendChild(rail);
  shell.appendChild(article);
  content.appendChild(mobileNav);
  content.appendChild(shell);

  var railLinks = Array.prototype.slice.call(railList.querySelectorAll("a"));
  var mobileLinks = Array.prototype.slice.call(mobileSteps.querySelectorAll("a"));
  var activeIndex = -1;
  var ticking = false;

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

    currentLabel.textContent = sections[index].getAttribute("data-section-label");
    currentCount.textContent = index + 1 + " of " + sections.length;
    progress.style.width = ((index + 1) / sections.length) * 100 + "%";
  }

  function findCurrentSection() {
    var marker = Math.min(window.innerHeight * 0.3, 220);
    var index = 0;

    sections.forEach(function (section, sectionIndex) {
      if (section.getBoundingClientRect().top <= marker) {
        index = sectionIndex;
      }
    });

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2
    ) {
      index = sections.length - 1;
    }

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
