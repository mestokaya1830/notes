<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>If In Html</h1>

  <?php $score  = 70 ?>

  <?php if($score > 70): ?>
    <strong>Perfect</strong>
  <?php elseif($score > 60): ?>
    <strong>Good</strong>
  <?php elseif($score < 60): ?>
    <strong>Bad</strong>
  <?php endif ?>
</body>
</html>