export default function submitForm(){
    $('form').submit(function (e) {
        e.preventDefault();
    
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
      
            $(this).find("input").val("");
            $('.modal-thanks').addClass("show");
            try { closeModal(".modal"); } catch { console.log("error") }
            setTimeout(() => {
                closeModal(".modal-thanks");
            }, 3000);
            $('form').trigger('reset');
        });
        return false;
    });
     function closeModal(selector) {
    const form = document.querySelector(selector);
         form.classList.remove("show");
         document.body.style.overflow = "";
   
    }
    const modalForm = document.querySelector(".modal-thanks");
    modalForm.addEventListener("click", (e) => {
    if (e.target == modalForm || e.target.getAttribute('data-close') == "") {
        closeModal(".modal-thanks");
    }
  });
}