
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
let servBoxLeft=document.querySelector('.col-left');
let servBoxRight=document.querySelector('.col-right');

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
    proBar[4].classList.add('pro-start');
  }else{
    proBar[0].classList.remove('pro-start');
    proBar[1].classList.remove('pro-start');
    proBar[2].classList.remove('pro-start');
    proBar[3].classList.remove('pro-start');
    proBar[4].classList.remove('pro-start');
  }
})
window.addEventListener('scroll',(event)=>{
  if( document.documentElement.scrollTop>850){
    servBoxLeft.classList.add('col-box-left');
  }else{
    servBoxLeft.classList.remove('col-box-left');
  }
})

window.addEventListener('scroll',(event)=>{
  if( document.documentElement.scrollTop>850){
    servBoxRight.classList.add('col-box-right')
  }else{
    servBoxRight.classList.remove('col-box-right')
  }
})
/*strating slider*/
let arrowLeft= document.querySelector('.arrow-left');
let arrowright= document.querySelector('.arrow-right');
let portfolioMainBox =document.querySelector('.portfolio-mainbox');
let i=0;
arrowLeft.addEventListener('click',(e)=>{
  portfolioMainBox.scrollBy({
    left:-300,
    behavior:"smooth",
  })
  i--
  if(i===-1){
    portfolioMainBox.scrollBy({
      left:2000,
      behavior:"smooth",
    })
    return i=3;
  }
  console.log(i)
})
arrowright.addEventListener('click',(e)=>{
  portfolioMainBox.scrollBy({
    left:300,
    behavior:"smooth",
  })
  i++
  console.log(i)
  if(i===4){
    portfolioMainBox.scrollBy({
      left:-2000,
      behavior:"smooth",
    })
    return i=0;
  }
})
/*strating slider*/
