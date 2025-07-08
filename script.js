let progress = document.getElementById("JB_Range");
let song = document.querySelector("audio");
let crlIcon = document.getElementById("ctrl")

song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause(){
  if(crlIcon.classList.contains("fa-pause")){
    song.pause();
    crlIcon.classList.remove("fa-pause");
    crlIcon.classList.add("fa-play");
  }
  else{
    song.play();
    crlIcon.classList.add("fa-pause");
    crlIcon.classList.remove("fa-play");
  }
}

if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime; 
  }, 500); 
}

progress.onchange = function(){
  song.play(); 
  song.currentTime = progress.value; 
  crlIcon.classList.add("fa-pause"); 
  crlIcon.classList.remove("fa-play");
}

/*if(progress.max == progress.value){ 
  crlIcon.classList.remove("fa-pause");
  crlIcon.classList.add("fa-play");
}   */ 

// Stop it from playing automatically at the beginning 
