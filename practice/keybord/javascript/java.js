var $=document;
let keybordBTN=$.querySelectorAll('.btn-keyy');
document.body.addEventListener('keyup',keybordTyping)
let showText=$.getElementById('show-text');
function keybordTyping(e){
    console.log(e)
    let userkey=e.key;
    if(e.code==="Space"){
        showText.innerHTML+=" "
    }else{
        let btnTarget=document.getElementById(userkey);
            btnTarget.classList.add('key-anim');
            btnTarget.addEventListener('animationend',()=>{
                btnTarget.classList.remove('key-anim');
            })
                let keyValue= btnTarget.innerHTML;
        switch(true){
            case e.key==="Backspace":
                let backdel=showText.innerHTML.slice(0,-1);
                showText.innerHTML=backdel
                break;
            case e.key==="Enter":
                let breakit=document.createElement('br');
                showText.append(breakit);
                break;
            case e.key==="Shift":
                showText.innerHTML
                break;
            default:
                showText.innerHTML+= keyValue;
        }
    }
}