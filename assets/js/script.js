/* =============== CLOCK ===============--> */
const hour = document.getElementById('clock-hour'),
	  minutes = document.getElementById('clock-minutes'),
	  seconds = document.getElementById('clock-seconds');
	  
const clock = () => {
	let date = new Date();

	let hh = date.getHours() * 30,
		mm = date.getMinutes() * 6,
		ss = date.getSeconds() * 6,
		ms = date.getMilliseconds() * 0.36;

	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
	minutes.style.transform = `rotateZ(${mm + ss / 60}deg)`
	seconds.style.transform = `rotateZ(${ss + ms / 60}deg)`

};

setInterval(clock, 1)