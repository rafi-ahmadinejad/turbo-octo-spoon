const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const categoryToggle = document.getElementById("category-toggle");
const categoryMenu = document.getElementById("category-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (!categoryMenu.classList.contains("hidden")) {
    categoryMenu.classList.add("hidden");
  }
});

if (categoryToggle)
  categoryToggle.addEventListener("click", () => {
    categoryMenu.classList.toggle("hidden");
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
