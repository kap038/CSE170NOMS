$(document).ready(function() {
  localStorage.setItem("diet", "normal"); //by default normal pref
})

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  //Add code to change name and image
  console.log(response)
  //login page
  $(".signup-container").hide();
  $(".input-container").hide();
  $(".fblogin").hide();
  $(".start-cooking").show();

  //profile page
  var picture = response.picture.data.url;
  var name = response.name;

  localStorage.setItem("picture", picture);
  localStorage.setItem("name", name);
  console.log(localStorage.getItem("name"));

  $("#photo").attr("src", picture);
  $("#name").text(name);
  // $("#name").text(response.name);
  // $("#photo").attr("src", response.picture.data.url);
}
