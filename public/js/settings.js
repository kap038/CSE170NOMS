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
}

// when dropdown button clicked, show and hide content
function clickDropdown(e){
    e.preventDefault();
    var id = this.id;
    $("#"+id+".dropdown-content").toggle()
}

function handleSelect(e){
  e.preventDefault();
  console.log(this)
}



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('dropdown-content')) {
    $(".dropdown-content").hide()
  }
} 
