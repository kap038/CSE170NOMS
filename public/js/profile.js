'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  console.log("Javascript connected!");
  $("button.dropbtn").click(clickDropdown);
 //child elements of this class
  $(".dropdown-content > a").click(handleSelect);

  verifyFbLogin();

}

function verifyFbLogin(){
  //fb account info
  var name = localStorage.getItem("name");
  var picture = localStorage.getItem("picture");

  console.log(name);
  console.log(picture);

  if(name!=null && picture!= null){
    $("#photo").attr("src", picture);
    $("#name").text(name);
  }
}

// when dropdown button clicked, show and hide content
function clickDropdown(e){
    e.preventDefault();
    var id = this.id;
    $("#"+id+".dropdown-content").toggle();
}

function handleSelect(e){
  e.preventDefault();
  var choice = this.id;
  localStorage.setItem("diet", choice);

  $(".dropdown-settings .dropbtn").text("Dietary Restrictions: " + $(this).text());

  console.log("Dietary restriction saved!");
  console.log($(this).text());
}



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('dropdown-content')) {
    $(".dropdown-content").hide()
  }
}
