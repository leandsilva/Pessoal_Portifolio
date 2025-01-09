
let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let button = document.getElementById('btn'); //botão de download do curriculo
let buttonSecond = document.getElementById('btn2'); //botão de entrar em contato
let letter = document.querySelector('span'); //letra L do título inicial
let front = document.getElementById('front'); //palavra front-end
let tittle = document.getElementById('tittle'); //título inicial
let text = document.getElementById('text'); //texto da main section
let subtittle = document.getElementById('subtittle'); //subtítulo da seção de tecnologia
let final = document.getElementById('final_text'); //texto final da seção de projetos
let tecnologiesUsed = document.getElementsByClassName('technologies_used_simbols'); //símbolo das tecnologias na seção projetos
let item = document.getElementsByClassName('item');

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
  letter.classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  front.classList.toggle('dark');
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
  tecnologiesUsed[0].classList.toggle('dark');
  tecnologiesUsed[1].classList.toggle('dark');
  tecnologiesUsed[2].classList.toggle('dark');
  tecnologiesUsed[3].classList.toggle('dark');
  tecnologiesUsed[4].classList.toggle('dark');
  tecnologiesUsed[5].classList.toggle('dark');
  tecnologiesUsed[6].classList.toggle('dark');
  tecnologiesUsed[7].classList.toggle('dark');
  tecnologiesUsed[8].classList.toggle('dark');
})

trilho.addEventListener('click', ()=>{
  item[0].classList.toggle('dark');
  item[1].classList.toggle('dark');
  item[2].classList.toggle('dark');
  item[3].classList.toggle('dark');
  item[4].classList.toggle('dark');
  item[5].classList.toggle('dark');
  item[6].classList.toggle('dark');
  item[7].classList.toggle('dark');
  item[8].classList.toggle('dark');
})

// Slides dos Projetos

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
  
let active = 1;
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
    active = (active + 1) % items.length
    loadShow();
}
prev.onclick = function(){
    active = (active - 1 + items.length) % items.length;
    loadShow();
}