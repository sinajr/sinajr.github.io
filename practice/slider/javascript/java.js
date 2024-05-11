var $=document;
let slider=$.getElementById('slider');
const btnNxt = $.getElementById('next-btn');
const btnPerv = $.getElementById('perv-btn');
btnNxt.addEventListener('click',nextSlide);
btnPerv.addEventListener('click',pervSlide);
let imageUrl=[
    slide1='image/slide1.jpg',
    slide2='image/slide2.jpg',
    slide3='image/slide3.jpg',
    slide4='image/slide4.jpg',
    slide5='image/slide5.jpg'
]
let index=0;
slider.src=imageUrl[0]
slider.classList.add('slider-animation');
slider.addEventListener('animationend',()=>{
    slider.classList.remove('slider-animation');
})
function nextSlide(){
        index++
        slider.classList.add('slider-animation');
        slider.addEventListener('animationend',()=>{
            slider.classList.remove('slider-animation');
        })
        slider.src=imageUrl[index]
        if(index>imageUrl.length-1){
            index=0;
            slider.src=imageUrl[index]
        }
        console.log(index)
}
function pervSlide(){
    slider.classList.add('slider-animation');
    slider.addEventListener('animationend',()=>{
        slider.classList.remove('slider-animation');
    })
    if(index<=0){
        index=imageUrl.length-1
        slider.src=imageUrl[index]
    }else{
        index--
        slider.src=imageUrl[index]
    }
    console.log(index)
}
setInterval(nextSlide,4000);