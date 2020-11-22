<?php
    // File upload configuration
    $targetDir = "./uploads/";
    $fileName = $_POST['fileName'];
    $newFileName = $_POST['newFileName'];
    $targetFilePath = $targetDir.$fileName;
    $targetNewFilePath = $targetDir.$newFileName;
    // echo $targetFilePath;

    // $myObj->fileName = $fileName;
    // $myObj->age = $newFileName;
    //
    // $myJSON = json_encode($myObj);


    if (rename($targetFilePath, $targetNewFilePath)) {
      // echo $myJSON;
      echo "true";
    }else {
      echo "false";
    };

?>
