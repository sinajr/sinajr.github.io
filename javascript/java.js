
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
/*color-pick */

  let themeColor=document.getElementById('theme-color');
  let darkThemeColor=document.getElementById('dark-theme-color');
  themeColor.addEventListener('input',pickColor);
  darkThemeColor.addEventListener('input',pickColorDark);
  function pickColor(){
    let colorCode = themeColor.value;
    localStorage.setItem('themeColor',themeColor.value);
    document.documentElement.style.setProperty('--primery-color',colorCode);
  }
  function pickColorDark(){
    let colorCode = darkThemeColor.value;
    localStorage.setItem('darkThemeColor',darkThemeColor.value);
    document.documentElement.style.setProperty('--dark-primery-color',colorCode);
  }

/*color-pick */
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
if (window.matchMedia('screen and (min-width: 765px)').matches) {
  let liveWidth=portfolioMainBox.offsetWidth;
  let i=0;
  console.log('>765')
  arrowLeft.addEventListener('click',(e)=>{
      i--
      portfolioMainBox.scrollBy({
        left:-liveWidth,
        behavior:"smooth",
      })
      if(i<=0){
        portfolioMainBox.scrollBy({
          left:liveWidth*3,
          behavior:"smooth",
        })
          return i=(mainScroll.length/2)-1;
         }
      console.log(i)
    })
    arrowright.addEventListener('click',(e)=>{
      i++
      portfolioMainBox.scrollBy({
        left:liveWidth,
        behavior:"smooth",
      })
      console.log(i)
      if(i>=mainScroll.length/2|| i>=(mainScroll.length/2)-1){
        portfolioMainBox.scrollBy({
          left:-(liveWidth*3),
          behavior:"smooth",
        })
        return i=0;
      }
    })
}

    if (window.matchMedia('screen and (max-width: 765px)').matches) {
      let liveWidth=portfolioMainBox.offsetWidth;
      console.log(liveWidth);
      console.log("smaller than 750")
      let j=0;
      arrowLeft.addEventListener('click',(e)=>{
      j--
      console.log(e.target.nextElementSibling.nextElementSibling.offsetWidth)
      portfolioMainBox.scrollBy({
        left:-liveWidth,
        behavior:"smooth",
      })
      if(j<=0){
        portfolioMainBox.scrollBy({
          left:liveWidth*mainScroll.length,
          behavior:"smooth",
        })
        return j=mainScroll.length;
         }
        console.log(j)
    })
    arrowright.addEventListener('click',(e)=>{
      j++
      portfolioMainBox.scrollBy({
        left:liveWidth,
        behavior:"smooth",
      })
      console.log(j)
      if(j>=mainScroll.length){
        portfolioMainBox.scrollBy({
          left:-(liveWidth*mainScroll.length),
          behavior:"smooth",
        })
        return j=0;
      }
    })
  
  
    }
  



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
      let darkColorTheme=localStorage.getItem('darkThemeColor')
      let ColorTheme=localStorage.getItem('themeColor')
      document.documentElement.style.setProperty('--dark-primery-color',darkColorTheme)
      document.documentElement.style.setProperty('--primery-color',ColorTheme)
      if(localStoragetheme==="dark"){
        document.body.classList.add('darkbg');
      }
    }
/*dark mood*/