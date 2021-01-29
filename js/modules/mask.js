import Inputmask from "inputmask";

export default function mask(selector) {
    const tel = document.querySelector(selector);
    Inputmask({ "mask": "(999) 999-9999" }).mask(tel);
}
    
   
