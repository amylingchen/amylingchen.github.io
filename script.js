const items=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});
items.forEach(item=>observer.observe(item));
document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.querySelector('.progress');
addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=`${h.scrollTop/(h.scrollHeight-h.clientHeight)*100}%`},{passive:true});
