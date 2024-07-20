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
   <form action="{{ route('productUpdate', $product[0]->id) }}" method="post">
    @csrf
    @method('put')
    <li><input type="text" name="name" value="{{ $product[0]->name }}"></li>
    <li><input type="text" name="price" value="{{ $product[0]->price }}"></li>
    <li>
      <select name="is_exist">
        <option value="1">1</option>
        <option value="0">0</option>
      </select>
    </li>
    <li><input type="submit" value="Update"></li>
   </form>
  </ul>
</body>
</html>