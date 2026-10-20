document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp button scroll behavior
(function () {
  const whatsappBtn = document.querySelector('.whatsapp-button');
  const poweredBy = document.querySelector('.powered-by');
  
  if (!whatsappBtn || !poweredBy) return;
  
  window.addEventListener('scroll', () => {
    const poweredByRect = poweredBy.getBoundingClientRect();
    const btnHeight = whatsappBtn.offsetHeight;
    const bottomSpace = poweredByRect.top - window.innerHeight;
    
    if (bottomSpace < 30 + btnHeight) {
      // Move button up so it doesn't overlap powered by
      const offset = Math.abs(bottomSpace) + 30;
      whatsappBtn.style.bottom = offset + 'px';
    } else {
      whatsappBtn.style.bottom = '30px';
    }
  });
})();

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
