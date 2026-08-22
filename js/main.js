document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".menu-btn"), links=document.querySelector(".nav-links");
 if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));

 const observer=new IntersectionObserver(entries=>{
   entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})
 },{threshold:.12});
 document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

 document.querySelectorAll("[data-copy]").forEach(btn=>{
   btn.addEventListener("click",async()=>{
     const original=btn.textContent;
     try{
       await navigator.clipboard.writeText(btn.dataset.copy);
       btn.textContent="USUARIO COPIADO ✓";
     }catch(e){btn.textContent="COPIA: "+btn.dataset.copy}
     setTimeout(()=>btn.textContent=original,1800);
   })
 });
});
