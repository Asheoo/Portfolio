// var a;
// var anim=document.getElementById("page")
// function hide()
// {
//     if(a==1)
//     {
//         anim.style.zIndex="-1";
//         return a=0;
//     }
//     else{
//         anim.style.zIndex="2";
//         anim.style.display="inline-block"
//         return a=1;
//     }
// }

const closed=document.getElementById('btn');
const page=document.getElementById('page1');
const pagee=document.getElementById('page2');

// close.addEventListener('click', () => {
//     page.classList.add('hide');
//     page2.style.display="inline-block";
// });

// closed.addEventListener("click", () => {
//     page.setAttribute("closing", "");
//     pagee.setAttribute("open", "");

//     page.addEventListener("animationend", () => {
//         page.setAttribute("hide", '');
//     });
// }); 

closed.addEventListener("click", () => {
    pagee.setAttribute("open", "");

    pagee.addEventListener("animationend", () => {
         page.style.display="none";
    }); 
}); 


window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0 );
})


const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("ul");
const body = document.querySelector("body")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("over")
})

document.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    body.classList.remove("over")
}))