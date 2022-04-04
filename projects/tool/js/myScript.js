var sound = new Audio('audio/meditation-bell-sound.mp3');

var totalSecs = 0;

function setTime() { // onclick
  sound.play();
  var intervalID = setInterval(increment, 1000);
  // clear prep step
  document.getElementById("step").innerHTML = "in a soft spiraling motion, pour <span class=\"highlight\">60 grams</span> of water over the ground coffee.";
  document.getElementById("start-btn").innerHTML = "00:00";
  document.getElementById("start-btn").disabled = true;
}

function increment() {
  totalSecs++;
  var mins = Math.floor(totalSecs / 60);
  if (mins <= 9) {
    mins = "0" + mins;
  }
  var secs = Math.floor(totalSecs) % 60;
  if (secs <= 9) { 
    secs = "0" + secs; 
  }
  document.getElementById("start-btn").innerHTML = mins + ":" + secs;
  checkTime(mins, secs);
}

function checkTime(m, s) {

  if (m == 0 && s == 15) {
    document.getElementById("step").innerHTML = "give the slurry a gentle swirl.";
    sound.play();
  }

  if (m == 0 && s == 30) {
    document.getElementById("step").innerHTML = "be still and let the coffee bloom.";
    sound.play();
  }

  if (m == 0 && s == 45) {
    document.getElementById("step").innerHTML = "slowly pour water in a spiraling motion, up to the <span class=\"highlight\">300 grams</span> mark.";
    sound.play();
  }

  if (m == 1 && s == 15) {
    document.getElementById("step").innerHTML = "and again, to the <span class=\"highlight\">500 grams</span> mark.";
    sound.play();
  }

  if (m == 1 && s == 45) {
    document.getElementById("step").innerHTML = "with a spoon, stir the grounds once clockwise and once counterclockwise.";
    sound.play();
  }

  if (m == 2 && s == 00) {
    document.getElementById("step").innerHTML = "give the dripper a gentle swirl.";
    sound.play();
  }

  if (m == 2 && s == 15) {
    document.getElementById("step").innerHTML = "allow the brew to draw down.";
    // opportunity for some fun information here, while waiting
    sound.play();
  }

  if (m == 3 && s == 00) {
    document.getElementById("step").innerHTML = "good morning :)";
    sound.play();
    // how to stop the increment / setInterval at this point (ask rosa)
  }  
}

// animate svg coffee beans filling screen like an hourglass
// animate in bank of images at end?
// email james hoffman!
// switch to hario method?