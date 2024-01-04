console.log("yo yo yo");

const passField1 = document.getElementById("password1");
const passField2 = document.getElementById("password2");

function checkPasswords() {
  if (passField1.value != passField2.value) {
    passField1.classList.add("mismatch");
    passField1.classList.add("mismatch");
  }
}
