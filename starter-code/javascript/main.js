class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.TimeTracker = document.getElementsByClassName("number")
    this.seconds = "00";
    this.minutes = "00"; 
  }
  
  startClick() {
    this.intervalId = setInterval(() =>{
      this.currentTime++
      this.getTime();
      this.TimeTracker[3].innerHTML = this.seconds.charAt(1);
      this.TimeTracker[2].innerHTML = this.seconds.charAt(0);
      this.TimeTracker[1].innerHTML = this.minutes.charAt(1);
      this.TimeTracker[0].innerHTML = this.minutes.charAt(0);
    },1000);
    }

  getTime(){
    var sec = this.currentTime % 60;
    var minutes = Math.floor(this.currentTime / 60);
    
    if( 0 < sec && sec <= 9){
      this.seconds = "0" + sec.toString();
    }else if(10 <= sec && sec < 60){
      this.seconds = sec.toString();
    } 

    if(sec == 0 && 0 < minutes < 10){
      this.minutes = "0" + minutes.toString();
      this.seconds = "00";
    }else if(sec == 0 && minutes > 9){
      this.minutes = minutes.toString();
      this.seconds = "00";
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.intervalId;
    this.seconds = "00";
    this.minutes = "00"; 
    this.TimeTracker[3].innerHTML = this.seconds.charAt(1);
    this.TimeTracker[2].innerHTML = this.seconds.charAt(0);
    this.TimeTracker[1].innerHTML = this.minutes.charAt(1);
    this.TimeTracker[0].innerHTML = this.minutes.charAt(0);
    document.getElementById("splits").innerHTML = "";
  }
  splitClick() {
    var splitList = document.getElementById("splits");
    var bullet = document.createElement("li");
    var splitTime =document.createTextNode(this.minutes +":"+ this.seconds);
    bullet.appendChild(splitTime);
    splitList.appendChild(bullet);
    console.log(bullet.innerHTML);
  }
}

var mainTimer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');


function setStopBtn() {
  btnLeft.innerHTML = "START";
  btnRight.innerHTML = "RESET";
  mainTimer.stopClick();
  btnLeft.classList.replace("stop", "start");
  btnRight.classList.replace("split", "reset");
}

function setSplitBtn() {
  mainTimer.splitClick();

}

function setStartBtn() {
  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
  mainTimer.startClick();
  btnLeft.classList.replace("start", "stop");
  btnRight.classList.replace("reset", "split");

}

function setResetBtn() {
  mainTimer.resetClick();

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.classList.contains("start")){
    setStartBtn();
  }else if(btnLeft.classList.contains("stop")){
    setStopBtn();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.classList.contains("reset")){
    setResetBtn();
  }else if(btnRight.classList.contains("split")){
    setSplitBtn();
  }
});
