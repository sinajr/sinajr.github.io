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
    let liveTime=""+myTime.getHours()+" : "+myTime.getMinutes()+" : "+myTime.getSeconds()
    timer.innerHTML=liveTime;
},1000)



///////////////////////////////
// window.scroll(scrollTopBar())
// function scrollTopBar(){
//     console.log('hi')
// }
let scrollBar=$.querySelector('#scroll');
window.addEventListener('scroll',function() {
    let userScrollFromTop=window.scrollY;
    let xH=document.body.clientHeight;
    let innerH=this.window.innerHeight;
    scrollPrecent=Number(userScrollFromTop/(xH-innerH))*100
    console.log(scrollPrecent)
    scrollBar.style.width=scrollPrecent +"%"
})