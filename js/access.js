document.addEventListener("DOMContentLoaded",()=>{
 const screen=document.querySelector(".access-screen");
 if(!screen) return;
 const first=document.querySelector("#access-first");
 const second=document.querySelector("#access-second");
 const bar=document.querySelector(".progress i");
 setTimeout(()=>{bar.style.width="42%";first.textContent="> Acceso concedido. Bienvenido a Dark Mental Network."},450);
 setTimeout(()=>{bar.style.width="72%";second.textContent="> Recuerda que una minoría informada siempre será más poderosa que una mayoría desinformada."},2100);
 setTimeout(()=>{bar.style.width="100%"},4300);
 setTimeout(()=>screen.classList.add("hide"),5100);
});
