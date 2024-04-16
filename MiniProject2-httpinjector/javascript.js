let $=document;
let btnpromt=$.getElementById("btn-promt");
btnpromt.addEventListener("click",()=>{
    let userlink=prompt("Enter your URL");
    let userURL=userlink.toLowerCase();
    if(userURL.slice(0,4)=="http"){
        alert('link is true')
    }else{
        alert("your link is not contain http but dont worry ;)\n \n \n"+"https//"+userURL+"\n or"+"\n http//"+userURL)
    }
})