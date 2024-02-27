@extends('welcome')

@section('content')
    <div class="container">
        @if ($products)
            <table class="table table-border">
                <thead>
                    <caption>Products List</caption>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    @foreach ($products as $item)
                        {{-- <tr @if ($loop->index==3) class="bg-info" @endif> --}}
                        <tr @if ($loop->count) class="bg-info" @endif>
                        {{-- <tr @if ($loop->first) class="bg-info" @endif> --}}
                            <td scope="row">{{ $item->id }}</td>
                            <td>{{ Str::limit($item->name, 5) }}</td>
                            <td>{{ number_format($item->price) }}</td>
                            <td>{{ $item->description ?? 'No Description'}}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <span>{{ $products->links('pagination::bootstrap-4') }}</span>
            <h4>Product Count : {{ $products->count() }}</h4>
        @else
            <h2>No Data</h2>
        @endif
    </div>
    <script>
        const result = @json($products);
        console.log(result)
    </script>
@endsection
