export default function playVideo(SelectorVideo, selectorBtn, wrapper) {
  if (document.documentElement.clientWidth > 576) {
    const playButton = document.querySelector(selectorBtn),
      video = document.querySelector(SelectorVideo),
      wrapperContainer = document.querySelector(wrapper);
    let num = 0;
    playButton.addEventListener("click", () => {
      if (num == 0) {
        video.currentTime = 0;
      }
      video.play();
      video.muted = false;
      playButton.classList.add("hide")
      num = 1;
      if (playButton.classList.contains("hide")) {
        wrapperContainer.addEventListener("click", () => {
          video.pause();
          playButton.classList.remove("hide")
          num = 1;
          video.muted = true;

        })
      }
    
             
    })
  }
    if (document.documentElement.clientWidth < 576) {
      const play = document.querySelector('.promo-video__play'),
        modal = document.querySelector(".video-modal"),
        video = document.querySelector(".video-modal__video"),
        close = document.querySelector(".video-modal__close"),
        header = document.querySelector(".promo-header");
      //delete
      
      

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
    close.classList.remove("video-modal__close_active");
  
      document.body.style.overflow = "";

  }
  close.addEventListener("click", () => {
    closeModalVideo();

  })
}



    
        
}
