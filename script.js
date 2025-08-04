let progress = document.getElementById("Range");
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
/*if node is 1 make komomo in, visible 
if node is 2 make A lots gonna change, visible
if node is 3 make __________, visible
- Liana Flores, Japanese Breakfast Song 
Need to find songs to put here 

*/ 
// Create a Node (Referenced Geeks for Geeks - Doubly Circular Linked List)
class Node{
  constructor(data){
    this.data = data; 
    this.next = null; 
    this.prev = null; 
  }
} 

let head = new Node("Kokomo, IN"); 
head.next = new Node("A Lots Gonna Change");
head.next.prev = head;
head.next.next = new Node("Hello Again");
head.next.next.prev = head.next; 
head.next.next.next = head;
head.prev = head.next.next;

let headPointer = head; 

function backClick(){
  headPointer = headPointer.prev;
  console.log(headPointer.data);
  changeSong(); 
}

function upClick(){
    headPointer = headPointer.next;
    console.log(headPointer.data);
    changeSong(); 
}

function changeSong(){
if(headPointer.data === "Kokomo, IN"){
  document.getElementById("title").style.color= "rgba(76, 128, 82, 1)";
  document.getElementById("NowPlaying").style.color= "rgba(76, 128, 82, 1)";
  document.getElementById("Range").style.background= "rgb(20,174,92)";// rgb colors 
  document.getElementById("Back").style.color= "rgb(20,174,92)"; 
  document.getElementById("Up").style.color= "rgb(20,174,92)"; 
  document.getElementById("Play").style.color= "rgb(20,174,92)";
  document.getElementById("Main").src = "Japanese Breakfast/JB_Main.jpg";
  document.getElementById("JB_Audio").src = "Japanese Breakfast/Kokomo,IN.mp3";
  document.getElementById("NowPlaying").innerHTML =  "Now Playing. . .<br> Kokomo, IN <br>Japanese Breakfast"; 
  document.body.style.backgroundImage = "url('Japanese Breakfast/JB_Background1.png')"
   document.getElementById("NowPlaying").style.fontSize = "20px";
  document.getElementById("Back").onmouseover = function() {
    document.getElementById("Back").style.color = "rgb(128,255,187)";
  }
  document.getElementById("Up").onmouseover = function() {
    document.getElementById("Up").style.color = "rgb(128,255,187)";
  }
  document.getElementById("Play").onmouseover = function() {
    document.getElementById("Play").style.color = "rgb(128,255,187)";
  }

  document.getElementById("Back").onmouseout = function() {
    document.getElementById("Back").style.color = "rgb(20,174,92)";
  }
  document.getElementById("Up").onmouseout = function() {
    document.getElementById("Up").style.color = "rgb(20,174,92)";
  }
  document.getElementById("Play").onmouseout= function() {
    document.getElementById("Play").style.color = "rgb(20,174,92)";
  }
}
else if(headPointer.data === "A Lots Gonna Change"){
  document.getElementById("title").style.color= "rgb(89,175,255)";
  document.getElementById("NowPlaying").style.color= "rgb(4,56,105)";
  document.getElementById("Range").style.background= "rgb(89,175,255)"; 
  document.getElementById("Back").style.color= "white"; 
  document.getElementById("Up").style.color= "white"; 
  document.getElementById("Play").style.color= "white"; 
  document.getElementById("Main").src = "Weyes Blood/WB_Main.jpg";
  document.getElementById("JB_Audio").src = "Weyes Blood/A Lot's Gonna Change 4.mp3";
  document.getElementById("NowPlaying").innerHTML =  "Now Playing. . .<br>A Lots Gonna Change<br>Weyes Blood"; 
  document.body.style.backgroundImage = "url('Weyes Blood/WB_Background.jpg')"; 
  document.getElementById("NowPlaying").style.fontSize = "19px"; 

  document.getElementById("Back").onmouseover = function() {
    document.getElementById("Back").style.color = "rgb(218, 218, 247)";
  }
  document.getElementById("Up").onmouseover = function() {
    document.getElementById("Up").style.color = "rgb(218, 218, 247)";
  }
  document.getElementById("Play").onmouseover = function() {
    document.getElementById("Play").style.color = "rgb(218, 218, 247)";
  }

  document.getElementById("Back").onmouseout = function() {
    document.getElementById("Back").style.color = "white";
  }
  document.getElementById("Up").onmouseout = function() {
    document.getElementById("Up").style.color = "white";
  }
  document.getElementById("Play").onmouseout= function() {
    document.getElementById("Play").style.color = "white";
  }
}
  else if(headPointer.data === "Hello Again"){
    document.getElementById("title").style.color= "white"; // May change this later 
    document.getElementById("NowPlaying").style.color= "rgb(135,31,66)";
    document.getElementById("Range").style.background= "rgb(135,31,66)";
    document.getElementById("Back").style.color= "rgb(135,31,66)";
    document.getElementById("Up").style.color= "rgb(135,31,66)";
    document.getElementById("Play").style.color= "rgb(135,31,66)"; 
    document.getElementById("Main").src = "Liana Flores/LF_Main.jpg";
    document.getElementById("JB_Audio").src = "Liana Flores/Hello again.mp3";
    document.getElementById("NowPlaying").innerHTML =  "Now Playing. . .<br>Hello Again<br>Liana Flores";
    document.body.style.backgroundImage = "url('Liana Flores/LF_Background.jpg')";
    document.getElementById("NowPlaying").style.fontSize = "20px";

    document.getElementById("Back").onmouseover = function() {
      document.getElementById("Back").style.color = "rgb(237, 69, 125)";
    }
    document.getElementById("Up").onmouseover = function() {
      document.getElementById("Up").style.color = "rgb(237, 69, 125)";
    }
    document.getElementById("Play").onmouseover = function() {
      document.getElementById("Play").style.color = "rgb(237, 69, 125)";
    }

    document.getElementById("Back").onmouseout = function() {
      document.getElementById("Back").style.color = "rgb(135,31,66)";
    }
    document.getElementById("Up").onmouseout = function() {
      document.getElementById("Up").style.color = "rgb(135,31,66)";
    }
    document.getElementById("Play").onmouseout= function() {
      document.getElementById("Play").style.color = "rgb(135,31,66)";
    }
  }
}

/* Need to change pause button to play button when song ends 

Add hovers to buttons
*/



