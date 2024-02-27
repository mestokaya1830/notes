<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
  <h2>Products List</h2>
  <table class="table">
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
    </thead>
    <tbody>
      @if ($products)
        @foreach ($products as $item)
          <tr>
            <td>{{ $item->id }}</td>
            <td>{{ $item->name }}</td>
            <td>{{ $item->price }}</td>
          </tr>
        @endforeach
      @endif
    </tbody>
  </table>
  <span>{{ $products->links('pagination::bootstrap-4') }}</span>
  
</body>
</html>