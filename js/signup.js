console.log("yo yo yo");

const passField1 = document.getElementById("password1");
const passField2 = document.getElementById("password2");

function checkPasswords() {
  if (passField1 != passField2) {
    return;
  }
}