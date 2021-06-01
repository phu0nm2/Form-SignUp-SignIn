function onTabSignUp() {
  var tabSignUp = document.getElementById("tab-signup");
  var tabSignIn = document.getElementById("tab-signin");
  tabSignUp.style.display = "block";
  tabSignIn.style.display = "none";
}

function onTabSignIn() {
  var tabSignUp = document.getElementById("tab-signup");
  var tabSignIn = document.getElementById("tab-signin");
  tabSignUp.style.display = "none";
  tabSignIn.style.display = "block";
}
