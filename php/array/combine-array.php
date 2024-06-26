<?php
  echo '<pre>';'</pre>';//for display array format

  $lang1 = [1,2,3];
  $lang2 = ['Nodejs','Python','PHP'];
  $all = array_combine($lang1, $lang2);
  print_r($all);
?>