$(document).ready(function() {
  initializePage2();
})

function initializePage2() {
	console.log("Javascriptsdfs connected!");
  $(".start-cooking").hide();
  //save version for A/B testing

  /*
  var version = $('.homepage-css').attr('id');
  localStorage.setItem("version", version);

  var newUrl = window.location.href;
  //append query string to url
  if(newUrl.includes("version=A") || newUrl.includes("version=B")) {

  	//set to version B
  	if(newUrl === "version=A" && version == "B"){
  		window.location.href.replace("version=A", "version=B");
  	} else if (newUrl === "version=B" && version == "A") {
  		window.location.href.replace("version=B", "version=A");
  	}
  	
  } else {
  	window.location += "?version="+version;
  }
  console.log(newUrl)
  */
}
