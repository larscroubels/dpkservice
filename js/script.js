document.getElementById("year").textContent = new Date().getFullYear();


(function () {
  const banner = document.getElementById("cookieBanner");
  const match = document.cookie.match(/(?:^|; )cookie_consent=([^;]*)/);
  if (match) return;

  const save = (value) => {
    document.cookie =
      "cookie_consent=" + value + "; max-age=31536000; path=/; SameSite=Lax";
    banner.hidden = true;
  };

  document.getElementById("cookieAccept").addEventListener("click", () => save("accepted"));
  document.getElementById("cookieDecline").addEventListener("click", () => save("declined"));
  banner.hidden = false;
})();

document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.addEventListener("click", () => {
    link.blur();
  });
});
