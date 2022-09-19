const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener('click',()=>{
    document.querySelector('.style-switcher').classList.toggle('open');
});
// hide style switcher on scroll 

window.addEventListener('scroll',()=>{
    if(document.querySelector(".sytle-switcher").classList.contains('open'))
    {
        document.querySelector(".sytle-switcher").classList.remove("open");
    }
})
const alternatstyles=document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternatstyles.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
    else{
        style.setAttribute("disabled","true");
    }
})
}

// ==============theme dark and light mode==================

const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.querySelector("i").classList.add("fa-sun")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})