// Nav links
// =======================

let navLink = document.getElementsByClassName("nav__link");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Logo Animation
// ===============================

const text = document.querySelector(".logo");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

const logo = document.querySelector(".logo");
const tl = gsap.timeline();

logo.addEventListener("mouseenter", () => {
  tl.to(".logo", { scale: 1.1, duration: 0.09 });
  tl.to(".logo span:nth-child(1)", { duration: 0.03, color: "#8e4423" }, "<");
  tl.to(".logo span:nth-child(1)", { duration: 0.03, color: "#e6e3bb" });
  tl.to(".logo span:nth-child(2)", { duration: 0.03, color: "#8e4423" });
  tl.to(".logo span:nth-child(2)", { duration: 0.03, color: "#e6e3bb" });
  tl.to(".logo span:nth-child(3)", { duration: 0.03, color: "#8e4423" });
  tl.to(".logo span:nth-child(3)", { duration: 0.03, color: "#e6e3bb" });
  tl.to(".logo span:nth-child(4)", { duration: 0.03, color: "#8e4423" });
  tl.to(".logo span:nth-child(4)", { duration: 0.03, color: "#e6e3bb" });
  tl.to(".logo span:nth-child(5)", { duration: 0.03, color: "#8e4423" });
  tl.to(".logo span:nth-child(5)", { duration: 0.03, color: "#e6e3bb" });
  tl.to(".logo span:nth-child(6)", { duration: 0.03, color: "#8e4423" });
  tl.to(".logo span:nth-child(6)", { duration: 0.03, color: "#e6e3bb" });
  tl.to(".logo", { scale: 1, duration: 0.3 });
});



// Menu Burger
// ===================================================
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const toggleMenu = function () {
	menu.classList.toggle('_active');
	burger.classList.toggle("_active");
}

burger.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMenu();
});

document.addEventListener('click', function (e) {
	const target = e.target;
	const its_menu = target == menu || menu.contains(target);
	const its_burger = target == burger;
	const menu_is_active = menu.classList.contains('_active');

	if (!its_menu && !its_burger && menu_is_active) {
		toggleMenu();
	}
});

const menuLink = document.querySelectorAll(".menu__link");
for (i = 0; i < menuLink.length; i++) {
	menuLinkCurrent = menuLink[i];
	menuLinkCurrent.addEventListener('click', function (e) {
		menu.classList.remove('_active');
		burger.classList.remove("_active");
	});
}

// =========================================================
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



// Tabs
// ================================================================

let tabButton = document.getElementsByClassName("gizmodo__nav-item");
for (let i = 0; i < tabButton.length; i++) {
  tabButton[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("_active");
    current[0].className = current[0].className.replace(" _active", "");
    this.className += " _active";
  });
}
