$(document).ready(function(){

  var varifiedUser = localStorage.getItem("username");
  if(varifiedUser){
    $("#container").css("display", "none");
    $('body').css("overflow","visible")
    $("#conditional-data").css("display", "block");
  }
  $("#forgetPassword").click(function() {
    $("#forgetPassword").text("Please contact admin at hello@darksquare.ca");
  });
  console.log(varifiedUser);
  //var password  = $("#password").value();

  $("#loginForm").submit(function(e) {

        //prevent Default functionality
        e.preventDefault();
        //var username = $("#username").val();
        //console.log(username);
        //do your own request an handle the results
        $(".btn").css("background-color","#e50914");
        $.ajax({
                url: "https://dsserver1.herokuapp.com/api/client/login",//"http://127.0.0.1:3000/api/client/login",
                type: 'post',
                data: $("#loginForm").serialize(),
                success: function(data) {
                    console.log("success");
                    // alert(data );
                    var username = data['result'].username;

                    console.log(username);
                    console.log(data);
                    //console.log("dfsjfkjdfkjdfdfkjfdkjkj");
                    var source_url = data['result'].dashboard_data;
                    //console.log(source_url);
                    var source_url = source_url.replace(/&#x2F;/g, "/");
                    //console.log(source_url);
                    // console.log("hekoookleodleoooooooo");
                    // console.log( data['result']);
                    // console.log( data['result'].username);
                    // console.log( data['result'].dashboard_data);

                    if($("#remember_me").prop('checked')){
                        localStorage.setItem("username",username);
                    }
                    $("#container").css("display", "none");
                    $('body').css("overflow","visible")
                    $('#conditional-data').attr('src', source_url)
                    $("#conditional-data").css("display", "block");
                },
                error:function(data) {
                  //console.log(data);
                  $("#errorMessage").css("display","block")
                  //alert('error',data);
                }

        });

    });

});
