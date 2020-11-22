<?php
$from = 'ajayk@darksquare.ca';//Admin's email
$to = $_REQUEST['email'];
// Include library file
require_once 'verifyEmail.class.php';

// Initialize library class
$mail = new VerifyEmail();

// Set the timeout value on stream
$mail->setStreamTimeoutWait(20);

// Set debug output mode
$mail->Debug= TRUE;
$mail->Debugoutput= 'html';

// Set email address for SMTP request
$mail->setEmailFrom($from);

// Email to check
$email = $to;//'ajayrmavs272191@gmaillllll.com';

// Check if email is valid and exist
if($mail->check($email)){
    $exist = 'Email &lt;'.$email.'&gt; is exist!';
    $exist = array(
    "valid"=>"true",
    "exist"=>"true",
    "email"=>$email);
    echo json_encode($exist);
}elseif(verifyEmail::validate($email)){
    $valid_not_exist = array(
    "valid"=>"true",
    "exist"=>"false",
    "email"=>$email);
    echo json_encode($valid_not_exist);
}else{
    $not_valid_exist = array(
    "valid"=>"false",
    "exist"=>"false",
    "email"=>$email);
    echo json_encode($not_valid_exist);
}

?>
