<?php 

  $note = 60;
  if ($note > 59) {
    echo 'Perfect';
  } elseif($note > 50) {
    echo 'Not Bad';
  } else {
    echo 'Bad';
  }
  

  //swtich
  switch ($ote) {
    case 60:
      echo 'Perfect';
      break;
    
    case 50:
      echo 'Not Bad';
      break;
    
    case 30:
    case 40: //or
      echo 'Bad';
      break;
    
    default:
      # code...
      break;
  }
?>