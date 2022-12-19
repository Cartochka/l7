document.addEventListener('DOMContentLoaded',function(){
  new SimpleAdaptiveSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 5000,
    swipe: true,
  });
});
let flag = false;
music_control.addEventListener("click",music_changer);
function music_changer(){
    if(flag){
        music_control_img.src = "img/music_crossed.png";
        swain_theme.pause();
    }
    else{
        music_control_img.src = "img/music.png";
        swain_theme.play();
    } 
    flag = !flag;
}
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'ivBQD9ghBo0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    if(flag) swain_theme.pause();
  }
  else if((event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) && !done)
  {
    swain_theme.play();
  }
}