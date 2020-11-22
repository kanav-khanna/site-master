<?php
  $to = 'ajayk@darksquare.ca';//Admin's email
  $from = $_REQUEST['email'];
  $name = $_REQUEST['name'];
  $email = $_REQUEST['email'];
  $phoneNumber = $_REQUEST['phoneNumber'];
  $company = $_REQUEST['company'];
  $service = $_REQUEST['service'];
  $subject = $_REQUEST['subject'];
  $message = $_REQUEST['message'];
  $link = 'darksquare.ca';
  require "./../css/font-awesome.min.css";
  require './../phpmailer/PHPMailerAutoload.php';
  $mail = new PHPMailer;
  $mail->isSMTP();
  $mail->SMTPAuth = true;
  $mail->Host       = 'mail.darksquare.ca';
  $mail->Username   = 'ajayk@darksquare.ca';//'hello@darksquare.ca';
  $mail->Password   = 'darksquare@1234';//'hello@darksquare1234';
  //$mail->SMTPSecure = 'tls';
  $mail->Port = 587;
  $mail->SMTPSecure = false;
  $mail->SMTPAutoTLS = false;
  $mail->SMTPDebug = 1;


  $mail->setFrom($to, "Dark Square");
  $mail->addAddress($from,$name);
  $mail->addBCC($to, "Dark Square");
  $mail->addBCC("ajayrmavs272191@gmail.com", "ajay");//if want to add bcc
  $mail->addReplyTo($from);
  $mail->Subject = $subject;
  $mail->isHTML(true);

  $mail->AddEmbeddedImage("./../img/icon/logo.png", "logo", "logo.png");
  $mail->AddEmbeddedImage("./../img/icon/instagram.png", "instagram", "instagram.png");
  $mail->AddEmbeddedImage("./../img/icon/facebook.png", "facebook", "facebook.png");
  $mail->AddEmbeddedImage("./../img/icon/twitter.png", "twitter", "twitter.png");
  $mail->AddEmbeddedImage("./../img/icon/linkedin.png", "linkedin", "linkedin.png");
  $msg = '
  <body>
    <table id = "contact" rules="all"   cellpadding="10"  style = "border-collapse: collapse; width: 100%; background-color:#f1f1f1; margin-bottom:0px;">
    <tr>
    	<td style="border:none; border-bottom: 2px solid #ffffff; background-color: #f60000; color:#f1f1f1;">
        <strong>Full Name</strong> </td>
      <td style="border:none; border-bottom: 2px solid #ffffff;">
        '.$name.'</td>
    </tr>
    <tr>
    	<td style="border:none; border-bottom: 2px solid #ffffff; background-color: #f60000; color:#f1f1f1;">
        <strong>Company Name</strong> </td>
      <td style="border:none; border-bottom: 2px solid #ffffff;">
        '.$company.'</td>
    </tr>
    <tr>
    	<td style="border:none; border-bottom: 2px solid #ffffff; background-color: #f60000; color:#f1f1f1;">
        <strong>Email</strong> </td>
      <td style="border:none; border-bottom: 2px solid #ffffff;">
        '.$email.'</td>
    </tr>
    <tr>
    	<td style="border:none; border-bottom: 2px solid #ffffff; background-color: #f60000; color:#f1f1f1;">
        <strong>Phone Number</strong> </td>
      <td style="border:none; border-bottom: 2px solid #ffffff;">
        '.$phoneNumber.'</td>
    </tr>
    <tr>
    	<td style="border:none; border-bottom: 2px solid #ffffff; background-color: #f60000; color:#f1f1f1;">
        <strong>Type of Service</strong> </td>
      <td style="border:none; border-bottom: 2px solid #ffffff;">
        '.$service.'</td>
    </tr>
    <tr>
    	<td style="border:none; border-bottom: 2px solid #ffffff; background-color: #f60000; color:#f1f1f1;">
        <strong>Subject</strong> </td>
      <td style="border:none; border-bottom: 2px solid #ffffff;">
         '.$subject.'</td>
    </tr>

    </table>
    <table  id = "message" rules="all"   cellpadding="10" style=" width: 100%; border-collapse: collapse; border-top: 2px solid #ffffff; background-color:#f1f1f1; ">
    	<tr>
    		<td style="color:#f1f1f1; background-color: #f60000;" ><strong>Message</strong></td>
        </tr>
    	<tr >
        	<td >'.$message.'</td>
        </tr>
      <tr style="color:#f1f1f1; background-color: #f60000; color:#f1f1f1;">
        	<td ><strong>Connect with us</strong></td>
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
  <!--<a href='.$link.'><img alt= "logo" src= "cid:logo" ></a><br><br>-->
</body>
          ';
  $mail->Body = $msg;
  $mail->send();
  // if($mail->send()){
  //   echo "send ho gya";
  // }else {
  //   echo "not send";
  //   echo '$mail';
  // }
?>
