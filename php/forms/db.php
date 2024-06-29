<?php
$conn = mysqli_connect('127.0.0.1', 'mesto','mk1972mk','demo');
if(!$conn){
  echo 'error'. mysqli_connect_error();
}