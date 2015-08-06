<?php
header('Access-Control-Allow-Origin: *');
$link = mysql_connect('marvel.projectmeadowlark.com:3306', 'marveluser', 'Creativity2011');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
mysql_select_db("marveldb") or die("Cannot select db");

?>