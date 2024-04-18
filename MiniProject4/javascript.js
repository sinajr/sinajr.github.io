let $=document;
let btns=$.querySelectorAll('.btn-cal');
let showCal=$.getElementById('cal-res');
let result;
showCal.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        showCal.value=result
    }
})
btns.forEach(function(cal){
    cal.addEventListener('click',(e)=>{
        cal.classList.add("bg-newback");
        let btnfocus=e.target.dataset.value;
        showCal.value+=btnfocus;
        if(btnfocus="+"){
            let a=Number(showCal.value);
            showCal.value="";
            console.log(a);
        }
        // switch(calCulat){
        //     case calCulat="1":
        //         showCal.value="1"
        //     break;
        //     case calCulat="2":
        //         showCal.value="2"
        //     break;
        //     case calCulat="3":
        //         showCal.value="3"
        //     break;
        //     case calCulat="4":
        //         showCal.value="4"
        //     break;
        //     case calCulat="5":
        //         showCal.value="5"
        //     break;
        //     case calCulat="6":
        //         showCal.value="6"
        //     break;
        //     case calCulat="7":
        //         showCal.value="7"
        //     break;
        //     case calCulat="8":
        //         showCal.value="8"
        //     break;
        //     case calCulat="9":
        //         showCal.value="9"
        //     break;
        //     case calCulat="0":
        //         showCal.value="0"
        //     break;
        //     case calCulat="=":
        //         showCal.value="="
        //     break;
        //     case calCulat="*":
        //         showCal.value="*"
        //     break;
        //     case calCulat="-":
        //         showCal.value="-"
        //     break;
        //     case calCulat="+":
        //         showCal.value="+"
        //     break;
        //     case calCulat="/":
        //         showCal.value="/"
        //     break;
        //     case calCulat="%":
        //         showCal.value="%"
        //     break;
        //     case calCulat="C":
        //         showCal.value=""
        //     break;
        // }
    })
})