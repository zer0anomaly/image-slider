const nextbutton = document.getElementById('nextbutton')
const backbutton = document.getElementById('backbutton')
const seconddiv = document.getElementById('seconddiv')

const list = [
	"images/one.png",
	"images/two.png"
];

currentIndex = 0;

function firstfunction () {
seconddiv.style.backgroundImage = `url(${list[currentIndex]})`;
}
firstfunction()


nextbutton.addEventListener("click", () => {

})