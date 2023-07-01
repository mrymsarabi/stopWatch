var hundredth = 0;
var seconds = 0;
var hun = document.getElementById('hundredth');
var sec = document.getElementById('seconds'); 

function incrementTime() {
    hundredth += 1;
    if(hundredth % 100 === 0){
        seconds++;
        hundredth = 0;
    }
    if(hundredth < 10){
        hun.innerText = "0" + hundredth;
    }
    else hun.innerText = hundredth;
    
    if(seconds < 10){
        sec.innerText = "0" + seconds;
    }
    else sec.innerText = seconds;
}

var cancel;

function Start(){
    cancel = setInterval(incrementTime, 10);
}

function Stop(){
    clearInterval(cancel);
}

function Reset(){
    clearInterval(cancel);
    hundredth = 0;
    seconds = 0;
    hun.innerText = "0" + hundredth;
    sec.innerText = "0" + seconds;
}