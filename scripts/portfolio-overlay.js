(function () {
  var overlay = document.getElementById("portfolioOverlay");
  var closeButton = document.getElementById("portfolioOverlayClose");
  var title = document.getElementById("portfolioOverlayTitle");
  var content = document.getElementById("portfolioOverlayContent");
  var defaultContent = content ? content.innerHTML : "";

  if (!overlay || !closeButton || !title || !content) return;

  function openOverlay(item) {
    var img = item.querySelector("img");
    var heading = item.querySelector("h4");
    var label = "";
    var contentId = item.getAttribute("data-overlay-content");
    var template = contentId ? document.getElementById(contentId) : null;

    if (img && img.getAttribute("data-title")) {
      label = img.getAttribute("data-title");
    } else if (heading) {
      label = heading.textContent;
    } else if (img && img.getAttribute("alt")) {
      label = img.getAttribute("alt");
    }

    title.textContent = label || "Project title";
    if (template) {
      content.innerHTML = template.innerHTML;
    } else {
      content.innerHTML = defaultContent;
    }
    overlay.classList.add("isOpen");
    overlay.setAttribute("aria-hidden", "false");
  }

  function closeOverlay() {
    overlay.classList.remove("isOpen");
    overlay.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    var link = target.closest(".portfolioItem a");
    if (!link) return;

    event.preventDefault();
    openOverlay(link.closest(".portfolioItem"));
  });

  closeButton.addEventListener("click", closeOverlay);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeOverlay();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeOverlay();
    }
  });
})();
