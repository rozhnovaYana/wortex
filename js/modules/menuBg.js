export default function menuBackground(menuSelector) {
        const headers = document.querySelector(menuSelector);
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 10) {
           
            headers.style.background="#0e0d17"
        } else {
            headers.style.background=""
        }
        })
       
    }