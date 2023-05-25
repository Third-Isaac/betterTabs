// document.addEventListener("DOMContentLoaded", ()=>{
//   const body1 = document.querySelector('body');
//   console.log(body1);
//   body1.style.backgroundColor = 'red';
// })

const elements = document.querySelectorAll("body");
elements.push(document.querySelectorAll("head"));
elements.push(document.querySelectorAll("div"))
for (let i in elements){
  elements[i].style.backgroundColor = 'red'

}
// const body1 = document.querySelector('body');
// body1.style.backgroundColor = 'red';