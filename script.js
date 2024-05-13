console.log("hello");

// window.onscroll=()=>{

//     if(window.scrollY>80)
//     document.querySelector('.header .donate').classList.add('active');

//     else
//     document.querySelector('.header .donate').classList.remove('active');

// }

// window.onload=()=>{

//     if(window.scrollY>80)
//     document.querySelector('.header .donate').classList.add('active');

//     else
//     document.querySelector('.header .donate').classList.remove('active');

// }



let loginForm =document.querySelector('.login-form-container');

document.querySelector('.s-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}

let sellForm =document.querySelector('.sell-book-container');


    document.querySelector('.sell-btn').onclick=()=>{
        sellForm.classList.toggle('active');
    }


document.querySelector(' #close-sell-btn').onclick=()=>{
    sellForm.classList.remove('active');
}

let DonateForm =document.querySelector('.donate-book-container');

document.querySelector('.d-btn').onclick=()=>{
    DonateForm.classList.toggle('active');
}

document.querySelector(' #close-donate-btn').onclick=()=>{
    DonateForm.classList.remove('active');
}

let NgoForm =document.querySelector('.ngo-book-container');

document.querySelector('.n-btn').onclick=()=>{
    NgoForm.classList.toggle('active');
}

document.querySelector(' #close-ngo-btn').onclick=()=>{
    NgoForm.classList.remove('active');
}


document.querySelector('.sell-book-container .sec1 .n-btn').onclick=()=>{
    NgoForm.classList.toggle('active');
}

document.querySelector('.sell-book-container .sec1 .d-btn').onclick=()=>{
    DonateForm.classList.toggle('active');
}


document.querySelector('.donate-book-container .sec1 .n-btn').onclick=()=>{
    NgoForm.classList.toggle('active');
}

let filter=document.getElementById("sub-menu-wrap");

function filterClick(){
    
    filter.style.cssText="display:block"
}

let x=document.getElementById("cate");
let y=document.getElementById("state");
let z=document.getElementById("city");

x.addEventListener('focus',myfocusfunction(x));
x.addEventListener('blur',myblurfunction(x));

 y.addEventListener('focus',myfocusfunction(y));
 y.addEventListener('blur',myblurfunction(y));

z.addEventListener('focus',myfocusfunction(z));
z.addEventListener('blur',myblurfunction(z));


function clear(){
    filter.style.cssText="display:none"
}

function myfocusfunction(input){
    input.style.border=".2rem solid black"
}

function myblurfunction(input){
    input.style.border=".2rem solid rgb(191, 189, 189)"
}

// function myfocusfunction(){
//     y.style.border=".2rem solid black"
// }

// function myblurfunction(){
//     y.style.border=".2rem solid rgb(191, 189, 189)"
// }



