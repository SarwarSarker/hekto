const allFilterItems = document.querySelectorAll(".product-card");
const allFilterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  allFilterBtns[0].classList.add("active");
});

allFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showFilteredContent(btn);
  });
});

function showFilteredContent(btn) {
  allFilterItems.forEach((item) => {
    if (item.classList.contains(btn.id)) {
      resetActiveBtn();
      btn.classList.add("active");
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function resetActiveBtn() {
  allFilterBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

//nav

const hideToggle = document.querySelector(".hide-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

hideToggle.addEventListener("click", () => {
  navLinks.classList.toggle("hide");
});
menuToggle.addEventListener("click", () => {
  if (navLinks.classList.contains("hide")) {
    navLinks.classList.remove("hide");
    navLinks.classList.toggle("show");
  }
});
