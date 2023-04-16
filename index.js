const wrapper= document.querySelector('.wrapper');
const alpha = document.querySelector('.button1');


alpha.addEventListener('onclick', ()=>{
    alert("You have registered successfully!");
    // wrapper.classList.add('active');
})



const btn= document.querySelector('button');
btn.addEventListener('onclick', ()=>{
    wrapper.classList.add('active-popup');
})


const button3= document.querySelector('button3');
button3.addEventListener('onclick',()=>{
    alert("Updated Password sent to your email");
})