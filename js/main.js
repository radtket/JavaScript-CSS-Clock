'use strict';

var hand__second = document.querySelector('.hand__second');
var hand__minute = document.querySelector('.hand__minute');
var hand__hour = document.querySelector('.hand__hour');

function setDate() {
  var time__now = new Date();
  var time__seconds = time__now.getSeconds();
  var time__minutes = time__now.getMinutes();
  var time__hours = time__now.getHours();

  // We are adding 90 here to offset the inital
  // css setting of transform: rotate(90deg)
  var degrees__seconds = time__seconds / 60 * 360 + 90;
  var degrees__minutes = time__minutes / 60 * 360 + 90;
  var degrees__hours = time__hours / 12 * 360 + 90;

  hand__second.style.transform = 'rotate(' + degrees__seconds + 'deg)';
  hand__minute.style.transform = 'rotate(' + degrees__minutes + 'deg)';
  hand__hour.style.transform = 'rotate(' + degrees__hours + 'deg)';
}

setInterval(setDate, 1000);
//# sourceMappingURL=main.js.map
