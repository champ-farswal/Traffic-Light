let red = document.querySelector(".small1");
let yellow = document.querySelector(".small2");
let green = document.querySelector(".small3");


let child1 = document.querySelector(".child1");
let child2 = document.querySelector(".child2");
let child3 = document.querySelector(".child3");


red.addEventListener("click",()=>{
    child1.style.opacity = 1;
    child2.style.opacity = 0.2;
    child3.style.opacity = 0.2;


})
yellow.addEventListener("click",()=>{
    child2.style.opacity = 1;
    child1.style.opacity = 0.2;
    child3.style.opacity = 0.2;
})
green.addEventListener("click",()=>{
    child2.style.opacity = 0.2;
    child1.style.opacity = 0.2;
    child3.style.opacity = 1;
})
