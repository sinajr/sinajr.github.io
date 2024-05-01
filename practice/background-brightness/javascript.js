let $=document;
const range=$.getElementById('range');
let bgFilter=$.querySelector('.bg-pic');
range.addEventListener('change',brightnessChanger);
console.log(range.value)
function brightnessChanger(){
    bgFilter.style.filter="brightness("+range.value+"%)"
}
