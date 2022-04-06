const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let load = 0;

function blurAnimation() {
  load++;
  // IF THE LOAD IS GREATER THAN 99 STOP THE INCREMENT
  if (load > 99) {
    clearInterval(interval);
  }

  //CHANGE THE TEXT CONTENT
  loadText.textContent = `${load}%`;
  // AS THE TEXT CONTENT COUNTS FROM 0-100, The OPACITY DECREASES FROM 1 - 0
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 3, 0)}rem)`;
}

// SET INTERVAL INCREMENT THE LOAD BY 1 EVERY 30ms
let interval = setInterval(blurAnimation, 30);

// FUNCTION THAT MAPS TWO NUMBER RANGE TO EACH OTHER
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
/*
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

*/
