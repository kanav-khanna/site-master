$(document).ready(function(){

    (function($) {
        "use strict";


    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#subscribeForm').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                email: {
                    required: "please enter your email"
                }
            },
            submitHandler: function(form) {

                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"./php/subscribe_process.php",
                    success: function(data) {
                        $('#subscribeForm :input').attr('disabled', 'disabled');
                        $('#subscribeForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#subscribeSuccess').fadeIn()
                            $('.modal').modal('hide');
		                	$('#subscribeSuccess').modal('show');
                      console.log(data);
                        })
                    },
                    error: function(data) {
                        $('#subscribeForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	      $('#error').modal('show');
                      console.log(data);
                        })
                    }
                })

                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"./php/mail_to_subscriber.php",
                    success: function(data) {
                        console.log($(form).serialize());
                        console.log(data);
                        console.log('send to Subscriber success');
                    },
                    error: function(data) {
                      console.log(data);
                        console.log('failed to subscribe. please try again later!');
                    }
                })


            }
        })
    })

 })(jQuery)
})
