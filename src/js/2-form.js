const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
//const textarea = form.querySelector(".textarea");
form.addEventListener("submit", handleSubmit)
form.addEventListener("input", onTextareaInput);
populateTextarea();
function handleSubmit(event) {
   event.preventDefault();
    console.log("send")
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
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

