<?php
  //showing all inputs value on the url
  // if(isset($_GET['submit'])){
  //   echo $_GET['username'];
  //   echo $_GET['password'];
  // }

  //send to server
  echo '<h1>User Form</h1>';
  $username = '';
  if (isset($_POST['submit'])) {
    echo $_POST['username'];
    echo $_POST['password'];
  }
  ?>