// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      /* function 이름 바꿔주면안됨!!!!!!!----- */  
      function onYouTubeIframeAPIReady() {

        /* <div id="player"></div>에서의 player임! */
        new YT.Player('player', {
          videoId: 'hXjvBs8wuSg', //최초 재생할 유투브 영상 ID
          playerVars: {
            autoplay: true, //자동 재생 유무
            loop: true,     //반복 재생 유무
            playlist:'hXjvBs8wuSg' //반복 재생할 유투브 영상 ID목록
          },
          events: {
            onReady: function(event){
              event.target.mute() // 음소거
            }
          }
        });
      }
      /*hXjvBs8wuSg 피카츄 AOgczaodke0 */