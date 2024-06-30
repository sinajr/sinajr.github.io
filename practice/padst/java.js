var $=document;
import { phonesecret } from "./maduls.js";
let userinpt=$.querySelector('#userphone');
userinpt.addEventListener('keydown', (e) =>{
    if(e.key==="Enter"){
        console.log(e)
        console.log(phonesecret(userinpt))
    }
})
