function generatePassword() {
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|<>?";
  var password = "";
  for (var i = 0; i < 15; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  $(".rounded-pill").html(password);
  showResults();
}

function copyText() {
  var passwordText = $(".badge").text();
  var tempInput = $("<input>");
  $("body").append(tempInput);
  tempInput.val(passwordText).select();
  document.execCommand("copy");
  tempInput.remove();
  console.log("Password copied: " + passwordText);
}
