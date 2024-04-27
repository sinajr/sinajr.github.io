
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

$(document).ready(function() {
 
  $("pro-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
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
window.addEventListener('scroll',(event)=>{
  if( document.documentElement.scrollTop>500){
    proBar.forEach(function(pro){
      pro.classList.add('pro-start');
    })
  }else{
    proBar.forEach(function(pro){
      pro.classList.remove('pro-start');
    })
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
let mainScroll=document.querySelectorAll('.portfolio-box');
let i=0;
arrowLeft.addEventListener('click',(e)=>{
    i--
    portfolioMainBox.scrollBy({
      left:-300,
      behavior:"smooth",
    })
    if(i<=0){
      portfolioMainBox.scrollBy({
        left:2000,
        behavior:"smooth",
      })
      return i=mainScroll.length;
       }
    console.log(i)
  })
  arrowright.addEventListener('click',(e)=>{
    i++
    portfolioMainBox.scrollBy({
      left:300,
      behavior:"smooth",
    })
    console.log(i)
    if(i>=mainScroll.length){
      portfolioMainBox.scrollBy({
        left:-2000,
        behavior:"smooth",
      })
      return i=0;
    }
  })


/*strating slider*/
/*dark mood*/
let darkBtn=document.querySelector('#dark-mood');
darkBtn.addEventListener('click',(e)=>{
      document.body.classList.toggle('darkbg')
      if(document.body.className.includes('darkbg')){
        localStorage.setItem('theme','dark')
      }else{
        localStorage.setItem('theme','lightmood');
      }
    })
    window.onload = function (){
      localStoragetheme=localStorage.getItem('theme');
      if(localStoragetheme==="dark"){
        document.body.classList.add('darkbg');
      }
    }
/*dark mood*/