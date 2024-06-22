<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
 <?php
//  const variable
  define('ID', 30); //you cannot change const
  echo 'With Define = '. ID; //const dosnt use $ symbol

  echo '<br/>';

  // or like so
  const ID1 = 2;
  echo 'With const keyword = '. ID1;//const dosnt use $ symbol

  echo '<br/>';
  $num = 40;
  $str = 'Hello';
  var_dump($num);
  echo '<br/>';
  var_dump($str);
  echo '<br/>';

  // strict types

  // declare(strict_types=1);
  
  function test(int $x, int $y){
    return $x + $y;
  }

  //with declare(strict_types = 1) you must use integer 
  echo 'Total = '. test(10,'30'); 

  echo '<br/>';

  //check type
  $state = True;
  if(is_bool($state)){
    echo 'State is a Boolean';
  } else {
    echo 'State is not a Boolean';
  }


  //convert type
  
  echo '<br/>';
  $age = (int)'30';
  var_dump($age);

  echo '<br/>';
  $num = strval(30);
  var_dump($num);
 ?>
</body>
</html>