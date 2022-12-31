// -------------------------------------------------------------------------------
// GLOBAL TIME COUNTER, SOUND FILE, & INSTRUCTIONS
// -------------------------------------------------------------------------------

var TOTAL_SECS = 0;
var SOUND = new Audio('audio/meditation-bell-sound-13s.mp3');
var STEP_1 = "In a soft spiraling motion, pour <span class=\"highlight\">60 grams</span> of water over the ground coffee."
var STEP_2 = "Give the slurry a gentle swirl.";
var STEP_3 = "Be still and let the coffee bloom.";
var STEP_4 = "Slowly pour water in a spiraling motion, up to the <span class=\"highlight\">300 grams</span> mark.";
var STEP_5 = "And again, to the <span class=\"highlight\">500 grams</span> mark.";
var STEP_6 = "With a spoon, stir the grounds once clockwise and once counterclockwise.";
var STEP_7 = "Give the dripper a gentle swirl.";
var STEP_8 = "Allow the brew to draw down.";
var STEP_9 = "Good morning :)";
var AMBIENT_BEAN_COUNT = 0;
var AMBIENT_BEAN_ID = 0;

// -------------------------------------------------------------------------------
// TIMER FUNCTION
// -------------------------------------------------------------------------------

function increment() { 
  TOTAL_SECS++; // increment seconds
  var mins = Math.floor(TOTAL_SECS / 60); // format minutes
  if (mins <= 9) {
    mins = "0" + mins;
  }
  var secs = Math.floor(TOTAL_SECS) % 60; // format seconds
  if (secs <= 9) { 
    secs = "0" + secs; 
  }
  document.getElementById("start-btn").innerHTML = mins + ":" + secs; // set time in html

  checkTime(mins, secs); // adjust steps at the correct times
}

// -------------------------------------------------------------------------------
// CHANGE STEPS FUNCTION
// -------------------------------------------------------------------------------

function checkTime(m, s) {

  if (m == 0 && s == 15) {
    SOUND.play();
    changeStep(STEP_2);
    updateProgressBar(2);
    goDark();
    releaseBean("bean-2", 15);
  }

  if (m == 0 && s == 30) {
    SOUND.play();
    changeStep(STEP_3);
    updateProgressBar(3);
    goLight();
    releaseBean("bean-3", 15);
  }

  if (m == 0 && s == 45) {
    SOUND.play();
    changeStep(STEP_4);
    updateProgressBar(4);
    changeTrasitionTimes(30); // slow down trasitions to match step change timing
    goDark();
    releaseBean("bean-4", 30);
  }

  if (m == 1 && s == 15) {
    SOUND.play();
    changeStep(STEP_5);
    updateProgressBar(5);
    goLight();
    releaseBean("bean-5", 30);
  }

  if (m == 1 && s == 45) {
    SOUND.play();
    changeStep(STEP_6);
    updateProgressBar(6);
    changeTrasitionTimes(15); // speed up trasitions to match step change timing
    goDark();
    releaseBean("bean-6", 15);
  }

  if (m == 2 && s == 00) {
    SOUND.play();
    changeStep(STEP_7);
    updateProgressBar(7);
    goLight();
    releaseBean("bean-7", 15);
  }

  if (m == 2 && s == 15) {
    // opportunity for some fun information here, while waiting
    SOUND.play();
    changeStep(STEP_8);
    updateProgressBar(8);
    changeTrasitionTimes(45); // slow down trasitions to match step change timing
    goDark();
    releaseBean("bean-8", 45);
  }

  if (m == 3 && s == 00) {
    SOUND.play();
    changeStep(STEP_9);
    updateProgressBar(9);
    goLight();
    releaseBean("bean-9", 30);
    setTimeout(releaseBean, 5000, "bean-10", 20);
    setTimeout(releaseBean, 10000, "bean-11", 25);
    // how to stop the increment / setInterval at this point (ask rosa)
  }  

  if (m == 3 && s == 30) {
    ambientBeanPileUp();
    AMBIENT_BEAN_ID = setInterval(ambientBeanPileUp, 7000);
  }
}

// -------------------------------------------------------------------------------
// SETUP FUNCTION
// -------------------------------------------------------------------------------

