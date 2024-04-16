let $=document;
let btns=$.querySelectorAll('.btn-cal');
let showCal=$.getElementById('cal-res')
btns.forEach(function(cal){
    let btnVal=cal.addEventListener('click',()=>{
        let valbtn=cal.value;
        let holderVal=showCal.value=valbtn;
        
    })
})