import"./assets/modulepreload-polyfill-3cfb730f.js";const s="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("submit",o);a.addEventListener("input",n);r();function o(e){e.preventDefault();const t=e.target.elements.email.value,l=e.target.elements.message.value;if(t===""||l==="")alert("All fields must be filled in");else{const m=JSON.parse(localStorage.getItem(s));console.log(m),e.currentTarget.reset(),localStorage.removeItem(s)}}function n(e){const t={email:a.email.value.trim(),message:a.message.value.trim()};localStorage.setItem(s,JSON.stringify(t))}function r(){const e=localStorage.getItem(s),t=JSON.parse(e);t&&(a.elements.email.value=t.email,a.elements.message.value=t.message)}
//# sourceMappingURL=commonHelpers2.js.map
