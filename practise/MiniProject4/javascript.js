let $=document;
let btns=$.querySelectorAll('.btn-cal');
let showCal=$.getElementById('cal-res');
let resultStr;
let resultNum;
showCal.addEventListener('focus',()=>{
    showCal.style.outline="none"
})
showCal.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        resultStr=showCal.value;
        showCal.value=""
        showCal.value=eval(resultStr);
    }
})
btns.forEach(function(cal){
    cal.addEventListener('click',(e)=>{
            // cal.classList.add("btn-anim");
        if(e.target.innerHTML=="="){
            resultStr=showCal.value;
            // resultNum=resultStr.split(/[+-/%x]/)
            showCal.value=eval(resultStr);
        }
        if(e.target.innerHTML=="C"){
            showCal.value="";
        }
        let btnfocus=e.target.dataset.value;
        showCal.value+=btnfocus;
    })
})