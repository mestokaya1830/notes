<?php include('./register.php')?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./public/main.css">
</head>

<body>
  <h1>Register Form</h1>
  <form action="register-form.php" method="post" class="register-form">
    <label for="">Email</label>
    <input type="text" class="inputs" name="email" value="<?php echo $_POST['email'] ?>">
    <span style="color:red;margin:5px 0;"><?php echo $errors['email'] ?></span>
    <label for="">Name</label>
    <input type="text" class="inputs" name="name" value="<?php echo $_POST['name'] ?>">
    <span style="color:red;margin:5px 0;"><?php echo $errors['name'] ?></span>
    <label for="">Password</label>
    <input type="password" class="inputs" name="password">
    <span style="color:red;margin:5px 0;"><?php echo $errors['password'] ?></span>
    <button type="submit" name="submit">Send</button>
  </form>
</body>
</html>