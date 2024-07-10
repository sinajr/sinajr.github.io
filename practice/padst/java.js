var $=document;
import { phonesecret } from "./maduls.js";
let userinpt=$.querySelector('#userphone');
let sec=$.getElementById('sec');
userinpt.addEventListener('keydown', (e) =>{
    if(e.key==="Enter"){
        sec.insertAdjacentHTML('beforeend',`
            <p>
            ${
            phonesecret(userinpt.value)

            }
            </p>`)
    }
})
let users=[
    {id:1 ,name:"sina" , userName:"sina.jr" , password:"Sina22302282jr@#"},
    {id:2 ,name:"hossein" , userName:"hoko" , password:"Hossein22302282jr@#"},
    {id:3 ,name:"erfan" , userName:"shadow" , password:"Erfan22302282jr@#"},
    {id:4 ,name:"elina" , userName:"ellu" , password:"Ellu22302282jr@#"}
]

setInterval((users)=>{
    console.log(this)
},2000)