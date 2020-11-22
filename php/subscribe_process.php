<?php
  $to = "ajayk@darksquare.ca";//Company's Email
  $from = "ajayk@darksquare";//Admin's Email
  $firstname = $_REQUEST['firstname'];
  $lastname = $_REQUEST['lastname'];
  $userEmail = $_REQUEST['email'];
  $subject = "You got a New Subscriber";

  $link = 'darksquare.ca';

  require './../phpmailer/PHPMailerAutoload.php';
  $mail = new PHPMailer;
  $mail->isSMTP();
  $mail->SMTPAuth = true;
  $mail->Host       = 'mail.darksquare.ca';
  $mail->Username   = 'ajayk@darksquare.ca';
  $mail->Password   = 'darksquare@1234';//'hello@darksquare1234';
  //$mail->SMTPSecure = 'tls';
  $mail->Port = 587;
  $mail->SMTPSecure = false;
  $mail->SMTPAutoTLS = false;
  $mail->SMTPDebug = 1;

  $mail->setFrom($from, "Web Admin Dark Square");
  $mail->addAddress($to,"Dark square");
  //$mail->addCC("shatabdig@darksquare.ca", "shatabdi");//we can remmove cc or bcc
  //$mail->addCC("zeeshan@darksquare.ca", "shatabdi");
  //$mail->addBCC("ajay272191@outlook.com", "kumar ajay");
  $mail->addReplyTo($userEmail);
  $mail->Subject = $subject;
  $mail->isHTML(true);

  $mail->AddEmbeddedImage("./../img/icon/logo.png", "logo", "logo.png");
  $mail->AddEmbeddedImage("./../img/icon/instagram.png", "instagram", "instagram.png");
  $mail->AddEmbeddedImage("./../img/icon/facebook.png", "facebook", "facebook.png");
  $mail->AddEmbeddedImage("./../img/icon/twitter.png", "twitter", "twitter.png");
  $mail->AddEmbeddedImage("./../img/icon/linkedin.png", "linkedin", "linkedin.png");

  $msg = '
  <body>
  <table rules="all"   cellpadding="10"  style = "border-collapse: collapse; width: 100%; background-color:#f60000; margin-bottom:0px;  border-bottom: 2px solid #ffffff;">
    <tr>
      <td style="border-bottom: 3px solid #ffffff; background-color: #f60000; color:#f1f1f1;padding-bottom:15px; padding-top:15px; text-align:center">
        <strong>Congratulations! Your got a new Subscriber.</strong>
      </td>
    </tr>
    <tr>
      <td style="border-bottom: 2px solid #ffffff; background-color: #f60000; color:#f1f1f1;padding-bottom:15px; padding-top:15px; text-align:center">
        <strong>Subscriber Info</strong>
      <td>
    </tr>
  </table>
  <table id = "contact" rules="all"   cellpadding="10"  style = "border-collapse: collapse; width: 100%; background-color:#f1f1f1; margin-bottom:0px;  border-bottom: 2px solid #ffffff;">
      <tr>
        <td style="border:none; border-bottom: 2px solid #ffffff; background-color: #f60000; color:#f1f1f1;">
          <strong>Name</strong> </td>
        <td style="border:none; border-bottom: 2px solid #ffffff;">
          '.$firstname.'&nbsp;'.$lastname.'</td>
      </tr>
      <tr>
        <td style="border:none; border-bottom: 2px solid #ffffff; background-color: #f60000; color:#f1f1f1;">
          <strong>Email</strong> </td>
        <td style="border:none; border-bottom: 2px solid #ffffff;">
          '.$userEmail.'</td>
        </tr>
    </table>


      <!-- Footer-->
      <table  width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-top:30px; background-color: #f1f1f1;">
        <tr >
          <td  style=" background-color : #f1f1f1;">
            <table align="center" border="0" cellspacing="0" cellpadding="0" style="padding-bottom:20px; background-color: #f1f1f1;">
              <tr>
                <td valign="top" align="center"><a href="https://www.instagram.com/darksqrca/" target="_blank" style="text-decoration:none;"><img alt= "logo" src= "cid:instagram" ></a></td>
                <td width="6" style="width:6px;">&nbsp;</td>
                <td valign="top" align="center"><a href="https://www.facebook.com/darksqrca/" target="_blank" style="text-decoration:none;"><img alt= "facebook" src= "cid:facebook" ></a></td>
                <td width="6" style="width:6px;">&nbsp;</td>
                <td valign="top" align="center"><a href="https://twitter.com/darksqrca" target="_blank" style="text-decoration:none;"><img alt= "twitter" src= "cid:twitter" ></a></td>
                <td width="6" style="width:6px;">&nbsp;</td>
                <td valign="top" align="center"><a href="https://www.linkedin.com/company/dark-square-ca" target="_blank" style="text-decoration:none;"><img alt= "linkedin" src= "cid:linkedin" ></a></td>
                <td width="6" style="width:6px;">&nbsp;</td>
                <td valign="top" align="center"><a href="https://www.linkedin.com/company/dark-square-ca" target="_blank" style="text-decoration:none;"><img alt= "logo" src= "cid:logo" ></a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr >
          <td style="text-align: center; align:center; font-size:12px; line-height:18px; color:#999999; background-color : #f1f1f1; padding-bottom: 20px;">
                Copyright &copy; 2020 Dark Square. All Rights Reserved.<br>
                <a href="https://darksquare.ca/privacy_policy.html" target="_blank" style="color:#999999; text-decoration:underline;">Privacy Policy.</a><br>
                <!--<span>If you do not wish to receive any further emails from us, please</span>
                <a href="#" target="_blank" style="text-decoration:none; color:#999999;">unsubscribe</a>-->
          </td>
        </tr>
      </table>
    <!--Footer end-->
    </body>
          ';
  $mail->Body = $msg;
  $mail->send();


?>
