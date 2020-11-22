$(document).ready(function(){

  $("#forgetPassword").click(function() {
    $("#forgetPassword").text("Please contact admin at hello@darksquare.ca");
  });
  // console.log(varifiedUser);
  //var password  = $("#password").value();

  $("#loginForm").submit(function(e) {

        //prevent Default functionality
        e.preventDefault();
        var username = $("#username").val();
        console.log(username);
        //request and handle the results
        $(".btn").css("background-color","#e50914");
        $.ajax({
                url: "https://dsserver1.herokuapp.com/api/employee/login",//"http://127.0.0.1:3000/api/client/login",
                type: 'post',
                data: $("#loginForm").serialize(),
                success: function(data) {
                    console.log("success");
                    console.log(data);
                    var username = data['result'].username;
                    var status = data['status'];
                    var name = data['result'].name;
                    console.log(status);
                    sessionStorage.setItem("username",username);
                    sessionStorage.setItem("name",name);
                    sessionStorage.setItem("status",status);
                    window.location.href = "./dashboard_folder/files.html";
                },
                error:function(data) {
                  console.log(data);
                  $("#errorMessage").css("display","block")
                  //alert('error',data);
                }

        });

    });

});
