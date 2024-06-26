 <?php
  echo '<pre>';'</pre>';//for display array format
  
  //shuffle random index
  $langs = ['Html', 'Css', 'Javascript'];
  echo '<pre>';print_r($langs);'</pre>';
  echo '<br/>';
  shuffle($langs);
  print_r($langs);
?>