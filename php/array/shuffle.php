 <?php
  //shuffle random index
  $langs = ['Html', 'Css', 'Javascript'];
  echo '<pre>';print_r($langs);'</pre>';
  echo '<br/>';

  shuffle($langs);
  echo '<pre>';print_r($langs);'</pre>';
?>