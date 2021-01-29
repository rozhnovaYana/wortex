export default function playVideo(SelectorVideo, selectorBtn, wrapper) {
  if (document.documentElement.clientWidth > 576) {
    const playButton = document.querySelector(selectorBtn),
      video = document.querySelector(SelectorVideo),
      wrapperContainer = document.querySelector(wrapper);
    playButton.addEventListener("click", () => {
      video.src="video/video-test.mp4"
      video.play();
      video.muted = false;
      playButton.classList.add("hide")
      if (playButton.classList.contains("hide")) {
        wrapperContainer.addEventListener("click", () => {
          video.pause();
          playButton.classList.remove("hide")
          video.muted = true;
        })
      }      
    })
  }
    if (document.documentElement.clientWidth < 576) {
      const play = document.querySelector('.promo-video__play'),
        modal = document.querySelector(".video-modal"),
        video = document.querySelector(".video-modal__video"),
        close = document.querySelector(".video-modal__close");
      
      
  play.addEventListener('click', () => {
    openModalVideo();
  })

  function openModalVideo() {
    modal.classList.add("video-modal_active");
    video.play();
    close.classList.add("video-modal__close_active")
      document.body.style.overflow = "hidden";
  };
  function closeModalVideo() {
    modal.classList.remove("video-modal_active");
    video.pause();
    video.currentTime = 0;
    close.classList.remove("video-modal__close_active");
      document.body.style.overflow = "";

  }
  close.addEventListener("click", () => {
    closeModalVideo();

  })
}



    
        
}
