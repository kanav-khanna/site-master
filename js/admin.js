$(document).ready(function(){


  var username = sessionStorage.getItem("username");
  var name = sessionStorage.getItem("name");
  var status = sessionStorage.getItem("status");
  var admin = sessionStorage.getItem("admin");
  if(!(username && name && status && admin)){
    window.location.href = "./../html/admin_dashboard.html";

  }else {
    $("body").css("display","block")
    $("#admin_username").text(username);
    $(".admin_name").text( name.charAt(0).toUpperCase() + name.slice(1) );

    // localStorage.removeItem("username");
    // localStorage.removeItem("name");
    // localStorage.removeItem("status");
  }

  //signout
  $(".fa-sign-out").click(function(e) {
    e.preventDefault();
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("status");
    sessionStorage.removeItem("admin");
    window.location.href = "./../html/admin_dashboard.html";
  });



});
