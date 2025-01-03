
let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let button = document.getElementById('btn');
let buttonSecond = document.getElementById('btn2');
let l = document.querySelector('span');
let front = document.getElementById('front');
let cards = document.querySelector('cards');
let tittle = document.getElementById('tittle');
let text = document.getElementById('text');
let subtittle = document.getElementById('subtittle');
let final = document.getElementById('final_text');
let usad = document.getElementsByClassName('usadas');

trilho.addEventListener('click', ()=>(
  trilho.classList.toggle('dark')
))

trilho.addEventListener('click', ()=>{
  body.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  button.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  buttonSecond.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  l.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  front.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  cards.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  tittle.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  text.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  subtittle.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  final.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  usad[0].classList.toggle('dark');
  usad[1].classList.toggle('dark');
  usad[2].classList.toggle('dark');
  usad[3].classList.toggle('dark');
  usad[4].classList.toggle('dark');
  usad[5].classList.toggle('dark');
  usad[6].classList.toggle('dark');
  usad[7].classList.toggle('dark');
  usad[8].classList.toggle('dark');
})



let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
  
let active = 3;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-0.5deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(0.5deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}




// Trocar foto com click //

//let photo = document.getElementById('photo');
//let imagemAtual = 'photodark.png';
//let imagemAnterior = 'photolight.png';

/* function trocar(){
  document.getElementById('photo').src = imagemAtual;
  let aux = imagemAtual;
  imagemAtual = imagemAnterior;
  imagemAnterior = aux;
} */