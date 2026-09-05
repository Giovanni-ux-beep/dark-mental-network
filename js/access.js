document.addEventListener("DOMContentLoaded",()=>{
 const gate=document.querySelector("#password-screen");
 const form=document.querySelector("#password-form");
 const input=document.querySelector("#password-input");
 const error=document.querySelector("#password-error");
 const loading=document.querySelector("#loading-screen");
 if(!gate||!form||!input||!error||!loading)return;
 input.focus();
 const expected="5c1b3c01479e6c08cd56de8c1fcfc3f597a325b6684534f28599f7dc9cc3fa93";
 const checkCode=async value=>{const bytes=new TextEncoder().encode(value);const digest=await crypto.subtle.digest("SHA-256",bytes);return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,"0")).join("")===expected};
 const startLoading=()=>{gate.classList.add("fade-out");setTimeout(()=>{gate.style.display="none";loading.hidden=false;const first=document.querySelector("#access-first");const second=document.querySelector("#access-second");const bar=document.querySelector("#loading-screen .progress i");setTimeout(()=>{bar.style.width="42%";first.textContent="> Acceso concedido. Bienvenido a Dark Mental Network."},450);setTimeout(()=>{bar.style.width="72%";second.textContent="> Recuerda que una minoría informada siempre será más poderosa que una mayoría desinformada."},2100);setTimeout(()=>{bar.style.width="100%"},4300);setTimeout(()=>{loading.classList.add("hide")},5100)},800)};
 form.addEventListener("submit",async event=>{event.preventDefault();const valid=await checkCode(input.value);if(valid){error.classList.remove("show");input.disabled=true;form.querySelector("button").disabled=true;startLoading();return}error.classList.add("show");input.value="";input.focus()});
 input.addEventListener("input",()=>error.classList.remove("show"));
});
