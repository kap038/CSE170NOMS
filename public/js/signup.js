$(document).ready(function() {
  initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$('.select-type').click(handleRadio);
  // $('#signup').click(handleSignup);
}

function handleRadio(e){
	var type = $(this).attr('id');
	localStorage.setItem("diet", type)

}
//
// function handleSignup(){
//   //save username and password to local storage
//   name = $("#name").val();
//   localStorage.setItem("name", name);
//   console.log(name);
//   window.location.href = "/homepage";
//
// }
