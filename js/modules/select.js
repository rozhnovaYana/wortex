 export default function select(selectSelector, btnSelector, changeSelector) {
        const select = document.querySelector(selectSelector),
            btn = document.querySelector(btnSelector),
            wrapper = document.querySelector(changeSelector);
        btn.addEventListener('click', () => {
            if (btn.classList.contains("promo-contacts__arrow_active")) {
                btn.classList.remove("promo-contacts__arrow_active")
                select.classList.remove("select_active")
            } else {
                btn.classList.add("promo-contacts__arrow_active");

                select.classList.add("select_active")
            }
            
        })
        const selectItem = select.querySelectorAll(".select-item a");
        selectItem.forEach(item => {
            item.addEventListener("click", (e) => {
                const href = item.getAttribute("href"),
                    content = item.textContent;
                wrapper.innerHTML=` <a href="${href}">${content}</a>`
                btn.classList.remove("promo-contacts__arrow_active")
                select.classList.remove("select_active")
                
                
            })
        })
    }