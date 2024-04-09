
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true,
 
      slideSpeed : 300,
      paginationSpeed : 400,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
 
  });
  
});
let scrollTopp=document.querySelector(".scroll-top");
let scrollwhat=document.querySelector(".scroll-whatsapp");
let proBar= document.querySelectorAll('.pro-bar');
let servBoxLeft=document.querySelector('.col-box-left');
let servBoxRight=document.querySelector('.col-box-right');

window.addEventListener('scroll',()=>{
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                scrollTopp.style.display="block";
                scrollwhat.style.display="block";
        }else{
                scrollTopp.style.display="none";
                scrollwhat.style.display="none";
              }
})
scrollTopp.addEventListener('click',()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
})
console.log(proBar)
window.addEventListener('scroll',(event)=>{
  if( document.documentElement.scrollTop>500){
    proBar[0].classList.add('pro-start');
    proBar[1].classList.add('pro-start');
    proBar[2].classList.add('pro-start');
    proBar[3].classList.add('pro-start');
  }else{
    proBar[0].classList.remove('pro-start');
    proBar[1].classList.remove('pro-start');
    proBar[2].classList.remove('pro-start');
    proBar[3].classList.remove('pro-start');
  }
})
window.addEventListener('scroll',(event)=>{
  if( document.documentElement.scrollTop>1000){
    servBoxLeft.classList.add('col-box-left');
  }else{
    servBoxLeft.classList.remove('col-box-left');
  }
})

window.addEventListener('scroll',(event)=>{
  if( document.documentElement.scrollTop>1000){
    servBoxRight.classList.add('col-box-right')
  }else{
    servBoxRight.classList.remove('col-box-right')
  }
})