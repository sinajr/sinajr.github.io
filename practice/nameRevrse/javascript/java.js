let $=document;
let userName = prompt("enter your name please",'your name');
let mainDiv=$.querySelector('.main-div');
let myPromise= new Promise((resolve,reject)=>{
    if(userName){
        resolve(userName)
    }else(
        reject(new Error('please enter your name'))
    )
})
myPromise
.then(response0=>response0.toUpperCase())
.then(response=>response.split(''))
.then(response2=>response2.reverse())
.then(response3=>response3.join(''))
.then(response4=>mainDiv.insertAdjacentHTML('beforeend',('<h1>'+`${response4}`+'</h1>')))
.catch(err=>mainDiv.insertAdjacentHTML('beforeend',('<h1>'+`${err}`+'</h1>')))