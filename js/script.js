document.getElementById("year").textContent = new Date().getFullYear();


document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.addEventListener("click", () => {
    link.blur();
  });
});
