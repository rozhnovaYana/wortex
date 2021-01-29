export default function modal(modalSelector, crossSelector, btnSelector) {
    const modal = document.querySelector(modalSelector),
        cross = modal.querySelector(crossSelector),
        btn = document.querySelector(btnSelector);
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        openModal();
    })
    const openModal = () => {
        modal.classList.add("show");
        document.body.style.overflow = "hidden"
    }
    const closeModal = () => {
        modal.classList.remove("show");
        document.body.style.overflow = ""
    }
    cross.addEventListener('click', () => {
        closeModal();
    })
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal()
        }
    })
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            closeModal();
        
    
        }
    })
    
}