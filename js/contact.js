$(document).ready(function(){

    (function($) {
        "use strict";


    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        console.log("inside contact processing");
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                // phoneNumber: {
                //     minlength: 10
                // },
                company: {
                    required: true,
                    minlength: 4
                },
                subject: {
                    required: true,
                    minlength: 4,
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Name"
                },
                subject: {
                    required: "Subject",
                    minlength: "Minimum length 4",

                },

                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "Your message please",
                    minlength: "Message"
                }
            },
            submitHandler: function(form) {
              $(form).ajaxSubmit({
                  type:"POST",
                  data: $(form).serialize(),
                  url:"./../php/check_email_existance.php",
                  success: function(data) {
                        console.log(data);
                        var result = JSON.parse(data);
                        console.log(result.valid);
                        console.log(typeof result.valid);
                        console.log(result.exist);
                        console.log(result.email);
                        console.log("validation check");
                        if((result.valid == 'true')&&(result.exist == "true")){
                          //valid domain and mail exist then message processing
                          $(form).ajaxSubmit({
                              type:"POST",
                              data: $(form).serialize(),
                              url:"./../php/contact_process.php",
                              success: function(data) {
                                  $('#contactForm :input').attr('disabled', 'disabled');
                                  $('#contactForm').fadeTo( "slow", 1, function() {
                                      $(this).find(':input').attr('disabled', 'disabled');
                                      $(this).find('label').css('cursor','default');
                                      $('#success').fadeIn()
                                      $('.modal').modal('hide');
          		                	      $('#success').modal('show');
                                    console.log(data);
                                    console.log("success");
                                  })

                              },
                              error: function(data) {
                                  $('#contactForm').fadeTo( "slow", 1, function() {
                                      $('#error').fadeIn()
                                      $('.modal').modal('hide');
          		                	      $('#error').modal('show');
                                      console.log(data);
                                      console.log("message sending error");
                                  })
                              }
                          })

                        }else if ((result.valid == 'true')&&(result.exist == "false")) {
                          //valid domain but email does not exist set error or show email does not exist
                          $('#contactForm').fadeTo( "slow", 1, function() {
                              $('#error_valid_notexist').fadeIn()
                              $('.modal').modal('hide');
                              $('#error_valid_notexist').modal('show');
                              console.log(data);
                              console.log("email not exist error");
                            })
                        }else {
                          //Invalid domain and email set error or show the same
                          console.log(data);
                          console.log("invalid and not exist error");
                        }
                  },
                  error: function(data) {
                    var result = JSON.parse(data);
                    $('#contactForm').fadeTo( "slow", 1, function() {
                        $('#error').fadeIn()
                        $('.modal').modal('hide');
                        $('#error').modal('show');
                        console.log(result);
                        console.log("error in validation error");
                    })
                  }
              })

            }
        })
    })

 })(jQuery)
})
