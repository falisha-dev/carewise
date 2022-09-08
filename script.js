'use strict';

const cards = [...document.querySelectorAll('card')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn =[...document.querySelectorAll('.pre-btn')];
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener('click', function(){
    
    if (menu.classList.contains('hidden')){
     menu.classList.remove('hidden')
    }else{
     menu.classList.add('hidden')
    }
 });

// cards.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener('click', () => {
//         console.log('work');
//         item.scrollLeft += containerWidth;
//     })
//     preBtn[i].addEventListener('click', () => {
//         console.log('worko');
//         item.scrollLeft -= containerWidth;
//     })
// })

let curSlide = 0;
const maxSlide = cards.length;

const goToSlide = function(slide){
  cards.forEach((s,i) => (s.style.transform = `translateX(${100
    * (i - slide)}%)`)
    );
};
goToSlide(2);

// next slide
const nextSlide = function (){
  if (curSlide === maxSlide - 1){
    curSlide = 0;
  }else{
    curSlide++;
  }
  goToSlide(curSlide);
};
// prev slide
 const prevSlide = function(){
  if ( curSlide === 0){
    curSlide = maxSlide - 1;
}else{
  curSlide--;
}
goToSlide(curSlide);
};

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  })
nxtBtn.addEventListener('click', nextSlide);
preBtn.addEventListener('click', prevSlide);


