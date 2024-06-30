var $=document;
import { phonesecret } from "./maduls.js";
let userinpt=$.querySelector('#userphone');
let sec=$.getElementById('sec');
userinpt.addEventListener('keydown', (e) =>{
    if(e.key==="Enter"){
        console.log(e)
        sec.insertAdjacentHTML('beforend',`
            <p>
            ${
            phonesecret(userinpt.value)

            }
            </p>`)
    }
})
