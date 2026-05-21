const menu = document.querySelector('.menu');
const panel = document.querySelector('.mobile-panel');
if(menu){menu.addEventListener('click',()=>panel.classList.toggle('show'))}

const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on')}})
},{threshold:.14});
reveals.forEach(el=>io.observe(el));

const heroBg = document.querySelector('.hero-bg');
const dot = document.querySelector('.track-dot');
const line = document.querySelector('.reveal-line');
window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  if(heroBg) heroBg.style.transform = `translateY(${y*.16}px) scale(1.08)`;
  const pin = document.querySelector('.intro-pin');
  if(pin && dot){
    const r = pin.getBoundingClientRect();
    const total = Math.max(1, pin.offsetHeight - innerHeight);
    const p = Math.min(1, Math.max(0, -r.top / total));
    dot.style.left = `${p*100}%`;
    if(line) line.style.transform = `scale(${1 + p*.08})`;
  }
});

const cards = document.querySelectorAll('[data-tilt]');
cards.forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width-.5;
    const y = (e.clientY-r.top)/r.height-.5;
    card.style.transform = `rotateX(${y*-4}deg) rotateY(${x*5}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});
