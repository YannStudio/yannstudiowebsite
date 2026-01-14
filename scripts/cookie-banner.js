(function () {
  var banner = document.getElementById("cookieBanner");
  var button = document.getElementById("cookieBannerButton");
  if (!banner || !button) return;
  if (localStorage.getItem("cookiesAccepted") === "true") {
    banner.style.display = "none";
    return;
  }
  button.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });
})();
