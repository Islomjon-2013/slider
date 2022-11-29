let img = document.querySelectorAll(`.slider_images img`);
let btnNext = document.querySelector(`.btn-next`);
let btnPrev = document.querySelector(`.btn-prev`);

let i = 0;
btnNext.addEventListener(`click`,function(){
 
  img[i].classList.remove(`active`);
  i++;
  console.log(i)
  if(img.length ==i ){
    i = 0;
  }
  img[i].classList.add(`active`)
});

console.log(img);

btnPrev.addEventListener(`click`,imgSlider)
  
console.log(img);
function imgSlider(){
  img[i].classList.remove(`active`);
  i++;
  console.log(i)
  if(img.length ==i ){
    i = 0;
  }
  img[i].classList.add(`active`)
}


const container = document.getElementsByClassName('slider_images');

 container[0].addEventListener('mouseover', ()=>{
   stopInterval();
})
 container[0].addEventListener('mouseleave', ()=>{
  startInterval();
 })

let id = setInterval(imgSlider, 2000);
 function startInterval(){
  id = setInterval(imgSlider, 2000)
 }
function stopInterval(){
  clearInterval(id);
 }