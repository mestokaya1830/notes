<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Loop</h1>
  <?php 
  //loop---------------------------------------------
    $num = 0;
    while (true) {
      if($num >= 10){
        break;
      }
      $num++;
      echo $num. ',';
    }
    echo '<br/>';

    $num2 = 0;
    while ($num2 < 15) {//find prime numbers until 15
      if($num2 % 2 === 0){
        $num2++;
        continue;
      }
      echo $num2++. ',';
    }

    echo '<br/>';
    //for---------------------------------------
    $listNum = 20;
    for ($i=0; $i < $listNum; $i++) { 
      echo $i. ',';
    }

    echo '<br/>';
    $list = ['Html','Css','Javascript','Vue','Nodejs'];
    $length = count($list);//for performance count must be here not in loop
    for ($i=0; $i < $length; $i++) { 
      echo $list[$i]. ',';
    }

    echo '<br/>';
    foreach($list as $item){
      echo $item. ',';
    }
  ?>
</body>
</html>