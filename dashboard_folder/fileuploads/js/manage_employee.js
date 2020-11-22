
$(document).ready(function(){

  //checking for login
  var username = sessionStorage.getItem("username");
  var name = sessionStorage.getItem("name");
  var status = sessionStorage.getItem("status");
  var admin = sessionStorage.getItem("admin");
  if(!(username && name && status && admin)){
     alert("please login again")
    window.location.href = "./../html/admin_dashboard.html";
  }else {
    $("body").css("display","block")
    $("#admin_username").text(username);
    $(".admin_name").text( name.charAt(0).toUpperCase() + name.slice(1) );
  }

  //log out
  $(".fa-sign-out").click(function(e) {
    e.preventDefault();
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("status");
    sessionStorage.removeItem("admin");
    window.location.href = "./../html/admin_dashboard.html";
  });
  // button press action on client manage
  console.log("hellloooo");
  $(".add_employee").click(function(e){
    e.preventDefault();
    $(".delete_form").css("display", "none");
    $(".update_form").css("display", "none");
    $(".add_form").css("display", "grid");
    $(".user_details").css("display","none");
  });

  $(".delete_employee").click(function(e){
    e.preventDefault();
    $(".delete_form").css("display", "grid");
    $(".update_form").css("display", "none");
    $(".add_form").css("display", "none");
    $(".user_details").css("display","none");
  });

  $(".update_employee").click(function(e){
    e.preventDefault();
    $(".delete_form").css("display", "none");
    $(".update_form").css("display", "grid");
    $(".add_form").css("display", "none");
    $(".user_details").css("display","none");
  });

  $(".add_form").submit(function(event) {
    //prevent Default functionality
    event.preventDefault();
    var inputs = $('.add_form input');
    console.log(inputs);
    //console.log(item);
    var data = {
      name: inputs[0].value,
      email: inputs[1].value,
      username: inputs[2].value,
      password: inputs[3].value,
    };
    console.log(data);
    // do your own request an handle the results
    $(".add_submit_button").css("background-color","#e50914");
    $(".add_submit_button").css("color","#000000");
    $.ajax({
        url: "https://dsserver1.herokuapp.com/api/employee/add",//"https://darksquareserver.herokuapp.com/api/user/login",
        data: data,
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(data) {
          console.log(data.status);
          console.log(jQuery.type(data.status));
          $(".add_form").trigger("reset");
          console.log("sfdsffds");
          if (data.status) {
            $(".error_message").css("display","none");
            $(".user_details_name").text(data.result.name);
            $(".user_details_email").text(data.result.email);
            $(".user_details_username").text(data.result.username);
          }else {
            $(".success_message").css("display","none");
            console.log("in else part of succee");
            $(".error_message").text(data.message);
          }
          $(".user_details").css("display","grid");
          $(".add_form").css("display","none");
          $(".delete_form").css("display","none");
          $(".update_form").css("display","none");
          $(".find_client_search").trigger("reset");
          console.log("success", data);
        },
        error:function(data) {
          console.log("error", data);
          $(".add_form").trigger("reset");
          $(".success_message").css("display","none");
          $(".error_message").text("Error :" +data.responseJSON.message);
          console.log("error", data);
          console.log(data.responseJSON.message);
          $(".user_details").css("display","grid");
          $(".add_form").css("display","none");
          $(".delete_form").css("display","none");
          $(".update_form").css("display","none");
        }
    });
  });

  $(".delete_form").submit(function(event) {
    //prevent Default functionality
    event.preventDefault();
    var inputs = $('.delete_form input');
    console.log(inputs);
    //console.log(item);
    var data = {
      username: inputs[0].value
    };
    console.log(data);
    // do your own request an handle the results
    $(".delete_submit_button").css("background-color","#e50914");
    $(".delete_submit_button").css("color","#000000");
    $.ajax({
        url: "https://dsserver1.herokuapp.com/api/employee/delete",//"https://darksquareserver.herokuapp.com/api/user/login",
        data: data,
        type: 'DELETE',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(data) {
          console.log(data.status);
          console.log(jQuery.type(data.status));
          console.log("sfdsffds");
          if (data.status) {
            $(".error_message").css("display","none");
            $(".user_details_name").text(data.result.name);
            $(".user_details_email").text(data.result.email);
            $(".user_details_username").text(data.result.username);
          }else {
            $(".success_message").css("display","none");
            $(".error_message").text(data.message);
          }
          $(".user_details").css("display","grid");
          $(".add_form").css("display","none");
          $(".delete_form").css("display","none");
          $(".update_form").css("display","none");
          $(".find_client_search").trigger("reset");
          console.log("success", data);
        },
        error:function(data) {
          console.log("error", data);
          $(".delete_form").trigger("reset");
          $(".success_message").css("display","none");
          $(".error_message").text("Error :" +data.responseJSON.message);
          console.log("error", data);
          console.log(data.responseJSON.message);
          $(".user_details").css("display","grid");
          $(".add_form").css("display","none");
          $(".delete_form").css("display","none");
          $(".update_form").css("display","none");
        }
    });
  });

  $(".update_form").submit(function(event) {
    //prevent Default functionality
    event.preventDefault();
    var inputs = $('.update_form input');
    console.log(inputs);
    //console.log(item);
    var data = {
      username: inputs[0].value,
      newName: inputs[1].value,
      newEmail: inputs[2].value,
      newUsername: inputs[3].value,
    };
    console.log(data);
    // do your own request an handle the results
    $(".update_submit_button").css("background-color","#e50914");
    $(".update_submit_button").css("color","#000000");
    $.ajax({
        url: "https://dsserver1.herokuapp.com/api/employee/update",//"https://darksquareserver.herokuapp.com/api/user/login",
        data: data,
        type: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(data) {
          console.log(data.status);
          console.log(jQuery.type(data.status));
          console.log("sfdsffds");
          if (data.status) {
            $(".error_message").text("Previous details");
            $(".error_message").css("display", "grid");
            $(".user_details_name").text(data.result.name);
            $(".user_details_email").text(data.result.email);
            $(".user_details_username").text(data.result.username);
          }else {
            $(".success_message").css("display","none");
            $(".error_message").text(data.message);
          }
          $(".user_details").css("display","grid");
          $(".add_form").css("display","none");
          $(".delete_form").css("display","none");
          $(".update_form").css("display","none");
          $(".find_client_search").trigger("reset");
          console.log("success", data);
        },
        error:function(data) {
          console.log("error", data);
          $(".update_form").trigger("reset");
          $(".success_message").css("display","none");
          $(".error_message").text("Error :" +data.responseJSON.message);
          console.log("error", data);
          console.log(data.responseJSON.message);
          $(".user_details").css("display","grid");
          $(".add_form").css("display","none");
          $(".delete_form").css("display","none");
          $(".update_form").css("display","none");
        }
    });
  });

  $(".find_employee_search").submit(function(event) {
    //prevent Default functionality
    event.preventDefault();
    var inputs = $('.find_employee_search input');
    console.log(inputs);
    //console.log(item);
    var data = {
      username: inputs[0].value
    };
    console.log(data);
    // do your own request an handle the results
    $(".find_employee_search_button").css("background-color","#e50914");
    $(".find_employee_search_button").css("color","#000000");
    $.ajax({
        url: "https://dsserver1.herokuapp.com/api/employee/find",//"https://darksquareserver.herokuapp.com/api/user/login",
        data: data,
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(data) {
          console.log(data.status);
          console.log(jQuery.type(data.status));
          console.log("sfdsffds");
          if (data.status) {
            $(".error_message").css("display","none");
            $(".user_details_name").text(data.result.name);
            $(".user_details_email").text(data.result.email);
            $(".user_details_username").text(data.result.username);
          }else {
            $(".success_message").css("display","none");
            $(".error_message").text(data.message);
          }
          $(".user_details").css("display","grid");
          $(".add_form").css("display","none");
          $(".delete_form").css("display","none");
          $(".update_form").css("display","none");
          $(".find_client_search").trigger("reset");
          console.log("success", data);
        },
        error:function(data) {
          console.log("error", data);
          $(".find_employee_search").trigger("reset");
          $(".success_message").css("display","none");
          $(".error_message").text("Error :" +data.responseJSON.message);
          console.log("error", data);
          console.log(data.responseJSON.message);
          $(".user_details").css("display","grid");
          $(".add_form").css("display","none");
          $(".delete_form").css("display","none");
          $(".update_form").css("display","none");
        }
    });
  });
});
