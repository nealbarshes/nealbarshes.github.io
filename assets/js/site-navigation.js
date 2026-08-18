(function () {
  "use strict";

  var currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  var links = document.querySelectorAll(".site-menu__list a[href]");

  links.forEach(function (link) {
    var targetPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    var isCurrent = targetPath === "/"
      ? currentPath === "/"
      : currentPath === targetPath || currentPath.indexOf(targetPath + "/") === 0;

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}());
