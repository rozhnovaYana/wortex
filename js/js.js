
import validateForm from "./modules/validate"
import modal from "./modules/modal"
import submitForn from "./modules/form"
import menu from "./modules/menu"
import playVideo from "./modules/playVideo"
import menuBackground from "./modules/menuBg"
import scroll from "./modules/scroll"
// import select from "./modules/select"
import cookies from "./modules/cookies"
import chat from "./modules/chat"
window.addEventListener("DOMContentLoaded", () => {
    try{
        const videoFirst=document.querySelector(".promo-video")
        videoFirst.play()
        videoFirst.muted = true;
    }
    catch {
    }
    cookies();
    chat()
  
    validateForm(".main form");
    validateForm(".footer form")
    validateForm(".modal-form")
    modal(".modal", ".modal-cross", ".promo-contacts__callback")
    modal(".modal", ".modal-cross", ".footer .promo-contacts__callback")
    modal(".modal-policy__wrapper", ".modal-cross", ".footer .modal-policy")
    submitForn();
    menu(".promo-humb",".menu-wrapper", ".menu-item" )
    playVideo(".promo-video.video-pc", ".promo-video__play",".promo .container")
    menuBackground(".promo-header")
    scroll("#header");
    scroll("#main");
    scroll("#info");
    scroll("#footer")
   
    // select(".promo .select", ".promo .promo-contacts__arrow", ".promo .promo-contacts__wrapper")
    // select(".footer .select", ".footer .promo-contacts__arrow", ".footer .promo-contacts__wrapper")
    
})