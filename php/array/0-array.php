<?php
  echo '<pre>';'</pre>';//for display array format

  $langs = ['Nodejs','Python','PHP','Nodejs','Nodejs','PHP'];
  print_r($langs);
  echo '<br/>';

  //count
  echo count($langs);
  echo '<br/>';

  //get count of each item
  $all = array_count_values($langs);
  print_r($all);

  //filter
  echo $langs[0];
  echo '<br/>';

  //change
  $langs[0] = 'C++';
  print_r($langs);
  echo '<br/>';

  //push
  array_push($langs, 'Rast');
  print_r($langs);
  echo '<br/>';

  //remove
  unset($langs[0]);
  print_r($langs);
  echo '<br/>';

  //merge
  $lang1 = ['Html','Css','Javascript'];
  $lang2 = ['Nodejs','Python','PHP'];
  $all = array_merge($lang1, $lang2);
  print_r($all);
?>