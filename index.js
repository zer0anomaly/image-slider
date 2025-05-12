const nextbutton = document.getElementById('nextbutton')
const backbutton = document.getElementById('backbutton')
const seconddiv = document.getElementById('seconddiv')

const list = [
	"imageone.png",
	"imagetwo.png",
	"imagethree.png"
];

let currentIndex = 0;
let currentlength = list.length;

function firstfunction () {
seconddiv.style.backgroundImage = `url(${list[currentIndex]})`;
}
firstfunction()


nextbutton.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % list.length
	firstfunction()
})
backbutton.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + list.length) % list.length
	firstfunction()
})
function secondfunction() {
	if (currentIndex < currentlength -1 ){
		currentIndex++
		firstfunction()
	}else if (currentIndex >= currentlength - 1){
		currentIndex = 0
		firstfunction()
	}
}
setInterval(secondfunction, 1000)
