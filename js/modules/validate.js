export default function validetaForm(form) {
    $(form).validate({
        rules: {
            phone: "required",   
        },
        messages: {
            phone: {
                required: "Please, enter your phone"
            }
        }
    });
}

