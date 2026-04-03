let input = document.querySelector("#time");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let display = document.querySelector("#display");

let timer = null;
let time = 0;

function formatTime(seconds){

let minutes = Math.floor(seconds / 60);
let secs = seconds % 60;

if(minutes < 10) minutes = "0" + minutes;
if(secs < 10) secs = "0" + secs;

return minutes + ":" + secs;
}

startBtn.addEventListener("click", function(){

if(input.value === "" || Number(input.value) <= 0){
return;
}

if(timer !== null){
return;
}

time = Number(input.value);
display.textContent = formatTime(time);

startBtn.disabled = true;

timer = setInterval(function(){

time--;
display.textContent = formatTime(time);

if(time <= 0){

clearInterval(timer);
timer = null;

display.textContent = "Done!";
input.value = "";

startBtn.disabled = false;

}

},1000);

});

stopBtn.addEventListener("click", function(){

clearInterval(timer);
timer = null;

startBtn.disabled = false;

});

resetBtn.addEventListener("click", function(){

clearInterval(timer);
timer = null;

time = 0;
display.textContent = "00:00";
input.value = "";

startBtn.disabled = false;

});