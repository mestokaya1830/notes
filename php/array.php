<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php $title = 'Array'; ?>
  <h1><?php echo $title; ?></h1>

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
  print_r($users);

  //with pre
  echo '<pre>';
  print_r($users);
  echo '</pre>';

  echo '<br/>';
  echo 'Array length = ' . count($users);


  //push
  array_push($users, ['name' => 'nemrut', 'salary' => 6000]);
  echo '<br/>';
  echo 'Array Push';
  echo '<pre>';
  print_r($users);
  echo '</pre>';

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

  echo '<pre>';
    print_r($people);
  echo '</pre>';

  //filter array
  echo '<pre>';
    print_r($people[0]['langs']);
  echo '</pre>';


  //remove array element
  unset($people[0]);
  echo 'Unset first Element(remove) Element';
  echo '<pre>';
    print_r($people);
  echo '</pre>';
  ?>
</body>

</html>