var $=document;
const wRange= $.getElementById('w-range');
const hRange= $.getElementById('h-range');
const showW= $.getElementById('show-wres');
const showH= $.getElementById('show-hres');
const finalResult= $.getElementById('final-res');
const finalLable= $.getElementById('final-lable');
wRange.addEventListener('input',ibmcal);
hRange.addEventListener('input',ibmcal);
function ibmcal(){
    let weightInptVal= wRange.value;
    let heightInptVal= hRange.value;
    showW.innerHTML=weightInptVal+" KG"
    showH.innerHTML=heightInptVal+" CM"
    let cmto = heightInptVal/100;
    let result=Math.round((weightInptVal/(cmto*cmto))*10)/10;
    finalResult.innerHTML=result;
    if(result<18.5){
        finalLable.innerHTML="under weight"
        finalLable.style.backgroundColor="#0000ff"
    }else if(18.5 <= result && result<=24.9){
        finalLable.innerHTML="Normal"
        finalLable.style.backgroundColor="#00ff00"
    }else if(25 <= result && result<=29.9){
        finalLable.innerHTML="over wight"
        finalLable.style.backgroundColor="#ffff00"
    }else{
        finalLable.innerHTML="obese"
        finalLable.style.backgroundColor="#ff0000"
    }
}