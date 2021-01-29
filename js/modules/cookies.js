export default function cookies(){
    if (!localStorage.getItem("status")) {

        setTimeout(() => firstPopActive(), 2000)
            console.log("yesss")
    }

  
    function firstPopActive() {
    
        const pop = document.querySelector(".first-pop");
        pop.classList.add("first-pop_active");
        const btns = pop.querySelectorAll(".first-pop__btn");
        btns.forEach(item => {
            item.addEventListener("click", (e) => {
        
                if (e.target.getAttribute("data-agree") == 'true') {
                    localStorage.setItem("status", "agree");
                    closePop()
                } else {
                    closePop()
          
                }
            })
        })
        function closePop() {
            pop.classList.remove("first-pop_active");
        }
    }
}