function setup() {

  // set height of body element to actual height of window (takes safari nav into account)
  let h = window.innerHeight;
  $('body').css('height', h);

  ambientBeanPileUp();
  AMBIENT_BEAN_ID = setInterval(ambientBeanPileUp, 7000);

  // on click of the start button
  $("#start-btn").click(function() {

    SOUND.play(); // play sound
    clearInterval(AMBIENT_BEAN_ID); // stop ambient bean waterfall

    // this stuff only needs to happen on click (not for future steps!)
    var intervalID = setInterval(increment, 1000); // run timer continuously
    styleTimer(); 

    changeStep(STEP_1);
    updateProgressBar(1);
    changeTrasitionTimes(15); // first setup of transition timing
    goLight();
    releaseBean("bean-1", 15);

  });

}

// -------------------------------------------------------------------------------
// DOCUMENT READY FUNCTION
// -------------------------------------------------------------------------------

$(function() {
  setup();
});

// -------------------------------------------------------------------------------
// HELPER FUNCTION TO STYLE TIMER ON START
// -------------------------------------------------------------------------------

function styleTimer() { 
  document.getElementById("start-btn").innerHTML = "00:00";
  document.getElementById("start-btn").style.border = "none";
  document.getElementById("start-btn").style.padding = "0";
  document.getElementById("start-btn").disabled = true;
  document.getElementById("start-btn").style.cursor = "auto";
  document.getElementById("start-btn").style.color = "var(--light-color)";
  document.getElementById("start-btn").style.fontSize = "2rem";
}

// -------------------------------------------------------------------------------
// HELPER FUNCTION TO CHANGE STEP
// -------------------------------------------------------------------------------

function changeStep(instruction) {
  document.getElementById("step").innerHTML = instruction;
}

// -------------------------------------------------------------------------------
// HELPER FUNCTION TO UPDATE PROGRESS BAR
// -------------------------------------------------------------------------------

function updateProgressBar(index) {
  document.getElementById("progress-bar").children[index].classList.add("filled");
}

// -------------------------------------------------------------------------------
// HELPER FUNCTIONS TO TRANSITION TO LIGHT & DARK MODES
// -------------------------------------------------------------------------------

function goLight() {
  document.getElementById("timer-box").style.backgroundColor = "var(--mid-color)";
  document.getElementById("timer-box").style.borderColor = "var(--mid-color)";
  document.getElementById("start-btn").style.backgroundColor = "var(--mid-color)";
}

function goDark() {
  document.getElementById("timer-box").style.backgroundColor = "var(--dark-color)";
  document.getElementById("timer-box").style.borderColor = "var(--dark-color)";
  document.getElementById("start-btn").style.backgroundColor = "var(--dark-color)";
}

// -------------------------------------------------------------------------------
// HELPER FUNCTION TO CHANGE TRANSITION TIMES
// -------------------------------------------------------------------------------

function changeTrasitionTimes(sec) {
  document.getElementById("timer-box").style.transition = "background-color " + sec + "s linear, border-color " + sec + "s linear";
  document.getElementById("start-btn").style.transition = "background-color " + sec + "s linear";
}

// -------------------------------------------------------------------------------
// HELPER FUNCTION TO GET RANDOM INT
// -------------------------------------------------------------------------------

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// -------------------------------------------------------------------------------
// HELPER FUNCTION TO RELEASE COFFFEE BEAN
// -------------------------------------------------------------------------------

function releaseBean(bean_id, interval) {
  let rand_vw = getRandomInt(93); 
  document.getElementById(bean_id).style.left = rand_vw + "vw"; // randomly position x-coord of bean
  document.getElementById(bean_id).style.animation = "rotation 10s linear infinite, falling " + interval + "s cubic-bezier(0,.5,1,.5)"; // set animation on bean
}

// -------------------------------------------------------------------------------
// HELPER FUNCTION TO RELEASE COFFFEE BEAN AMBIENTLY (12-14)
// -------------------------------------------------------------------------------

