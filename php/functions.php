<?php 
  function fullName(){
    return 'Mustafa Kaya';
  }
  echo fullName();
  echo '<br/>';

  //with params
  function fullName2($firstName, $lastName){
    return $firstName. $lastName;
  }
  echo fullName2('Mustafa', 'Kaya');
  echo '<br/>';


  //with scope for global variable
  $db = 'db connection';
  function useGlobalVariable(){
    // echo $db;//not permission scope
    //but you can  use direct define variable
    global $db; //use this to use the variable outside function
    return $db;
  }
  echo useGlobalVariable();
  echo '<br/>';

  //with strict type
  // declare(strict_types=1);
  function num(): int|float{
    return 20;
  }
  function num2(): mixed{
    return 20;
  }
  echo num2();
  echo '<br/>';
?>