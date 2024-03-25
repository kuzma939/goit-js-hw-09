const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = form.querySelector(".textarea");
form.addEventListener("submit", handleSubmit)
textarea.addEventListener("input", onTextareaInput);
populateTextarea();
function handleSubmit(event) {
   /* event.preventDefault();
    console.log("send")
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)*/
   const email = event.currentTarget.elements.email.value; 
const message = event.currentTarget.elements.message.value; 
if (email === '' || message === '') {
  alert('All form fields must be filled in'); 
} else {
  console.log(populateTextarea);
  resetForm(); 
}
};
function onTextareaInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message)
};
function populateTextarea() {
const savedMessage = localStorage.setItem(STORAGE_KEY);
if(savedMessage) {
    textarea.value = savedMessage;
}
};


