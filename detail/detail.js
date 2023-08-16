const viewApi = localStorage.getItem("viewApi")
let views = JSON.parse(localStorage.getItem("viewApi")) ?? []
console.log(views);


let namee=document.querySelector(".country-name")
let capital=document.querySelector(".capital")
let flag_main=document.querySelector(".image-content")
flag_main.style.backgroundImage = `url(${views.flag.large})`;




let flag_small=document.querySelector(".inset")
flag_small.src = views.flag.large



namee.innerHTML=views.name
capital.innerHTML=views.capital