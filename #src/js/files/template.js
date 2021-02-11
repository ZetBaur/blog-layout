//=================Menu=========================================================================================================


const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
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


// =============Add active class to current element=========================================

let btns = document.getElementsByClassName("top-header__lang-item");

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		let current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
