<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 600px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 6px;
      margin-top: 50px;
      box-shadow: 5px 5px 10px #ddd;
    }

    form .inputs {
      width: 100%;
      height: 44px;
      padding-left: 7px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin: 10px 0;
    }

    form button {
      width: 100%;
      height: 48px;
      font-size: 18px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin-top: 10px;
      cursor: pointer;
      background-color: rgb(21, 19, 73);
      color: #fff;
    }

    label {
      font-size: 16px;
      font-weight: bold;
      color: #666;
    }
    h1{margin: 30px 0;}
  </style>
</head>

<body>
  <h1>Php Form</h1>
  <form action="forms.php" method="post">
    <label for="">Username</label>
    <input type="text" class="inputs" name="username">
    <label for="">Password</label>
    <input type="password" class="inputs" name=password>
    <button type="submit">Send</button>
  </form>

  <?php

  //showing all inputs value on the url
    // if(isset($_GET['submit'])){
    //   echo $_GET['username'];
    //   echo $_GET['password'];
    // }


    //send to server
    // if(isset($_POST['submit'])){
    //   echo $_POST['username'];
    //   echo $_POST['password'];
    // }
  ?>
</body>

</html>