const hand__second  = document.querySelector('.hand__second');
const hand__minute  = document.querySelector('.hand__minute');
const hand__hour    = document.querySelector('.hand__hour');

function setDate() {
  const time__now     = new Date();
  const time__seconds = time__now.getSeconds();
  const time__minutes = time__now.getMinutes();
  const time__hours   = time__now.getHours();

  // We are adding 90 here to offset the inital
  // css setting of transform: rotate(90deg)
  const degrees__seconds = ((time__seconds / 60) * 360) + 90;
  const degrees__minutes = ((time__minutes / 60) * 360) + 90;
  const degrees__hours   = ((time__hours / 12)   * 360) + 90;

  hand__second.style.transform = `rotate(${degrees__seconds}deg)`;
  hand__minute.style.transform = `rotate(${degrees__minutes}deg)`;
  hand__hour.style.transform   = `rotate(${degrees__hours}deg)`;
}

setInterval(setDate, 1000);
