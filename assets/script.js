const slides = [

	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const baseUrl = "./assets/images/slideshow/";
const precedent = document.querySelector('.arrow_left');
const suivant = document.querySelector('.arrow_right');
const image = document.querySelector('.banner-img');
const txt = document.querySelector('.txt_tagline');
const dot = document.querySelector('.dots')
let positionslide = 0;

precedent.addEventListener("click", function () {
	if (positionslide == 0) {
		positionslide = slides.length - 1;
	} else { positionslide-- }
	image.src = baseUrl + slides[positionslide].image;
	txt.innerHTML= slides[positionslide].tagLine;
	dot = slides [positionslide].do
});

suivant.addEventListener("click", function () {
	if (positionslide == slides.length -1 ) {
		positionslide = 0;
	} else { positionslide++ }
	image.src = baseUrl + slides[positionslide].image;
	txt.innerHTML= slides[positionslide].tagLine;
});
