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
    crlIcon.classList.remove("fa-play"); // Need to figure out how do this for when the song ends (There has to be a way)
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

// Need to change pause button to play button when song ends 
song.onended = function(){
  crlIcon.classList.remove("fa-pause");
  crlIcon.classList.add("fa-play");
  song.currentTime = 0;
  progress.value = 0;
  song.pause();
  console.log("Song Ended");
}

/*if(song.duration = song.currentTime){  //progress.max == progress.value
  crlIcon.classList.remove("fa-pause");
  crlIcon.classList.add("fa-play");
}    */ 

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
// Add Fourth Song Here
head.next.next.prev = head.next; 
head.next.next.next = head;
head.prev = head.next.next;
head.next.next.next = new Node("Men in Bars");
head.next.next.next.prev = head.next.next;
head.next.next.next.next = head;
head.prev = head.next.next.next;
// Add a Fifth Song Here 
head.next.next.next.next = new Node("Shilo");
head.next.next.next.next.prev = head.next.next.next;
head.next.next.next.next.next = head;
head.prev = head.next.next.next.next;


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
  crlIcon.classList.add("fa-play");
  crlIcon.classList.remove("fa-pause");
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
  crlIcon.classList.add("fa-play");
  crlIcon.classList.remove("fa-pause");
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
    crlIcon.classList.add("fa-play");
    crlIcon.classList.remove("fa-pause");
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
  else if (headPointer.data === "Men in Bars"){
    document.getElementById("title").style.color= "white";
    document.getElementById("NowPlaying").style.color= "black";
    document.getElementById("Range").style.background= "grey"; 
    document.getElementById("Back").style.color= "white";
    document.getElementById("Up").style.color= "white";
    document.getElementById("Play").style.color= "white";
    document.getElementById("Main").src = "Japanese Breakfast 2/MIB_Main.jpg";
    document.getElementById("JB_Audio").src = "Japanese Breakfast 2/Men in Bars 4.mp3";
    document.getElementById("NowPlaying").innerHTML =  "Now Playing. . .<br>Men In Bars<br>Japanese Breakfast";
    document.body.style.backgroundImage = "url('Japanese Breakfast 2/MIB_Background.png')";
    document.getElementById("NowPlaying").style.fontSize = "20px";
    crlIcon.classList.add("fa-play");
    crlIcon.classList.remove("fa-pause");
    document.getElementById("Back").onmouseover = function() {
      document.getElementById("Back").style.color = "rgb(212, 212, 208)";
    }
    document.getElementById("Up").onmouseover = function() {
      document.getElementById("Up").style.color = "rgb(212, 212, 208)";
    }
    document.getElementById("Play").onmouseover = function() {
      document.getElementById("Play").style.color = "rgb(212, 212, 208)";
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
  else if (headPointer.data === "Shilo"){
    document.getElementById("title").style.color= "rgb(216,248,255)";
    document.getElementById("NowPlaying").style.color= "rgb(9, 137,166)";
    document.getElementById("Range").style.background= "rgb(9, 137,166)"; // rgb(9, 137,166)
    document.getElementById("Back").style.color= "rgb(216,248,255)";
    document.getElementById("Up").style.color= "rgb(216,248,255)";
    document.getElementById("Play").style.color= "rgb(216,248,255)";
    document.getElementById("Main").src = "Weyes Blood 2/GAF_Main.jpg";
    document.getElementById("JB_Audio").src = "Weyes Blood 2/Shilo.mp3";
    document.getElementById("NowPlaying").innerHTML =  "Now Playing. . .<br>Shilo<br>Weyes Blood";
    document.body.style.backgroundImage = "url('Weyes Blood 2/GAF_Background.png')";
    document.getElementById("NowPlaying").style.fontSize = "20px";
    crlIcon.classList.add("fa-play");
    crlIcon.classList.remove("fa-pause");
    document.getElementById("Back").onmouseover = function() {
      document.getElementById("Back").style.color = "rgb(138,234,255)";
    }
    document.getElementById("Up").onmouseover = function() {
      document.getElementById("Up").style.color = "rgb(138,234,255)";
    }
    document.getElementById("Play").onmouseover = function() {
      document.getElementById("Play").style.color = "rgb(138,234,255)";
    }

    document.getElementById("Back").onmouseout = function() {
      document.getElementById("Back").style.color = "rgb(216,248,255)"; 
    }
    document.getElementById("Up").onmouseout = function() {
      document.getElementById("Up").style.color = "rgb(216,248,255)"; 
    }
    document.getElementById("Play").onmouseout= function() {
      document.getElementById("Play").style.color = "rgb(216,248,255)"; 
    }
  }
}

/* 

Add hovers to buttons
*/

/* More Songs to Add (Potentially): 
Shilo - Weyes Blood
Men in Bars - Japanese Breakfast

// Probably Just Going to Make these designs on Figma and Not Add them to the website
グライド (Glide) - Lily Chou Chou
Jaded by Near Tears 
My Love Mine All Mine - Mitski 
I Bet on Losing Dogs - Mitski 
Me and My Husband - Mitski  (A Pearl)

// Songs I Probably Wont Add 
Tender as a Tomb - Tennis 
The Light Before We Land - The Delgados
*/

/* What I need to do: 
- Get rid of possibility of song auimatically playing when page opens 
- Add option for song replay (Loop)
Counter of how many times song has been played??? 
Keep song from playing automatically when page opens
Fade in for each song 
When you turn off sound on bluetooth, the pause button becomes a play button 
*/


