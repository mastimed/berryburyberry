(function(){
  // Put your Unity WebGL build at: /game/index.html
  // If your build uses Unity's loader files, change PLAY_URL to the right entry point.
  const PLAY_URL = "https://berryburyberry.com/game/index.html";

  const frame = document.getElementById("gameFrame");
  const playBtn = document.getElementById("btnLoadGame");
  const fullBtn = document.getElementById("btnFullscreen");

  function loadGame(){
    if(!frame) return;
    frame.src = PLAY_URL;
    if(playBtn){
      playBtn.setAttribute("disabled","true");
      playBtn.textContent = "Loading…";
    }
  }

  playBtn?.addEventListener("click", loadGame);

  fullBtn?.addEventListener("click", ()=>{
    if(!frame) return;
    if(frame.requestFullscreen) frame.requestFullscreen();
  });
})();