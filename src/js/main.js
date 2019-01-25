const handSecond = document.querySelector(".hand__second");
const handMinute = document.querySelector(".hand__minute");
const handHour = document.querySelector(".hand__hour");

function setDate() {
	const timeNow = new Date();
	const timeSeconds = timeNow.getSeconds();
	const timeMinutes = timeNow.getMinutes();
	const timeHours = timeNow.getHours();

	// We are adding 90 here to offset the inital
	// css setting of transform: rotate(90deg)
	const degreesSeconds = (timeSeconds / 60) * 360 + 90;
	const degreesMinutes = (timeMinutes / 60) * 360 + 90;
	const degreesHours = (timeHours / 12) * 360 + 90;

	handSecond.style.transform = `rotate(${degreesSeconds}deg)`;
	handMinute.style.transform = `rotate(${degreesMinutes}deg)`;
	handHour.style.transform = `rotate(${degreesHours}deg)`;
}

setInterval(setDate, 1000);
