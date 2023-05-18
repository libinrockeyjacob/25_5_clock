//need to synchronize the session-length with the timeleft event and add the variable 'min' in startstop event to decrement after 60 seconds. 

//variables 
let reset = document.getElementById('reset');
let breaklength = document.getElementById('break-length'); 
let sessionlength = document.getElementById('session-length');
let timeleft = document.getElementById('time-left');
breaklength.innerText   = 5
sessionlength.innerText = 25
let play = false;
let a;
let min = 25;
let sec = 00;

//function buttons
//reset timer events resets everything. 
function resetTimer(){
  breaklength.innerText=5;
  sessionlength.innerText = 25;
  timeleft.innerText="25:00";
  clearInterval(a);
  sec = 0;
  min = 25;
  console.log("reset complete");
  play=false;
}
//decrementing the sessiona and break lengths using onclick events on the buttons
function decrementing(a){
  if(play==false){
  if(a=='break'){
    if(parseInt(breaklength.innerText)>1){
      breaklength.innerText = parseInt(breaklength.innerText)-1;
    }
  }
  if(a=="session"){
    if(parseInt(sessionlength.innerText)>1){
    sessionlength.innerText = parseInt(sessionlength.innerText)-1;
    }
  }
}
}
//incrementing the sessiona and break lengths using onclick events on the buttons
function incrementing(a){
  if(play==false){
  if(a=='break'){
    if(parseInt(breaklength.innerText)<60){
      breaklength.innerText = parseInt(breaklength.innerText)+1; 
    }
  }
  if(a=="session"){
   if(parseInt(sessionlength.innerText)<60){
     sessionlength.innerText =parseInt(sessionlength.innerText)+1;
   }
    
  }
}
}

//starting and stoping the buttong based on the boolean value of the variable 'play'
function startstopbutton(){
  
  if (play==false){
    play=true;
    a = setInterval(()=>{
      console.log('running');
      if(sec == 0){
        sec = 60;
        sec--;
        timeleft.innerText = min + ":" + sec;
      }else if(sec != 0 ){
        sec--;
        timeleft.innerText = min + ":" + sec;
      }
      
      
    },1000);
  }
  else if (play ==true){
    play = false;
    clearInterval(a);
    console.log("stopped running")
  }
  
}


