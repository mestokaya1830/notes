<?php
  $numbers = [1, 2, 3, 4, 5];
  print_r($numbers);

  $langs = ['Html5', 'Css3', 'Javascript'];
  print_r($langs);

  $users = [
    [
      'name' => 'Mustafa',
      'salary' => 4000
    ],
    [
      'name' => 'Deniz',
      'salary' => 4000
    ],
    [
      'name' => 'Sadik',
      'salary' => 4000
    ]
  ];

  $users[3]['name'] = "Salih";
  $users[3]['salary'] = 5000;

  echo '<pre>';print_r($users);'</pre>';
  echo '<br/>';
  echo 'Array length = ' . count($users);


  //push
  array_push($users, ['name' => 'nemrut', 'salary' => 6000]);
  echo '<br/>';
  echo 'Array Push';
  echo '<pre>';print_r($users);'</pre>';
  echo '<br/>';

  //nested array
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

  echo '<pre>';print_r($people);'</pre>';

  //filter array
  echo '<pre>';print_r($people[0]['langs']);'</pre>';


  //remove array element
  unset($people[0]);
  echo 'Unset first Element(remove) Element';
  echo '<pre>';print_r($people);'</pre>';
  echo '<br/>';
?>
