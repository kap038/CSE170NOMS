$(document).ready(function() {
  initializePage2();
})

function initializePage2() {
	console.log("Javascriptsdfs connected!");
  $(".start-cooking").hide();
  $(".recipe-link").click(handleAnalytics);
}

function handleAnalytics(){
  ga("send", "event", 'recipe clicked', 'click');
}
