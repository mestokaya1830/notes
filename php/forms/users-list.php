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
    $result = mysqli_query($conn, 'Select * From users');
    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
    mysqli_free_result($result);//release memory
    mysqli_close($conn);
  ?>
  <h1>Users List</h1>
  <ul class="user-list">
    <?php foreach ($users as $item) { ?>
      <li>
        <span><?php echo htmlspecialchars($item['id']) ?></span>
        <span><?php echo htmlspecialchars($item['name']) ?></span>
        <span><?php echo htmlspecialchars($item['email']) ?></span>
        <span><a href="edit.php?id=<?php echo $item['id'] ?>">Edit</a></span>
        <span><a href="delete.php?id=<?php echo $item['id'] ?>">Delete</a></span>
      </li>
    <?php } ?>
  </ul>
</body>

</html>