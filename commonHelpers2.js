import"./assets/modulepreload-polyfill-3cfb730f.js";const s="feedback-form-state",t=document.querySelector(".feedback-form");t.addEventListener("submit",o);t.addEventListener("input",n);r();const m={};function o(a){a.preventDefault(),localStorage.removeItem(s);const e=a.target.elements.email.value,l=a.target.elements.message.value;e===""||l===""?alert("All form fields must be filled in"):(console.log(m),t.reset())}function n(a){const e={email:t.email.value.trim(),message:t.message.value.trim()};localStorage.setItem(s,JSON.stringify(e))}function r(){const a=localStorage.getItem(s),e=JSON.parse(a);e&&(t.elements.email.value=e.email,t.elements.message.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
