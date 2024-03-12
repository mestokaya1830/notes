<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h2>Add Product</h2>
  <ul>
   <form action="{{ route('productStore') }}" method="post">
    @csrf
    <li><input type="text" name="name" placeholder="Name"></li>
    <li><input type="text" name="price" placeholder="Price"></li>
    <li>
      <select name="is_exist" id="">
        <option value="1">1</option>
        <option value="0">0</option>
      </select>
    </li>
    <li><input type="submit" value="Add"></li>
   </form>
  </ul>
</body>
</html>