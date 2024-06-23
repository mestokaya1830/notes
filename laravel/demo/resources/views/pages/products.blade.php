@extends('master')
@section('router')
@section('title', 'Products')

    <h1>Products Page</h1>

    @if ($products)
        @foreach ($products as $item)
            <span>{{$item}}</span>
        @endforeach
    @endif
@endsection