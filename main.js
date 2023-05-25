document.addEventListener("DOMContentLoaded", (e)=>{
const body1 = document.querySelector('body')
body1.style.backgroundColor = 'black';
}
)

const pics = ["assets/mike.png", "assets/boom.png", "assets/lake.gif"];
let counter = 0;

const button = document.querySelector("#click");
const slideshow = document.querySelector("#slideshow");
// console.log(pics[counter])

button.addEventListener("click", ()=>{
  if (counter === pics.length) counter=0;
  console.log(pics[counter])
  slideshow.src =`${pics[counter]}`;
  counter++;
})

  // const paragraph = document.getElementsByClassName('fallback-copy');
  // console.log(paragraph.textContent);








