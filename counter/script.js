const counter =document.querySelector(".counter-value");
const up =document.querySelector(".up");
const down =document.querySelector(".down");
const reset =document.querySelector(".reset");



let realCounter = 0;



up.addEventListener('click', function(){
realCounter++;
counter.innerHTML = realCounter;
})

down.addEventListener('click', function(){
    realCounter--;
    counter.innerHTML =realCounter;
})
reset.addEventListener('click',()=>{
    realCounter=0;
    counter.innerHTML = realCounter;
})
