document.addEventListener('DOMContentLoaded',()=>{
  if(window.lucide)window.lucide.createIcons();
  const reveals=document.querySelectorAll('.reveal');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
  reveals.forEach((el,index)=>{el.style.transitionDelay=`${Math.min(index%3,2)*70}ms`;observer.observe(el)});

  const header=document.querySelector('.header');
  const menu=document.querySelector('.menu');
  menu?.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.innerHTML=open?'<i data-lucide="x"></i>':'<i data-lucide="menu"></i>';window.lucide?.createIcons()});
  header?.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>header.classList.remove('open')));

  const art=document.querySelector('.hero-art');
  const object=document.querySelector('#nfObject');
  art?.addEventListener('pointermove',event=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const rect=art.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;object.style.transform=`rotateX(${-4-y*8}deg) rotateY(${-6+x*12}deg) rotateZ(-2deg)`});
  art?.addEventListener('pointerleave',()=>object.style.transform='rotateX(-4deg) rotateY(-6deg) rotateZ(-2deg)');

  const phone=document.querySelector('input[name="telefone"]');
  phone?.addEventListener('input',()=>{let value=phone.value.replace(/\D/g,'').slice(0,11);if(value.length>6)value=`(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;else if(value.length>2)value=`(${value.slice(0,2)}) ${value.slice(2)}`;else if(value.length)value=`(${value}`;phone.value=value});

  const form=document.querySelector('#leadForm');
  const message=document.querySelector('.form-message');
  form?.addEventListener('submit',event=>{event.preventDefault();const name=form.elements.nome.value.trim().split(' ')[0];message.textContent=`Perfeito, ${name}. Nossa equipe entrará em contato com você.`;form.reset()});
});
