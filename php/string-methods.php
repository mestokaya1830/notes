<?php
  //split string
  $test = 'Html Css Javascript';
  $result = explode(' ', $test);
  echo 'Explode ';
  print_r($result);
  echo '<br/>';

  //combine array element
  $langs = ['Html','Css','Javascript'];
  $result2 = implode(',', $langs);
  echo 'Implode ';
  print_r($result2);
?>