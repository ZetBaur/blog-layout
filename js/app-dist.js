




 









let phrases = ["Happy", "New Year", "to all", "who believe", "in", "new", "years", "😍"]
let demo = document.querySelector(".demo")
let animation = gsap.timeline({repeat:5, repeatDelay:0.6})

function createLayers(){
	phrases.forEach(value => {
		let layer = document.createElement("div")
		layer.innerHTML = value
		demo.appendChild(layer)
	})
}

function animateText() {
	let layers = document.querySelectorAll(".demo div")
	layers.forEach(function(element, index){
		animation.fromTo(element, {opacity:0, scale:0}, {scale:1, opacity:1, repeat:1, yoyo:true, yoyoEase:true, repeatDelay:0.3})
	})
	gsap.set(".demo", {visibility:"visible"}) 
}

createLayers()
animateText()
console.log(test);

/* learn the GreenSock Animation Platform (GSAP 3) https://courses.snorkl.tv/courses/gsap-3-express || only $4.95 per month */