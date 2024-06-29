<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="public/main.css">
</head>

<body>
  <?php
    require './db.php';
    if(isset($_GET['id'])){
      $id = mysqli_real_escape_string($conn, $_GET['id']);
      $result = mysqli_query($conn, "Select * From users Where id = '$id'");
      $users = mysqli_fetch_assoc($result);
      mysqli_free_result($result);//realse memory
      mysqli_close($conn);
    }
  ?>
  <h1>Users List</h1>
  <form action="./update.php?id=<?php echo htmlspecialchars($users['id']) ?>" method="post">
    <ul class="user-list user-list-edit">
      <li><strong>ID</strong><span><?php echo htmlspecialchars($users['id']) ?></span></li>
      <li><strong>Email</strong><span><?php echo htmlspecialchars($users['email']) ?></span></li>
      <li><strong>Name</strong><input type="text" class="inputs" name="name" value="<?php echo htmlspecialchars($users['name']) ?>"></li>
      <li> <strong>Password</strong><input type="text" class="inputs" name="password" value="<?php echo htmlspecialchars($users['password']) ?>"></li>
      <button type="submit" class="btn-update">Update</button>
    </ul>
  </form>
</body>

</html>