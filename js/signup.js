const passField1 = document.getElementById("password1");
const passField2 = document.getElementById("password2");
const mismatchText = document.getElementById("mismatch-text")
const createButton = document.getElementById("create");

// Do our two password fields match?
function checkPasswords() {
  if (passField1.value != passField2.value) {
    passField1.classList.add("mismatch");
    passField2.classList.add("mismatch");
    mismatchText.style.display = "block"
  }
}

// Create Account button event listener
createButton.addEventListener("click", checkPasswords);