<?php
  //send to server
  $errors = ['email' => '', 'username' => ''];
  if (isset($_POST['submit'])) {
    if(empty($_POST['email']) || empty($_POST['username']) || empty($_POST['password'])){
      echo 'Please fill all fields!';
    } else {
      if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        $errors['email'] =  'Email is not correct format!';
      } elseif(!preg_match('/[\w\W]{3,100}/', $_POST['username'])) {
        $errors['username']  = 'Username must be min 3';
      } else {
        $email = htmlspecialchars($_POST['email']);
        $username = htmlspecialchars($_POST['username']);
        $password = htmlspecialchars($_POST['password']);
      }
    }
    if(!array_filter($errors)){
      header('Location: dashboard.php');
    }
  }
?>