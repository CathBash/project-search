const burgerBtn = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-list");

burgerBtn.onclick = function () {
	menuIcon.classList.toggle("menu-icon-active");
	nav.classList.toggle("nav--mobile-active");
};
