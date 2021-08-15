document.getElementById("login-btn").addEventListener("click", function () {
  // gerEmail
  const emailField = document.getElementById("user-email");
  const userMail = emailField.value;

  const passField = document.getElementById("user-pass");

  const userPass = passField.value;

  if (userMail == "hasinapm@fazley.com" && userPass == "secret") {
    window.location.href = "banking.html";
  } else {
    console.log("Invalid");
  }
});

