(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    nav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  document.querySelectorAll("#year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const turneroLink = document.querySelector('[data-placeholder="turnero"]');
  if (turneroLink) {
    turneroLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("El enlace del Turnero web está pendiente de agregar.");
    });
  }
})();
