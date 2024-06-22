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
  print_r($users)
  ?>
</body>

</html>