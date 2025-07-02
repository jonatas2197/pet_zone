// Botão do menu (ícone hambúrguer)
const menuToggle = document.querySelector(".menu-toggle");

// Lista de links do menu
const navLinks = document.querySelector(".nav-links");

// Abre/fecha o menu ao clicar no botão
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fecha o menu automaticamente ao clicar em qualquer link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
