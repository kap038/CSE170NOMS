$(document).ready(function() {
  initializePage();
  localStorage.clear();
  localStorage.setItem("diet", "normal");
})

function initializePage() {
	console.log("Javascript connected!");
  $(".start-cooking").hide();
}
