<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
 <?php

  echo phpversion();
  echo '<br/>';
  echo 'Url Host = '. PHP_URL_HOST;
  echo '<br/>';
  echo 'Url Port = '. PHP_URL_PORT;
  echo '<br/>';
  echo __LINE__;
  echo '<br/>';
  echo __DIR__;
  echo '<br/>';
  echo __FILE__;
  echo '<br/>';
  echo 'Int Max = '. PHP_INT_MAX;
  echo '<br/>';
  echo 'Int Min = '. PHP_INT_MIN;
 ?>
</body>
</html>