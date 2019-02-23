$(document).ready(function() {
  initializePage();
  localStorage.clear();
  localStorage.setItem("diet", "normal");
})

function initializePage() {
	console.log("Javascript connected!");
  $(".start-cooking").hide();
  $('#login').click(handleLogin);
}

function handleLogin(){
  //save username and password to local storage
  name = $("#username").val();
  localStorage.setItem("name", name);
  console.log(name);
  window.location.href = "/homepage";

}
