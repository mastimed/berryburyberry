(function(){const y=new Date().getFullYear();const el=document.querySelector("[data-year]");if(el)el.textContent=String(y);
})(); 

// Mobile menu
(function(){
  const openBtn = document.querySelector('[data-menu-open]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  if(!openBtn || !drawer) return;

  const closeEls = drawer.querySelectorAll('[data-menu-close]');
  function setOpen(isOpen){
    drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    document.documentElement.style.overflow = isOpen ? 'hidden' : '';
  }

  openBtn.addEventListener('click', ()=>setOpen(true));
  closeEls.forEach(el => el.addEventListener('click', ()=>setOpen(false)));

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') setOpen(false);
  });
})(); 
