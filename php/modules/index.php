<?php 
  require 'math.php';
  require 'products.php';
  $num2 = 30; //comes from math.php

  echo 'Total = '. $num1 + $num2;
  echo '<br/>';
  
  echo '<pre>';
    print_r($productsList);
  echo '</pre>';
?>