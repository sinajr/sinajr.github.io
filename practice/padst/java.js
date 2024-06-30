var $=document;
import { phonesecret } from "./maduls.js";
let userinpt=$.querySelector('#userphone');
userinpt.addEventListener('keydown', (e) =>{
    if(e.key==="Enter"){
        alert(console.log(e))
         alert(console.log(phonesecret(userinpt.value)))
    }
})
