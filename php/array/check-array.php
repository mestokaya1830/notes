<?php 

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

echo array_key_exists('salary', $users[0]);//for all use foreach