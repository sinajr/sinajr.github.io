var $=document;
let mainBox=$.getElementById('main-box');
// mainBox.addEventListener('mousedown',siginIt)
let colorPicker=$.getElementById('color-pick');
colorPicker.addEventListener('input',pickTheColor);
function pickTheColor(){
    let choosenColor= colorPicker.value;
    document.documentElement.style.setProperty('--box-background',choosenColor);
}
