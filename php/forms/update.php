<?php
  //send to server
  require './db.php';
  $errors = ['name' => '', 'password' => ''];

    if(empty($_POST['name']) || empty($_POST['password'])){
      echo 'Please fill all fields!';
    } else {
      if(!preg_match('/[\w\W]{3,100}/', $_POST['name'])) {
        $errors['name']  = 'name must be min 3';
      } else {
        if(isset($_GET['id'])){
          $id = mysqli_real_escape_string($conn, $_GET['id']);
          $name = mysqli_real_escape_string($conn, $_POST['name']);
          $password = mysqli_real_escape_string($conn, $_POST['password']);
          $update = mysqli_query($conn, "Update users Set name = '$name', password = '$password' Where id = '$id' ");
          if($update){
            header('Location: ./users-list.php');
          } else {
            echo mysqli_error($conn);
          }
        }
      }
    }

?>