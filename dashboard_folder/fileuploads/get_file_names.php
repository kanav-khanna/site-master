<?php
$out = array();
foreach (glob('./uploads/*') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['basename'];
}
echo json_encode($out);
?>
