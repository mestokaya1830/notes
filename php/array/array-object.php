<?php
//object
  echo '<pre>';'</pre>';//for display array format
  $users = [
    ['name' => 'Mustafa','salary' => 4000],
    ['name' => 'Deniz','salary' => 4000],
    ['name' => 'Sadik','salary' => 4000]
  ];

  $users[3]['name'] = "Salih";
  $users[3]['salary'] = 5000;

  print_r($users);
  echo '<br/>';
  echo 'Array length = ' . count($users);


  //push object
  array_push($users, ['name' => 'nemrut', 'salary' => 6000]);
  echo '<br/>';
  echo 'Array Push';
  print_r($users);
  echo '<br/>';

  //nested object
  echo 'Nested Array';

  $people = [
    [
      'name' => 'Mustafa',
      'salary' => 4000,
      'langs' => [
        'Html5',
        'Css',
        'Javascript',
        'Angular'
      ]
    ],
    [
      'name' => 'Deniz',
      'salary' => 4000,
      'langs' => [
        'Html5',
        'Css',
        'Javascript',
        'React'
      ]
    ],
    [
      'name' => 'Sadik',
      'salary' => 4000,
      'langs' => [
        'Html5',
        'Css',
        'Javascript',
        'VueJs'
      ]
    ]
  ];

  print_r($people);

  //filter object
  print_r($people[0]['langs']);


  //remove object element
  unset($people[0]);
  echo 'Unset first Element(remove) Element';
  print_r($people);
  echo '<br/>';

  echo array_key_exists('salary', $users[0]);//for all use foreach


  //loop objects
  $length = count($users);
  $i = 0;
  while($i < $length){
    echo $users[$i]['name'];
    echo '<br/>';
    $i++;
  }
  echo '<br/>';

  //with for
  for ($i=0; $i < $length; $i++) { 
    echo $users[$i]['name'];
    echo '<br/>';
  }
  echo '<br/>';

  //with foreach
  foreach($users as $item){
    echo $item['name'];
    echo '<br/>';
  }

  //in html

?>
<ul>
 <?php foreach($users as $item)  {?>
  <li>
    <span><?php echo $item['name'] ?></span>
    <span><?php echo $item['salary'] ?></span>
  </li>
<?php } ?>
</ul>
