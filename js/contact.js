function submitForm(event) {
  event.preventDefault();

  console.log("お問い合わせを送信しました");

  window.location.href = "contact_finish.html";
}

const form = document.querySelector(".form-box");

if (form) {
  form.addEventListener("submit", submitForm);
}