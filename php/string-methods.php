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
  echo '<br/>';

  //case
  $name = 'Mustafa Kaya';
  echo strtoupper($name);
  echo '<br/>';
  echo strtolower($name);
  echo '<br/>';
  echo strlen($name);
  echo '<br/>';
  echo str_replace('M','?-', $name);
  echo '<br/>';
?>