export default function menu(humburger, menuSelector,itemSelector) {
 
    const humb = document.querySelector(humburger),
        menu = document.querySelector(menuSelector),
        menuItem = document.querySelectorAll(itemSelector);
     function openMenu() {
         menu.classList.add("show");

         document.body.style.overflow = "hidden";
         humb.classList.add("promo-humb_active");
    }
    function closeMenu() {
        menu.classList.remove("show");
        document.body.style.overflow = "";
        humb.classList.remove("promo-humb_active");
    }
    humb.addEventListener('click', (e) => {
        if (humb.classList.contains("promo-humb_active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    menu.addEventListener('click', (e) => {
         if (e.target==menu) {
            closeMenu();
        }
    });
   
    document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      closeMenu();
    }
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
            if (document.documentElement.clientWidth < 993) {
                menuItem.forEach(i => {
                i.classList.remove("menu-item_active")
            })
             
                item.classList.add("menu-item_active")
            }
            
            
            
        });
    });

}