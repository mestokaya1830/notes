<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      li{
        display: flex;
        margin: 3px 0;
      }
      li > span {
        margin: 0 10px;
        text-align: left;
        min-width: 80px;
      }
    </style>
</head>

<body>
    <h2><a href="{{ route('products.create') }}">Add New Product</a></h2>
    <ul>
        @if ($products)
            @foreach ($products as $item)
                <li>
                    <span>{{ $item->name }}</span>
                    <span>{{ $item->price }}</span>
                    <span><a href="{{ route('products.edit', $item->id) }}">Edit</a></span>
                    <span><a href="{{ route('products.show', $item->id) }}">Details</a></span>
                    <span>
                        <form action="{{ route('products.destroy', $item->id) }}" method="post"
                            class="btn btn-danger waves-effect waves-themed">
                            @method('delete')
                            @csrf
                            <button type="submit">Delete</button>
                        </form>
                    </span>
                </li>
            @endforeach
        @endif
    </ul>
</body>

</html>
