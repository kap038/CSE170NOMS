$(document).ready(function() {
  initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
  //hide tutorial pages
  $('#recipe-tutorial').hide();
  $('#4u-tutorial').hide();
  $('#fav-tutorial').hide();
  $('#complete-tutorial').hide();

  //click events
	$('.select-type').click(handleRadio);
  $('#signup').click(handleSignup);
  $('#tutorial-1').click(handleTutorial1);
  $('#tutorial-2').click(handleTutorial2);
  $('#tutorial-3').click(handleTutorial3);
  $('#tutorial-4').click(handleTutorial4);
}

function handleRadio(e){
	var type = $(this).attr('id');
	localStorage.setItem("diet", type)
}

function handleSignup(e){
  e.preventDefault();
  $('#recipe-tutorial').show();
  $('#diet').hide();
}

function handleTutorial1(e){
  e.preventDefault();
  $('#recipe-tutorial').hide();
  $('#4u-tutorial').show();
}

function handleTutorial2(e){
  e.preventDefault();
  $('#4u-tutorial').hide();
  $('#fav-tutorial').show();
}

function handleTutorial3(e){
  e.preventDefault();
  $('#fav-tutorial').hide();
  $('#complete-tutorial').show();
}

function handleTutorial3(e){
  e.preventDefault();
  window.location.href = "/homepage";
}
