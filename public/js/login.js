$(document).ready(function() {
  initializePage();
  localStorage.clear();
  localStorage.setItem("diet", "normal");
})

function initializePage() {
	console.log("Javascript connected!");
  $('#login').click(handleLogin);
  $('#signup').click(handleSignup);
}

function handleLogin(){
  //save username and password to local storage
  name = $("#username").val();
  localStorage.setItem("name", name);
  console.log(name);
  window.location.href = "/homepage";

}

function handleSignup(){
  //save username and password to local storage
  name = $("#username").val();
  localStorage.setItem("name", name);
  console.log(name);
  window.location.href = "/signup";

}
