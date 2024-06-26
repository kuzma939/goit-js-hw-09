const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
form.addEventListener("submit", handleSubmit)
form.addEventListener("input", onTextareaInput);
populateTextarea();
//const formData = {};
function handleSubmit(event) {
   event.preventDefault();
        const email = event.target.elements.email.value;
        const message = event.target.elements.message.value;
      if (email === '' || message === '') {
         alert('All fields must be filled in');
      }
    else {
        const emptyObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
        console.log(emptyObject);
         event.currentTarget.reset();
         localStorage.removeItem(STORAGE_KEY);
    }
};
function onTextareaInput(event) {
    const message = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
};
function populateTextarea() {
const savedMessage = localStorage.getItem(STORAGE_KEY);
const dataAnalysis = JSON.parse(savedMessage);
if (dataAnalysis) {
    form.elements.email.value = dataAnalysis.email;
    form.elements.message.value = dataAnalysis.message;
}
};

