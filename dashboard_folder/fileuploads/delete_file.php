<?php
    // File upload configuration
    $targetDir = "./uploads/";
    $fileName = $_POST['filename'];
    $targetFilePath = $targetDir.$fileName;
    // echo $targetFilePath;

    if (unlink($targetFilePath)) {
      echo "true";
    }else {
      echo "false";
    };

?>