function ambientBeanPileUp() {
  var beanSVG = "\<svg id=\"ambient-bean-" + AMBIENT_BEAN_COUNT + "\" class=\"bean-defaults\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 58.19 80.02\"\>\<path d=\"M202.92,245.57c.3.56.62,1.1.91,1.67s.46,1,.69,1.54.59,1.28.83,1.93c.42,1.14,1.21,2.06,1.73,3.14.32.65.57,1.34.88,2s.61,1.2.88,1.81a19,19,0,0,1,1.34,3.89c.13.65.39,1.27.51,1.91.18.94.29,1.9.41,2.84.09.72.19,1.44.22,2.17.06,1.19.06,2.38.09,3.57,0,.68.1,1.36.08,2,0,.92-.13,1.84-.19,2.76s-.11,1.94-.21,2.91-.26,2.22-.47,3.31c-.17.92-.44,1.82-.68,2.72s-.41,1.51-.63,2.26c-.16.54-.3,1.08-.49,1.61-.13.36-.33.7-.48,1.06-.22.52-.4,1.07-.65,1.58-.44.9-.9,1.8-1.37,2.68s-.84,1.5-1.31,2.21a14.08,14.08,0,0,1-1.35,1.8c-.75.81-1.36,1.7-2,2.56a6.62,6.62,0,0,1-.91.84c-.41.37-.79.75-1.22,1.09a17.61,17.61,0,0,1-1.48,1.09,9.48,9.48,0,0,1-1.23.73,12.38,12.38,0,0,1-1.64.69,27.42,27.42,0,0,1-2.64.77,12.34,12.34,0,0,1-2.1.29c-1.26.06-2.52.07-3.78.06a5.42,5.42,0,0,1-1.18-.21c-.58-.13-1.15-.26-1.72-.42s-1.13-.38-1.71-.52a10.34,10.34,0,0,1-2.72-1.25c-1.09-.63-2.23-1.18-3.3-1.84s-1.83-1.25-2.73-1.89c-.3-.21-.59-.42-.87-.65-.78-.64-1.58-1.27-2.34-1.93s-1.75-1.54-2.58-2.36a13.84,13.84,0,0,1-1.41-1.64c-.78-1.05-1.56-2.11-2.26-3.21a4.92,4.92,0,0,1-.83-1.47,7.37,7.37,0,0,0-.8-1.41c-.38-.74-.75-1.5-1.09-2.27-.46-1-.9-2.1-1.33-3.16-.37-.89-.74-1.78-1.09-2.68-.25-.62-.48-1.25-.7-1.89s-.4-1.22-.62-1.81-.49-1.08-.68-1.64c-.34-1-.65-1.94-.93-2.92-.23-.76-.41-1.53-.6-2.3-.08-.36-.16-.72-.21-1.08a16.36,16.36,0,0,1-.33-2,11.83,11.83,0,0,0-.31-1.66c-.19-1-.39-1.95-.53-2.93-.16-1.19-.28-2.39-.38-3.58a18.3,18.3,0,0,1-.07-2.22c.07-1.3.17-2.61.31-3.91.09-.85.28-1.68.4-2.52s.17-1.56.26-2.34a5,5,0,0,1,.18-.94c.34-.94.69-1.88,1.06-2.81.22-.55.46-1.08.72-1.61.18-.38.39-.73.6-1.09.5-.83,1-1.67,1.51-2.49a6.32,6.32,0,0,1,.52-.64c.35-.44.67-.89,1-1.31s1-1.11,1.52-1.63a7.36,7.36,0,0,1,1.05-.75,14.39,14.39,0,0,1,1.23-.8,10.24,10.24,0,0,1,2.63-1.3c.53-.1,1-.34,1.57-.49a3,3,0,0,1,.61,0,3.62,3.62,0,0,0,2.46-1.18,11,11,0,0,1,3.59-2.28,10.71,10.71,0,0,1,2.64-.63,28.4,28.4,0,0,1,3.56-.34,26.87,26.87,0,0,1,3.69.22c.77.09,1.5.31,2.25.43a7.8,7.8,0,0,1,1.57.57,15.74,15.74,0,0,1,1.45.66,8.62,8.62,0,0,1,1.25.81,14.41,14.41,0,0,1,1.13,1.08c.72.7,1.45,1.4,2.14,2.13.34.35.6.78.93,1.15.57.62,1.17,1.2,1.74,1.82a4.63,4.63,0,0,1,.48.68c.69,1.08,1.36,2.16,2.05,3.23.21.32.46.6.67.91.51.74,1,1.48,1.48,2.24s.77,1.28,1.14,1.94a3.77,3.77,0,0,1,.22.59Zm-34.33-12.65a16.11,16.11,0,0,0-1.78.66,15.36,15.36,0,0,0-1.95,1.25,25.68,25.68,0,0,0-2,1.65c-.47.44-.87,1-1.3,1.42a4.24,4.24,0,0,0-.46.49c-.37.58-.71,1.19-1.09,1.78-.47.75-1,1.49-1.44,2.23a6.75,6.75,0,0,0-.44.65c-.47.94-.93,1.89-1.38,2.84a5.1,5.1,0,0,0-.46,1.11c-.18.89-.29,1.8-.45,2.71s-.38,1.63-.47,2.45c-.12,1-.14,2-.19,3a22.45,22.45,0,0,0,0,2.32c.11,1.53.25,3.06.43,4.58.15,1.27.38,2.52.58,3.78.12.75.25,1.5.38,2.25s.23,1.24.38,1.86c.21.85.46,1.69.7,2.54.18.68.34,1.37.57,2,.38,1.09.82,2.16,1.22,3.24s.88,2.42,1.34,3.63c.34.9.71,1.8,1.1,2.68.54,1.22,1.08,2.44,1.68,3.63s1.11,2.12,1.74,3.13a19.87,19.87,0,0,0,3.39,4.25c1,.88,1.89,1.78,2.87,2.63s1.81,1.46,2.73,2.17a21.63,21.63,0,0,0,2,1.45c1.16.69,2.36,1.29,3.54,1.94a12.6,12.6,0,0,0,1.56.87c1,.35,2,.61,3,.88a9.77,9.77,0,0,0,1.9.41c1.35.08,2.72.06,4.08.06a5.94,5.94,0,0,0,.93-.13,10.17,10.17,0,0,1-.78-1.43,11.55,11.55,0,0,1-.57-2.17c-.22-1.37-.41-2.76-.51-4.15s0-2.56-.05-3.83c0-.94-.14-1.88-.22-2.82-.06-.73-.09-1.47-.2-2.19-.18-1.19-.43-2.37-.63-3.55s-.44-2.52-.65-3.78l-.33-2.06c-.08-.47-.16-.94-.26-1.41-.21-.9-.42-1.81-.64-2.71s-.44-2-.74-2.92c-.37-1.2-.8-2.39-1.23-3.58-.5-1.39-1-2.78-1.54-4.16-.42-1.08-.88-2.15-1.33-3.22-.23-.56-.45-1.13-.71-1.67s-.55-1-.79-1.47c-.39-.76-.71-1.56-1.12-2.3-.54-1-1.13-1.89-1.71-2.83-.45-.73-.9-1.44-1.36-2.16a9.3,9.3,0,0,1-.76-1.13,19.42,19.42,0,0,0-2-3.05c-.41-.59-.85-1.15-1.24-1.75s-.9-1.4-1.34-2.11-.88-1.39-1.23-2.12A12.74,12.74,0,0,1,168.1,237a5.46,5.46,0,0,1,.2-2.86A8.69,8.69,0,0,0,168.59,232.92Zm29.26,70c.5-.48,1-1,1.48-1.41a11.71,11.71,0,0,0,1.14-1c.64-.75,1.21-1.56,1.82-2.32.43-.54.91-1,1.33-1.58a7.3,7.3,0,0,0,.44-.77c.48-.79,1-1.56,1.43-2.39a10.24,10.24,0,0,0,1-2.3,10.16,10.16,0,0,1,.66-1.48c.3-.72.58-1.45.82-2.2.32-1,.62-2,.89-3.05.19-.73.24-1.52.49-2.23a14.31,14.31,0,0,0,.42-2.74c.14-.85.11-1.72.26-2.56a39.27,39.27,0,0,0,.21-5,26.19,26.19,0,0,0-.09-2.8c-.06-.91-.1-1.82-.22-2.73-.15-1.17-.32-2.34-.57-3.49a22.78,22.78,0,0,0-.84-2.78c-.29-.82-.68-1.62-1-2.42-.21-.47-.44-.93-.66-1.4-.37-.78-.69-1.58-1.09-2.33s-.89-1.34-1.23-2.06c-.49-1-.85-2.07-1.31-3.09s-1-1.91-1.43-2.92a13.57,13.57,0,0,0-1.54-2.7c-.53-.79-1.1-1.54-1.63-2.33-.34-.5-.63-1-1-1.55s-.67-1-1-1.51a16.76,16.76,0,0,0-1.17-1.47c-.48-.54-1-1-1.52-1.54a20.44,20.44,0,0,0-2.75-2.83,18.12,18.12,0,0,0-1.91-1.57,11.27,11.27,0,0,0-3.64-1.27,24.16,24.16,0,0,0-2.53-.39,25,25,0,0,0-3.12.07c-1,.07-2.07.16-3.09.33a7.49,7.49,0,0,0-2,.56,8.1,8.1,0,0,0-1.56,1c-.85.65-1.67,1.33-2.4,1.92.37.78.72,1.49,1.06,2.2a8,8,0,0,0,.45.93c.29.47.63.91.95,1.36a12.34,12.34,0,0,0,1.07,1.5,32.28,32.28,0,0,0,2.88,2.73,15.31,15.31,0,0,1,1.94,1.92c.51.57,1,1.14,1.5,1.72s.8,1,1.18,1.46.84,1.11,1.24,1.67,1,1.4,1.46,2.11,1.05,1.45,1.51,2.21c.62,1.06,1.2,2.14,1.75,3.23s1,2,1.44,3.09c.49,1.27.9,2.58,1.32,3.88.5,1.54,1,3.1,1.44,4.65.42,1.35.77,2.72,1.26,4a35.86,35.86,0,0,1,1.22,4.43c.19.83.43,1.65.67,2.47.33,1.13.73,2.25,1,3.39.37,1.51.67,3,1,4.55a38.1,38.1,0,0,1,.87,6.11c.06,1.59.14,3.18.09,4.76C198.18,299,198,300.93,197.85,302.89Zm-28.5-69.23c-.09.56-.22,1.06-.25,1.57a7.76,7.76,0,0,0,.44,2.85,17,17,0,0,0,1.7,3.73c.42.67.87,1.32,1.32,2s1,1.49,1.55,2.21c.38.52.83,1,1.19,1.51.78,1.14,1.52,2.29,2.27,3.45.33.51.63,1.05,1,1.57s.55.74.76,1.14c.66,1.27,1.5,2.44,2,3.77.4,1,1,1.92,1.42,2.89s.72,1.76,1.07,2.64c.43,1.1.89,2.19,1.28,3.3.57,1.64,1.11,3.29,1.64,4.94.17.52.29,1.06.41,1.6s.28,1.29.42,1.93c.24,1.12.5,2.24.72,3.37.12.62.16,1.25.26,1.88.16,1,.36,2,.52,2.95.11.73.18,1.46.3,2.19.2,1.25.45,2.49.63,3.74.13.95.18,1.91.24,2.87.09,1.35.17,2.71.25,4.07s.11,2.71.26,4.06a16.24,16.24,0,0,0,.6,2.57,5.44,5.44,0,0,0,.69,1.66c.68.94,2.81.78,3.58-.2.3-.39.6-.78.87-1.19a1.53,1.53,0,0,0,.25-.62c.06-.5,0-1,.11-1.52.09-.86.24-1.72.29-2.59.06-1.2.07-2.41.05-3.61,0-1,0-2-.14-3s-.28-2.3-.48-3.44c-.25-1.39-.56-2.77-.86-4.14s-.58-2.65-.9-4-.69-2.55-1-3.84c-.17-.67-.24-1.37-.44-2-.36-1.18-.79-2.34-1.19-3.51-.47-1.39-1-2.76-1.38-4.18-.32-1.23-.76-2.42-1.19-3.61s-.94-2.54-1.47-3.79c-.41-1-.88-1.94-1.38-2.88s-1.12-2-1.69-3a14,14,0,0,0-.76-1.23c-.45-.62-.93-1.22-1.39-1.83-.88-1.16-1.72-2.35-2.64-3.48-.64-.8-1.38-1.51-2.08-2.25a12,12,0,0,0-1.26-1.31c-1-.83-2-1.68-2.93-2.61a17.65,17.65,0,0,1-2.26-3.13,22.5,22.5,0,0,1-1.44-2.86A1.08,1.08,0,0,0,169.35,233.66Z\" transform=\"translate(-153.3 -227.09)\"/\>\</svg\>";
  document.body.insertAdjacentHTML("beforeend", beanSVG);
  // apply correct styles
  $("#ambient-bean-" + AMBIENT_BEAN_COUNT).css("bottom", "101vh");
  // run release bean function
  releaseBean("ambient-bean-"+AMBIENT_BEAN_COUNT, 5);
  // increment bean count
  AMBIENT_BEAN_COUNT++;
}


// -------------------------------------------------------------------------------
// NOTES & IDEAS !
// -------------------------------------------------------------------------------

// animate svg coffee beans filling screen like an hourglass
// animate in bank of images at end?
// email james hoffman!
// switch to hario method?