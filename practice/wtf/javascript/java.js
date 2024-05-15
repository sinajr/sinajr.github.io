var $=document;
let mainBox=$.getElementById('main-box');
// mainBox.addEventListener('mousedown',siginIt)
let colorPicker=$.getElementById('color-pick');
colorPicker.addEventListener('input',pickTheColor);
function pickTheColor(){
    let choosenColor= colorPicker.value;
    document.documentElement.style.setProperty('--box-background',choosenColor);
}
let timer=$.getElementById('timer');
setInterval(function(){
    let myTime=new Date();
    let liveTime=""+myTime.getHours()+" : "+myTime.getMinutes()+" : "+myTime.getSeconds(s)
    timer.innerHTML=liveTime;
},1000)
