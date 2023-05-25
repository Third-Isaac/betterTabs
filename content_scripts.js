// document.addEventListener("DOMContentLoaded", ()=>{
//   const body1 = document.querySelector('body');
//   console.log(body1);
//   body1.style.backgroundColor = 'red';
// })
// const image = document.querySelector("body")
// console.log(image)
// image.innerHTML = ""

const elements = document.getElementsByTagName("*");
// document.querySelectorAll("div");
// elements.push(document.querySelectorAll("head"));
// elements.push(document.querySelectorAll("div"))
for (let i in elements){
  if (elements[i].textContent){ 
    elements[i].style.color = 'white';
  }
  elements[i].style.backgroundColor = 'black';
}
// const body1 = document.querySelector('body');
// body1.style.backgroundColor = 'red';