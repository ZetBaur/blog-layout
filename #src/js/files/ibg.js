// ==============================ibg=============================================================================================

function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}

// function ibg() {
//   let ibg = document.querySelectorAll(".ibg");
//   for (var i = 0; i < ibg.length; i++) {
//     if (ibg[i].querySelector("img")) {
//       ibg[i].style.backgroundImage =
//         "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
//     }
//   }
// }

// ibg();
