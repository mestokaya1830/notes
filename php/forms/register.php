<?php
include('./db.php');
//send to server
if (isset($_POST['submit'])) {
  $errors = ['email' => '', 'name' => '', 'password' => ''];
  if (empty($_POST['email']) || empty($_POST['name']) || empty($_POST['password'])) {
    echo 'Please fill all fields!';
  } else {
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
      $errors['email'] =  'Email is not correct format!';
    }
    if (!preg_match('/[\w\W]{3,100}/', $_POST['name'])) {
      $errors['name']  = 'Name must be min 3';
    }

    if (!preg_match('/[\w\W]{3,100}/', $_POST['password'])) {
      $errors['password']  = 'Password must be min 3';
    }
  }
  if (!array_filter($errors)) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $register = mysqli_query($conn, "Insert Into users(email, name, password) Values('$email', '$name', '$password')");
    if ($register) {
      header('Location: ./dashboard.php');
    } else {
      echo mysqli_error($conn);
    }
  }
}
?>