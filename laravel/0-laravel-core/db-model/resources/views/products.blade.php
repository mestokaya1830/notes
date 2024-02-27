<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h2><a href="{{ route('productCreate') }}">Add New Product</a></h2>
  <ul>
    @if ($products)
      @foreach ($products as $item)
        <li>
          <span>{{ $item->name }}</span>
          <span>{{ $item->price }}</span>
          <span>{{ $item->is_exist }}</span>
          <span><a href="{{route('productEdit', $item->id)}}">Edit</a></span>
          <span><a href="{{route('productDelete', $item->id)}}">Delete</a></span>
        </li>
      @endforeach
    @endif
  </ul>
</body>
</html>