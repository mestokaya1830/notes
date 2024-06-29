<?php
  //send to server
  require './db.php';
  if(isset($_GET['id'])){
    $id = mysqli_real_escape_string($conn, $_GET['id']);
    $update = mysqli_query($conn, "Delete From users Where id = '$id'");
    if($update){
      header('Location: ./users-list.php');
    } else {
      echo mysqli_error($conn);
    }
  }

?>