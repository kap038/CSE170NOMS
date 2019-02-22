$(document).ready(function() {
  initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$('.select-type').click(handleRadio);
}

function handleRadio(e){
	var type = $(this).attr('id');
	localStorage.setItem("diet", type)

}
