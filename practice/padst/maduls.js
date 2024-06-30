var $=document;
function phonesecret(phoneNum){
//    let firstNum= phoneNum.slice(0,4)
   let secondNum= phoneNum.slice(9,11)
   finalnum= secondNum.padStart(11,'*')
   return finalnum;
}
export{phonesecret}