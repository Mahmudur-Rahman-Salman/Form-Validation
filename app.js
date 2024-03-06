const form = document.querySelector("#signUp");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // const userName = document.querySelector("#username").value;
  // const email = document.querySelector("#email").value;
  // const password = document.querySelector("#password").value;
  // const confirmPassword = document.querySelector("#confirm-password").value;
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const retypePassword = form.retypePassword.value;
  let regex = /^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ ; 
  const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

  if(!isPasswordSecure(password)){
    const passErrorMessage = document.getElementById("passError");
    passErrorMessage.textContent = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"; 
  }

  if (password == "") {
    const passErrorMessage = document.getElementById("passError");
    passErrorMessage.textContent = "Please type your password";
  }

  if (password != retypePassword) {
    const confirm = document.getElementById("retypePassError");
    confirm.textContent = "Password doesn't match";
  }

  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Password: ", password);
  console.log("RetypePassword: ", retypePassword);

  form.reset(); 
});
