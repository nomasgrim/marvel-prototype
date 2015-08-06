<?php
  header('Access-Control-Allow-Origin: *');
  require_once('include/db.php');

  $test = $_GET['test'];

  $insert_sql = "INSERT INTO characters (
                          `character_id`,
                          `name`
                          ) VALUES (
                          '?',
                          '$test'
              )";
  $insert = mysql_query($insert_sql) or 
            die("QUERY FAILED SAVING PULL_DATES " . mysql_error());
?>